/**
 * @manya/attest — trust evaluator.
 *
 * Combines multiple signals — fingerprint stability, hardware presence,
 * attestation validity, session age, prior interactions — into a single
 * trust score in `[0, 1]` with a per-factor breakdown and an overall
 * decision (`trust` / `challenge` / `reject`).
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import type { TrustEvaluationInputs, TrustFactors, TrustScore } from '../types.js';
import { TrustEvaluationError } from '../errors.js';
import {
  DEFAULT_FACTOR_WEIGHTS,
  aggregateScore,
  buildTrustScore,
  computeFactors,
  decideFromScore,
} from './model.js';

/**
 * Pluggable trust evaluator.
 *
 * Construct with custom {@link TrustFactors} weights to tune the relative
 * importance of each signal. Default weights are {@link DEFAULT_FACTOR_WEIGHTS}.
 */
export class TrustEvaluator {
  private readonly weights: TrustFactors;

  /**
   * @param weights - Per-factor weights. Renormalized to sum to 1.0 if they
   *   don't already (within a small epsilon). Defaults to
   *   {@link DEFAULT_FACTOR_WEIGHTS}.
   */
  constructor(weights: TrustFactors = DEFAULT_FACTOR_WEIGHTS) {
    this.weights = normalizeWeights(weights);
  }

  /**
   * Return the active weights (post-normalization).
   */
  getWeights(): TrustFactors {
    return { ...this.weights };
  }

  /**
   * Evaluate a trust score from raw inputs.
   *
   * @param inputs - The raw trust inputs.
   * @returns The computed {@link TrustScore}.
   */
  evaluate(inputs: TrustEvaluationInputs): TrustScore {
    return buildTrustScore(inputs, this.weights);
  }

  /**
   * Re-evaluate a trust score from existing factors (skipping the
   * input → factor conversion). Useful for re-deciding an existing score
   * under new weights.
   *
   * @param factors - Pre-computed per-factor contributions.
   */
  evaluateFromFactors(factors: TrustFactors): TrustScore {
    const score = aggregateScore(factors, this.weights);
    const decision = decideFromScore(score);
    return { score, factors, decision };
  }

  /**
   * Compute only the per-factor contributions (without aggregating).
   * Useful for logging / dashboards.
   */
  factorize(inputs: TrustEvaluationInputs): TrustFactors {
    return computeFactors(inputs);
  }
}

/**
 * Renormalize a weights vector to sum to 1.0. Throws if all weights are zero
 * or negative, or if any weight is negative.
 *
 * @internal
 */
function normalizeWeights(weights: TrustFactors): TrustFactors {
  const w: TrustFactors = { ...weights };
  for (const key of Object.keys(w) as (keyof TrustFactors)[]) {
    if (typeof w[key] !== 'number' || !Number.isFinite(w[key]) || w[key] < 0) {
      throw new TrustEvaluationError(
        `normalizeWeights: weight ${key} must be a finite non-negative number`
      );
    }
  }
  const sum =
    w.fingerprintStability +
    w.hardware +
    w.attestation +
    w.sessionAge +
    w.priorInteractions;
  if (sum <= 0) {
    throw new TrustEvaluationError('normalizeWeights: weights must sum to > 0');
  }
  // Skip renormalization if already very close to 1.0.
  if (Math.abs(sum - 1) < 1e-9) return w;
  return {
    fingerprintStability: w.fingerprintStability / sum,
    hardware: w.hardware / sum,
    attestation: w.attestation / sum,
    sessionAge: w.sessionAge / sum,
    priorInteractions: w.priorInteractions / sum,
  };
}

/**
 * Default singleton evaluator with {@link DEFAULT_FACTOR_WEIGHTS}.
 */
export const defaultTrustEvaluator = new TrustEvaluator();
