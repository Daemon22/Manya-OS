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
/**
 * Pluggable trust evaluator.
 *
 * Construct with custom {@link TrustFactors} weights to tune the relative
 * importance of each signal. Default weights are {@link DEFAULT_FACTOR_WEIGHTS}.
 */
export declare class TrustEvaluator {
    private readonly weights;
    /**
     * @param weights - Per-factor weights. Renormalized to sum to 1.0 if they
     *   don't already (within a small epsilon). Defaults to
     *   {@link DEFAULT_FACTOR_WEIGHTS}.
     */
    constructor(weights?: TrustFactors);
    /**
     * Return the active weights (post-normalization).
     */
    getWeights(): TrustFactors;
    /**
     * Evaluate a trust score from raw inputs.
     *
     * @param inputs - The raw trust inputs.
     * @returns The computed {@link TrustScore}.
     */
    evaluate(inputs: TrustEvaluationInputs): TrustScore;
    /**
     * Re-evaluate a trust score from existing factors (skipping the
     * input → factor conversion). Useful for re-deciding an existing score
     * under new weights.
     *
     * @param factors - Pre-computed per-factor contributions.
     */
    evaluateFromFactors(factors: TrustFactors): TrustScore;
    /**
     * Compute only the per-factor contributions (without aggregating).
     * Useful for logging / dashboards.
     */
    factorize(inputs: TrustEvaluationInputs): TrustFactors;
}
/**
 * Default singleton evaluator with {@link DEFAULT_FACTOR_WEIGHTS}.
 */
export declare const defaultTrustEvaluator: TrustEvaluator;
//# sourceMappingURL=evaluator.d.ts.map