/**
 * @manya/memory — pipeline configuration.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */
import type { AgingPolicy } from '../types.js';
import type { Logger, LogLevel } from '../logging.js';
import type { RankingWeights } from '../rank/rank.js';
export interface MemoryConfig {
    aging?: AgingPolicy;
    rankingWeights?: RankingWeights;
    logLevel?: LogLevel;
    logger?: Logger;
}
export declare const DEFAULT_CONFIG: Required<Omit<MemoryConfig, 'logger'>>;
export declare function mergeConfig(user?: MemoryConfig): Required<Omit<MemoryConfig, 'logger'>> & {
    logger?: Logger;
};
//# sourceMappingURL=config.d.ts.map