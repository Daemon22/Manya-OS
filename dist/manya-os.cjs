"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/_entry.ts
var entry_exports = {};
__export(entry_exports, {
  AES_256_KEY_BYTES: () => AES_256_KEY_BYTES,
  AES_GCM_IV_BYTES: () => AES_GCM_IV_BYTES,
  AES_GCM_TAG_BYTES: () => AES_GCM_TAG_BYTES,
  ALL_CONTEXT_DETECTORS: () => ALL_CONTEXT_DETECTORS,
  ALL_PATTERN_DETECTORS: () => ALL_PATTERN_DETECTORS,
  ALL_ROLES: () => ALL_ROLES,
  ATTESTATION_QUOTE_VERSION: () => ATTESTATION_QUOTE_VERSION,
  AccessDeniedError: () => AccessDeniedError,
  AccessEnforcer: () => AccessEnforcer,
  AccessPolicySet: () => AccessPolicySet,
  AnalysisCollector: () => AnalysisCollector,
  AnalysisError: () => AnalysisError,
  AnonymizeError: () => AnonymizeError,
  Anonymizer: () => Anonymizer,
  ApiValidationError: () => ApiValidationError,
  ApplicationSource: () => ApplicationSource,
  AttestError: () => AttestError,
  AttestationError: () => AttestationError,
  AuthenticationWorkflow: () => AuthenticationWorkflow,
  BACKUP_VERSION: () => BACKUP_VERSION,
  BluetoothSource: () => BluetoothSource,
  BoundaryError: () => BoundaryError,
  CHALLENGE_DECISION_THRESHOLD: () => CHALLENGE_DECISION_THRESHOLD,
  COMMITMENT_BYTES: () => COMMITMENT_BYTES,
  COMMITMENT_NONCE_BYTES: () => COMMITMENT_NONCE_BYTES,
  CONFLICT_TYPES: () => CONFLICT_TYPES,
  CameraSource: () => CameraSource,
  ChainError: () => ChainError,
  ChallengeError: () => ChallengeError,
  CompatibilityError: () => CompatibilityError,
  ComplianceError: () => ComplianceError,
  ConfidenceError: () => ConfidenceError,
  ConfidenceEstimator: () => ConfidenceEstimator,
  ConflictDetector: () => ConflictDetector,
  ConflictResolver: () => ConflictResolver,
  ConsensusBuilder: () => ConsensusBuilder,
  ConsensusError: () => ConsensusError,
  ConstitutionError: () => ConstitutionError,
  ContractsError: () => ContractsError,
  CoordinationError: () => CoordinationError,
  Coordinator: () => Coordinator,
  Cortex: () => Cortex,
  CortexError: () => CortexError,
  CouncilError: () => CouncilError,
  CredentialError: () => CredentialError,
  CustomSource: () => CustomSource,
  CustomsShield: () => CustomsShield,
  CustomsShieldError: () => CustomsShieldError,
  DEFAULT_AGING_POLICY: () => DEFAULT_AGING_POLICY,
  DEFAULT_ATTESTATION_FRESHNESS_MS: () => DEFAULT_ATTESTATION_FRESHNESS_MS,
  DEFAULT_CHALLENGE_BYTES: () => DEFAULT_CHALLENGE_BYTES,
  DEFAULT_CHALLENGE_TTL_MS: () => DEFAULT_CHALLENGE_TTL_MS,
  DEFAULT_COMPACT_THRESHOLD_BYTES: () => DEFAULT_COMPACT_THRESHOLD_BYTES,
  DEFAULT_CONSENSUS_THRESHOLD: () => DEFAULT_CONSENSUS_THRESHOLD,
  DEFAULT_COUNTRY_SANCTIONS: () => DEFAULT_COUNTRY_SANCTIONS,
  DEFAULT_FACTOR_WEIGHTS: () => DEFAULT_FACTOR_WEIGHTS,
  DEFAULT_LATENCY_BUFFER: () => DEFAULT_LATENCY_BUFFER,
  DEFAULT_LATENCY_SAMPLE_EVERY: () => DEFAULT_LATENCY_SAMPLE_EVERY,
  DEFAULT_MAX_DEBATE_ROUNDS: () => DEFAULT_MAX_DEBATE_ROUNDS,
  DEFAULT_NERVOUS_CONFIG: () => DEFAULT_NERVOUS_CONFIG,
  DEFAULT_NETWORK_INTERVAL_MS: () => DEFAULT_NETWORK_INTERVAL_MS,
  DEFAULT_NONCE_BYTES: () => DEFAULT_NONCE_BYTES,
  DEFAULT_NONCE_TTL_MS: () => DEFAULT_NONCE_TTL_MS,
  DEFAULT_OS_INTERVAL_MS: () => DEFAULT_OS_INTERVAL_MS,
  DEFAULT_OUTLIER_THRESHOLD: () => DEFAULT_OUTLIER_THRESHOLD,
  DEFAULT_POLICY_ATTESTATION_FRESHNESS_MS: () => DEFAULT_POLICY_ATTESTATION_FRESHNESS_MS,
  DEFAULT_POLICY_SESSION_TTL_MS: () => DEFAULT_POLICY_SESSION_TTL_MS,
  DEFAULT_PROCESS_INTERVAL_MS: () => DEFAULT_PROCESS_INTERVAL_MS,
  DEFAULT_PRODUCT_RESTRICTIONS: () => DEFAULT_PRODUCT_RESTRICTIONS,
  DEFAULT_QUEUE_CAPACITY: () => DEFAULT_QUEUE_CAPACITY,
  DEFAULT_RECORDER_MAX_SIZE: () => DEFAULT_RECORDER_MAX_SIZE,
  DEFAULT_RENDER_CONFIG: () => DEFAULT_RENDER_CONFIG,
  DEFAULT_RETRY_POLICY: () => DEFAULT_RETRY_POLICY,
  DEFAULT_RULE_SET: () => DEFAULT_RULE_SET,
  DEFAULT_SESSION_TTL_MS: () => DEFAULT_SESSION_TTL_MS,
  DEFAULT_SYNTHESIS_THRESHOLD: () => DEFAULT_SYNTHESIS_THRESHOLD,
  DEFAULT_VIEWPORT: () => DEFAULT_VIEWPORT,
  DIVERGENT_CONTENT_MIN_OVERLAP: () => DIVERGENT_CONTENT_MIN_OVERLAP,
  DIVERGENT_REASONING_MAX_OVERLAP: () => DIVERGENT_REASONING_MAX_OVERLAP,
  DOCUMENT_STATUSES: () => DOCUMENT_STATUSES,
  DebateError: () => DebateError,
  DebateFacilitator: () => DebateFacilitator,
  DecompositionError: () => DecompositionError,
  DecryptionError: () => DecryptionError,
  DetectorError: () => DetectorError,
  DetectorRegistry: () => DetectorRegistry,
  DeviceFingerprint: () => DeviceFingerprint,
  DocumentError: () => DocumentError,
  ENFORCEMENT_POINTS: () => ENFORCEMENT_POINTS,
  EmergencyController: () => EmergencyController,
  EmergencyError: () => EmergencyError,
  EncryptionError: () => EncryptionError,
  EnforcementEngine: () => EnforcementEngine,
  EnforcementError: () => EnforcementError,
  EpisodicMemory: () => EpisodicMemory,
  EpisodicMemoryError: () => EpisodicMemoryError,
  EventError: () => EventError,
  EventFabric: () => EventFabric,
  EventQueue: () => EventQueue,
  EventRecorder: () => EventRecorder,
  EventReplayer: () => EventReplayer,
  EventRouter: () => EventRouter,
  FACTUAL_OVERLAP_THRESHOLD: () => FACTUAL_OVERLAP_THRESHOLD,
  FabricError: () => FabricError,
  FileLedgerStore: () => FileLedgerStore,
  FileStorage: () => FileStorage,
  FilesystemSource: () => FilesystemSource,
  FilterError: () => FilterError,
  FingerprintError: () => FingerprintError,
  FullRedactor: () => FullRedactor,
  GENESIS_PREV_HASH: () => GENESIS_PREV_HASH,
  GeneralizeRedactor: () => GeneralizeRedactor,
  GoalError: () => GoalError,
  GoalManager: () => GoalManager,
  Graph: () => Graph,
  GraphError: () => GraphError,
  HIGH_RISK_TRANSSHIPMENT: () => HIGH_RISK_TRANSSHIPMENT,
  HSCodeError: () => HSCodeError,
  HardwareKeyError: () => HardwareKeyError,
  HardwareValidationError: () => HardwareValidationError,
  HardwareValidator: () => HardwareValidator,
  HashRedactor: () => HashRedactor,
  HierarchyError: () => HierarchyError,
  IDENTITY_VIEWPORT: () => IDENTITY_VIEWPORT,
  INDICATOR_WEIGHTS: () => INDICATOR_WEIGHTS,
  Identity: () => Identity,
  InMemoryLedgerStore: () => InMemoryLedgerStore,
  InMemorySessionStore: () => InMemorySessionStore,
  InMemoryStorage: () => InMemoryStorage,
  IndexError: () => IndexError,
  InvertedIndex: () => InvertedIndex,
  KeyGenerationError: () => KeyGenerationError,
  KeyringError: () => KeyringError,
  KeyringWallet: () => KeyringWallet,
  LINUX_MACHINE_ID_PATHS: () => LINUX_MACHINE_ID_PATHS,
  LayoutError: () => LayoutError,
  LedgerChain: () => LedgerChain,
  LedgerError: () => LedgerError,
  LinkGraph: () => LinkGraph,
  LocalTimestampAuthority: () => LocalTimestampAuthority,
  LongTermMemory: () => LongTermMemory,
  LongTermMemoryError: () => LongTermMemoryError,
  MANIFEST_ERROR_CODES: () => MANIFEST_ERROR_CODES,
  ManifestError: () => ManifestError,
  MaskRedactor: () => MaskRedactor,
  MemoryError: () => MemoryError,
  MemorySystem: () => MemorySystem,
  MerkleError: () => MerkleError,
  MerkleTree: () => MerkleTree,
  MetricsCollector: () => MetricsCollector,
  MicrophoneSource: () => MicrophoneSource,
  MinorityOpinionTracker: () => MinorityOpinionTracker,
  MultiDeviceSync: () => MultiDeviceSync,
  NervousSystemError: () => NervousSystemError,
  NetworkSource: () => NetworkSource,
  NonceError: () => NonceError,
  NonceStore: () => NonceStore,
  NotificationSource: () => NotificationSource,
  OPPOSING_CONFIDENCE_THRESHOLD: () => OPPOSING_CONFIDENCE_THRESHOLD,
  OSSource: () => OSSource,
  PermissionModel: () => PermissionModel,
  Planner: () => Planner,
  PlanningError: () => PlanningError,
  PolicyError: () => PolicyError,
  ProceduralMemory: () => ProceduralMemory,
  ProceduralMemoryError: () => ProceduralMemoryError,
  ProcessSource: () => ProcessSource,
  PublishingError: () => PublishingError,
  QueueError: () => QueueError,
  REDACTED: () => REDACTED,
  RESOLUTION_STRATEGIES: () => RESOLUTION_STRATEGIES,
  RULE_CATEGORIES: () => RULE_CATEGORIES,
  RecorderError: () => RecorderError,
  RecoveryError: () => RecoveryError,
  RedactionError: () => RedactionError,
  ReplayError: () => ReplayError,
  ResourceError: () => ResourceError,
  ResourceManager: () => ResourceManager,
  RestrictionError: () => RestrictionError,
  RetryError: () => RetryError,
  RiskError: () => RiskError,
  Role: () => Role,
  RoleManager: () => RoleManager,
  Router: () => Router,
  RouterError: () => RouterError,
  RuleError: () => RuleError,
  SCHEMA_TYPES: () => SCHEMA_TYPES,
  SECTION_TYPES: () => SECTION_TYPES,
  SENSITIVE_METADATA_KEYS: () => SENSITIVE_METADATA_KEYS,
  SESSION_TOKEN_BYTES: () => SESSION_TOKEN_BYTES,
  SEVERITY_HIGH_GAP: () => SEVERITY_HIGH_GAP,
  SEVERITY_MEDIUM_GAP: () => SEVERITY_MEDIUM_GAP,
  STATE_ORDER: () => STATE_ORDER,
  STATE_RANK: () => STATE_RANK,
  STRONG_CONSENSUS_RATIO: () => STRONG_CONSENSUS_RATIO,
  SafetyChecker: () => SafetyChecker,
  SafetyError: () => SafetyError,
  SanctionsError: () => SanctionsError,
  Scheduler: () => Scheduler,
  SchedulerError: () => SchedulerError,
  SchemaError: () => SchemaError,
  ScoringError: () => ScoringError,
  SelectionModel: () => SelectionModel,
  SemanticMemory: () => SemanticMemory,
  SemanticMemoryError: () => SemanticMemoryError,
  SensorSource: () => SensorSource,
  SessionError: () => SessionError,
  SessionManager: () => SessionManager,
  SignatureError: () => SignatureError,
  SoftwareAttestationProvider: () => SoftwareAttestationProvider,
  SoftwareKeyProvider: () => SoftwareKeyProvider,
  SourceError: () => SourceError,
  SpecialistRegistry: () => SpecialistRegistry,
  StorageError: () => StorageError,
  StoreError: () => StoreError,
  StubSource: () => StubSource,
  SynthesisError: () => SynthesisError,
  SynthesizeRedactor: () => SynthesizeRedactor,
  TIMESTAMP_TOKEN_VERSION: () => TIMESTAMP_TOKEN_VERSION,
  TRUST_DECISION_THRESHOLD: () => TRUST_DECISION_THRESHOLD,
  TamperError: () => TamperError,
  TimestampError: () => TimestampError,
  TokenRedactor: () => TokenRedactor,
  ToolError: () => ToolError,
  ToolRegistry: () => ToolRegistry,
  TopologyTracker: () => TopologyTracker,
  TrustEvaluationError: () => TrustEvaluationError,
  TrustEvaluator: () => TrustEvaluator,
  UsbSource: () => UsbSource,
  ValidationError: () => ValidationError,
  Validator: () => Validator,
  VerificationError: () => VerificationError,
  WALLET_MASTER_KEY_BYTES: () => WALLET_MASTER_KEY_BYTES,
  WALLET_PBKDF2_ITERATIONS: () => WALLET_PBKDF2_ITERATIONS,
  WALLET_SALT_BYTES: () => WALLET_SALT_BYTES,
  WILDCARD: () => WILDCARD,
  WeaveError: () => WeaveError,
  WorkflowEngine: () => WorkflowEngine,
  WorkingMemory: () => WorkingMemory,
  WorkingMemoryError: () => WorkingMemoryError,
  _globDir: () => globDir,
  _internal: () => _internal,
  addressDetector: () => addressDetector,
  ageScore: () => ageScore,
  aggregateReports: () => aggregateReports,
  aggregateScore: () => aggregateScore,
  aggregateScores: () => aggregateScores,
  analyzeVulnerabilities: () => analyzeVulnerabilities,
  ancestors: () => ancestors,
  and: () => and,
  anonymize: () => anonymize,
  apiKeyDetector: () => apiKeyDetector,
  applyDelta: () => applyDelta,
  applyRedactions: () => applyRedactions,
  applyViewport: () => applyViewport,
  assertClean: () => assertClean,
  assertDocumentClean: () => assertDocumentClean,
  assertManifest: () => assertManifest,
  assertValidContract: () => assertValidContract,
  assertValidKey: () => assertValidKey,
  backoffDelay: () => backoffDelay,
  bandFor: () => bandFor,
  base58Encode: () => base58Encode,
  bfsPath: () => bfsPath,
  buildBundleFromParts: () => buildBundleFromParts,
  buildDefaultCatalog: () => buildDefaultCatalog,
  buildImportDeclaration: () => buildImportDeclaration,
  buildManifest: () => buildManifest,
  buildPolicy: () => buildPolicy,
  buildSanctionsRecord: () => buildSanctionsRecord,
  buildTrustScore: () => buildTrustScore,
  calculateDuty: () => calculateDuty,
  can: () => can,
  canOverride: () => canOverride,
  canonicalCredentialBytes: () => canonicalCredentialBytes,
  canonicalQuoteBytes: () => canonicalQuoteBytes,
  canonicalSerialize: () => canonicalSerialize,
  canonicalSerializeToString: () => canonicalSerializeToString,
  canonicalTimestampBytes: () => canonicalTimestampBytes,
  chapter: () => chapter,
  checkBackwardCompat: () => checkBackwardCompat,
  checkEmbargoes: () => checkEmbargoes,
  checkLicenses: () => checkLicenses,
  checkRestrictedOrigins: () => checkRestrictedOrigins,
  children: () => children,
  classifyConsensus: () => classifyConsensus,
  clearConditionCache: () => clearConditionCache,
  cloneEvent: () => cloneEvent,
  collectDeviceSignals: () => collectDeviceSignals,
  commit: () => commit,
  compareParsedSemver: () => compareParsedSemver,
  compareSemver: () => compareSemver,
  compareVersions: () => compareVersions,
  compileFilter: () => compileFilter,
  compileSchema: () => compileSchema,
  compress: () => compress,
  computeDelta: () => computeDelta,
  computeEventHash: () => computeEventHash,
  computeFactors: () => computeFactors,
  createGraph: () => createGraph,
  createSoftwareWorkflow: () => createSoftwareWorkflow,
  creditCardDetector: () => creditCardDetector,
  decideFromScore: () => decideFromScore,
  decodeChallenge: () => decodeChallenge,
  decompose: () => decompose,
  decompress: () => decompress,
  decrypt: () => decrypt,
  defaultPolicy: () => defaultPolicy,
  defaultPolicySet: () => defaultPolicySet,
  defaultRegistry: () => defaultRegistry,
  defaultTrustEvaluator: () => defaultTrustEvaluator,
  deriveDeviceId: () => deriveDeviceId,
  deriveDidKey: () => deriveDidKey,
  deriveKey: () => deriveKey,
  describeType: () => describeType,
  deserialize: () => deserialize,
  deserializeAndVerifyAttestation: () => deserializeAndVerifyAttestation,
  deserializeQuote: () => deserializeQuote,
  detectIndicators: () => detectIndicators,
  detectOutliers: () => detectOutliers,
  detectViolations: () => detectViolations,
  dhash: () => dhash,
  diffDocuments: () => diffDocuments,
  diffMetadata: () => diffMetadata,
  diffSchemas: () => diffSchemas,
  diffSnapshots: () => diffSnapshots,
  dijkstra: () => dijkstra,
  effectiveImportance: () => effectiveImportance,
  emailDetector: () => emailDetector,
  encrypt: () => encrypt,
  enforceBoundary: () => enforceBoundary,
  escalationPath: () => escalationPath,
  estimateComplexity: () => estimateComplexity,
  evaluateCondition: () => evaluateCondition,
  evaluatePolicy: () => evaluatePolicy,
  evaluatePolicySet: () => evaluatePolicySet,
  evaluateRule: () => evaluateRule,
  evaluateRuleSet: () => evaluateRuleSet,
  eventKeyId: () => eventKeyId,
  eventsEqual: () => eventsEqual,
  expandRoles: () => expandRoles,
  exportAuditLog: () => exportAuditLog,
  exportEpisodic: () => exportEpisodic,
  exportSemantic: () => exportSemantic,
  exportSnapshot: () => exportSnapshot,
  fieldsEqual: () => fieldsEqual,
  filterByComponent: () => filterByComponent,
  filterByDepth: () => filterByDepth,
  filterByEdgeType: () => filterByEdgeType,
  filterByLabel: () => filterByLabel,
  filterByProperty: () => filterByProperty,
  filterByType: () => filterByType,
  filterEdges: () => filterEdges,
  filterNodes: () => filterNodes,
  findCommonAuthority: () => findCommonAuthority,
  findEndpoint: () => findEndpoint,
  findOcrPiiCandidates: () => findOcrPiiCandidates,
  forceDirected: () => forceDirected,
  formatVersion: () => formatVersion,
  fuzzySearch: () => fuzzySearch,
  generateChallenge: () => generateChallenge,
  generateEventId: () => generateEventId,
  getCatalog: () => getCatalog,
  getKeyId: () => getKeyId,
  getRestrictions: () => getRestrictions,
  getRuleSet: () => getRuleSet,
  getSanctionsList: () => getSanctionsList,
  gfDiv: () => gfDiv,
  gfEval: () => gfEval,
  gfMul: () => gfMul,
  grantRole: () => grantRole,
  grid: () => grid,
  hashConfig: () => hashConfig,
  hashDataset: () => hashDataset,
  hashRecord: () => hashRecord,
  heading: () => heading,
  healthConditionDetector: () => healthConditionDetector,
  hierarchical: () => hierarchical,
  hkdf: () => hkdf,
  ibanDetector: () => ibanDetector,
  imageIdentifier: () => imageIdentifier,
  importJsonl: () => importJsonl,
  importSnapshot: () => importSnapshot,
  international: () => international,
  inverseViewport: () => inverseViewport,
  ipv4Detector: () => ipv4Detector,
  ipv6Detector: () => ipv6Detector,
  isChallengeExpired: () => isChallengeExpired,
  isPolicySatisfied: () => isPolicySatisfied,
  isRatified: () => isRatified,
  isRetryable: () => isRetryable,
  isSemver: () => isSemver,
  isSensitiveKey: () => isSensitiveKey,
  isSeverity: () => isSeverity,
  isValidFormat: () => isValidFormat,
  isValidManifest: () => isValidManifest,
  isoDateDetector: () => isoDateDetector,
  issueCredential: () => issueCredential,
  issueTimestamp: () => issueTimestamp,
  jwtDetector: () => jwtDetector,
  lookup: () => lookup,
  luhnValid: () => luhnValid,
  macDetector: () => macDetector,
  makeFinding: () => makeFinding,
  makeRoute: () => makeRoute,
  makeRouteId: () => makeRouteId,
  matchEvent: () => matchEvent,
  matchResource: () => matchResource,
  matchRule: () => matchRule,
  matchScore: () => matchScore,
  medicationDetector: () => medicationDetector,
  mergeAgingPolicy: () => mergeAgingPolicy,
  mergeImport: () => mergeImport,
  mergeRenderConfig: () => mergeRenderConfig,
  mergeSchemas: () => mergeSchemas,
  mulberry32: () => mulberry32,
  newCorrelationId: () => newCorrelationId,
  newRoleAssignmentId: () => newRoleAssignmentId,
  normalize: () => normalize,
  normalizeMetadata: () => normalizeMetadata,
  normalizeName: () => normalizeName,
  normalizeOcrText: () => normalizeOcrText,
  not: () => not,
  ocrPageToText: () => ocrPageToText,
  or: () => or,
  panTo: () => panTo,
  parseBackup: () => parseBackup,
  parseCondition: () => parseCondition,
  parseDocxCoreXml: () => parseDocxCoreXml,
  parsePdfInfo: () => parsePdfInfo,
  parseRole: () => parseRole,
  parseSemver: () => parseSemver,
  parseVersion: () => parseVersion,
  pbkdf2: () => pbkdf2,
  permissionMatches: () => permissionMatches,
  permissionsForRole: () => permissionsForRole,
  personNameDetector: () => personNameDetector,
  phoneDetector: () => phoneDetector,
  postalCodeDetector: () => postalCodeDetector,
  produceAndSerializeAttestation: () => produceAndSerializeAttestation,
  produceAttestation: () => produceAttestation,
  providerDetector: () => providerDetector,
  radial: () => radial,
  rankEpisodic: () => rankEpisodic,
  rankLongTerm: () => rankLongTerm,
  ratify: () => ratify,
  ratio: () => ratio,
  readLinuxNetDev: () => readLinuxNetDev,
  redactImage: () => redactImage,
  redactSignals: () => redactSignals,
  redactorForStrategy: () => redactorForStrategy,
  renderToSVG: () => renderToSVG,
  requireHardwareOrThrow: () => requireHardwareOrThrow,
  requireNode: () => requireNode,
  resolveOverlaps: () => resolveOverlaps,
  reveal: () => reveal,
  revokeRole: () => revokeRole,
  rolesForSubject: () => rolesForSubject,
  roots: () => roots,
  route: () => route,
  routeAll: () => routeAll,
  satisfies: () => satisfies,
  scoreAnalysis: () => scoreAnalysis,
  scoreFrom: () => scoreFrom,
  screen: () => screen,
  screenParties: () => screenParties,
  screenParty: () => screenParty,
  scrubDocumentMetadata: () => scrubDocumentMetadata,
  scrubObjectMetadata: () => scrubMetadata2,
  search: () => search,
  serializeBackup: () => serializeBackup,
  serializeManifest: () => serializeManifest,
  serializeQuote: () => serializeQuote,
  setCatalog: () => setCatalog,
  setRestrictions: () => setRestrictions,
  setRuleSet: () => setRuleSet,
  setSanctionsList: () => setSanctionsList,
  sha256Hex: () => sha256Hex,
  shamirCombine: () => shamirCombine,
  shamirSplit: () => shamirSplit,
  shouldCompressLongTerm: () => shouldCompressLongTerm,
  shouldPruneEpisodic: () => shouldPruneEpisodic,
  signChallenge: () => signChallenge,
  signEvent: () => signEvent,
  signForAttestation: () => signForAttestation,
  signForChallenge: () => signForChallenge,
  stableStringify: () => stableStringify,
  strictPolicy: () => strictPolicy,
  stripJpegExif: () => stripJpegExif,
  stripOcrGeometry: () => stripOcrGeometry,
  suggest: () => suggest,
  supersede: () => supersede,
  synthesize: () => synthesize,
  takeSnapshot: () => takeSnapshot,
  toDot: () => toDot,
  toJSON: () => toJSON,
  toMermaid: () => toMermaid,
  toSVG: () => toSVG,
  topoSort: () => topoSort,
  urlDetector: () => urlDetector,
  usSsnDetector: () => usSsnDetector,
  validate: () => validate,
  validateAnalysis: () => validateAnalysis,
  validateConflict: () => validateConflict,
  validateCredential: () => validateCredential,
  validateDocument: () => validateDocument,
  validateHierarchy: () => validateHierarchy,
  validateManifest: () => validateManifest,
  validateMinorityOpinion: () => validateMinorityOpinion,
  validatePermissionModel: () => validatePermissionModel,
  validatePolicy: () => validatePolicy,
  validateProcedure: () => validateProcedure,
  validateQuote: () => validateQuote,
  validateReport: () => validate2,
  validateRequest: () => validateRequest,
  validateResponse: () => validateResponse,
  validateRound: () => validateRound,
  validateRule: () => validateRule,
  validateSafetyRule: () => validateSafetyRule,
  validateSection: () => validateSection,
  validateSpecialist: () => validateSpecialist,
  validateValue: () => validateValue,
  verifyAttestation: () => verifyAttestation,
  verifyBackup: () => verifyBackup,
  verifyChain: () => verifyChain,
  verifyCredential: () => verifyCredential,
  verifyEventSignature: () => verifyEventSignature,
  verifyManifest: () => verifyManifest,
  verifyMatch: () => verifyMatch,
  verifyProof: () => verifyProof,
  verifyResponse: () => verifyResponse,
  verifySharesConsistent: () => verifySharesConsistent,
  verifyTimestamp: () => verifyTimestamp,
  whoCan: () => whoCan,
  withRetry: () => withRetry,
  zaIdChecksumValid: () => zaIdChecksumValid,
  zaIdDetector: () => zaIdDetector,
  zoomAt: () => zoomAt
});
module.exports = __toCommonJS(entry_exports);

// packages/keyring/src/errors.ts
var KeyringError = class extends Error {
  /** Stable machine-readable code, e.g. `KEY_GENERATION_ERROR`. */
  code;
  /** Optional underlying cause. */
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) {
      this.cause = cause;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var KeyGenerationError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "KEY_GENERATION_ERROR", cause);
  }
};
var SignatureError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "SIGNATURE_ERROR", cause);
  }
};
var VerificationError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "VERIFICATION_ERROR", cause);
  }
};
var EncryptionError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "ENCRYPTION_ERROR", cause);
  }
};
var DecryptionError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "DECRYPTION_ERROR", cause);
  }
};
var StorageError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "STORAGE_ERROR", cause);
  }
};
var AccessDeniedError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "ACCESS_DENIED_ERROR", cause);
  }
};
var CredentialError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "CREDENTIAL_ERROR", cause);
  }
};
var SyncError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "SYNC_ERROR", cause);
  }
};
var RecoveryError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "RECOVERY_ERROR", cause);
  }
};
var HardwareKeyError = class extends KeyringError {
  constructor(message, cause) {
    super(message, "HARDWARE_KEY_ERROR", cause);
  }
};

// packages/keyring/src/logging.ts
var SCRUBBED_FIELD_NAMES = [
  "privateKey",
  "password",
  "passphrase",
  "token",
  "secret",
  "credential",
  "iv",
  "tag",
  "share"
];
var SCRUB_REGEX = new RegExp(
  "(?:" + SCRUBBED_FIELD_NAMES.map((n) => n.toLowerCase()).join("|") + ")$",
  "i"
);
var SilentLogger = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/keyring/src/crypto/hashing.ts
var crypto = __toESM(require("crypto"));
function sha256(data) {
  try {
    const buf = typeof data === "string" ? Buffer.from(data, "utf8") : data;
    return crypto.createHash("sha256").update(buf).digest();
  } catch (err) {
    throw new KeyringError("sha256 failed: " + err.message, "HASH_ERROR", err);
  }
}
function hkdf(ikm, salt, info, length) {
  if (length <= 0) {
    throw new KeyringError("hkdf: length must be > 0", "HKDF_ERROR");
  }
  if (length > 255 * 32) {
    throw new KeyringError(
      "hkdf: length exceeds 255 * 32 (255 blocks of SHA-256)",
      "HKDF_ERROR"
    );
  }
  try {
    const result = crypto.hkdfSync("sha256", ikm, salt, info, length);
    return Buffer.from(result);
  } catch (err) {
    throw new KeyringError("hkdf failed: " + err.message, "HKDF_ERROR", err);
  }
}
function pbkdf2(passphrase, salt, iterations, keyLen, algo = "sha512") {
  if (iterations < 1e3) {
    throw new KeyringError("pbkdf2: iterations below safe minimum (1000)", "PBKDF2_ERROR");
  }
  try {
    return crypto.pbkdf2Sync(passphrase, salt, iterations, keyLen, algo);
  } catch (err) {
    throw new KeyringError("pbkdf2 failed: " + err.message, "PBKDF2_ERROR", err);
  }
}
function constantTimeEqual(a, b) {
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// packages/keyring/src/crypto/symmetric.ts
var crypto2 = __toESM(require("crypto"));
var AES_256_KEY_BYTES = 32;
var AES_GCM_IV_BYTES = 12;
var AES_GCM_TAG_BYTES = 16;
function encrypt(key, plaintext, aad) {
  if (!Buffer.isBuffer(key) || key.length !== AES_256_KEY_BYTES) {
    throw new EncryptionError(
      `AES-256-GCM requires a 32-byte key (got ${key?.length ?? 0})`
    );
  }
  if (!Buffer.isBuffer(plaintext)) {
    throw new EncryptionError("plaintext must be a Buffer");
  }
  try {
    const iv = crypto2.randomBytes(AES_GCM_IV_BYTES);
    const cipher = crypto2.createCipheriv("aes-256-gcm", key, iv, {
      authTagLength: AES_GCM_TAG_BYTES
    });
    if (aad && aad.length > 0) {
      cipher.setAAD(aad);
    }
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    const tag = cipher.getAuthTag();
    return { iv, ciphertext, tag };
  } catch (err) {
    if (err instanceof EncryptionError) throw err;
    throw new EncryptionError("aes-256-gcm encrypt failed: " + err.message, err);
  }
}
function decrypt(key, iv, ciphertext, tag, aad) {
  if (!Buffer.isBuffer(key) || key.length !== AES_256_KEY_BYTES) {
    throw new DecryptionError(
      `AES-256-GCM requires a 32-byte key (got ${key?.length ?? 0})`
    );
  }
  if (!Buffer.isBuffer(iv) || iv.length !== AES_GCM_IV_BYTES) {
    throw new DecryptionError(`IV must be ${AES_GCM_IV_BYTES} bytes`);
  }
  if (!Buffer.isBuffer(tag) || tag.length !== AES_GCM_TAG_BYTES) {
    throw new DecryptionError(`tag must be ${AES_GCM_TAG_BYTES} bytes`);
  }
  try {
    const decipher = crypto2.createDecipheriv("aes-256-gcm", key, iv, {
      authTagLength: AES_GCM_TAG_BYTES
    });
    decipher.setAuthTag(tag);
    if (aad && aad.length > 0) {
      decipher.setAAD(aad);
    }
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  } catch (err) {
    if (err instanceof DecryptionError) throw err;
    throw new DecryptionError("aes-256-gcm decrypt failed: " + err.message, err);
  }
}

// packages/keyring/src/crypto/keys.ts
var crypto3 = __toESM(require("crypto"));
var DEFAULT_RSA_MODULUS = 3072;
var DEFAULT_RSA_EXPONENT = 65537;
var DEFAULT_EC_CURVE = "prime256v1";
function algorithmFor(algo) {
  switch (algo) {
    case "rsa":
      return "rsa-pss";
    case "ecdsa":
      return "ecdsa-p256";
    default:
      throw new KeyGenerationError(`unknown key algorithm: ${algo}`);
  }
}
function generateKeyPair(algo, opts = {}) {
  try {
    let publicKey;
    let privateKey;
    if (algo === "rsa") {
      ({ publicKey, privateKey } = crypto3.generateKeyPairSync("rsa", {
        modulusLength: opts.rsaModulusBits ?? DEFAULT_RSA_MODULUS,
        publicExponent: opts.rsaPublicExponent ?? DEFAULT_RSA_EXPONENT
      }));
    } else if (algo === "ecdsa") {
      const curve = opts.ecCurve ?? DEFAULT_EC_CURVE;
      if (curve !== "prime256v1") {
        throw new KeyGenerationError(
          `unsupported EC curve: ${curve}. Only 'prime256v1' (NIST P-256) is supported.`
        );
      }
      ({ publicKey, privateKey } = crypto3.generateKeyPairSync("ec", {
        namedCurve: curve
      }));
    } else {
      throw new KeyGenerationError(`unknown key algorithm: ${algo}`);
    }
    return { publicKey, privateKey, algorithm: algorithmFor(algo) };
  } catch (err) {
    if (err instanceof KeyGenerationError) throw err;
    throw new KeyGenerationError(
      "key generation failed: " + err.message,
      err
    );
  }
}
function deriveKey(master, info, length) {
  const infoBuf = typeof info === "string" ? Buffer.from(info, "utf8") : info;
  const salt = Buffer.alloc(32, 0);
  return hkdf(master, salt, infoBuf, length);
}
function exportKeyPem(key, type) {
  try {
    if (type === "public") {
      return key.export({ type: "spki", format: "pem" }).toString("utf8");
    }
    return key.export({ type: "pkcs8", format: "pem" }).toString("utf8");
  } catch (err) {
    throw new KeyGenerationError(
      `failed to export ${type} key to PEM: ${err.message}`,
      err
    );
  }
}
function getKeyFingerprint(publicKey) {
  try {
    const keyObj = typeof publicKey === "string" ? crypto3.createPublicKey(publicKey) : publicKey;
    const der = keyObj.export({ type: "spki", format: "der" });
    return sha256(der).toString("hex");
  } catch (err) {
    throw new KeyGenerationError(
      "getKeyFingerprint failed: " + err.message,
      err
    );
  }
}
function exportPublicRaw(key) {
  try {
    return key.export({ type: "spki", format: "der" });
  } catch (err) {
    throw new KeyringError(
      "exportPublicRaw failed: " + err.message,
      "KEY_EXPORT_ERROR",
      err
    );
  }
}

// packages/keyring/src/crypto/signatures.ts
var crypto4 = __toESM(require("crypto"));
var SIGN_HASH = "sha256";
function asPublicKey(key) {
  if (typeof key === "string") {
    try {
      return crypto4.createPublicKey(key);
    } catch (err) {
      throw new VerificationError(
        "invalid public key PEM: " + err.message,
        err
      );
    }
  }
  return key;
}
function asPrivateKey(key) {
  if (typeof key === "string") {
    try {
      return crypto4.createPrivateKey(key);
    } catch (err) {
      throw new SignatureError(
        "invalid private key PEM: " + err.message,
        err
      );
    }
  }
  return key;
}
function sign2(privateKey, data, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new SignatureError("data must be a Buffer");
  }
  const key = asPrivateKey(privateKey);
  try {
    if (algo === "rsa-pss") {
      const sig = crypto4.sign(
        SIGN_HASH,
        data,
        {
          key,
          padding: crypto4.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto4.constants.RSA_PSS_SALTLEN_DIGEST
        }
      );
      return sig.toString("hex");
    }
    if (algo === "ecdsa-p256") {
      const sig = crypto4.sign(SIGN_HASH, data, key);
      return sig.toString("hex");
    }
    throw new SignatureError(`unsupported signature algorithm: ${algo}`);
  } catch (err) {
    if (err instanceof SignatureError) throw err;
    throw new SignatureError("sign failed: " + err.message, err);
  }
}
function verify2(publicKey, data, signature, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new VerificationError("data must be a Buffer");
  }
  let signatureBuf;
  if (typeof signature === "string") {
    try {
      signatureBuf = Buffer.from(signature, "hex");
    } catch {
      throw new VerificationError("signature must be hex-encoded");
    }
    if (signatureBuf.length === 0 || !/^[0-9a-fA-F]+$/.test(signature)) {
      throw new VerificationError("signature must be non-empty hex");
    }
  } else {
    signatureBuf = signature;
  }
  const key = asPublicKey(publicKey);
  let ok;
  try {
    if (algo === "rsa-pss") {
      ok = crypto4.verify(
        SIGN_HASH,
        data,
        {
          key,
          padding: crypto4.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto4.constants.RSA_PSS_SALTLEN_DIGEST
        },
        signatureBuf
      );
    } else if (algo === "ecdsa-p256") {
      ok = crypto4.verify(SIGN_HASH, data, key, signatureBuf);
    } else {
      throw new VerificationError(`unsupported signature algorithm: ${algo}`);
    }
  } catch (err) {
    if (err instanceof VerificationError) throw err;
    return false;
  }
  const okByte = Buffer.from([ok ? 1 : 0]);
  const expected = Buffer.from([1]);
  return constantTimeEqual(okByte, expected);
}
function proofTypeFor(algo) {
  return algo === "rsa-pss" ? "manya:rsa-pss:2024" : "manya:ecdsa-p256:2024";
}

// packages/keyring/src/identity/identity.ts
var crypto5 = __toESM(require("crypto"));
var import_crypto = require("crypto");
var BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function base58Encode(input) {
  if (input.length === 0) return "";
  let zeros = 0;
  while (zeros < input.length && input[zeros] === 0) zeros++;
  const digits = [];
  for (let i = zeros; i < input.length; i++) {
    let carry = input[i];
    for (let j = 0; j < digits.length; j++) {
      carry += digits[j] << 8;
      digits[j] = carry % 58;
      carry = carry / 58 | 0;
    }
    while (carry > 0) {
      digits.push(carry % 58);
      carry = carry / 58 | 0;
    }
  }
  let out = "";
  for (let i = 0; i < zeros; i++) out += BASE58_ALPHABET[0];
  for (let i = digits.length - 1; i >= 0; i--) {
    out += BASE58_ALPHABET[digits[i]];
  }
  return out;
}
function deriveDidKey(publicKey, algorithm) {
  try {
    const keyObj = typeof publicKey === "string" ? crypto5.createPublicKey(publicKey) : publicKey;
    let body;
    if (algorithm === "rsa-pss") {
      const spkiDer = exportPublicRaw(keyObj);
      const digest = sha256(spkiDer);
      body = Buffer.concat([Buffer.from([133, 26]), digest]);
    } else {
      const raw = keyObj.export({ type: "spki", format: "der" });
      body = Buffer.concat([Buffer.from([18, 0]), raw]);
    }
    return "did:key:z" + base58Encode(body);
  } catch (err) {
    throw new KeyGenerationError(
      "deriveDidKey failed: " + err.message,
      err
    );
  }
}
var Identity = class _Identity {
  /** UUID v4. */
  id;
  /** did:key-style DID derived from the public key. */
  did;
  /** SPKI PEM-encoded public key. */
  publicKey;
  /** Signature algorithm. */
  algorithm;
  /** ISO-8601 creation timestamp. */
  createdAt;
  /** Free-form public metadata (e.g. agent name, profile URL). */
  metadata;
  constructor(params) {
    this.id = params.id ?? (0, import_crypto.randomUUID)();
    this.did = params.did;
    this.publicKey = params.publicKey;
    this.algorithm = params.algorithm;
    this.createdAt = params.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
    this.metadata = params.metadata ?? {};
  }
  /**
   * Construct an {@link Identity} from a PEM-encoded public key + algorithm.
   */
  static fromPublicKey(publicKeyPem, algorithm, metadata = {}) {
    const did = deriveDidKey(publicKeyPem, algorithm);
    return new _Identity({
      did,
      publicKey: publicKeyPem,
      algorithm,
      metadata
    });
  }
  /** Short hex fingerprint of the public key (SHA-256 of DER). */
  fingerprint() {
    return getKeyFingerprint(this.publicKey);
  }
  /** Serialize to a plain object suitable for JSON. */
  serialize() {
    return {
      id: this.id,
      did: this.did,
      publicKey: this.publicKey,
      algorithm: this.algorithm,
      createdAt: this.createdAt,
      metadata: this.metadata
    };
  }
  /** Deserialize from a plain object. */
  static deserialize(data) {
    if (!data || typeof data !== "object") {
      throw new KeyringError(
        "Identity.deserialize: expected object",
        "IDENTITY_DESERIALIZE_ERROR"
      );
    }
    const required = ["id", "did", "publicKey", "algorithm", "createdAt"];
    for (const key of required) {
      if (!(key in data)) {
        throw new KeyringError(
          `Identity.deserialize: missing field '${key}'`,
          "IDENTITY_DESERIALIZE_ERROR"
        );
      }
    }
    if (data.algorithm !== "rsa-pss" && data.algorithm !== "ecdsa-p256") {
      throw new KeyringError(
        `Identity.deserialize: unsupported algorithm '${data.algorithm}'`,
        "IDENTITY_DESERIALIZE_ERROR"
      );
    }
    return new _Identity({
      id: data.id,
      did: data.did,
      publicKey: data.publicKey,
      algorithm: data.algorithm,
      createdAt: data.createdAt,
      metadata: data.metadata ?? {}
    });
  }
  /** Equality by DID. */
  equals(other) {
    return this.did === other.did;
  }
};

// packages/keyring/src/identity/roles.ts
var import_crypto2 = require("crypto");
var Role = /* @__PURE__ */ ((Role3) => {
  Role3["Admin"] = "admin";
  Role3["Agent"] = "agent";
  Role3["Operator"] = "operator";
  Role3["Auditor"] = "auditor";
  Role3["Guest"] = "guest";
  return Role3;
})(Role || {});
var ALL_ROLES = [
  "admin" /* Admin */,
  "agent" /* Agent */,
  "operator" /* Operator */,
  "auditor" /* Auditor */,
  "guest" /* Guest */
];
function parseRole(value) {
  const r = ALL_ROLES.find((role) => role === value);
  if (!r) {
    throw new KeyringError(
      `parseRole: '${value}' is not a valid Role`,
      "ROLE_PARSE_ERROR"
    );
  }
  return r;
}
var STORAGE_PREFIX = "manya:keyring:roles";
var RoleManager = class {
  constructor(storage) {
    this.storage = storage;
  }
  storage;
  inMemory = /* @__PURE__ */ new Map();
  loaded = /* @__PURE__ */ new Set();
  /**
   * Assign a role to an identity. Idempotent.
   */
  async assignRole(identityId, role) {
    this.assertIdentityId(identityId);
    const set = await this.load(identityId);
    set.add(role);
    await this.persist(identityId, set);
  }
  /**
   * Revoke a role from an identity. Idempotent.
   */
  async revokeRole(identityId, role) {
    this.assertIdentityId(identityId);
    const set = await this.load(identityId);
    set.delete(role);
    await this.persist(identityId, set);
  }
  /**
   * Revoke all roles for an identity.
   */
  async revokeAll(identityId) {
    this.assertIdentityId(identityId);
    const set = /* @__PURE__ */ new Set();
    this.inMemory.set(identityId, set);
    this.loaded.add(identityId);
    if (this.storage) {
      await this.storage.delete(`${STORAGE_PREFIX}:${identityId}`);
    }
  }
  /**
   * Return `true` iff the identity has the given role.
   */
  async hasRole(identityId, role) {
    this.assertIdentityId(identityId);
    const set = await this.load(identityId);
    return set.has(role);
  }
  /**
   * Return `true` iff the identity has *any* of the given roles.
   */
  async hasAnyRole(identityId, roles) {
    this.assertIdentityId(identityId);
    const set = await this.load(identityId);
    return roles.some((r) => set.has(r));
  }
  /**
   * Return all roles assigned to an identity (a fresh array each call).
   */
  async getRoles(identityId) {
    this.assertIdentityId(identityId);
    const set = await this.load(identityId);
    return Array.from(set);
  }
  /**
   * List all identity ids known to this manager (storage-backed only; for
   * in-memory mode, returns ids that have been touched).
   */
  async listIdentities() {
    if (this.storage) {
      const keys = await this.storage.list(`${STORAGE_PREFIX}:`);
      return keys.map((k) => k.slice(`${STORAGE_PREFIX}:`.length));
    }
    return Array.from(this.inMemory.keys());
  }
  // ----- internals -----
  assertIdentityId(id) {
    if (typeof id !== "string" || id.length === 0) {
      throw new KeyringError("identityId must be a non-empty string", "ROLE_ERROR");
    }
  }
  async load(identityId) {
    if (this.inMemory.has(identityId) && this.loaded.has(identityId)) {
      return this.inMemory.get(identityId);
    }
    let set = /* @__PURE__ */ new Set();
    if (this.storage) {
      const raw = await this.storage.get(`${STORAGE_PREFIX}:${identityId}`);
      if (raw && raw.length > 0) {
        try {
          const parsed = JSON.parse(raw.toString("utf8"));
          if (Array.isArray(parsed)) {
            set = new Set(parsed.map((r) => {
              if (typeof r !== "string") {
                throw new KeyringError("role entry must be string", "ROLE_PARSE_ERROR");
              }
              return parseRole(r);
            }));
          }
        } catch (err) {
          if (err instanceof KeyringError) throw err;
          throw new KeyringError(
            "RoleManager.load: corrupt role data",
            "ROLE_PARSE_ERROR",
            err
          );
        }
      }
    }
    this.inMemory.set(identityId, set);
    this.loaded.add(identityId);
    return set;
  }
  async persist(identityId, set) {
    if (this.storage) {
      const json = JSON.stringify(Array.from(set));
      await this.storage.put(
        `${STORAGE_PREFIX}:${identityId}`,
        Buffer.from(json, "utf8")
      );
    }
  }
};
function newRoleAssignmentId() {
  return "role-" + (0, import_crypto2.randomUUID)();
}

// packages/keyring/src/access/policy.ts
function matchResource(pattern, value) {
  if (pattern === value) return true;
  if (pattern.endsWith(":*")) {
    const prefix = pattern.slice(0, -1);
    return value.startsWith(prefix);
  }
  if (pattern === "*") return true;
  return false;
}
var AccessPolicySet = class {
  policies = /* @__PURE__ */ new Map();
  /**
   * Add or replace a policy. Two policies are considered the same rule if
   * their `resource` + `action` match.
   */
  add(policy) {
    this.assertValid(policy);
    const key = this.key(policy.resource, policy.action);
    this.policies.set(key, { ...policy });
  }
  /** Remove a policy by resource + action. Returns true if removed. */
  remove(resource, action) {
    const key = this.key(resource, action);
    return this.policies.delete(key);
  }
  /** Return all policies (fresh array). */
  list() {
    return Array.from(this.policies.values());
  }
  /** Exact-match lookup. */
  get(resource, action) {
    return this.policies.get(this.key(resource, action));
  }
  /**
   * Return the first policy whose `resource` matches `resource` (via
   * {@link matchResource}) and whose `action` equals `action`.
   *
   * More-specific (exact-match) policies are preferred over wildcard policies.
   */
  match(resource, action) {
    const exact = this.get(resource, action);
    if (exact) return exact;
    let best;
    let bestScore = -1;
    for (const p of this.policies.values()) {
      if (p.action !== action) continue;
      if (!matchResource(p.resource, resource)) continue;
      const score = p.resource === resource ? 1e3 + p.resource.length : p.resource.endsWith(":*") ? p.resource.length : 1;
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    }
    return best;
  }
  /** Replace the entire set with the given policies. */
  replaceAll(policies) {
    this.policies.clear();
    for (const p of policies) this.add(p);
  }
  /** Number of policies. */
  get size() {
    return this.policies.size;
  }
  // ----- internals -----
  key(resource, action) {
    return `${resource}::${action}`;
  }
  assertValid(policy) {
    if (!policy || typeof policy !== "object") {
      throw new KeyringError("AccessPolicy must be an object", "POLICY_ERROR");
    }
    if (typeof policy.resource !== "string" || policy.resource.length === 0) {
      throw new KeyringError("AccessPolicy.resource must be a non-empty string", "POLICY_ERROR");
    }
    if (typeof policy.action !== "string" || policy.action.length === 0) {
      throw new KeyringError("AccessPolicy.action must be a non-empty string", "POLICY_ERROR");
    }
    if (!Array.isArray(policy.allow) || policy.allow.length === 0) {
      throw new KeyringError("AccessPolicy.allow must be a non-empty Role[]", "POLICY_ERROR");
    }
  }
};
function defaultPolicySet() {
  const set = new AccessPolicySet();
  set.add({
    resource: "wallet:identity",
    action: "create",
    allow: ["admin" /* Admin */, "agent" /* Agent */],
    description: "Create a new identity in the wallet."
  });
  set.add({
    resource: "wallet:identity",
    action: "read",
    allow: ["admin" /* Admin */, "agent" /* Agent */, "operator" /* Operator */, "auditor" /* Auditor */],
    description: "List/read identities."
  });
  set.add({
    resource: "wallet:credential",
    action: "issue",
    allow: ["admin" /* Admin */, "agent" /* Agent */],
    description: "Issue a verifiable credential."
  });
  set.add({
    resource: "wallet:credential",
    action: "verify",
    allow: ["admin" /* Admin */, "agent" /* Agent */, "operator" /* Operator */, "auditor" /* Auditor */, "guest" /* Guest */],
    description: "Verify a credential signature."
  });
  set.add({
    resource: "wallet:credential",
    action: "read",
    allow: ["admin" /* Admin */, "agent" /* Agent */, "operator" /* Operator */, "auditor" /* Auditor */],
    description: "List credentials in the wallet."
  });
  set.add({
    resource: "wallet:credential",
    action: "delete",
    allow: ["admin" /* Admin */],
    description: "Delete a credential."
  });
  set.add({
    resource: "wallet:sign",
    action: "perform",
    allow: ["admin" /* Admin */, "agent" /* Agent */, "operator" /* Operator */],
    description: "Sign arbitrary data with a wallet identity."
  });
  set.add({
    resource: "wallet:export",
    action: "perform",
    allow: ["admin" /* Admin */],
    description: "Export an encrypted wallet blob."
  });
  set.add({
    resource: "wallet:sync",
    action: "perform",
    allow: ["admin" /* Admin */, "agent" /* Agent */],
    description: "Produce or apply a sync bundle."
  });
  set.add({
    resource: "wallet:recovery",
    action: "perform",
    allow: ["admin" /* Admin */],
    description: "Create or restore a backup; split/combine Shamir shares."
  });
  set.add({
    resource: "role:*",
    action: "manage",
    allow: ["admin" /* Admin */],
    description: "Manage role assignments."
  });
  return set;
}

// packages/keyring/src/access/enforcer.ts
var AccessEnforcer = class {
  constructor(roles, policies) {
    this.roles = roles;
    this.policies = policies;
  }
  roles;
  policies;
  /**
   * Render an enforcement decision. Does not throw on denial — use
   * {@link enforceOrThrow} if you want denial to throw.
   */
  async enforce(identityId, resource, action) {
    const roles = await this.roles.getRoles(identityId);
    const policy = this.policies.match(resource, action);
    if (!policy) {
      return {
        allowed: false,
        reason: `no policy matches resource='${resource}' action='${action}'`,
        resource,
        action
      };
    }
    const denied = this.intersect(roles, policy.deny ?? []);
    if (denied.length > 0) {
      return {
        allowed: false,
        reason: `role(s) ${denied.join(", ")} denied by policy`,
        resource: policy.resource,
        action: policy.action
      };
    }
    const allowed = this.intersect(roles, policy.allow);
    if (allowed.length === 0) {
      return {
        allowed: false,
        reason: `none of the caller's roles [${roles.join(", ")}] are permitted by policy`,
        resource: policy.resource,
        action: policy.action
      };
    }
    return {
      allowed: true,
      reason: `permitted by role(s) ${allowed.join(", ")}`,
      resource: policy.resource,
      action: policy.action
    };
  }
  /**
   * Like {@link enforce} but throws {@link AccessDeniedError} on denial.
   */
  async enforceOrThrow(identityId, resource, action) {
    const result = await this.enforce(identityId, resource, action);
    if (!result.allowed) {
      throw new AccessDeniedError(result.reason);
    }
    return result;
  }
  /** Inspect which policy would match without enforcing. */
  inspect(resource, action) {
    return this.policies.match(resource, action);
  }
  intersect(a, b) {
    const set = new Set(b);
    return a.filter((r) => set.has(r));
  }
};

// packages/keyring/src/wallet/wallet.ts
var crypto8 = __toESM(require("crypto"));

// packages/keyring/src/wallet/storage.ts
var fs = __toESM(require("fs/promises"));
var path = __toESM(require("path"));
var crypto6 = __toESM(require("crypto"));
var InMemoryStorage = class {
  map = /* @__PURE__ */ new Map();
  /** @inheritdoc */
  async get(key) {
    const v = this.map.get(key);
    return v ? Buffer.from(v) : null;
  }
  /** @inheritdoc */
  async put(key, value) {
    if (!Buffer.isBuffer(value)) {
      throw new StorageError("InMemoryStorage.put: value must be a Buffer");
    }
    this.map.set(key, Buffer.from(value));
  }
  /** @inheritdoc */
  async delete(key) {
    this.map.delete(key);
  }
  /** @inheritdoc */
  async list(prefix) {
    const keys = Array.from(this.map.keys());
    if (!prefix) return keys.sort();
    return keys.filter((k) => k.startsWith(prefix)).sort();
  }
  /** Number of stored entries. */
  get size() {
    return this.map.size;
  }
  /** Remove all entries. */
  clear() {
    this.map.clear();
  }
};
function assertValidKey(key) {
  if (typeof key !== "string" || key.length === 0) {
    throw new StorageError("storage key must be a non-empty string");
  }
  if (key.length > 1024) {
    throw new StorageError("storage key too long (>1024 chars)");
  }
  if (!/^[A-Za-z0-9:_\-.]+$/.test(key)) {
    throw new StorageError(
      `storage key contains forbidden characters: '${key}'`
    );
  }
  if (key.includes("..")) {
    throw new StorageError("storage key must not contain path-traversal sequences");
  }
}
var FileStorage = class {
  constructor(dirPath) {
    this.dirPath = dirPath;
    if (typeof dirPath !== "string" || dirPath.length === 0) {
      throw new StorageError("FileStorage: dirPath must be a non-empty string");
    }
  }
  dirPath;
  /** Ensure the storage directory exists. Call once at startup. */
  async ensureInitialized() {
    try {
      await fs.mkdir(this.dirPath, { recursive: true });
    } catch (err) {
      throw new StorageError(
        `FileStorage.init: mkdir failed: ${err.message}`,
        err
      );
    }
  }
  /** @inheritdoc */
  async get(key) {
    assertValidKey(key);
    const filePath = this.pathFor(key);
    try {
      return await fs.readFile(filePath);
    } catch (err) {
      const e = err;
      if (e && e.code === "ENOENT") return null;
      throw new StorageError(
        `FileStorage.get('${key}') failed: ${err.message}`,
        err
      );
    }
  }
  /** @inheritdoc */
  async put(key, value) {
    assertValidKey(key);
    if (!Buffer.isBuffer(value)) {
      throw new StorageError("FileStorage.put: value must be a Buffer");
    }
    const filePath = this.pathFor(key);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    const tmpPath = filePath + ".tmp." + crypto6.randomBytes(6).toString("hex");
    const fd = await fs.open(tmpPath, "w");
    try {
      await fd.writeFile(value);
      try {
        await fd.sync();
      } catch {
      }
    } finally {
      await fd.close();
    }
    try {
      await fs.rename(tmpPath, filePath);
    } catch (err) {
      try {
        await fs.unlink(tmpPath);
      } catch {
      }
      throw new StorageError(
        `FileStorage.put('${key}'): rename failed: ${err.message}`,
        err
      );
    }
  }
  /** @inheritdoc */
  async delete(key) {
    assertValidKey(key);
    const filePath = this.pathFor(key);
    try {
      await fs.unlink(filePath);
    } catch (err) {
      const e = err;
      if (e && e.code === "ENOENT") return;
      throw new StorageError(
        `FileStorage.delete('${key}') failed: ${err.message}`,
        err
      );
    }
  }
  /** @inheritdoc */
  async list(prefix) {
    const results = [];
    const stack = [this.dirPath];
    while (stack.length > 0) {
      const dir = stack.pop();
      let entries;
      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
      } catch (err) {
        const e = err;
        if (e && e.code === "ENOENT") continue;
        throw new StorageError(
          `FileStorage.list: readdir failed: ${err.message}`,
          err
        );
      }
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          stack.push(full);
        } else if (entry.isFile() && !entry.name.endsWith(".tmp")) {
          const rel = path.relative(this.dirPath, full);
          const key = rel.split(path.sep).join(":");
          if (!prefix || key.startsWith(prefix)) {
            results.push(key);
          }
        }
      }
    }
    return results.sort();
  }
  /** Convert a logical key to a filesystem path. */
  pathFor(key) {
    const parts = key.split(":").join("/").split("/");
    return path.join(this.dirPath, ...parts);
  }
};

// packages/keyring/src/wallet/credentials.ts
var import_crypto3 = require("crypto");
function canonicalCredentialBytes(credential) {
  const clone = {
    id: credential.id,
    issuer: credential.issuer,
    subject: credential.subject,
    claims: credential.claims,
    issuedAt: credential.issuedAt,
    ...credential.expiresAt !== void 0 ? { expiresAt: credential.expiresAt } : {}
  };
  return Buffer.from(JSON.stringify(stableSort(clone)), "utf8");
}
function stableSort(value) {
  if (Array.isArray(value)) {
    return value.map((v) => stableSort(v));
  }
  if (value && typeof value === "object" && !Buffer.isBuffer(value)) {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      out[key] = stableSort(value[key]);
    }
    return out;
  }
  return value;
}
function issueCredential(params) {
  if (!params || typeof params !== "object") {
    throw new CredentialError("issueCredential: params required");
  }
  if (typeof params.issuer !== "string" || params.issuer.length === 0) {
    throw new CredentialError("issueCredential: issuer DID required");
  }
  if (typeof params.subject !== "string" || params.subject.length === 0) {
    throw new CredentialError("issueCredential: subject DID required");
  }
  if (!params.claims || typeof params.claims !== "object") {
    throw new CredentialError("issueCredential: claims object required");
  }
  if (params.algorithm !== "rsa-pss" && params.algorithm !== "ecdsa-p256") {
    throw new CredentialError(
      `issueCredential: unsupported algorithm '${params.algorithm}'`
    );
  }
  const id = params.id ?? "cred-" + (0, import_crypto3.randomUUID)();
  const issuedAt = params.issuedAt ?? (/* @__PURE__ */ new Date()).toISOString();
  const credential = {
    id,
    issuer: params.issuer,
    subject: params.subject,
    claims: params.claims,
    issuedAt,
    ...params.expiresAt !== void 0 ? { expiresAt: params.expiresAt } : {},
    // proof is filled after signing
    proof: {
      type: proofTypeFor(params.algorithm),
      created: issuedAt,
      verificationMethod: params.issuer,
      proofValue: "",
      algorithm: params.algorithm
    }
  };
  const bytes = canonicalCredentialBytes(credential);
  let proofValue;
  try {
    proofValue = sign2(params.issuerPrivateKey, bytes, params.algorithm);
  } catch (err) {
    if (err instanceof CredentialError) throw err;
    throw new CredentialError(
      "issueCredential: signing failed: " + err.message,
      err
    );
  }
  credential.proof.proofValue = proofValue;
  return credential;
}
function verifyCredential(credential, issuerPublicKey) {
  if (!credential || !credential.proof) {
    return false;
  }
  const algo = credential.proof.algorithm;
  if (algo !== "rsa-pss" && algo !== "ecdsa-p256") return false;
  if (!credential.proof.proofValue || credential.proof.proofValue.length === 0) {
    return false;
  }
  const bytes = canonicalCredentialBytes(credential);
  try {
    return verify2(
      issuerPublicKey,
      bytes,
      credential.proof.proofValue,
      algo
    );
  } catch {
    return false;
  }
}
function validateCredential(credential, now = /* @__PURE__ */ new Date()) {
  if (!credential || typeof credential !== "object") return false;
  const required = ["id", "issuer", "subject", "claims", "issuedAt", "proof"];
  for (const field of required) {
    if (!(field in credential)) return false;
  }
  if (typeof credential.id !== "string" || credential.id.length === 0) return false;
  if (typeof credential.issuer !== "string" || credential.issuer.length === 0) return false;
  if (typeof credential.subject !== "string" || credential.subject.length === 0) return false;
  if (!credential.claims || typeof credential.claims !== "object") return false;
  if (typeof credential.issuedAt !== "string") return false;
  const issued = Date.parse(credential.issuedAt);
  if (Number.isNaN(issued)) return false;
  if (credential.expiresAt !== void 0) {
    const expires = Date.parse(credential.expiresAt);
    if (Number.isNaN(expires)) return false;
    const nowMs = typeof now === "string" ? Date.parse(now) : now.getTime();
    if (expires < nowMs) return false;
  }
  return true;
}

// packages/keyring/src/hardware/software-fallback.ts
var crypto7 = __toESM(require("crypto"));
var import_crypto4 = require("crypto");
var SoftwareKeyProvider = class {
  keys = /* @__PURE__ */ new Map();
  /** @inheritdoc */
  isAvailable() {
    return true;
  }
  /** @inheritdoc */
  async generateKeyPair(algo, keyIdHint) {
    const { publicKey, privateKey, algorithm } = generateKeyPair(algo);
    const keyId = keyIdHint ?? "sw-" + (0, import_crypto4.randomUUID)();
    if (this.keys.has(keyId)) {
      throw new KeyGenerationError(
        `SoftwareKeyProvider.generateKeyPair: keyId '${keyId}' already exists`
      );
    }
    this.keys.set(keyId, { publicKey, privateKey, algorithm });
    return {
      keyId,
      publicKeyPem: exportKeyPem(publicKey, "public"),
      algorithm
    };
  }
  /** @inheritdoc */
  async sign(keyId, data) {
    const entry = this.keys.get(keyId);
    if (!entry) {
      throw new HardwareKeyError(`SoftwareKeyProvider.sign: unknown keyId '${keyId}'`);
    }
    const hex = sign2(entry.privateKey, data, entry.algorithm);
    return Buffer.from(hex, "hex");
  }
  /** @inheritdoc */
  async verify(keyId, data, signature) {
    const entry = this.keys.get(keyId);
    if (!entry) {
      throw new HardwareKeyError(`SoftwareKeyProvider.verify: unknown keyId '${keyId}'`);
    }
    return verify2(entry.publicKey, data, signature, entry.algorithm);
  }
  /** @inheritdoc */
  async deleteKey(keyId) {
    this.keys.delete(keyId);
  }
  /** @inheritdoc */
  async hasKey(keyId) {
    return this.keys.has(keyId);
  }
  // ----- software-specific helpers (used internally by the wallet) -----
  /**
   * Replace the private key stored under `keyId` with the given key. Also
   * derives the matching public key from the new private key so that
   * subsequent `verify` calls use the correct public key. Used by the wallet
   * to register an externally-generated keypair with the provider.
   * @internal
   */
  replaceKey(keyId, privateKey) {
    const entry = this.keys.get(keyId);
    if (!entry) {
      throw new HardwareKeyError(`SoftwareKeyProvider.replaceKey: unknown keyId '${keyId}'`);
    }
    const publicKey = crypto7.createPublicKey(privateKey);
    this.keys.set(keyId, { ...entry, privateKey, publicKey });
  }
  /**
   * Get the underlying private KeyObject for `keyId`. Only available on the
   * software provider — hardware providers never expose this.
   * @internal
   */
  getPrivateKey(keyId) {
    return this.keys.get(keyId)?.privateKey;
  }
  /**
   * Get the underlying public KeyObject for `keyId`.
   * @internal
   */
  getPublicKey(keyId) {
    return this.keys.get(keyId)?.publicKey;
  }
  /**
   * Get the algorithm for `keyId`.
   * @internal
   */
  getAlgorithm(keyId) {
    return this.keys.get(keyId)?.algorithm;
  }
  /** Number of keys currently held. */
  get size() {
    return this.keys.size;
  }
  /** Wipe all keys from memory. */
  clear() {
    this.keys.clear();
  }
  /**
   * Directly import an existing keypair under a chosen keyId. Returns the
   * keyId.
   */
  importExistingKey(publicKey, privateKey, algorithm, keyIdHint) {
    const keyId = keyIdHint ?? "sw-" + (0, import_crypto4.randomUUID)();
    if (this.keys.has(keyId)) {
      throw new KeyGenerationError(
        `SoftwareKeyProvider.importExistingKey: keyId '${keyId}' already exists`
      );
    }
    this.keys.set(keyId, { publicKey, privateKey, algorithm });
    return keyId;
  }
};

// packages/keyring/src/wallet/wallet.ts
var WALLET_PBKDF2_ITERATIONS = 21e4;
var WALLET_SALT_BYTES = 16;
var WALLET_MASTER_KEY_BYTES = 32;
var WALLET_SCHEMA_VERSION = 1;
var WALLET_AAD = Buffer.from("manya-keyring-wallet-v1", "utf8");
var KeyringWallet = class {
  storage;
  hardwareProvider;
  logger;
  identities = /* @__PURE__ */ new Map();
  credentials = /* @__PURE__ */ new Map();
  primaryIdentityId = null;
  sequence = 0;
  roles;
  policies;
  access;
  constructor(opts = {}) {
    this.storage = opts.storage ?? new InMemoryStorage();
    this.hardwareProvider = opts.hardwareProvider ?? new SoftwareKeyProvider();
    this.logger = opts.logger ?? new SilentLogger();
    this.roles = new RoleManager(this.storage);
    this.policies = defaultPolicySet();
    this.access = new AccessEnforcer(this.roles, this.policies);
  }
  // ----- identity management -----
  /**
   * Create a new identity and register it as the primary identity if no
   * other primary exists.
   *
   * @param algo - `'rsa'` (RSA-PSS 3072) or `'ecdsa'` (P-256).
   * @param metadata - Optional public metadata.
   * @returns The new Identity (public form).
   */
  async createIdentity(algo = "ecdsa", metadata = {}) {
    const { publicKey, privateKey, algorithm } = generateKeyPair(algo);
    const publicKeyPem = exportKeyPem(publicKey, "public");
    const identity = Identity.fromPublicKey(publicKeyPem, algorithm, metadata);
    let keyId;
    try {
      const registered = await this.hardwareProvider.generateKeyPair(algo);
      keyId = registered.keyId;
      if (this.hardwareProvider instanceof SoftwareKeyProvider) {
        this.hardwareProvider.replaceKey(keyId, privateKey);
      }
    } catch (err) {
      throw new KeyGenerationError(
        "createIdentity: hardware provider rejected key: " + err.message,
        err
      );
    }
    const record = {
      identity,
      keyId,
      algorithm
    };
    this.identities.set(identity.id, record);
    if (this.primaryIdentityId === null) {
      this.primaryIdentityId = identity.id;
    }
    this.logger.info("keyring:identity:created", {
      identityId: identity.id,
      did: identity.did,
      algorithm
    });
    return identity;
  }
  /**
   * Import an existing public identity + private key into the wallet.
   */
  async importIdentity(publicKeyPem, privateKey, algorithm, metadata = {}) {
    const identity = Identity.fromPublicKey(publicKeyPem, algorithm, metadata);
    const registered = await this.hardwareProvider.generateKeyPair(
      algorithm === "rsa-pss" ? "rsa" : "ecdsa"
    );
    if (this.hardwareProvider instanceof SoftwareKeyProvider) {
      this.hardwareProvider.replaceKey(registered.keyId, privateKey);
    }
    this.identities.set(identity.id, {
      identity,
      keyId: registered.keyId,
      algorithm
    });
    if (this.primaryIdentityId === null) {
      this.primaryIdentityId = identity.id;
    }
    return identity;
  }
  /**
   * Return all identities (public form).
   */
  listIdentities() {
    return Array.from(this.identities.values()).map((r) => r.identity);
  }
  /**
   * Look up an identity by id.
   */
  getIdentity(identityId) {
    return this.identities.get(identityId)?.identity;
  }
  /**
   * Return the primary identity (the one used by `sign` when no identityId is
   * supplied), or `undefined` if none exists.
   */
  getPrimaryIdentity() {
    if (this.primaryIdentityId === null) return void 0;
    return this.identities.get(this.primaryIdentityId)?.identity;
  }
  /**
   * Set the primary identity.
   */
  setPrimaryIdentity(identityId) {
    if (!this.identities.has(identityId)) {
      throw new KeyringError(
        `setPrimaryIdentity: unknown identity '${identityId}'`,
        "IDENTITY_NOT_FOUND_ERROR"
      );
    }
    this.primaryIdentityId = identityId;
  }
  // ----- credential management -----
  /**
   * Issue a credential signed by the wallet's primary identity (or the
   * identity named by `issuerIdentityId`).
   *
   * The credential is stored in the wallet after issuance.
   */
  async issueCredential(subjectDid, claims, opts = {}) {
    const record = this.resolveIdentity(opts.issuerIdentityId);
    const privateKey = this.extractPrivateKeyForSigning(record);
    const credential = issueCredential({
      issuer: record.identity.did,
      issuerPrivateKey: privateKey,
      algorithm: record.algorithm,
      subject: subjectDid,
      claims,
      ...opts.id !== void 0 ? { id: opts.id } : {},
      ...opts.expiresAt !== void 0 ? { expiresAt: opts.expiresAt } : {}
    });
    this.credentials.set(credential.id, credential);
    this.logger.info("keyring:credential:issued", {
      credentialId: credential.id,
      issuer: record.identity.did,
      subject: subjectDid
    });
    return credential;
  }
  /**
   * Add an externally-issued credential to the wallet.
   */
  async addCredential(credential) {
    if (!credential || !credential.id) {
      throw new CredentialError("addCredential: credential.id required");
    }
    this.credentials.set(credential.id, credential);
    this.logger.debug("keyring:credential:added", {
      credentialId: credential.id
    });
  }
  /**
   * List all credentials in the wallet.
   */
  listCredentials() {
    return Array.from(this.credentials.values());
  }
  /**
   * Fetch a credential by id.
   */
  getCredential(id) {
    return this.credentials.get(id);
  }
  /**
   * Remove a credential by id. Returns `true` if a credential was removed.
   */
  deleteCredential(id) {
    return this.credentials.delete(id);
  }
  // ----- signing / verification -----
  /**
   * Sign `data` with the primary identity's private key (or the identity
   * named by `identityId`).
   *
   * @returns Hex-encoded signature.
   */
  async sign(data, identityId) {
    const record = this.resolveIdentity(identityId);
    const privateKey = this.extractPrivateKeyForSigning(record);
    const signature = sign2(privateKey, data, record.algorithm);
    return { algorithm: record.algorithm, signature };
  }
  /**
   * Convenience wrapper that delegates signing to the hardware provider
   * without ever surfacing the private key. Returns a hex-encoded signature.
   */
  async signViaProvider(data, identityId) {
    const record = this.resolveIdentity(identityId);
    const sigBuf = await this.hardwareProvider.sign(record.keyId, data);
    return { algorithm: record.algorithm, signature: sigBuf.toString("hex") };
  }
  /**
   * Verify a signature. `publicKey` may be omitted, in which case the wallet
   * looks up an identity by `identityId` and uses its public key.
   */
  async verify(data, signature, opts = {}) {
    let publicKey;
    let algorithm;
    if (opts.publicKey && opts.algorithm) {
      publicKey = opts.publicKey;
      algorithm = opts.algorithm;
    } else if (opts.identityId) {
      const record = this.identities.get(opts.identityId);
      if (!record) {
        throw new VerificationError(`unknown identity: ${opts.identityId}`);
      }
      publicKey = record.identity.publicKey;
      algorithm = record.algorithm;
    } else {
      const primary = this.getPrimaryIdentity();
      if (!primary) {
        throw new VerificationError("no identity to verify against");
      }
      publicKey = primary.publicKey;
      algorithm = primary.algorithm;
    }
    return verify2(publicKey, data, signature, algorithm);
  }
  /**
   * Verify a credential stored in or supplied to the wallet against the
   * public key of the named issuer identity. If `issuerIdentityId` is
   * omitted, looks up an identity whose DID matches `credential.issuer`.
   */
  async verifyCredential(credential, issuerIdentityId) {
    let publicKey;
    if (issuerIdentityId) {
      const record = this.identities.get(issuerIdentityId);
      if (!record) {
        throw new VerificationError(`unknown identity: ${issuerIdentityId}`);
      }
      publicKey = record.identity.publicKey;
    } else {
      const issuer = this.listIdentities().find(
        (i) => i.did === credential.issuer
      );
      if (!issuer) {
        return false;
      }
      publicKey = issuer.publicKey;
    }
    return verifyCredential(credential, publicKey);
  }
  // ----- encrypted export / import -----
  /**
   * Export an encrypted wallet blob containing identities, credentials, and
   * the encrypted private keys.
   *
   * The master key is derived from `passphrase` via PBKDF2 (210k iterations,
   * SHA-512). The private keys are individually encrypted with the master
   * key via AES-256-GCM, then the entire state blob is encrypted again.
   *
   * @returns Encrypted wallet blob (JSON-serializable).
   */
  async exportEncrypted(passphrase) {
    if (typeof passphrase !== "string" || passphrase.length === 0) {
      throw new EncryptionError("exportEncrypted: passphrase required");
    }
    const salt = crypto8.randomBytes(WALLET_SALT_BYTES);
    const masterKey = pbkdf2(
      passphrase,
      salt,
      WALLET_PBKDF2_ITERATIONS,
      WALLET_MASTER_KEY_BYTES
    );
    const identityRecords = [];
    for (const record of this.identities.values()) {
      const privateKey = this.extractPrivateKeyForSigning(record);
      const privateKeyPem = privateKey.export({
        type: "pkcs8",
        format: "pem"
      });
      const plain = Buffer.from(privateKeyPem, "utf8");
      const { iv, ciphertext, tag } = encrypt(masterKey, plain, WALLET_AAD);
      identityRecords.push({
        identity: record.identity.serialize(),
        keyId: record.keyId,
        algorithm: record.algorithm,
        encryptedPrivateKey: {
          iv: iv.toString("base64"),
          ciphertext: ciphertext.toString("base64"),
          tag: tag.toString("base64")
        }
      });
    }
    const state = {
      schemaVersion: WALLET_SCHEMA_VERSION,
      primaryIdentityId: this.primaryIdentityId,
      identities: identityRecords,
      credentials: this.listCredentials(),
      sequence: this.sequence
    };
    const stateBytes = Buffer.from(JSON.stringify(state), "utf8");
    const outer = encrypt(masterKey, stateBytes, WALLET_AAD);
    const blob = {
      kind: "manya-keyring-wallet",
      version: WALLET_SCHEMA_VERSION,
      salt: salt.toString("base64"),
      iv: outer.iv.toString("base64"),
      ciphertext: outer.ciphertext.toString("base64"),
      tag: outer.tag.toString("base64"),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      iterations: WALLET_PBKDF2_ITERATIONS
    };
    this.logger.info("keyring:wallet:exported", {
      identities: identityRecords.length,
      credentials: state.credentials.length
    });
    return blob;
  }
  /**
   * Import an encrypted wallet blob produced by {@link exportEncrypted}.
   *
   * Replaces the wallet's current state.
   */
  async importEncrypted(blob, passphrase) {
    if (!blob || blob.kind !== "manya-keyring-wallet") {
      throw new DecryptionError("importEncrypted: not a manya-keyring-wallet blob");
    }
    if (typeof passphrase !== "string" || passphrase.length === 0) {
      throw new DecryptionError("importEncrypted: passphrase required");
    }
    const salt = Buffer.from(blob.salt, "base64");
    const masterKey = pbkdf2(
      passphrase,
      salt,
      blob.iterations ?? WALLET_PBKDF2_ITERATIONS,
      WALLET_MASTER_KEY_BYTES
    );
    let stateBytes;
    try {
      stateBytes = decrypt(
        masterKey,
        Buffer.from(blob.iv, "base64"),
        Buffer.from(blob.ciphertext, "base64"),
        Buffer.from(blob.tag, "base64"),
        WALLET_AAD
      );
    } catch (err) {
      throw new DecryptionError(
        "importEncrypted: decryption failed (wrong passphrase?): " + err.message,
        err
      );
    }
    let state;
    try {
      state = JSON.parse(stateBytes.toString("utf8"));
    } catch (err) {
      throw new DecryptionError(
        "importEncrypted: corrupt state JSON",
        err
      );
    }
    this.identities.clear();
    this.credentials.clear();
    for (const record of state.identities ?? []) {
      const identity = Identity.deserialize(record.identity);
      if (!record.encryptedPrivateKey) {
        throw new DecryptionError(
          `importEncrypted: identity ${identity.id} missing encryptedPrivateKey`
        );
      }
      const plain = decrypt(
        masterKey,
        Buffer.from(record.encryptedPrivateKey.iv, "base64"),
        Buffer.from(record.encryptedPrivateKey.ciphertext, "base64"),
        Buffer.from(record.encryptedPrivateKey.tag, "base64"),
        WALLET_AAD
      );
      const privateKey = crypto8.createPrivateKey(plain.toString("utf8"));
      const registered = await this.hardwareProvider.generateKeyPair(
        record.algorithm === "rsa-pss" ? "rsa" : "ecdsa"
      );
      if (this.hardwareProvider instanceof SoftwareKeyProvider) {
        this.hardwareProvider.replaceKey(
          registered.keyId,
          privateKey
        );
      }
      this.identities.set(identity.id, {
        identity,
        keyId: registered.keyId,
        algorithm: record.algorithm
      });
    }
    for (const cred of state.credentials ?? []) {
      this.credentials.set(cred.id, cred);
    }
    this.primaryIdentityId = state.primaryIdentityId;
    this.sequence = state.sequence ?? 0;
    this.logger.info("keyring:wallet:imported", {
      identities: this.identities.size,
      credentials: this.credentials.size
    });
  }
  // ----- role helpers (convenience) -----
  /**
   * Convenience: assign a role to an identity and return it.
   */
  async assignRole(identityId, role) {
    await this.roles.assignRole(identityId, role);
  }
  /**
   * Convenience: revoke a role.
   */
  async revokeRole(identityId, role) {
    await this.roles.revokeRole(identityId, role);
  }
  // ----- sequence counter (for sync) -----
  /** Current sequence number. */
  getSequence() {
    return this.sequence;
  }
  /** Bump the sequence counter. Returns the new value. */
  bumpSequence() {
    this.sequence += 1;
    return this.sequence;
  }
  // ----- internals -----
  /**
   * Resolve `identityId` (or fall back to the primary identity). Throws if
   * no identity is available.
   */
  resolveIdentity(identityId) {
    const id = identityId ?? this.primaryIdentityId ?? void 0;
    if (!id) {
      throw new KeyringError(
        "no identity available \u2014 call createIdentity first",
        "IDENTITY_NOT_FOUND_ERROR"
      );
    }
    const record = this.identities.get(id);
    if (!record) {
      throw new KeyringError(
        `unknown identity: ${id}`,
        "IDENTITY_NOT_FOUND_ERROR"
      );
    }
    return record;
  }
  /**
   * For the software provider, retrieve the underlying private KeyObject.
   * For hardware providers, this throws — callers should use
   * {@link signViaProvider} instead.
   */
  extractPrivateKeyForSigning(record) {
    if (this.hardwareProvider instanceof SoftwareKeyProvider) {
      const key = this.hardwareProvider.getPrivateKey(
        record.keyId
      );
      if (!key) {
        throw new SignatureError(
          `extractPrivateKeyForSigning: no private key for keyId ${record.keyId}`
        );
      }
      return key;
    }
    throw new SignatureError(
      "hardware-backed provider does not expose private keys \u2014 use signViaProvider"
    );
  }
};

// packages/keyring/src/recovery/recovery.ts
var crypto9 = __toESM(require("crypto"));
var GF_EXP = new Uint8Array(512);
var GF_LOG = new Uint8Array(256);
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    const doubled = x << 1 ^ (x & 128 ? 283 : 0);
    x = (doubled ^ x) & 255;
  }
  for (let i = 255; i < 512; i++) {
    GF_EXP[i] = GF_EXP[i - 255];
  }
  GF_LOG[0] = 0;
})();
function gfMul(a, b) {
  if (a === 0 || b === 0) return 0;
  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}
function gfDiv(a, b) {
  if (b === 0) {
    throw new RecoveryError("GF(256) division by zero");
  }
  if (a === 0) return 0;
  return GF_EXP[(GF_LOG[a] - GF_LOG[b] + 255) % 255];
}
function gfEval(coeffs, x) {
  let result = 0;
  for (let i = coeffs.length - 1; i >= 0; i--) {
    result = gfMul(result, x) ^ coeffs[i];
  }
  return result;
}
function assertSplitParams(k, n) {
  if (!Number.isInteger(k) || !Number.isInteger(n)) {
    throw new RecoveryError("k and n must be integers");
  }
  if (k < 2) {
    throw new RecoveryError(`k must be >= 2 (got ${k})`);
  }
  if (n < k) {
    throw new RecoveryError(`n must be >= k (got n=${n}, k=${k})`);
  }
  if (n > 255) {
    throw new RecoveryError(`n must be <= 255 (got ${n})`);
  }
}
function shamirSplit(secret, k, n) {
  if (!Buffer.isBuffer(secret)) {
    throw new RecoveryError("secret must be a Buffer");
  }
  if (secret.length === 0) {
    throw new RecoveryError("secret must be non-empty");
  }
  assertSplitParams(k, n);
  const polys = [];
  for (let pos = 0; pos < secret.length; pos++) {
    const coeffs = new Uint8Array(k);
    coeffs[0] = secret[pos];
    const rand = crypto9.randomBytes(k - 1);
    for (let j = 1; j < k; j++) {
      coeffs[j] = rand[j - 1];
    }
    polys.push(coeffs);
  }
  const shares = [];
  for (let i = 0; i < n; i++) {
    const x = i + 1;
    const out = Buffer.alloc(1 + secret.length);
    out[0] = x;
    for (let pos = 0; pos < secret.length; pos++) {
      out[1 + pos] = gfEval(polys[pos], x);
    }
    shares.push(out);
  }
  return shares;
}
function shamirCombine(shares) {
  if (!Array.isArray(shares) || shares.length < 2) {
    throw new RecoveryError("need at least 2 shares to combine");
  }
  const len = shares[0].length;
  if (len < 2) {
    throw new RecoveryError("share too short (must be >= 2 bytes)");
  }
  const xs = [];
  for (let i = 0; i < shares.length; i++) {
    if (!Buffer.isBuffer(shares[i])) {
      throw new RecoveryError(`share ${i} is not a Buffer`);
    }
    if (shares[i].length !== len) {
      throw new RecoveryError("all shares must have the same length");
    }
    if (shares[i][0] === 0) {
      throw new RecoveryError("share x-coordinate must be non-zero");
    }
    xs.push(shares[i][0]);
  }
  const seen = /* @__PURE__ */ new Set();
  for (const x of xs) {
    if (seen.has(x)) {
      throw new RecoveryError(`duplicate share x-coordinate: ${x}`);
    }
    seen.add(x);
  }
  const secretLen = len - 1;
  const out = Buffer.alloc(secretLen);
  for (let pos = 0; pos < secretLen; pos++) {
    let secret = 0;
    for (let i = 0; i < shares.length; i++) {
      const xi = xs[i];
      const yi = shares[i][1 + pos];
      let num = 1;
      let den = 1;
      for (let j = 0; j < shares.length; j++) {
        if (i === j) continue;
        const xj = xs[j];
        num = gfMul(num, xj);
        den = gfMul(den, xi ^ xj);
      }
      const term = gfMul(yi, gfDiv(num, den));
      secret ^= term;
    }
    out[pos] = secret;
  }
  return out;
}
function verifySharesConsistent(shares, k) {
  if (shares.length < k) return false;
  let reference = null;
  const indices = [];
  for (let i = 0; i < k; i++) indices.push(i);
  const nextSubset = () => {
    let i = k - 1;
    while (i >= 0 && indices[i] === shares.length - k + i) i--;
    if (i < 0) return false;
    indices[i]++;
    for (let j = i + 1; j < k; j++) indices[j] = indices[j - 1] + 1;
    return true;
  };
  do {
    const subset = indices.map((idx) => shares[idx]);
    const recovered = shamirCombine(subset);
    if (reference === null) {
      reference = recovered;
    } else if (!recovered.equals(reference)) {
      return false;
    }
  } while (nextSubset());
  return true;
}

// packages/keyring/src/recovery/backup.ts
var crypto10 = __toESM(require("crypto"));
var import_crypto5 = require("crypto");
var BACKUP_VERSION = 1;
var BACKUP_AAD = Buffer.from("manya-keyring-backup-v1", "utf8");

// packages/keyring/src/sync/multi-device.ts
var SYNC_BUNDLE_VERSION = 1;
function canonicalBundleBytes(bundle) {
  const stable = stableSort2(bundle);
  return Buffer.from(JSON.stringify(stable), "utf8");
}
function stableSort2(value) {
  if (Array.isArray(value)) return value.map((v) => stableSort2(v));
  if (value && typeof value === "object" && !Buffer.isBuffer(value)) {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      out[key] = stableSort2(value[key]);
    }
    return out;
  }
  return value;
}
var MultiDeviceSync = class {
  /**
   * Create a signed sync bundle from the source wallet.
   *
   * @param wallet - Source wallet.
   * @param signerIdentityId - Optional identity to sign with. Defaults to the
   *   wallet's primary identity.
   * @returns Signed sync bundle.
   */
  createSyncBundle(wallet, signerIdentityId) {
    const primary = signerIdentityId ? wallet.getIdentity(signerIdentityId) : wallet.getPrimaryIdentity();
    if (!primary) {
      throw new SyncError("createSyncBundle: wallet has no primary identity");
    }
    const credentials = wallet.listCredentials();
    const sequence = wallet.getSequence() + 1;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const unsigned = {
      version: SYNC_BUNDLE_VERSION,
      sourceDid: primary.did,
      timestamp,
      sequence,
      identity: primary.serialize(),
      credentials
    };
    const bytes = canonicalBundleBytes(unsigned);
    let signatureHex;
    let algorithm;
    const provider = wallet.hardwareProvider;
    const isSoftware = provider && typeof provider.getPrivateKey === "function";
    const record = wallet;
    let resolved;
    try {
      resolved = record.resolveIdentity(signerIdentityId);
    } catch (err) {
      throw new SyncError(
        "createSyncBundle: could not resolve signer identity: " + err.message,
        err
      );
    }
    algorithm = resolved.algorithm;
    if (isSoftware) {
      const sk = provider.getPrivateKey(resolved.keyId);
      if (!sk) {
        throw new SyncError(
          "createSyncBundle: signer private key not available"
        );
      }
      signatureHex = sign2(sk, bytes, algorithm);
    } else {
      throw new SyncError(
        "createSyncBundle: hardware-backed wallets must override createSyncBundle (sync signing requires a private key)"
      );
    }
    return {
      ...unsigned,
      proof: {
        type: "manya:sync-bundle:2024",
        algorithm,
        value: signatureHex
      }
    };
  }
  /**
   * Apply a sync bundle to a target wallet.
   *
   * @param wallet - Target wallet.
   * @param bundle - Incoming bundle.
   * @param sourcePublicKey - Public KeyObject or PEM string of the source
   *   identity. Used to verify the bundle's signature.
   * @returns Result indicating which credentials were applied, conflicted,
   *   or skipped.
   */
  async applySyncBundle(wallet, bundle, sourcePublicKey) {
    if (!bundle || bundle.version !== SYNC_BUNDLE_VERSION) {
      throw new SyncError(
        `applySyncBundle: unsupported bundle version ${bundle?.version}`
      );
    }
    if (!bundle.proof || !bundle.proof.value) {
      throw new SyncError("applySyncBundle: bundle missing proof");
    }
    if (!bundle.identity) {
      throw new SyncError("applySyncBundle: bundle missing identity");
    }
    const { proof, ...unsigned } = bundle;
    void proof;
    const bytes = canonicalBundleBytes(unsigned);
    let ok;
    try {
      ok = verify2(
        sourcePublicKey,
        bytes,
        bundle.proof.value,
        bundle.proof.algorithm
      );
    } catch (err) {
      throw new SyncError(
        "applySyncBundle: signature verification threw: " + err.message,
        err
      );
    }
    if (!ok) {
      throw new VerificationError(
        "applySyncBundle: invalid bundle signature"
      );
    }
    const applied = [];
    const conflicts = [];
    const skipped = [];
    for (const cred of bundle.credentials ?? []) {
      if (!cred || !cred.id) {
        conflicts.push("<missing-id>");
        continue;
      }
      const local = wallet.getCredential(cred.id);
      if (local) {
        if (constantTimeEqual(
          Buffer.from(local.proof.proofValue, "hex"),
          Buffer.from(cred.proof.proofValue, "hex")
        )) {
          skipped.push(cred.id);
        } else {
          conflicts.push(cred.id);
        }
      } else {
        try {
          await wallet.addCredential(cred);
          applied.push(cred.id);
        } catch (err) {
          throw new CredentialError(
            `applySyncBundle: failed to add credential ${cred.id}: ` + err.message,
            err
          );
        }
      }
    }
    if (bundle.sequence > wallet.getSequence()) {
      for (let i = wallet.getSequence(); i < bundle.sequence; i++) {
        wallet.bumpSequence();
      }
    }
    return { applied, conflicts, skipped };
  }
  /**
   * Validate a bundle's signature without applying it. Returns `true` iff
   * the signature is valid.
   */
  validateBundle(bundle, sourcePublicKey) {
    if (!bundle || !bundle.proof) return false;
    const { proof, ...unsigned } = bundle;
    void proof;
    const bytes = canonicalBundleBytes(unsigned);
    try {
      return verify2(
        sourcePublicKey,
        bytes,
        bundle.proof.value,
        bundle.proof.algorithm
      );
    } catch {
      return false;
    }
  }
};
function buildBundleFromParts(parts, privateKey, algorithm) {
  const unsigned = {
    version: SYNC_BUNDLE_VERSION,
    sourceDid: parts.sourceDid,
    timestamp: parts.timestamp,
    sequence: parts.sequence,
    identity: parts.identity,
    credentials: parts.credentials
  };
  const bytes = canonicalBundleBytes(unsigned);
  const signatureHex = sign2(privateKey, bytes, algorithm);
  return {
    ...unsigned,
    proof: {
      type: "manya:sync-bundle:2024",
      algorithm,
      value: signatureHex
    }
  };
}

// packages/attest/src/errors.ts
var AttestError = class extends Error {
  /** Stable machine-readable code, e.g. `FINGERPRINT_ERROR`. */
  code;
  /** Optional underlying cause. */
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) {
      this.cause = cause;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var FingerprintError = class extends AttestError {
  constructor(message, cause) {
    super(message, "FINGERPRINT_ERROR", cause);
  }
};
var ChallengeError = class extends AttestError {
  constructor(message, cause) {
    super(message, "CHALLENGE_ERROR", cause);
  }
};
var SessionError = class extends AttestError {
  constructor(message, cause) {
    super(message, "SESSION_ERROR", cause);
  }
};
var HardwareValidationError = class extends AttestError {
  constructor(message, cause) {
    super(message, "HARDWARE_VALIDATION_ERROR", cause);
  }
};
var AttestationError = class extends AttestError {
  constructor(message, cause) {
    super(message, "ATTESTATION_ERROR", cause);
  }
};
var WorkflowError = class extends AttestError {
  constructor(message, cause) {
    super(message, "WORKFLOW_ERROR", cause);
  }
};
var TrustEvaluationError = class extends AttestError {
  constructor(message, cause) {
    super(message, "TRUST_EVALUATION_ERROR", cause);
  }
};
var NonceError = class extends AttestError {
  constructor(message, cause) {
    super(message, "NONCE_ERROR", cause);
  }
};

// packages/attest/src/logging.ts
var SCRUBBED_FIELD_NAMES2 = [
  "privateKey",
  "password",
  "passphrase",
  "token",
  "secret",
  "credential",
  "iv",
  "tag",
  "share",
  "nonce",
  "signature",
  "macs",
  "machineId"
];
var SCRUB_REGEX2 = new RegExp(
  "(?:" + SCRUBBED_FIELD_NAMES2.map((n) => n.toLowerCase()).join("|") + ")$",
  "i"
);
var SilentLogger2 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/attest/src/crypto/hashing.ts
var crypto11 = __toESM(require("crypto"));
function sha2562(data) {
  try {
    const buf = typeof data === "string" ? Buffer.from(data, "utf8") : data;
    return crypto11.createHash("sha256").update(buf).digest();
  } catch (err) {
    throw new AttestError("sha256 failed: " + err.message, "HASH_ERROR", err);
  }
}
function secureRandom(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new AttestError("secureRandom: length must be a positive integer", "RANDOM_ERROR");
  }
  if (n > 1024 * 1024) {
    throw new AttestError(
      "secureRandom: refusing to allocate > 1 MiB in a single call",
      "RANDOM_ERROR"
    );
  }
  try {
    return crypto11.randomBytes(n);
  } catch (err) {
    throw new AttestError("secureRandom failed: " + err.message, "RANDOM_ERROR", err);
  }
}
function constantTimeEqual2(a, b) {
  if (a.length !== b.length) return false;
  return crypto11.timingSafeEqual(a, b);
}
function uuid() {
  try {
    return crypto11.randomUUID();
  } catch (err) {
    throw new AttestError("uuid failed: " + err.message, "UUID_ERROR", err);
  }
}

// packages/attest/src/crypto/keys.ts
var crypto12 = __toESM(require("crypto"));
var DEFAULT_RSA_MODULUS2 = 3072;
var DEFAULT_RSA_EXPONENT2 = 65537;
var DEFAULT_EC_CURVE2 = "prime256v1";
function algorithmFor2(algo) {
  switch (algo) {
    case "rsa":
      return "rsa-pss";
    case "ecdsa":
      return "ecdsa-p256";
    default:
      throw new AttestError(`unknown key algorithm: ${algo}`);
  }
}
function algorithmForKey(key) {
  let type;
  try {
    type = key.asymmetricKeyType;
  } catch (err) {
    throw new AttestError(
      "algorithmForKey: cannot read key type: " + err.message,
      "KEY_TYPE_ERROR",
      err
    );
  }
  if (type === "rsa") return "rsa-pss";
  if (type === "ec") {
    let details;
    try {
      details = key.asymmetricKeyDetails;
    } catch {
    }
    if (details && details.namedCurve) {
      const curve = details.namedCurve;
      if (curve !== "P-256" && curve !== "prime256v1" && curve !== "secp256r1") {
        throw new AttestError(
          `algorithmForKey: only NIST P-256 is supported, got ${curve}`
        );
      }
    }
    return "ecdsa-p256";
  }
  throw new AttestError(
    `algorithmForKey: unsupported key type: ${type ?? "unknown"} (only rsa and ec are supported)`
  );
}
function generateKeyPair2(algo, opts = {}) {
  try {
    let publicKey;
    let privateKey;
    if (algo === "rsa") {
      ({ publicKey, privateKey } = crypto12.generateKeyPairSync("rsa", {
        modulusLength: opts.rsaModulusBits ?? DEFAULT_RSA_MODULUS2,
        publicExponent: opts.rsaPublicExponent ?? DEFAULT_RSA_EXPONENT2
      }));
    } else if (algo === "ecdsa") {
      const curve = opts.ecCurve ?? DEFAULT_EC_CURVE2;
      if (curve !== "prime256v1") {
        throw new AttestError(
          `unsupported EC curve: ${curve}. Only 'prime256v1' (NIST P-256) is supported.`
        );
      }
      ({ publicKey, privateKey } = crypto12.generateKeyPairSync("ec", {
        namedCurve: curve
      }));
    } else {
      throw new AttestError(`unknown key algorithm: ${algo}`);
    }
    return { publicKey, privateKey, algorithm: algorithmFor2(algo) };
  } catch (err) {
    if (err instanceof AttestError) throw err;
    throw new AttestError("key generation failed: " + err.message, "KEY_GENERATION_ERROR", err);
  }
}
function importKeyPem2(pem, type) {
  try {
    if (type === "public") {
      return crypto12.createPublicKey(pem);
    }
    return crypto12.createPrivateKey(pem);
  } catch (err) {
    throw new AttestError(
      `failed to import ${type} key from PEM: ${err.message}`,
      "KEY_IMPORT_ERROR",
      err
    );
  }
}
function getKeyFingerprint2(publicKey) {
  try {
    const keyObj = typeof publicKey === "string" ? crypto12.createPublicKey(publicKey) : publicKey;
    const der = keyObj.export({ type: "spki", format: "der" });
    return sha2562(der).toString("hex");
  } catch (err) {
    throw new FingerprintError(
      "getKeyFingerprint failed: " + err.message,
      err
    );
  }
}

// packages/attest/src/crypto/signatures.ts
var crypto13 = __toESM(require("crypto"));
var SIGN_HASH2 = "sha256";
function asPublicKey2(key) {
  if (typeof key === "string") {
    try {
      return crypto13.createPublicKey(key);
    } catch (err) {
      throw new AttestError(
        "invalid public key PEM: " + err.message,
        "VERIFY_ERROR",
        err
      );
    }
  }
  return key;
}
function asPrivateKey2(key) {
  if (typeof key === "string") {
    try {
      return crypto13.createPrivateKey(key);
    } catch (err) {
      throw new AttestError(
        "invalid private key PEM: " + err.message,
        "SIGN_ERROR",
        err
      );
    }
  }
  return key;
}
function resolveAlgorithm(key, algo) {
  if (algo) return algo;
  return algorithmForKey(key);
}
function sign4(privateKey, data, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new AttestError("sign: data must be a Buffer", "SIGN_ERROR");
  }
  const key = asPrivateKey2(privateKey);
  const resolvedAlgo = resolveAlgorithm(key, algo);
  try {
    if (resolvedAlgo === "rsa-pss") {
      const sig = crypto13.sign(
        SIGN_HASH2,
        data,
        {
          key,
          padding: crypto13.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto13.constants.RSA_PSS_SALTLEN_DIGEST
        }
      );
      return sig.toString("hex");
    }
    if (resolvedAlgo === "ecdsa-p256") {
      const sig = crypto13.sign(SIGN_HASH2, data, key);
      return sig.toString("hex");
    }
    throw new AttestError(`unsupported signature algorithm: ${resolvedAlgo}`);
  } catch (err) {
    if (err instanceof AttestError) throw err;
    throw new AttestError("sign failed: " + err.message, "SIGN_ERROR", err);
  }
}
function verify4(publicKey, data, signature, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new AttestError("verify: data must be a Buffer", "VERIFY_ERROR");
  }
  let signatureBuf;
  if (typeof signature === "string") {
    if (signature.length === 0 || !/^[0-9a-fA-F]+$/.test(signature)) {
      throw new AttestError("verify: signature must be non-empty hex", "VERIFY_ERROR");
    }
    try {
      signatureBuf = Buffer.from(signature, "hex");
    } catch {
      throw new AttestError("verify: signature must be hex-encoded", "VERIFY_ERROR");
    }
  } else {
    signatureBuf = signature;
  }
  const key = asPublicKey2(publicKey);
  const resolvedAlgo = resolveAlgorithm(key, algo);
  let ok;
  try {
    if (resolvedAlgo === "rsa-pss") {
      ok = crypto13.verify(
        SIGN_HASH2,
        data,
        {
          key,
          padding: crypto13.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto13.constants.RSA_PSS_SALTLEN_DIGEST
        },
        signatureBuf
      );
    } else if (resolvedAlgo === "ecdsa-p256") {
      ok = crypto13.verify(SIGN_HASH2, data, key, signatureBuf);
    } else {
      throw new AttestError(`unsupported signature algorithm: ${resolvedAlgo}`);
    }
  } catch (err) {
    if (err instanceof AttestError) throw err;
    return false;
  }
  const okByte = Buffer.from([ok ? 1 : 0]);
  const expected = Buffer.from([1]);
  return constantTimeEqual2(okByte, expected);
}
function signForChallenge(privateKey, data, algo) {
  try {
    return sign4(privateKey, data, algo);
  } catch (err) {
    if (err instanceof ChallengeError) throw err;
    throw new ChallengeError(
      "signForChallenge failed: " + err.message,
      err
    );
  }
}
function signForAttestation(privateKey, data, algo) {
  try {
    return sign4(privateKey, data, algo);
  } catch (err) {
    if (err instanceof AttestationError) throw err;
    throw new AttestationError(
      "signForAttestation failed: " + err.message,
      err
    );
  }
}

// packages/attest/src/fingerprint/collector.ts
var os = __toESM(require("os"));
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
var child_process = __toESM(require("child_process"));
var REDACTED = "[redacted]";
function execQuiet(cmd, timeoutMs = 500) {
  try {
    const out = child_process.execSync(cmd, {
      timeout: timeoutMs,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
      maxBuffer: 1024 * 1024
    });
    return out.trim();
  } catch {
    return "";
  }
}
function collectMacs() {
  const interfaces = os.networkInterfaces();
  const out = [];
  for (const name of Object.keys(interfaces)) {
    const list = interfaces[name];
    if (!list) continue;
    for (const iface of list) {
      if (!iface) continue;
      if (iface.internal) continue;
      if (!iface.mac) continue;
      if (iface.mac === "00:00:00:00:00:00") continue;
      const mac = iface.mac.toLowerCase().replace(/[:.-]/g, "");
      if (mac.length === 12 && /^[0-9a-f]{12}$/.test(mac)) {
        out.push(mac);
      }
    }
  }
  return Array.from(new Set(out));
}
function collectMachineId() {
  const platform2 = process.platform;
  try {
    if (platform2 === "linux") {
      for (const candidate of ["/etc/machine-id", "/var/lib/dbus/machine-id"]) {
        try {
          const content = fs2.readFileSync(candidate, "utf8").trim();
          if (content && /^[0-9a-f]{32}$/i.test(content)) {
            return content.toLowerCase();
          }
        } catch {
        }
      }
      return void 0;
    }
    if (platform2 === "darwin") {
      const out = execQuiet(
        "ioreg -rd1 -c IOPlatformExpertDevice | grep IOPlatformUUID",
        800
      );
      const match = out.match(/IOPlatformUUID"\s*=\s*"([0-9A-Fa-f-]{36})"/);
      if (match && match[1]) return match[1].toLowerCase();
      return void 0;
    }
    if (platform2 === "win32") {
      const out = execQuiet(
        'reg query "HKLM\\SOFTWARE\\Microsoft\\Cryptography" /v MachineGuid',
        800
      );
      const match = out.match(/MachineGuid\s+REG_SZ\s+([0-9A-Fa-f-]{36})/);
      if (match && match[1]) return match[1].toLowerCase();
      return void 0;
    }
  } catch {
  }
  return void 0;
}
function collectDeviceSignals() {
  try {
    const cpus3 = safeCpus();
    const arch = safeArch();
    const platform2 = safePlatform();
    const hostname2 = safeHostname();
    const macs = collectMacs();
    const totalmem3 = safeTotalmem();
    const nodeVersion = process.version;
    const release2 = safeRelease();
    const machineId = collectMachineId();
    return {
      cpus: cpus3,
      arch,
      platform: platform2,
      hostname: hostname2,
      macs,
      totalmem: totalmem3,
      nodeVersion,
      release: release2,
      ...machineId !== void 0 ? { machineId } : {}
    };
  } catch (err) {
    throw new FingerprintError(
      "collectDeviceSignals failed: " + err.message,
      err
    );
  }
}
function safeCpus() {
  try {
    const n = os.cpus().length;
    return typeof n === "number" && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}
function safeArch() {
  try {
    return process.arch || "unknown";
  } catch {
    return "unknown";
  }
}
function safePlatform() {
  try {
    return process.platform || "unknown";
  } catch {
    return "unknown";
  }
}
function safeHostname() {
  try {
    return os.hostname() || "unknown";
  } catch {
    return "unknown";
  }
}
function safeTotalmem() {
  try {
    const n = os.totalmem();
    return typeof n === "number" && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}
function safeRelease() {
  try {
    return os.release() || "";
  } catch {
    return "";
  }
}
function redactSignals(signals) {
  return {
    cpus: signals.cpus,
    arch: signals.arch,
    platform: signals.platform,
    hostname: signals.hostname,
    macs: `[${signals.macs.length} mac(s) redacted]`,
    totalmem: signals.totalmem,
    nodeVersion: signals.nodeVersion,
    release: signals.release,
    machineId: signals.machineId ? REDACTED : ""
  };
}
function deriveDeviceId(signals) {
  const stable = stableStringify(signals);
  return sha2562(stable).toString("hex").slice(0, 16);
}
function stableStringify(value) {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return "[" + value.map(stableStringify).join(",") + "]";
  }
  const keys = Object.keys(value).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + stableStringify(value[k])).join(",") + "}";
}
function newCorrelationId() {
  return uuid();
}
var LINUX_MACHINE_ID_PATHS = ["/etc/machine-id", "/var/lib/dbus/machine-id"];

// packages/attest/src/fingerprint/fingerprint.ts
var crypto14 = __toESM(require("crypto"));
var FINGERPRINT_FIELDS = [
  "cpus",
  "arch",
  "platform",
  "hostname",
  "macs",
  "totalmem",
  "nodeVersion",
  "release",
  "machineId"
];
var DeviceFingerprint = class _DeviceFingerprint {
  /** 64-character hex SHA-256. */
  hash;
  /** Per-field hex hashes used for drift scoring. */
  perField;
  constructor(hash, perField) {
    this.hash = hash;
    this.perField = perField;
  }
  /**
   * Build a fingerprint from collected device signals.
   * @param signals - The raw device signals.
   */
  static fromSignals(signals) {
    if (!signals || typeof signals !== "object") {
      throw new FingerprintError("fromSignals: signals must be a DeviceSignals object");
    }
    const perField = {};
    const signalsRecord = signals;
    for (const field of FINGERPRINT_FIELDS) {
      const value = signalsRecord[field];
      if (value === void 0) continue;
      perField[field] = sha2562(stableStringify(value)).toString("hex");
    }
    const canonical = stableStringify(signals);
    const hash = sha2562(canonical).toString("hex");
    return new _DeviceFingerprint(hash, perField);
  }
  /**
   * Build a fingerprint from an existing 64-character hex string (e.g. one
   * loaded from storage or transmitted over the wire).
   *
   * The returned fingerprint has NO per-field data, so {@link compare} will
   * fall back to all-or-nothing matching (drift = 0 on match, 1 otherwise).
   *
   * @param hash - 64-character hex string.
   */
  static fromString(hash) {
    if (typeof hash !== "string" || !/^[0-9a-f]{64}$/.test(hash)) {
      throw new FingerprintError(
        "fromString: expected 64-character hex string, got: " + typeof hash
      );
    }
    return new _DeviceFingerprint(hash, {});
  }
  /**
   * Return the 64-character hex hash. Same as implicit stringification.
   */
  toString() {
    return this.hash;
  }
  /**
   * Compare this fingerprint to another.
   *
   * Returns `{ match, drift }` where:
   * - `match` is `true` iff the two hashes are byte-equal (constant-time).
   * - `drift` is the fraction of per-field hashes that differ, in `[0, 1]`.
   *   When per-field data is unavailable (e.g. one side was loaded via
   *   {@link fromString}), drift is `0` on match and `1` otherwise.
   *
   * Comparison uses `crypto.timingSafeEqual` to avoid early-exit leaks.
   *
   * @param other - The fingerprint to compare against.
   */
  compare(other) {
    const a = Buffer.from(this.hash, "hex");
    const b = Buffer.from(other.hash, "hex");
    const match = a.length === b.length && safeEqual(a, b);
    const myFields = Object.keys(this.perField);
    const otherFields = Object.keys(other.perField);
    if (myFields.length === 0 || otherFields.length === 0) {
      return { match, drift: match ? 0 : 1 };
    }
    const allFields = Array.from(/* @__PURE__ */ new Set([...myFields, ...otherFields]));
    if (allFields.length === 0) {
      return { match, drift: match ? 0 : 1 };
    }
    let differing = 0;
    for (const field of allFields) {
      const mine = this.perField[field];
      const theirs = other.perField[field];
      if (!mine || !theirs) {
        differing++;
        continue;
      }
      const ma = Buffer.from(mine, "hex");
      const mb = Buffer.from(theirs, "hex");
      if (!safeEqual(ma, mb)) differing++;
    }
    const drift = differing / allFields.length;
    return { match, drift };
  }
  /**
   * Return `true` iff `other` is byte-equal to this fingerprint (constant-time).
   */
  equals(other) {
    return this.compare(other).match;
  }
  /**
   * Return the underlying hex hash. Useful for storage / serialization.
   */
  valueOf() {
    return this.hash;
  }
};
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  return crypto14.timingSafeEqual(a, b);
}

// packages/attest/src/challenge/nonce.ts
var DEFAULT_NONCE_TTL_MS = 5 * 60 * 1e3;
var DEFAULT_NONCE_BYTES = 32;
var NonceStore = class {
  records = /* @__PURE__ */ new Map();
  defaultTtlMs;
  defaultBytes;
  /**
   * @param defaultTtlMs - Default TTL applied to issued nonces.
   * @param defaultBytes - Default byte length for issued nonces.
   */
  constructor(defaultTtlMs = DEFAULT_NONCE_TTL_MS, defaultBytes = DEFAULT_NONCE_BYTES) {
    if (!Number.isInteger(defaultTtlMs) || defaultTtlMs <= 0) {
      throw new NonceError("defaultTtlMs must be a positive integer");
    }
    if (!Number.isInteger(defaultBytes) || defaultBytes <= 0 || defaultBytes > 256) {
      throw new NonceError("defaultBytes must be an integer in [1, 256]");
    }
    this.defaultTtlMs = defaultTtlMs;
    this.defaultBytes = defaultBytes;
  }
  /**
   * Issue a fresh single-use nonce.
   *
   * The nonce is returned as a hex string. It is guaranteed unique within
   * this store (collisions are detected and regenerated).
   *
   * @param opts - Optional issue parameters.
   */
  issue(opts = {}) {
    const ttlMs = opts.ttlMs ?? this.defaultTtlMs;
    const bytes = opts.bytes ?? this.defaultBytes;
    if (!Number.isInteger(ttlMs) || ttlMs <= 0) {
      throw new NonceError("ttlMs must be a positive integer");
    }
    if (!Number.isInteger(bytes) || bytes <= 0 || bytes > 256) {
      throw new NonceError("bytes must be an integer in [1, 256]");
    }
    const now = Date.now();
    let nonce;
    let attempts = 0;
    do {
      const rand = secureRandom(bytes).toString("hex");
      const id = uuid().replace(/-/g, "");
      nonce = `${id}${rand}`;
      attempts++;
      if (attempts > 16) {
        throw new NonceError("issue: failed to generate a unique nonce after 16 attempts");
      }
    } while (this.records.has(nonce));
    this.records.set(nonce, {
      nonce,
      issuedAt: now,
      expiresAt: now + ttlMs,
      consumed: false
    });
    return nonce;
  }
  /**
   * Consume (invalidate) a nonce. Returns `true` if the nonce was valid and
   * unconsumed; returns `false` if the nonce was unknown, already consumed,
   * or expired.
   *
   * Single-use semantics: a successful consume marks the nonce as consumed
   * and it can NEVER be consumed again.
   *
   * @param nonce - The nonce to consume.
   * @param opts.skipConsumeOnExpiry - If true, expired nonces are NOT marked
   *   consumed (they'll be cleaned up by `cleanup()`). Default false.
   */
  consume(nonce, opts = {}) {
    if (typeof nonce !== "string" || nonce.length === 0) {
      throw new NonceError("consume: nonce must be a non-empty string");
    }
    const record = this.records.get(nonce);
    if (!record) return false;
    const now = Date.now();
    if (record.consumed) return false;
    if (now >= record.expiresAt) {
      if (!opts.skipConsumeOnExpiry) {
        record.consumed = true;
      }
      return false;
    }
    record.consumed = true;
    return true;
  }
  /**
   * Check whether a nonce is currently valid (present, unconsumed, unexpired).
   * Does NOT consume the nonce.
   */
  isValid(nonce) {
    const record = this.records.get(nonce);
    if (!record) return false;
    if (record.consumed) return false;
    return Date.now() < record.expiresAt;
  }
  /**
   * Remove expired (and consumed) records. Returns the number of records
   * removed.
   */
  cleanup() {
    const now = Date.now();
    let removed = 0;
    for (const [key, record] of this.records) {
      if (now >= record.expiresAt || record.consumed) {
        this.records.delete(key);
        removed++;
      }
    }
    return removed;
  }
  /**
   * Return the number of currently-tracked (non-expired, unconsumed) nonces.
   */
  size() {
    const now = Date.now();
    let count = 0;
    for (const record of this.records.values()) {
      if (!record.consumed && now < record.expiresAt) count++;
    }
    return count;
  }
  /**
   * Clear all records (useful in tests).
   */
  clear() {
    this.records.clear();
  }
};

// packages/attest/src/challenge/challenge.ts
var crypto15 = __toESM(require("crypto"));
var DEFAULT_CHALLENGE_TTL_MS = 60 * 1e3;
var DEFAULT_CHALLENGE_BYTES = 32;
function generateChallenge(opts = {}) {
  const ttlMs = opts.ttlMs ?? DEFAULT_CHALLENGE_TTL_MS;
  const bytes = opts.bytes ?? DEFAULT_CHALLENGE_BYTES;
  if (!Number.isInteger(ttlMs) || ttlMs <= 0) {
    throw new ChallengeError("generateChallenge: ttlMs must be a positive integer");
  }
  if (!Number.isInteger(bytes) || bytes <= 0 || bytes > 256) {
    throw new ChallengeError("generateChallenge: bytes must be an integer in [1, 256]");
  }
  const now = Date.now();
  const issuedAt = new Date(now).toISOString();
  const expiresAt = new Date(now + ttlMs).toISOString();
  const challengeBytes = secureRandom(bytes);
  const challenge = challengeBytes.toString("base64");
  const nonce = uuid().replace(/-/g, "") + secureRandom(16).toString("hex");
  return { nonce, challenge, issuedAt, expiresAt };
}
function decodeChallenge(challenge) {
  if (typeof challenge !== "string" || challenge.length === 0) {
    throw new ChallengeError("decodeChallenge: challenge must be a non-empty string");
  }
  try {
    return Buffer.from(challenge, "base64");
  } catch (err) {
    throw new ChallengeError(
      "decodeChallenge: invalid base64: " + err.message,
      err
    );
  }
}
function signChallenge(privateKey, challenge, algo) {
  if (!challenge || typeof challenge !== "object") {
    throw new ChallengeError("signChallenge: challenge must be a Challenge object");
  }
  const challengeBytes = decodeChallenge(challenge.challenge);
  const signature = sign4(privateKey, challengeBytes, algo);
  let publicKeyFingerprint;
  try {
    const privKey = typeof privateKey === "string" ? crypto15.createPrivateKey(privateKey) : privateKey;
    const pubKey = privKey.asymmetricKeyType ? crypto15.createPublicKey(privKey) : crypto15.createPublicKey(privKey.export({ type: "pkcs8", format: "pem" }));
    publicKeyFingerprint = getKeyFingerprint2(pubKey);
  } catch (err) {
    throw new ChallengeError(
      "signChallenge: cannot derive public key fingerprint: " + err.message,
      err
    );
  }
  let resolvedAlgo;
  if (algo) {
    resolvedAlgo = algo;
  } else {
    const privKey = typeof privateKey === "string" ? crypto15.createPrivateKey(privateKey) : privateKey;
    const keyType = privKey.asymmetricKeyType;
    if (keyType === "rsa") resolvedAlgo = "rsa-pss";
    else if (keyType === "ec") resolvedAlgo = "ecdsa-p256";
    else throw new ChallengeError(`signChallenge: unsupported key type: ${keyType ?? "unknown"}`);
  }
  return {
    nonce: challenge.nonce,
    signature,
    algorithm: resolvedAlgo,
    signedAt: (/* @__PURE__ */ new Date()).toISOString(),
    publicKeyFingerprint
  };
}
function verifyResponse(publicKey, challenge, response, expectedNonce) {
  if (!response || typeof response !== "object") return false;
  if (typeof expectedNonce !== "string" || expectedNonce.length === 0) {
    throw new ChallengeError("verifyResponse: expectedNonce must be a non-empty string");
  }
  const a = Buffer.from(response.nonce, "utf8");
  const b = Buffer.from(expectedNonce, "utf8");
  if (a.length !== b.length || !crypto15.timingSafeEqual(a, b)) {
    return false;
  }
  let challengeBytes;
  try {
    challengeBytes = decodeChallenge(challenge.challenge);
  } catch {
    return false;
  }
  try {
    return verify4(publicKey, challengeBytes, response.signature, response.algorithm);
  } catch (err) {
    throw new ChallengeError(
      "verifyResponse: signature verification error: " + err.message,
      err
    );
  }
}
function isChallengeExpired(challenge, now = Date.now()) {
  try {
    const expiresAt = Date.parse(challenge.expiresAt);
    if (!Number.isFinite(expiresAt)) return true;
    return now >= expiresAt;
  } catch {
    return true;
  }
}

// packages/attest/src/session/store.ts
var InMemorySessionStore = class {
  records = /* @__PURE__ */ new Map();
  /** @inheritdoc */
  async get(token) {
    if (typeof token !== "string" || token.length === 0) {
      throw new SessionError("get: token must be a non-empty string");
    }
    const record = this.records.get(token);
    if (!record) return null;
    return cloneRecord(record);
  }
  /** @inheritdoc */
  async put(record) {
    if (!record || typeof record !== "object") {
      throw new SessionError("put: record must be a SessionRecord");
    }
    if (typeof record.token !== "string" || record.token.length === 0) {
      throw new SessionError("put: record.token must be a non-empty string");
    }
    this.records.set(record.token, cloneRecord(record));
  }
  /** @inheritdoc */
  async delete(token) {
    if (typeof token !== "string" || token.length === 0) return false;
    return this.records.delete(token);
  }
  /** @inheritdoc */
  async list() {
    return Array.from(this.records.values()).map(cloneRecord);
  }
  /** Clear all records (useful in tests). */
  clear() {
    this.records.clear();
  }
};
function cloneRecord(record) {
  try {
    return JSON.parse(JSON.stringify(record));
  } catch (err) {
    throw new SessionError(
      "cloneRecord: failed to clone session record: " + err.message,
      err
    );
  }
}

// packages/attest/src/session/session.ts
var DEFAULT_SESSION_TTL_MS = 60 * 60 * 1e3;
var SESSION_TOKEN_BYTES = 32;
var SessionManager = class {
  store;
  defaultTtlMs;
  /**
   * @param store - Backing session store. Defaults to a new in-memory store.
   * @param defaultTtlMs - Default TTL applied to new sessions.
   */
  constructor(store, defaultTtlMs = DEFAULT_SESSION_TTL_MS) {
    this.store = store ?? new InMemorySessionStore();
    if (!Number.isInteger(defaultTtlMs) || defaultTtlMs <= 0) {
      throw new SessionError("defaultTtlMs must be a positive integer");
    }
    this.defaultTtlMs = defaultTtlMs;
  }
  /**
   * Establish a new trusted session.
   *
   * @param fingerprint - Device fingerprint string.
   * @param identity - Identity (DID, user id, agent id).
   * @param opts - Optional parameters.
   * @returns The newly-established session.
   */
  async establish(fingerprint, identity, opts = {}) {
    if (typeof fingerprint !== "string" || fingerprint.length === 0) {
      throw new SessionError("establish: fingerprint must be a non-empty string");
    }
    if (typeof identity !== "string" || identity.length === 0) {
      throw new SessionError("establish: identity must be a non-empty string");
    }
    const ttlMs = opts.ttlMs ?? this.defaultTtlMs;
    if (!Number.isInteger(ttlMs) || ttlMs <= 0) {
      throw new SessionError("establish: ttlMs must be a positive integer");
    }
    const trustScore = opts.trustScore ?? 1;
    if (typeof trustScore !== "number" || !Number.isFinite(trustScore) || trustScore < 0 || trustScore > 1) {
      throw new SessionError("establish: trustScore must be a finite number in [0, 1]");
    }
    const now = Date.now();
    const token = secureRandom(SESSION_TOKEN_BYTES).toString("hex");
    const sessionId = uuid();
    const record = {
      token,
      sessionId,
      createdAt: new Date(now).toISOString(),
      expiresAt: new Date(now + ttlMs).toISOString(),
      fingerprint,
      identity,
      trustScore,
      ...opts.boundNonce ? { boundNonce: opts.boundNonce } : {}
    };
    await this.store.put(record);
    return toSession(record);
  }
  /**
   * Verify a session token. Returns the session if the token is known and
   * unexpired; returns `null` otherwise.
   *
   * @param token - The opaque session token.
   */
  async verify(token) {
    if (typeof token !== "string" || token.length === 0) return null;
    const record = await this.store.get(token);
    if (!record) return null;
    const now = Date.now();
    const expiresAt = Date.parse(record.expiresAt);
    if (!Number.isFinite(expiresAt) || now >= expiresAt) {
      await this.store.delete(token).catch(() => void 0);
      return null;
    }
    return toSession(record);
  }
  /**
   * Revoke a session. Returns `true` if a session was revoked.
   */
  async revoke(token) {
    if (typeof token !== "string" || token.length === 0) return false;
    return this.store.delete(token);
  }
  /**
   * Refresh a session: extends the TTL by issuing a new token (and revoking
   * the old one). The new session preserves the original `fingerprint`,
   * `identity`, and `trustScore`.
   *
   * @param token - The current (still-valid) session token.
   * @param ttlMs - Optional new TTL. Defaults to the manager's default.
   * @returns The refreshed session.
   */
  async refresh(token, ttlMs) {
    if (typeof token !== "string" || token.length === 0) {
      throw new SessionError("refresh: token must be a non-empty string");
    }
    const record = await this.store.get(token);
    if (!record) {
      throw new SessionError("refresh: unknown session token");
    }
    const now = Date.now();
    const expiresAt = Date.parse(record.expiresAt);
    if (!Number.isFinite(expiresAt) || now >= expiresAt) {
      await this.store.delete(token).catch(() => void 0);
      throw new SessionError("refresh: session has expired");
    }
    const newTtl = ttlMs ?? this.defaultTtlMs;
    if (!Number.isInteger(newTtl) || newTtl <= 0) {
      throw new SessionError("refresh: ttlMs must be a positive integer");
    }
    const newSession = await this.establish(record.fingerprint, record.identity, {
      ttlMs: newTtl,
      trustScore: record.trustScore,
      boundNonce: record.boundNonce
    });
    await this.store.delete(token).catch(() => void 0);
    return newSession;
  }
  /**
   * List all sessions (for diagnostics / admin tooling).
   */
  async list() {
    const records = await this.store.list();
    return records.map(toSession);
  }
  /**
   * Reap expired sessions. Returns the number of records removed.
   */
  async reap() {
    const records = await this.store.list();
    const now = Date.now();
    let removed = 0;
    for (const record of records) {
      const expiresAt = Date.parse(record.expiresAt);
      if (!Number.isFinite(expiresAt) || now >= expiresAt) {
        const deleted = await this.store.delete(record.token).catch(() => false);
        if (deleted) removed++;
      }
    }
    return removed;
  }
};
function toSession(record) {
  return {
    token: record.token,
    sessionId: record.sessionId,
    createdAt: record.createdAt,
    expiresAt: record.expiresAt,
    fingerprint: record.fingerprint,
    identity: record.identity,
    trustScore: record.trustScore
  };
}

// packages/attest/src/hardware/validator.ts
var fs3 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
var child_process2 = __toESM(require("child_process"));
function execQuiet2(cmd, timeoutMs = 800) {
  try {
    const out = child_process2.execSync(cmd, {
      timeout: timeoutMs,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
      maxBuffer: 1024 * 1024
    });
    return out.trim();
  } catch {
    return "";
  }
}
function pathExists(p) {
  try {
    return fs3.existsSync(p);
  } catch {
    return false;
  }
}
function globDir(dir, pattern) {
  try {
    if (!fs3.existsSync(dir)) return [];
    const stat = fs3.statSync(dir);
    if (!stat.isDirectory()) return [];
    const entries = fs3.readdirSync(dir);
    return entries.filter((e) => pattern.test(e)).map((e) => path3.join(dir, e));
  } catch {
    return [];
  }
}
function probeLinuxTpm() {
  const devPaths = ["/dev/tpm0", "/dev/tpm1", "/dev/tpmrm0"];
  for (const p of devPaths) {
    if (pathExists(p)) {
      return { present: true, details: `found ${p}` };
    }
  }
  const sysPaths = ["/sys/class/tpm/tpm0", "/sys/class/misc/tpm0/device"];
  for (const p of sysPaths) {
    if (pathExists(p)) {
      return { present: true, details: `found ${p}` };
    }
  }
  const pcrPath = "/sys/class/tpm/tpm0/tpm_version_major";
  if (pathExists(pcrPath)) {
    try {
      const version = fs3.readFileSync(pcrPath, "utf8").trim();
      return { present: true, details: `TPM ${version} via ${pcrPath}` };
    } catch {
    }
  }
  return { present: false, details: "no Linux TPM device node or sysfs entry found" };
}
function probeLinuxTee() {
  const sgxPaths = ["/dev/sgx_enclave", "/dev/sgx", "/dev/isgx"];
  for (const p of sgxPaths) {
    if (pathExists(p)) {
      return { present: true, details: `found Intel SGX at ${p}` };
    }
  }
  const teePaths = ["/dev/tee0", "/dev/tee1", "/sys/class/tee"];
  for (const p of teePaths) {
    if (pathExists(p)) {
      return { present: true, details: `found TEE at ${p}` };
    }
  }
  const sevParam = "/sys/module/kvm_amd/parameters/sev_es";
  if (pathExists(sevParam)) {
    try {
      const val = fs3.readFileSync(sevParam, "utf8").trim();
      if (val === "1" || val === "Y" || val === "y") {
        return { present: true, details: `AMD SEV-ES enabled (${sevParam}=${val})` };
      }
    } catch {
    }
  }
  const cpuInfo = readLinuxCpuInfo();
  if (cpuInfo.includes("sgx") || cpuInfo.includes("sev")) {
    return { present: true, details: "CPU advertises sgx/sev flag" };
  }
  return { present: false, details: "no Linux TEE (SGX/SEV/TrustZone) found" };
}
function readLinuxCpuInfo() {
  try {
    return fs3.readFileSync("/proc/cpuinfo", "utf8").toLowerCase();
  } catch {
    return "";
  }
}
function probeMacSecureEnclave() {
  const out = execQuiet2(
    'ioreg -l -w 0 | grep -i "AppleSecureEnclave\\|secure_enclave\\|SEP"',
    2e3
  );
  if (out.length > 0) {
    return { present: true, details: "Apple Secure Enclave detected via ioreg" };
  }
  const sp = execQuiet2("system_profiler SPiBridgeDataType 2>/dev/null", 2e3);
  if (sp.length > 0 && /T2|Apple Silicon/i.test(sp)) {
    return { present: true, details: "Apple T2 / Apple Silicon bridge detected" };
  }
  return { present: false, details: "no Apple Secure Enclave detected" };
}
function probeWindowsTpm() {
  const regOut = execQuiet2(
    'reg query "HKLM\\SYSTEM\\CurrentControlSet\\Services\\TPM\\WMI\\Admin" /v SpecVersion 2>nul',
    1e3
  );
  if (regOut.length > 0 && /SpecVersion/i.test(regOut)) {
    return { present: true, details: `TPM detected via registry: ${regOut.split("\n")[0]}` };
  }
  const psOut = execQuiet2(
    'powershell -NoProfile -Command "(Get-Tpm).TpmPresent"',
    2e3
  );
  if (psOut.length > 0 && /true/i.test(psOut)) {
    return { present: true, details: "TPM detected via Get-Tpm" };
  }
  return { present: false, details: "no Windows TPM detected" };
}
function probeWindowsTee() {
  const psOut = execQuiet2(
    'powershell -NoProfile -Command "(Get-CimInstance -ClassName Win32_DeviceGuard -Namespace root\\Microsoft\\Windows\\DeviceGuard -ErrorAction SilentlyContinue).SecurityServicesRunning"',
    2e3
  );
  if (psOut.length > 0) {
    if (/\{?.*\b1\b.*\b2\b.*\}?/.test(psOut) || /\b1\b/.test(psOut)) {
      return { present: true, details: `Windows VBS / Device Guard running: ${psOut}` };
    }
  }
  return { present: false, details: "no Windows VBS / Device Guard detected" };
}
var HardwareValidator = class {
  /**
   * Probe the local host.
   *
   * Platform behavior:
   *   - `linux`: probes `/dev/tpm*`, `/sys/class/tpm/`, `/dev/sgx*`, `/dev/tee*`,
   *     `/sys/module/kvm_amd/parameters/sev_es`, and `/proc/cpuinfo` for
   *     `sgx`/`sev` flags.
   *   - `darwin`: shells out to `ioreg` for the Apple Secure Enclave, and to
   *     `system_profiler` for the Apple T2 / Apple Silicon bridge.
   *   - `win32`: shells out to `reg query` for the TPM spec version, and to
   *     `powershell Get-Tpm` / `Get-CimInstance Win32_DeviceGuard` for VBS.
   *   - other platforms: returns `{ tpm: false, secureEnclave: false, tee: false,
   *     details: 'unsupported platform' }`.
   */
  probe() {
    try {
      const platform2 = process.platform;
      if (platform2 === "linux") {
        const tpm = probeLinuxTpm();
        const tee = probeLinuxTee();
        return {
          tpm: tpm.present,
          secureEnclave: false,
          // Not applicable on Linux.
          tee: tee.present,
          details: `linux: ${tpm.details}; ${tee.details}`
        };
      }
      if (platform2 === "darwin") {
        const se = probeMacSecureEnclave();
        return {
          tpm: false,
          // Not applicable on macOS (no TPM).
          secureEnclave: se.present,
          tee: se.present,
          // The Secure Enclave serves as the TEE on Apple platforms.
          details: `darwin: ${se.details}`
        };
      }
      if (platform2 === "win32") {
        const tpm = probeWindowsTpm();
        const tee = probeWindowsTee();
        return {
          tpm: tpm.present,
          secureEnclave: false,
          // Not applicable on Windows.
          tee: tee.present,
          details: `win32: ${tpm.details}; ${tee.details}`
        };
      }
      return {
        tpm: false,
        secureEnclave: false,
        tee: false,
        details: `unsupported platform: ${platform2}`
      };
    } catch (err) {
      return {
        tpm: false,
        secureEnclave: false,
        tee: false,
        details: `probe failed: ${err.message}`
      };
    }
  }
  /**
   * Convenience: probe and return `true` if ANY hardware attestation root
   * is present.
   */
  isAnyHardwarePresent() {
    const p = this.probe();
    return p.tpm || p.secureEnclave || p.tee;
  }
};
function requireHardwareOrThrow(validator) {
  const probe = validator.probe();
  if (!probe.tpm && !probe.secureEnclave && !probe.tee) {
    throw new HardwareValidationError(
      `no hardware attestation root present: ${probe.details}`
    );
  }
  return probe;
}

// packages/attest/src/hardware/provider.ts
var SoftwareAttestationProvider = class {
  name = "software";
  publicKey;
  privateKey;
  algorithm;
  hardware;
  cachedProbe = null;
  /**
   * @param opts - Optional configuration.
   * @param opts.algorithm - Key algorithm to generate. Defaults to `ecdsa`.
   * @param opts.privateKey - Pre-existing private key (PEM or KeyObject). If
   *   supplied, `opts.publicKey` must also be supplied.
   * @param opts.publicKey - Pre-existing public key (PEM or KeyObject).
   * @param opts.hardware - HardwareValidator instance (defaults to a new one).
   */
  constructor(opts = {}) {
    this.hardware = opts.hardware ?? new HardwareValidator();
    if (opts.privateKey && opts.publicKey) {
      const pubKeyObj = typeof opts.publicKey === "string" ? importKeyPem2(opts.publicKey, "public") : opts.publicKey;
      const privKeyObj = typeof opts.privateKey === "string" ? importKeyPem2(opts.privateKey, "private") : opts.privateKey;
      this.publicKey = pubKeyObj;
      this.privateKey = privKeyObj;
      this.algorithm = algorithmForKey(privKeyObj);
    } else {
      const algo = opts.algorithm ?? "ecdsa";
      const kp = generateKeyPair2(algo);
      this.publicKey = kp.publicKey;
      this.privateKey = kp.privateKey;
      this.algorithm = kp.algorithm;
    }
  }
  /** @inheritdoc */
  isAvailable() {
    return true;
  }
  /**
   * Return the provider's public key (PEM). Useful for transmitting the
   * attestation key to a verifier out of band.
   */
  getPublicKeyPem() {
    return this.publicKey.export({ type: "spki", format: "pem" }).toString("utf8");
  }
  /**
   * Return the SHA-256 fingerprint of the provider's public key.
   */
  getPublicKeyFingerprint() {
    return getKeyFingerprint2(this.publicKey);
  }
  /**
   * Return the signature algorithm used by this provider.
   */
  getAlgorithm() {
    return this.algorithm;
  }
  /** @inheritdoc */
  async attest(data, nonce) {
    if (!Buffer.isBuffer(data)) {
      throw new HardwareValidationError("attest: data must be a Buffer");
    }
    if (typeof nonce !== "string" || nonce.length === 0) {
      throw new HardwareValidationError("attest: nonce must be a non-empty string");
    }
    if (!this.cachedProbe) {
      this.cachedProbe = this.hardware.probe();
    }
    const measurements = {
      // SHA-256 of the data being attested.
      dataHash: sha2562(data).toString("hex"),
      // Provider name (so the verifier knows this is software-signed).
      provider: "software",
      // Public key fingerprint (binding).
      publicKeyFingerprint: this.getPublicKeyFingerprint()
    };
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const quoteWithoutSig = {
      version: 1,
      deviceFingerprint: data.toString("utf8"),
      measurements,
      timestamp,
      nonce,
      algorithm: this.algorithm,
      hardware: this.cachedProbe
    };
    const canonical = canonicalQuoteBytes(quoteWithoutSig);
    const signature = sign4(this.privateKey, canonical, this.algorithm);
    const quote = {
      ...quoteWithoutSig,
      signature
    };
    return quote;
  }
  /** @inheritdoc */
  async verifyQuote(quote, publicKey) {
    if (!quote || typeof quote !== "object") return false;
    const pubKey = publicKey ?? this.publicKey;
    if (!quote.signature || !quote.algorithm) return false;
    const { signature, ...rest } = quote;
    const canonical = canonicalQuoteBytes(rest);
    try {
      return verify4(pubKey, canonical, signature, quote.algorithm);
    } catch {
      return false;
    }
  }
};
function canonicalQuoteBytes(quote) {
  const stable = stableStringify2(quote);
  return Buffer.from(stable, "utf8");
}
function stableStringify2(value) {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return "[" + value.map(stableStringify2).join(",") + "]";
  }
  if (Buffer.isBuffer(value)) {
    return JSON.stringify(value.toString("hex"));
  }
  const keys = Object.keys(value).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + stableStringify2(value[k])).join(",") + "}";
}
var _internal = {
  canonicalQuoteBytes,
  stableStringify: stableStringify2,
  sha256: sha2562
};

// packages/attest/src/remote/quote.ts
var ATTESTATION_QUOTE_VERSION = 1;
function validateQuote(quote) {
  if (!quote || typeof quote !== "object") {
    throw new AttestationError("validateQuote: quote must be an object");
  }
  const q = quote;
  if (typeof q.version !== "number" || q.version !== ATTESTATION_QUOTE_VERSION) {
    throw new AttestationError(
      `validateQuote: unsupported version ${String(q.version)} (expected ${ATTESTATION_QUOTE_VERSION})`
    );
  }
  if (typeof q.deviceFingerprint !== "string" || q.deviceFingerprint.length === 0) {
    throw new AttestationError("validateQuote: deviceFingerprint must be a non-empty string");
  }
  if (!q.measurements || typeof q.measurements !== "object") {
    throw new AttestationError("validateQuote: measurements must be an object");
  }
  if (typeof q.timestamp !== "string" || q.timestamp.length === 0) {
    throw new AttestationError("validateQuote: timestamp must be a non-empty string");
  }
  if (typeof q.nonce !== "string" || q.nonce.length === 0) {
    throw new AttestationError("validateQuote: nonce must be a non-empty string");
  }
  if (typeof q.signature !== "string" || q.signature.length === 0) {
    throw new AttestationError("validateQuote: signature must be a non-empty string");
  }
  if (q.algorithm !== "rsa-pss" && q.algorithm !== "ecdsa-p256") {
    throw new AttestationError(
      `validateQuote: algorithm must be 'rsa-pss' or 'ecdsa-p256', got: ${String(q.algorithm)}`
    );
  }
  if (q.hardware !== void 0 && (typeof q.hardware !== "object" || q.hardware === null)) {
    throw new AttestationError("validateQuote: hardware must be an object if present");
  }
}
function serializeQuote(quote) {
  validateQuote(quote);
  try {
    return Buffer.from(stableStringify3(quote), "utf8");
  } catch (err) {
    throw new AttestationError(
      "serializeQuote failed: " + err.message,
      err
    );
  }
}
function deserializeQuote(buf) {
  let text;
  if (typeof buf === "string") {
    text = buf;
  } else if (Buffer.isBuffer(buf)) {
    text = buf.toString("utf8");
  } else {
    throw new AttestationError("deserializeQuote: expected Buffer or string");
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new AttestationError(
      "deserializeQuote: invalid JSON: " + err.message,
      err
    );
  }
  validateQuote(parsed);
  return parsed;
}
function stableStringify3(value) {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return "[" + value.map(stableStringify3).join(",") + "]";
  }
  if (Buffer.isBuffer(value)) {
    return JSON.stringify(value.toString("hex"));
  }
  const keys = Object.keys(value).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + stableStringify3(value[k])).join(",") + "}";
}

// packages/attest/src/remote/attestation.ts
var crypto16 = __toESM(require("crypto"));
var DEFAULT_ATTESTATION_FRESHNESS_MS = 5 * 60 * 1e3;
function produceAttestation(privateKey, deviceFingerprint, measurements, nonce, opts = {}) {
  if (typeof deviceFingerprint !== "string" || deviceFingerprint.length === 0) {
    throw new AttestationError("produceAttestation: deviceFingerprint must be a non-empty string");
  }
  if (!measurements || typeof measurements !== "object") {
    throw new AttestationError("produceAttestation: measurements must be an object");
  }
  if (typeof nonce !== "string" || nonce.length === 0) {
    throw new AttestationError("produceAttestation: nonce must be a non-empty string");
  }
  let algorithm;
  if (opts.algorithm) {
    algorithm = opts.algorithm;
  } else {
    const keyObj = typeof privateKey === "string" ? crypto16.createPrivateKey(privateKey) : privateKey;
    algorithm = algorithmForKey(keyObj);
  }
  const timestamp = opts.timestamp ?? (/* @__PURE__ */ new Date()).toISOString();
  const quoteWithoutSig = {
    version: ATTESTATION_QUOTE_VERSION,
    deviceFingerprint,
    measurements,
    timestamp,
    nonce,
    algorithm,
    ...opts.hardware ? { hardware: opts.hardware } : {}
  };
  const canonical = Buffer.from(stableStringify3(quoteWithoutSig), "utf8");
  const signature = sign4(privateKey, canonical, algorithm);
  return {
    ...quoteWithoutSig,
    signature
  };
}
function verifyAttestation(publicKey, quote, expectedNonce, opts = {}) {
  if (!quote || typeof quote !== "object") return false;
  if (typeof expectedNonce !== "string" || expectedNonce.length === 0) {
    throw new AttestationError("verifyAttestation: expectedNonce must be a non-empty string");
  }
  const freshnessMs = opts.freshnessMs ?? DEFAULT_ATTESTATION_FRESHNESS_MS;
  if (!Number.isInteger(freshnessMs) || freshnessMs <= 0) {
    throw new AttestationError("verifyAttestation: freshnessMs must be a positive integer");
  }
  const now = opts.now ?? Date.now();
  const ts = Date.parse(quote.timestamp);
  if (!Number.isFinite(ts)) return false;
  const ageMs = Math.abs(now - ts);
  if (ageMs > freshnessMs) return false;
  const nonceBuf = Buffer.from(quote.nonce, "utf8");
  const expectedBuf = Buffer.from(expectedNonce, "utf8");
  if (nonceBuf.length !== expectedBuf.length) return false;
  if (!crypto16.timingSafeEqual(nonceBuf, expectedBuf)) return false;
  if (opts.expectedFingerprint !== void 0) {
    const fpBuf = Buffer.from(quote.deviceFingerprint, "utf8");
    const expFpBuf = Buffer.from(opts.expectedFingerprint, "utf8");
    if (fpBuf.length !== expFpBuf.length) return false;
    if (!crypto16.timingSafeEqual(fpBuf, expFpBuf)) return false;
  }
  const { signature, ...rest } = quote;
  const canonical = Buffer.from(stableStringify3(rest), "utf8");
  try {
    return verify4(publicKey, canonical, signature, quote.algorithm);
  } catch (err) {
    throw new AttestationError(
      "verifyAttestation: signature verification error: " + err.message,
      err
    );
  }
}
function produceAndSerializeAttestation(privateKey, deviceFingerprint, measurements, nonce, opts = {}) {
  const quote = produceAttestation(privateKey, deviceFingerprint, measurements, nonce, opts);
  return serializeQuote(quote);
}
function deserializeAndVerifyAttestation(publicKey, buf, expectedNonce, opts = {}) {
  const quote = deserializeQuote(buf);
  return verifyAttestation(publicKey, quote, expectedNonce, opts);
}

// packages/attest/src/trust/model.ts
var TRUST_DECISION_THRESHOLD = 0.7;
var CHALLENGE_DECISION_THRESHOLD = 0.3;
var DEFAULT_FACTOR_WEIGHTS = {
  fingerprintStability: 0.3,
  hardware: 0.2,
  attestation: 0.3,
  sessionAge: 0.1,
  priorInteractions: 0.1
};
function computeFactors(inputs) {
  if (typeof inputs.fingerprintDrift !== "number" || !Number.isFinite(inputs.fingerprintDrift)) {
    throw new TrustEvaluationError("fingerprintDrift must be a finite number");
  }
  if (inputs.fingerprintDrift < 0 || inputs.fingerprintDrift > 1) {
    throw new TrustEvaluationError(
      `fingerprintDrift must be in [0, 1], got ${inputs.fingerprintDrift}`
    );
  }
  if (!Number.isInteger(inputs.sessionAgeMs) || inputs.sessionAgeMs < 0) {
    throw new TrustEvaluationError("sessionAgeMs must be a non-negative integer");
  }
  if (!Number.isInteger(inputs.priorInteractions) || inputs.priorInteractions < 0) {
    throw new TrustEvaluationError("priorInteractions must be a non-negative integer");
  }
  const fingerprintStability = Math.max(0, Math.min(1, 1 - inputs.fingerprintDrift));
  const hardware = inputs.hardwarePresent ? 1 : 0;
  const attestation = inputs.attestationValid ? 1 : 0;
  const oneHourMs = 60 * 60 * 1e3;
  const decay = Math.pow(0.5, inputs.sessionAgeMs / oneHourMs);
  const sessionAge = Math.max(0, Math.min(1, decay));
  const priorInteractions = Math.max(0, Math.min(1, Math.log10(1 + inputs.priorInteractions) / 2));
  return { fingerprintStability, hardware, attestation, sessionAge, priorInteractions };
}
function aggregateScore(factors, weights) {
  const score = factors.fingerprintStability * weights.fingerprintStability + factors.hardware * weights.hardware + factors.attestation * weights.attestation + factors.sessionAge * weights.sessionAge + factors.priorInteractions * weights.priorInteractions;
  return Math.max(0, Math.min(1, score));
}
function decideFromScore(score) {
  if (typeof score !== "number" || !Number.isFinite(score)) {
    throw new TrustEvaluationError("decideFromScore: score must be a finite number");
  }
  if (score >= TRUST_DECISION_THRESHOLD) return "trust";
  if (score >= CHALLENGE_DECISION_THRESHOLD) return "challenge";
  return "reject";
}
function buildTrustScore(inputs, weights = DEFAULT_FACTOR_WEIGHTS) {
  const factors = computeFactors(inputs);
  const score = aggregateScore(factors, weights);
  const decision = decideFromScore(score);
  return { score, factors, decision };
}

// packages/attest/src/trust/evaluator.ts
var TrustEvaluator = class {
  weights;
  /**
   * @param weights - Per-factor weights. Renormalized to sum to 1.0 if they
   *   don't already (within a small epsilon). Defaults to
   *   {@link DEFAULT_FACTOR_WEIGHTS}.
   */
  constructor(weights = DEFAULT_FACTOR_WEIGHTS) {
    this.weights = normalizeWeights(weights);
  }
  /**
   * Return the active weights (post-normalization).
   */
  getWeights() {
    return { ...this.weights };
  }
  /**
   * Evaluate a trust score from raw inputs.
   *
   * @param inputs - The raw trust inputs.
   * @returns The computed {@link TrustScore}.
   */
  evaluate(inputs) {
    return buildTrustScore(inputs, this.weights);
  }
  /**
   * Re-evaluate a trust score from existing factors (skipping the
   * input → factor conversion). Useful for re-deciding an existing score
   * under new weights.
   *
   * @param factors - Pre-computed per-factor contributions.
   */
  evaluateFromFactors(factors) {
    const score = aggregateScore(factors, this.weights);
    const decision = decideFromScore(score);
    return { score, factors, decision };
  }
  /**
   * Compute only the per-factor contributions (without aggregating).
   * Useful for logging / dashboards.
   */
  factorize(inputs) {
    return computeFactors(inputs);
  }
};
function normalizeWeights(weights) {
  const w = { ...weights };
  for (const key of Object.keys(w)) {
    if (typeof w[key] !== "number" || !Number.isFinite(w[key]) || w[key] < 0) {
      throw new TrustEvaluationError(
        `normalizeWeights: weight ${key} must be a finite non-negative number`
      );
    }
  }
  const sum = w.fingerprintStability + w.hardware + w.attestation + w.sessionAge + w.priorInteractions;
  if (sum <= 0) {
    throw new TrustEvaluationError("normalizeWeights: weights must sum to > 0");
  }
  if (Math.abs(sum - 1) < 1e-9) return w;
  return {
    fingerprintStability: w.fingerprintStability / sum,
    hardware: w.hardware / sum,
    attestation: w.attestation / sum,
    sessionAge: w.sessionAge / sum,
    priorInteractions: w.priorInteractions / sum
  };
}
var defaultTrustEvaluator = new TrustEvaluator();

// packages/attest/src/workflow/policies.ts
var DEFAULT_POLICY_SESSION_TTL_MS = 60 * 60 * 1e3;
var DEFAULT_POLICY_ATTESTATION_FRESHNESS_MS = 5 * 60 * 1e3;
function defaultPolicy() {
  return {
    requireHardwareAttestation: false,
    minTrustScore: 0.5,
    sessionTtlMs: DEFAULT_POLICY_SESSION_TTL_MS,
    allowedFingerprintDrift: 0.2,
    attestationFreshnessMs: DEFAULT_POLICY_ATTESTATION_FRESHNESS_MS
  };
}
function strictPolicy() {
  return {
    requireHardwareAttestation: true,
    minTrustScore: 0.8,
    sessionTtlMs: 15 * 60 * 1e3,
    allowedFingerprintDrift: 0,
    attestationFreshnessMs: 60 * 1e3
  };
}
function validatePolicy(policy) {
  if (!policy || typeof policy !== "object") {
    throw new WorkflowError("validatePolicy: policy must be an object");
  }
  if (typeof policy.requireHardwareAttestation !== "boolean") {
    throw new WorkflowError("validatePolicy: requireHardwareAttestation must be boolean");
  }
  if (typeof policy.minTrustScore !== "number" || !Number.isFinite(policy.minTrustScore) || policy.minTrustScore < 0 || policy.minTrustScore > 1) {
    throw new WorkflowError(
      "validatePolicy: minTrustScore must be a finite number in [0, 1]"
    );
  }
  if (!Number.isInteger(policy.sessionTtlMs) || policy.sessionTtlMs <= 0) {
    throw new WorkflowError("validatePolicy: sessionTtlMs must be a positive integer");
  }
  if (typeof policy.allowedFingerprintDrift !== "number" || !Number.isFinite(policy.allowedFingerprintDrift) || policy.allowedFingerprintDrift < 0 || policy.allowedFingerprintDrift > 1) {
    throw new WorkflowError(
      "validatePolicy: allowedFingerprintDrift must be a finite number in [0, 1]"
    );
  }
  if (!Number.isInteger(policy.attestationFreshnessMs) || policy.attestationFreshnessMs <= 0) {
    throw new WorkflowError(
      "validatePolicy: attestationFreshnessMs must be a positive integer"
    );
  }
}
function buildPolicy(overrides = {}) {
  const merged = { ...defaultPolicy(), ...overrides };
  validatePolicy(merged);
  return merged;
}

// packages/attest/src/workflow/authenticator.ts
var AuthenticationWorkflow = class {
  policy;
  sessions;
  nonces;
  hardware;
  trust;
  logger;
  constructor(opts = {}) {
    this.policy = opts.policy ?? buildPolicy();
    validatePolicy(this.policy);
    this.sessions = opts.sessionManager ?? new SessionManager(new InMemorySessionStore(), this.policy.sessionTtlMs);
    this.nonces = opts.nonceStore ?? new NonceStore();
    this.hardware = opts.hardware ?? new HardwareValidator();
    this.trust = opts.trustEvaluator ?? defaultTrustEvaluator;
    this.logger = opts.logger ?? new SilentLogger2();
  }
  /**
   * VERIFIER SIDE: Issue a fresh challenge.
   *
   * The returned {@link Challenge} contains a nonce that is also tracked in
   * the workflow's internal {@link NonceStore}. The prover must echo the
   * nonce back in their response, and the verifier will consume (invalidate)
   * it during verification.
   *
   * @param ttlMs - Optional challenge TTL in milliseconds.
   */
  verifierIssueChallenge(ttlMs) {
    const challenge = generateChallenge({ ttlMs });
    const trackedNonce = this.nonces.issue({ ttlMs: ttlMs ?? 6e4 });
    return { ...challenge, nonce: trackedNonce };
  }
  /**
   * PROVER SIDE: Sign a challenge and produce an attestation quote.
   *
   * @param challenge - The challenge issued by the verifier.
   * @param inputs - Prover inputs (private key, fingerprint, etc.).
   * @returns The signed challenge response AND the attestation quote.
   */
  async proverRespond(challenge, inputs) {
    if (!challenge || typeof challenge !== "object") {
      throw new WorkflowError("proverRespond: challenge must be a Challenge object");
    }
    if (!inputs || typeof inputs !== "object") {
      throw new WorkflowError("proverRespond: inputs must be a ProverRespondInputs object");
    }
    const response = signChallenge(inputs.privateKey, challenge);
    const measurements = inputs.measurements ?? {};
    let hardware;
    try {
      hardware = this.hardware.probe();
    } catch {
      hardware = { tpm: false, secureEnclave: false, tee: false, details: "probe failed" };
    }
    const quote = produceAttestation(
      inputs.privateKey,
      inputs.deviceFingerprint,
      measurements,
      challenge.nonce,
      { hardware }
    );
    if (inputs.hardwareProvider) {
      try {
        const providerQuote = await inputs.hardwareProvider.attest(
          Buffer.from(inputs.deviceFingerprint, "utf8"),
          challenge.nonce
        );
        const mergedMeasurements = { ...measurements, ...providerQuote.measurements };
        const mergedHardware = providerQuote.hardware ?? hardware;
        const reSigned = produceAttestation(
          inputs.privateKey,
          inputs.deviceFingerprint,
          mergedMeasurements,
          challenge.nonce,
          { hardware: mergedHardware }
        );
        return { response, quote: reSigned };
      } catch (err) {
        this.logger.warn("proverRespond: hardware provider failed", {
          error: err.message
        });
      }
    }
    return { response, quote };
  }
  /**
   * VERIFIER SIDE: Verify a prover's response and establish a session.
   *
   * Steps:
   *   1. Consume the challenge nonce (single-use — replays fail here).
   *   2. Verify the signed challenge response (signature + nonce match).
   *   3. Verify the attestation quote (signature + freshness + nonce + fingerprint match).
   *   4. If `requireHardwareAttestation`, ensure the quote's hardware probe
   *      shows at least one root present.
   *   5. Compute the trust score.
   *   6. If `score >= policy.minTrustScore`, establish a session.
   *
   * @param inputs - Verifier inputs.
   * @returns The authentication result (success/failure + session/trust).
   */
  async verifierVerify(inputs) {
    if (!inputs || typeof inputs !== "object") {
      throw new WorkflowError("verifierVerify: inputs must be a VerifierVerifyInputs object");
    }
    const consumed = this.nonces.consume(inputs.challenge.nonce);
    if (!consumed) {
      return fail("nonce already consumed, unknown, or expired", this.trust, {
        fingerprintDrift: 1,
        hardwarePresent: false,
        attestationValid: false,
        sessionAgeMs: 0,
        priorInteractions: inputs.priorInteractions ?? 0
      });
    }
    const responseOk = verifyResponse(
      inputs.publicKey,
      inputs.challenge,
      inputs.response,
      inputs.challenge.nonce
    );
    if (!responseOk) {
      return fail("challenge response verification failed", this.trust, {
        fingerprintDrift: 1,
        hardwarePresent: false,
        attestationValid: false,
        sessionAgeMs: 0,
        priorInteractions: inputs.priorInteractions ?? 0
      });
    }
    const attestationOk = verifyAttestation(
      inputs.publicKey,
      inputs.quote,
      inputs.challenge.nonce,
      {
        expectedFingerprint: inputs.expectedFingerprint,
        freshnessMs: this.policy.attestationFreshnessMs
      }
    );
    if (!attestationOk) {
      return fail("attestation quote verification failed", this.trust, {
        fingerprintDrift: 1,
        hardwarePresent: false,
        attestationValid: false,
        sessionAgeMs: 0,
        priorInteractions: inputs.priorInteractions ?? 0
      });
    }
    const hardwarePresent = Boolean(
      inputs.quote.hardware && (inputs.quote.hardware.tpm || inputs.quote.hardware.secureEnclave || inputs.quote.hardware.tee)
    );
    if (this.policy.requireHardwareAttestation && !hardwarePresent) {
      return fail("policy requires hardware attestation but none is present", this.trust, {
        fingerprintDrift: 0,
        hardwarePresent: false,
        attestationValid: true,
        sessionAgeMs: 0,
        priorInteractions: inputs.priorInteractions ?? 0
      });
    }
    const trust = this.trust.evaluate({
      fingerprintDrift: 0,
      hardwarePresent,
      attestationValid: true,
      sessionAgeMs: 0,
      priorInteractions: inputs.priorInteractions ?? 0
    });
    if (trust.score < this.policy.minTrustScore) {
      return {
        success: false,
        trust,
        reason: `trust score ${trust.score.toFixed(3)} below policy minimum ${this.policy.minTrustScore.toFixed(3)}`
      };
    }
    const session = await this.sessions.establish(
      inputs.expectedFingerprint,
      inputs.identity,
      {
        ttlMs: this.policy.sessionTtlMs,
        boundNonce: inputs.challenge.nonce,
        trustScore: trust.score
      }
    );
    this.logger.info("attest: session established", {
      sessionId: session.sessionId,
      identity: inputs.identity,
      trustScore: trust.score
    });
    return { success: true, trust, session };
  }
  /**
   * Verify a previously-issued session token. Delegates to the underlying
   * {@link SessionManager}.
   */
  async verifySession(token) {
    return this.sessions.verify(token);
  }
  /**
   * Revoke a session. Delegates to the underlying {@link SessionManager}.
   */
  async revokeSession(token) {
    return this.sessions.revoke(token);
  }
  /**
   * Refresh a session. Delegates to the underlying {@link SessionManager}.
   */
  async refreshSession(token, ttlMs) {
    return this.sessions.refresh(token, ttlMs);
  }
  /**
   * Expose the underlying session manager (for diagnostics / admin tooling).
   */
  getSessionManager() {
    return this.sessions;
  }
  /**
   * Expose the underlying nonce store (for diagnostics / tests).
   */
  getNonceStore() {
    return this.nonces;
  }
};
function fail(reason, evaluator, inputs) {
  const trust = evaluator.evaluate(inputs);
  return { success: false, trust, reason };
}
function createSoftwareWorkflow(opts = {}) {
  const provider = new SoftwareAttestationProvider();
  return { workflow: new AuthenticationWorkflow(opts), provider };
}

// packages/ledger/src/errors.ts
var LedgerError = class extends Error {
  /** Stable machine-readable code, e.g. `CHAIN_ERROR`. */
  code;
  /** Optional underlying cause. */
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) {
      this.cause = cause;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var EventError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "EVENT_ERROR", cause);
  }
};
var ChainError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "CHAIN_ERROR", cause);
  }
};
var MerkleError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "MERKLE_ERROR", cause);
  }
};
var TimestampError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "TIMESTAMP_ERROR", cause);
  }
};
var StoreError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "STORE_ERROR", cause);
  }
};
var ReplayError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "REPLAY_ERROR", cause);
  }
};
var ExportError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "EXPORT_ERROR", cause);
  }
};
var TamperError = class extends LedgerError {
  constructor(message, cause) {
    super(message, "TAMPER_ERROR", cause);
  }
};

// packages/ledger/src/crypto/hashing.ts
var crypto17 = __toESM(require("crypto"));
function sha2563(data) {
  try {
    const buf = typeof data === "string" ? Buffer.from(data, "utf8") : data;
    return crypto17.createHash("sha256").update(buf).digest();
  } catch (err) {
    throw new LedgerError("sha256 failed: " + err.message, "HASH_ERROR", err);
  }
}
function secureRandom2(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new LedgerError("secureRandom: length must be a positive integer", "RANDOM_ERROR");
  }
  if (n > 1024 * 1024) {
    throw new LedgerError(
      "secureRandom: refusing to allocate > 1 MiB in a single call",
      "RANDOM_ERROR"
    );
  }
  try {
    return crypto17.randomBytes(n);
  } catch (err) {
    throw new LedgerError("secureRandom failed: " + err.message, "RANDOM_ERROR", err);
  }
}
function constantTimeEqual3(a, b) {
  if (a.length !== b.length) return false;
  return crypto17.timingSafeEqual(a, b);
}
function uuid2() {
  try {
    return crypto17.randomUUID();
  } catch (err) {
    throw new LedgerError("uuid failed: " + err.message, "UUID_ERROR", err);
  }
}
function sha256Hex(data) {
  return sha2563(data).toString("hex");
}

// packages/ledger/src/crypto/keys.ts
var crypto18 = __toESM(require("crypto"));
var DEFAULT_RSA_MODULUS3 = 3072;
var DEFAULT_RSA_EXPONENT3 = 65537;
var DEFAULT_EC_CURVE3 = "prime256v1";
function algorithmFor3(algo) {
  switch (algo) {
    case "rsa":
      return "rsa-pss";
    case "ecdsa":
      return "ecdsa-p256";
    default:
      throw new LedgerError(`unknown key algorithm: ${algo}`);
  }
}
function algorithmForKey2(key) {
  let type;
  try {
    type = key.asymmetricKeyType;
  } catch (err) {
    throw new LedgerError(
      "algorithmForKey: cannot read key type: " + err.message,
      "KEY_TYPE_ERROR",
      err
    );
  }
  if (type === "rsa") return "rsa-pss";
  if (type === "ec") {
    let details;
    try {
      details = key.asymmetricKeyDetails;
    } catch {
    }
    if (details && details.namedCurve) {
      const curve = details.namedCurve;
      if (curve !== "P-256" && curve !== "prime256v1" && curve !== "secp256r1") {
        throw new LedgerError(
          `algorithmForKey: only NIST P-256 is supported, got ${curve}`
        );
      }
    }
    return "ecdsa-p256";
  }
  throw new LedgerError(
    `algorithmForKey: unsupported key type: ${type ?? "unknown"} (only rsa and ec are supported)`
  );
}
function generateKeyPair3(algo = "ecdsa", opts = {}) {
  try {
    let publicKey;
    let privateKey;
    if (algo === "rsa") {
      ({ publicKey, privateKey } = crypto18.generateKeyPairSync("rsa", {
        modulusLength: opts.rsaModulusBits ?? DEFAULT_RSA_MODULUS3,
        publicExponent: opts.rsaPublicExponent ?? DEFAULT_RSA_EXPONENT3
      }));
    } else if (algo === "ecdsa") {
      const curve = opts.ecCurve ?? DEFAULT_EC_CURVE3;
      if (curve !== "prime256v1") {
        throw new LedgerError(
          `unsupported EC curve: ${curve}. Only 'prime256v1' (NIST P-256) is supported.`
        );
      }
      ({ publicKey, privateKey } = crypto18.generateKeyPairSync("ec", {
        namedCurve: curve
      }));
    } else {
      throw new LedgerError(`unknown key algorithm: ${algo}`);
    }
    return { publicKey, privateKey, algorithm: algorithmFor3(algo) };
  } catch (err) {
    if (err instanceof LedgerError) throw err;
    throw new LedgerError("key generation failed: " + err.message, "KEY_GENERATION_ERROR", err);
  }
}
function getKeyId(publicKey) {
  try {
    const keyObj = typeof publicKey === "string" ? crypto18.createPublicKey(publicKey) : publicKey;
    const der = keyObj.export({ type: "spki", format: "der" });
    return sha2563(der).toString("hex");
  } catch (err) {
    throw new LedgerError(
      "getKeyId failed: " + err.message,
      "KEY_ID_ERROR",
      err
    );
  }
}
function sign6(privateKey, data, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new LedgerError("sign: data must be a Buffer", "SIGN_ERROR");
  }
  const key = asPrivateKey3(privateKey);
  const resolvedAlgo = algo ?? algorithmForKey2(key);
  try {
    if (resolvedAlgo === "rsa-pss") {
      const sig = crypto18.sign(SIGN_HASH3, data, {
        key,
        padding: crypto18.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto18.constants.RSA_PSS_SALTLEN_DIGEST
      });
      return sig.toString("hex");
    }
    if (resolvedAlgo === "ecdsa-p256") {
      const sig = crypto18.sign(SIGN_HASH3, data, key);
      return sig.toString("hex");
    }
    throw new LedgerError(`unsupported signature algorithm: ${resolvedAlgo}`);
  } catch (err) {
    if (err instanceof LedgerError) throw err;
    throw new LedgerError("sign failed: " + err.message, "SIGN_ERROR", err);
  }
}
function verify6(publicKey, data, signature, algo) {
  if (!Buffer.isBuffer(data)) {
    throw new LedgerError("verify: data must be a Buffer", "VERIFY_ERROR");
  }
  let signatureBuf;
  if (typeof signature === "string") {
    if (signature.length === 0 || !/^[0-9a-fA-F]+$/.test(signature)) {
      throw new LedgerError("verify: signature must be non-empty hex", "VERIFY_ERROR");
    }
    try {
      signatureBuf = Buffer.from(signature, "hex");
    } catch {
      throw new LedgerError("verify: signature must be hex-encoded", "VERIFY_ERROR");
    }
  } else {
    signatureBuf = signature;
  }
  const key = asPublicKey3(publicKey);
  const resolvedAlgo = algo ?? algorithmForKey2(key);
  let ok;
  try {
    if (resolvedAlgo === "rsa-pss") {
      ok = crypto18.verify(
        SIGN_HASH3,
        data,
        {
          key,
          padding: crypto18.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto18.constants.RSA_PSS_SALTLEN_DIGEST
        },
        signatureBuf
      );
    } else if (resolvedAlgo === "ecdsa-p256") {
      ok = crypto18.verify(SIGN_HASH3, data, key, signatureBuf);
    } else {
      throw new LedgerError(`unsupported signature algorithm: ${resolvedAlgo}`);
    }
  } catch (err) {
    if (err instanceof LedgerError) throw err;
    return false;
  }
  const okByte = Buffer.from([ok ? 1 : 0]);
  const expected = Buffer.from([1]);
  return crypto18.timingSafeEqual(okByte, expected);
}
var SIGN_HASH3 = "sha256";
function asPublicKey3(key) {
  if (typeof key === "string") {
    try {
      return crypto18.createPublicKey(key);
    } catch (err) {
      throw new LedgerError(
        "invalid public key PEM: " + err.message,
        "VERIFY_ERROR",
        err
      );
    }
  }
  return key;
}
function asPrivateKey3(key) {
  if (typeof key === "string") {
    try {
      return crypto18.createPrivateKey(key);
    } catch (err) {
      throw new LedgerError(
        "invalid private key PEM: " + err.message,
        "SIGN_ERROR",
        err
      );
    }
  }
  return key;
}

// packages/ledger/src/event/codec.ts
function canonicalSerialize(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  const str = encode(value, seen);
  return Buffer.from(str, "utf8");
}
function canonicalSerializeToString(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  return encode(value, seen);
}
function encode(value, seen) {
  if (value === null) return "null";
  if (value === void 0) return "null";
  const t = typeof value;
  if (t === "string") return jsonString(value);
  if (t === "boolean") return value ? "true" : "false";
  if (t === "number") {
    if (!Number.isFinite(value)) {
      throw new LedgerError(
        "canonicalSerialize: NaN / Infinity are not JSON-representable",
        "CANONICAL_ENCODE_ERROR"
      );
    }
    return value.toString();
  }
  if (t === "bigint") {
    throw new LedgerError(
      "canonicalSerialize: bigint is not JSON-representable (wrap in a string)",
      "CANONICAL_ENCODE_ERROR"
    );
  }
  if (Buffer.isBuffer(value)) {
    return jsonString("@buffer:" + value.toString("hex"));
  }
  if (value instanceof Uint8Array) {
    return jsonString(
      "@buffer:" + Buffer.from(value).toString("hex")
    );
  }
  if (value instanceof Date) {
    return jsonString(value.toISOString());
  }
  if (Array.isArray(value)) {
    if (seen.has(value)) {
      throw new LedgerError("canonicalSerialize: cycle detected", "CANONICAL_ENCODE_ERROR");
    }
    seen.add(value);
    const items = value.map(
      (v) => v === void 0 ? "null" : encode(v, seen)
    );
    seen.delete(value);
    return "[" + items.join(",") + "]";
  }
  if (t === "object") {
    const obj = value;
    if (seen.has(obj)) {
      throw new LedgerError("canonicalSerialize: cycle detected", "CANONICAL_ENCODE_ERROR");
    }
    seen.add(obj);
    try {
      const keys = Object.keys(obj).sort();
      const pairs = [];
      for (const key of keys) {
        const v = obj[key];
        if (v === void 0) continue;
        pairs.push(jsonString(key) + ":" + encode(v, seen));
      }
      return "{" + pairs.join(",") + "}";
    } finally {
      seen.delete(obj);
    }
  }
  throw new LedgerError(
    `canonicalSerialize: unsupported value of type ${t}`,
    "CANONICAL_ENCODE_ERROR"
  );
}
function jsonString(s) {
  return JSON.stringify(s);
}

// packages/ledger/src/event/event.ts
var GENESIS_PREV_HASH = "0".repeat(64);
function computeEventHash(fields) {
  return sha2563(
    canonicalSerialize({
      id: fields.id,
      seq: fields.seq,
      type: fields.type,
      actor: fields.actor,
      payload: fields.payload,
      timestamp: fields.timestamp,
      prevHash: fields.prevHash
    })
  ).toString("hex");
}
function createEvent(opts) {
  if (!opts || typeof opts !== "object") {
    throw new EventError("createEvent: options are required");
  }
  if (typeof opts.type !== "string" || opts.type.length === 0) {
    throw new EventError("createEvent: type must be a non-empty string");
  }
  if (typeof opts.actor !== "string" || opts.actor.length === 0) {
    throw new EventError("createEvent: actor must be a non-empty string");
  }
  if (opts.payload === null || typeof opts.payload !== "object") {
    throw new EventError("createEvent: payload must be a JSON object");
  }
  if (Array.isArray(opts.payload)) {
    throw new EventError("createEvent: payload must be an object, not an array");
  }
  const id = opts.id ?? uuid2();
  if (typeof id !== "string" || id.length === 0) {
    throw new EventError("createEvent: id must be a non-empty string");
  }
  const seq = opts.seq ?? 1;
  if (!Number.isInteger(seq) || seq < 1) {
    throw new EventError("createEvent: seq must be a positive integer");
  }
  const timestamp = opts.timestamp ?? (/* @__PURE__ */ new Date()).toISOString();
  if (typeof timestamp !== "string" || timestamp.length === 0) {
    throw new EventError("createEvent: timestamp must be a non-empty string");
  }
  const prevHash = opts.prevHash ?? GENESIS_PREV_HASH;
  if (typeof prevHash !== "string" || !/^[0-9a-fA-F]*$/.test(prevHash)) {
    throw new EventError("createEvent: prevHash must be a hex string");
  }
  const metadata = opts.metadata === void 0 ? void 0 : { ...opts.metadata };
  try {
    canonicalSerialize({
      id,
      seq,
      type: opts.type,
      actor: opts.actor,
      payload: opts.payload,
      timestamp,
      prevHash
    });
    if (metadata !== void 0) canonicalSerialize(metadata);
  } catch (err) {
    throw new EventError(
      "createEvent: payload / metadata are not canonical-serializable: " + err.message,
      err
    );
  }
  const hash = computeEventHash({
    id,
    seq,
    type: opts.type,
    actor: opts.actor,
    payload: opts.payload,
    timestamp,
    prevHash
  });
  return {
    id,
    seq,
    type: opts.type,
    actor: opts.actor,
    payload: opts.payload,
    timestamp,
    prevHash,
    hash,
    ...metadata !== void 0 ? { metadata } : {}
  };
}
function signEvent(event, privateKey, algo) {
  if (!event || typeof event.hash !== "string" || event.hash.length !== 64) {
    throw new EventError("signEvent: event must have a valid 64-char hex hash");
  }
  let hashBytes;
  try {
    hashBytes = Buffer.from(event.hash, "hex");
  } catch (err) {
    throw new EventError("signEvent: cannot decode hash: " + err.message, err);
  }
  if (hashBytes.length !== 32) {
    throw new EventError("signEvent: hash must decode to 32 bytes");
  }
  let signature;
  let resolvedAlgo;
  try {
    resolvedAlgo = algo ?? inferAlgorithmFromKey(privateKey);
    signature = sign6(privateKey, hashBytes, resolvedAlgo);
  } catch (err) {
    if (err instanceof EventError) throw err;
    throw new EventError("signEvent failed: " + err.message, err);
  }
  return { ...event, signature, signatureAlgorithm: resolvedAlgo };
}
function verifyEventSignature(event, publicKey, allowUnsigned = false) {
  if (!event || typeof event.hash !== "string" || event.hash.length !== 64) {
    throw new EventError("verifyEventSignature: event must have a valid 64-char hex hash");
  }
  if (!event.signature) {
    return allowUnsigned;
  }
  let hashBytes;
  try {
    hashBytes = Buffer.from(event.hash, "hex");
  } catch (err) {
    throw new EventError(
      "verifyEventSignature: cannot decode hash: " + err.message,
      err
    );
  }
  if (hashBytes.length !== 32) {
    throw new EventError("verifyEventSignature: hash must decode to 32 bytes");
  }
  let sigBytes;
  try {
    sigBytes = Buffer.from(event.signature, "hex");
  } catch (err) {
    throw new EventError(
      "verifyEventSignature: cannot decode signature: " + err.message,
      err
    );
  }
  try {
    return verify6(publicKey, hashBytes, sigBytes, event.signatureAlgorithm);
  } catch (err) {
    if (err instanceof EventError) throw err;
    throw new EventError(
      "verifyEventSignature failed: " + err.message,
      err
    );
  }
}
function eventKeyId(publicKey) {
  return getKeyId(publicKey);
}
function inferAlgorithmFromKey(privateKey) {
  if (typeof privateKey !== "string") {
    try {
      const type = privateKey.asymmetricKeyType;
      if (type === "rsa") return "rsa-pss";
      if (type === "ec") return "ecdsa-p256";
    } catch {
    }
    return "ecdsa-p256";
  }
  if (/BEGIN RSA PRIVATE KEY/.test(privateKey)) return "rsa-pss";
  return "ecdsa-p256";
}

// packages/ledger/src/chain/chain.ts
var LedgerChain = class {
  events = [];
  /**
   * Append a new event to the chain.
   *
   * @param type - Event type.
   * @param actor - Actor identifier.
   * @param payload - Event payload (JSON-serializable).
   * @param opts - Optional parameters.
   * @returns The newly appended event (with `hash`, `prevHash`, and optional `signature`).
   */
  append(type, actor, payload, opts = {}) {
    if (typeof type !== "string" || type.length === 0) {
      throw new ChainError("append: type must be a non-empty string");
    }
    if (typeof actor !== "string" || actor.length === 0) {
      throw new ChainError("append: actor must be a non-empty string");
    }
    if (payload === null || typeof payload !== "object" || Array.isArray(payload)) {
      throw new ChainError("append: payload must be a JSON object");
    }
    const seq = this.events.length + 1;
    const prevHash = this.events.length === 0 ? GENESIS_PREV_HASH : this.events[this.events.length - 1].hash;
    let event = createEvent({
      type,
      actor,
      payload,
      seq,
      prevHash,
      ...opts.id !== void 0 ? { id: opts.id } : {},
      ...opts.timestamp !== void 0 ? { timestamp: opts.timestamp } : {},
      ...opts.metadata !== void 0 ? { metadata: opts.metadata } : {}
    });
    if (opts.privateKey !== void 0) {
      event = signEvent(event, opts.privateKey, opts.signatureAlgorithm);
    }
    this.events.push(event);
    return event;
  }
  /**
   * Append an already-constructed event (e.g. one received via sync).
   *
   * The event's `seq` MUST be `length() + 1` and its `prevHash` MUST equal
   * the current tail's `hash` (or {@link GENESIS_PREV_HASH} for the genesis).
   *
   * @param event - Pre-built event.
   * @returns The event (unchanged).
   * @throws {@link ChainError} if the event does not chain to the current tail.
   */
  appendEvent(event) {
    if (!event || typeof event.seq !== "number" || typeof event.hash !== "string") {
      throw new ChainError("appendEvent: event is malformed");
    }
    const expectedSeq = this.events.length + 1;
    if (event.seq !== expectedSeq) {
      throw new ChainError(
        `appendEvent: expected seq=${expectedSeq}, got seq=${event.seq}`
      );
    }
    const expectedPrev = this.events.length === 0 ? GENESIS_PREV_HASH : this.events[this.events.length - 1].hash;
    if (event.prevHash !== expectedPrev) {
      throw new ChainError(
        "appendEvent: prevHash does not chain to current tail"
      );
    }
    this.events.push(event);
    return event;
  }
  /**
   * Get the event at 1-based sequence number `seq`.
   * @returns The event, or `undefined` if out of range.
   */
  get(seq) {
    if (!Number.isInteger(seq) || seq < 1 || seq > this.events.length) return void 0;
    return this.events[seq - 1];
  }
  /**
   * Get the event with id `id`, if any.
   */
  getById(id) {
    return this.events.find((e) => e.id === id);
  }
  /** Get all events (a shallow copy of the underlying array). */
  all() {
    return this.events.slice();
  }
  /** Number of events in the chain. */
  length() {
    return this.events.length;
  }
  /** The first event in the chain, or `undefined` if empty. */
  head() {
    return this.events.length === 0 ? void 0 : this.events[0];
  }
  /** The last event in the chain, or `undefined` if empty. */
  tail() {
    return this.events.length === 0 ? void 0 : this.events[this.events.length - 1];
  }
  /** Replace the chain's contents with `events`. Used by restore paths. */
  replaceAll(events) {
    if (!Array.isArray(events)) {
      throw new ChainError("replaceAll: events must be an array");
    }
    this.events.length = 0;
    for (const e of events) this.events.push(e);
  }
};

// packages/ledger/src/chain/verify.ts
function verifyChain(events, opts = {}) {
  if (!Array.isArray(events)) {
    return {
      valid: false,
      firstBrokenIndex: void 0,
      reason: "verifyChain: events must be an array"
    };
  }
  if (events.length === 0) {
    return { valid: true };
  }
  const {
    publicKeys,
    requireSignatures = false,
    checkTimestamps = true,
    checkSeqContiguity = true
  } = opts;
  let prevHash = GENESIS_PREV_HASH;
  let prevTs = void 0;
  for (let i = 0; i < events.length; i++) {
    const ev = events[i];
    if (!ev || typeof ev !== "object") {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: not a LedgerEvent object`
      };
    }
    if (checkSeqContiguity && ev.seq !== i + 1) {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: expected seq=${i + 1}, got seq=${ev.seq}`
      };
    }
    if (ev.prevHash !== prevHash) {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: prevHash does not chain to previous event's hash`
      };
    }
    let recomputed;
    try {
      recomputed = computeEventHash({
        id: ev.id,
        seq: ev.seq,
        type: ev.type,
        actor: ev.actor,
        payload: ev.payload,
        timestamp: ev.timestamp,
        prevHash: ev.prevHash
      });
    } catch (err) {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: cannot recompute hash: ${err.message}`
      };
    }
    if (recomputed !== ev.hash) {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: hash mismatch (stored=${ev.hash}, recomputed=${recomputed})`
      };
    }
    if (checkTimestamps) {
      let ts;
      try {
        ts = Date.parse(ev.timestamp);
      } catch {
        ts = NaN;
      }
      if (Number.isNaN(ts)) {
        return {
          valid: false,
          firstBrokenIndex: i,
          reason: `event ${i}: timestamp is not a valid ISO-8601 string`
        };
      }
      if (prevTs !== void 0 && ts < prevTs) {
        return {
          valid: false,
          firstBrokenIndex: i,
          reason: `event ${i}: timestamp ${ev.timestamp} is before previous event's timestamp`
        };
      }
      prevTs = ts;
    }
    if (requireSignatures && !ev.signature) {
      return {
        valid: false,
        firstBrokenIndex: i,
        reason: `event ${i}: signature required but missing`
      };
    }
    if (publicKeys && ev.actor in publicKeys) {
      const pub = publicKeys[ev.actor];
      if (ev.signature) {
        let ok;
        try {
          ok = verifyEventSignature(ev, pub, false);
        } catch (err) {
          return {
            valid: false,
            firstBrokenIndex: i,
            reason: `event ${i}: signature verification threw: ${err.message}`
          };
        }
        if (!ok) {
          return {
            valid: false,
            firstBrokenIndex: i,
            reason: `event ${i}: signature does not verify against actor's public key`
          };
        }
      } else if (requireSignatures) {
        return {
          valid: false,
          firstBrokenIndex: i,
          reason: `event ${i}: signature required but missing`
        };
      }
    } else if (requireSignatures && !publicKeys) {
    }
    prevHash = ev.hash;
  }
  return { valid: true };
}

// packages/ledger/src/merkle/proof.ts
var crypto19 = __toESM(require("crypto"));
function verifyProof(leaf, proof, root) {
  if (!Buffer.isBuffer(leaf) || !Buffer.isBuffer(root)) {
    throw new MerkleError("verifyProof: leaf and root must be Buffers");
  }
  if (!proof || !Array.isArray(proof.siblings)) {
    throw new MerkleError("verifyProof: proof.siblings must be an array");
  }
  let acc = Buffer.from(leaf);
  for (const step of proof.siblings) {
    if (!step || !Buffer.isBuffer(step.hash)) {
      throw new MerkleError("verifyProof: each sibling must have a Buffer hash");
    }
    if (step.side !== "left" && step.side !== "right") {
      throw new MerkleError('verifyProof: sibling.side must be "left" or "right"');
    }
    if (step.side === "left") {
      acc = sha2563(Buffer.concat([INNER_PREFIX, step.hash, acc]));
    } else {
      acc = sha2563(Buffer.concat([INNER_PREFIX, acc, step.hash]));
    }
  }
  if (acc.length !== root.length) return false;
  return crypto19.timingSafeEqual(acc, root);
}
var INNER_PREFIX = Buffer.from([1]);

// packages/ledger/src/merkle/tree.ts
var LEAF_PREFIX = Buffer.from([0]);
var INNER_PREFIX2 = Buffer.from([1]);
var MerkleTree = class _MerkleTree {
  constructor(levels, leafCount) {
    this.levels = levels;
    this.leafCount = leafCount;
  }
  levels;
  leafCount;
  /**
   * Build a Merkle tree from raw leaf bytes.
   *
   * Each leaf is hashed with the RFC 6962 leaf prefix (`H(0x00 || leaf)`).
   * Empty input is rejected.
   *
   * @param leaves - Raw leaf bytes (non-empty array of Buffers).
   * @returns A built Merkle tree.
   * @throws {@link MerkleError} if `leaves` is empty or contains non-Buffer values.
   */
  static build(leaves) {
    if (!Array.isArray(leaves) || leaves.length === 0) {
      throw new MerkleError("MerkleTree.build: leaves must be a non-empty array");
    }
    for (let i = 0; i < leaves.length; i++) {
      if (!Buffer.isBuffer(leaves[i])) {
        throw new MerkleError(`MerkleTree.build: leaf ${i} is not a Buffer`);
      }
    }
    let level = leaves.map(
      (l) => sha2563(Buffer.concat([LEAF_PREFIX, l]))
    );
    const levels = [level];
    while (level.length > 1) {
      const next = [];
      const padded = level.length % 2 === 1 ? [...level, level[level.length - 1]] : level;
      for (let i = 0; i < padded.length; i += 2) {
        next.push(
          sha2563(Buffer.concat([INNER_PREFIX2, padded[i], padded[i + 1]]))
        );
      }
      levels.push(next);
      level = next;
    }
    return new _MerkleTree(levels, leaves.length);
  }
  /** The Merkle root (32-byte SHA-256 digest). */
  root() {
    const top = this.levels[this.levels.length - 1];
    return Buffer.from(top[0]);
  }
  /**
   * Produce an inclusion proof for the leaf at `index`.
   *
   * @param index - 0-based leaf index.
   * @returns A {@link MerkleProof} (index + siblings).
   * @throws {@link MerkleError} if `index` is out of range.
   */
  getProof(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.leafCount) {
      throw new MerkleError(
        `getProof: index ${index} out of range [0, ${this.leafCount})`
      );
    }
    const siblings = [];
    let idx = index;
    for (let level = 0; level < this.levels.length - 1; level++) {
      const nodes = this.levels[level];
      const siblingIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
      let siblingHash;
      if (siblingIdx < nodes.length) {
        siblingHash = nodes[siblingIdx];
      } else {
        siblingHash = nodes[idx];
      }
      const side = idx % 2 === 0 ? "right" : "left";
      siblings.push({ hash: Buffer.from(siblingHash), side });
      idx = Math.floor(idx / 2);
    }
    return { index, siblings };
  }
  /**
   * Verify an inclusion proof against this tree's root.
   *
   * Convenience wrapper around {@link verifyProof} that uses the tree's root.
   *
   * @param leaf - The original leaf bytes.
   * @param proof - The inclusion proof.
   * @returns `true` iff the proof reconstructs the tree's root.
   */
  verifyProof(leaf, proof) {
    return verifyProof(leaf, proof, this.root());
  }
};

// packages/ledger/src/timestamp/authority.ts
var LocalTimestampAuthority = class {
  privateKey;
  publicKey;
  algorithm;
  keyId;
  constructor(opts = {}) {
    if (opts.keypair) {
      this.privateKey = opts.keypair.privateKey;
      this.publicKey = opts.keypair.publicKey;
      this.algorithm = opts.keypair.algorithm;
    } else {
      const kp = generateKeyPair3("ecdsa");
      this.privateKey = kp.privateKey;
      this.publicKey = kp.publicKey;
      this.algorithm = kp.algorithm;
    }
    try {
      this.keyId = getKeyId(this.publicKey);
    } catch (err) {
      throw new TimestampError(
        "LocalTimestampAuthority: cannot compute key id: " + err.message,
        err
      );
    }
  }
  /** @inheritdoc */
  issue(commitment) {
    if (Buffer.isBuffer(commitment)) {
      if (commitment.length === 0) {
        throw new TimestampError("issue: commitment must be non-empty");
      }
    } else if (typeof commitment === "string") {
      if (commitment.length === 0) {
        throw new TimestampError("issue: commitment must be non-empty");
      }
    } else {
      throw new TimestampError("issue: commitment must be a Buffer or hex string");
    }
    const commitmentHex = Buffer.isBuffer(commitment) ? commitment.toString("hex") : commitment;
    const issuedAt = (/* @__PURE__ */ new Date()).toISOString();
    const canonical = Buffer.from(
      `${TIMESTAMP_TOKEN_VERSION}|${commitmentHex}|${issuedAt}|${this.keyId}`,
      "utf8"
    );
    let signature;
    try {
      signature = sign6(this.privateKey, canonical, this.algorithm);
    } catch (err) {
      throw new TimestampError(
        "issue: signing failed: " + err.message,
        err
      );
    }
    return {
      version: TIMESTAMP_TOKEN_VERSION,
      commitment: commitmentHex,
      issuedAt,
      signature,
      algorithm: this.algorithm,
      authorityKeyId: this.keyId
    };
  }
  /** @inheritdoc */
  getPublicKey() {
    return this.publicKey;
  }
  /** @inheritdoc */
  getKeyId() {
    return this.keyId;
  }
  /** @inheritdoc */
  getAlgorithm() {
    return this.algorithm;
  }
};
var TIMESTAMP_TOKEN_VERSION = 1;
function canonicalTimestampBytes(token) {
  return Buffer.from(
    `${token.version}|${token.commitment}|${token.issuedAt}|${token.authorityKeyId}`,
    "utf8"
  );
}

// packages/ledger/src/timestamp/timestamp.ts
var COMMITMENT_NONCE_BYTES = 32;
var COMMITMENT_BYTES = 32;
function commit(value) {
  if (!Buffer.isBuffer(value) || value.length === 0) {
    throw new TimestampError("commit: value must be a non-empty Buffer");
  }
  const nonce = secureRandom2(COMMITMENT_NONCE_BYTES);
  const commitment = sha2563(Buffer.concat([value, nonce]));
  return { commitment, nonce };
}
function reveal(value, nonce, commitment) {
  if (!Buffer.isBuffer(value) || !Buffer.isBuffer(nonce) || !Buffer.isBuffer(commitment)) {
    return false;
  }
  if (nonce.length !== COMMITMENT_NONCE_BYTES) return false;
  if (commitment.length !== COMMITMENT_BYTES) return false;
  const recomputed = sha2563(Buffer.concat([value, nonce]));
  return constantTimeEqual3(recomputed, commitment);
}
function issueTimestamp(commitment, authority) {
  if (!authority || typeof authority.issue !== "function") {
    throw new TimestampError("issueTimestamp: authority must have an issue() method");
  }
  return authority.issue(commitment);
}
function verifyTimestamp(token, authorityPublicKey) {
  if (!token || typeof token !== "object") return false;
  if (token.version !== TIMESTAMP_TOKEN_VERSION) return false;
  if (typeof token.commitment !== "string" || token.commitment.length === 0) return false;
  if (typeof token.issuedAt !== "string" || token.issuedAt.length === 0) return false;
  if (typeof token.signature !== "string" || token.signature.length === 0) return false;
  if (typeof token.authorityKeyId !== "string" || token.authorityKeyId.length === 0) {
    return false;
  }
  let sigBytes;
  try {
    sigBytes = Buffer.from(token.signature, "hex");
  } catch {
    return false;
  }
  const canonical = canonicalTimestampBytes(token);
  try {
    return verify6(
      authorityPublicKey,
      canonical,
      sigBytes,
      token.algorithm
    );
  } catch {
    return false;
  }
}

// packages/ledger/src/replay/replay.ts
var EventReplayer = class {
  /**
   * @param events - The events to replay. The replayer does NOT take ownership
   *                 of the array (it iterates lazily) — pass a snapshot if
   *                 the underlying store may mutate during replay.
   */
  constructor(events) {
    this.events = events;
    if (events === null || events === void 0) {
      throw new ReplayError("EventReplayer: events are required");
    }
  }
  events;
  /**
   * Iterate over events matching `filter`. Returns an iterable suitable for
   * `for...of` loops or spread into an array.
   *
   * @param filter - Optional filter.
   * @returns An iterable of matching events.
   */
  *replay(filter = {}) {
    const fromSeq = filter.fromSeq ?? 1;
    const toSeq = filter.toSeq ?? Number.MAX_SAFE_INTEGER;
    if (!Number.isInteger(fromSeq) || fromSeq < 1) {
      throw new ReplayError(`replay: fromSeq must be a positive integer, got ${fromSeq}`);
    }
    if (!Number.isInteger(toSeq) || toSeq < fromSeq) {
      throw new ReplayError(
        `replay: toSeq must be >= fromSeq (${fromSeq}), got ${toSeq}`
      );
    }
    const fromTimeMs = filter.fromTime !== void 0 ? parseTime(filter.fromTime) : -Infinity;
    const toTimeMs = filter.toTime !== void 0 ? parseTime(filter.toTime) : Infinity;
    if (Number.isNaN(fromTimeMs)) {
      throw new ReplayError("replay: fromTime is not a valid timestamp");
    }
    if (Number.isNaN(toTimeMs)) {
      throw new ReplayError("replay: toTime is not a valid timestamp");
    }
    let i = 0;
    for (const ev of this.events) {
      i++;
      if (ev.seq < fromSeq || ev.seq > toSeq) continue;
      if (filter.type !== void 0 && ev.type !== filter.type) continue;
      if (filter.actor !== void 0 && ev.actor !== filter.actor) continue;
      const tsMs = Date.parse(ev.timestamp);
      if (Number.isNaN(tsMs)) continue;
      if (tsMs < fromTimeMs || tsMs > toTimeMs) continue;
      yield ev;
    }
  }
  /**
   * Fold matching events through `reducer` to build a projection.
   *
   * @param reducer - Folding function `(state, event) => newState`.
   * @param initialState - Initial state passed to the first reducer call.
   * @param filter - Optional filter applied before folding.
   * @returns The final state.
   */
  project(reducer, initialState, filter = {}) {
    if (typeof reducer !== "function") {
      throw new ReplayError("project: reducer must be a function");
    }
    let state = initialState;
    for (const ev of this.replay(filter)) {
      try {
        state = reducer(state, ev);
      } catch (err) {
        throw new ReplayError(
          "project: reducer threw at seq=" + ev.seq + ": " + err.message,
          err
        );
      }
    }
    return state;
  }
};
function parseTime(t) {
  if (typeof t === "number") return t;
  return Date.parse(t);
}

// packages/ledger/src/store/memory.ts
var InMemoryLedgerStore = class {
  events = [];
  byId = /* @__PURE__ */ new Map();
  /** @inheritdoc */
  append(event) {
    if (!event || typeof event !== "object") {
      throw new StoreError("append: event must be a LedgerEvent object");
    }
    if (typeof event.seq !== "number" || typeof event.id !== "string") {
      throw new StoreError("append: event is malformed");
    }
    if (event.seq !== this.events.length + 1) {
      throw new StoreError(
        `append: expected seq=${this.events.length + 1}, got seq=${event.seq}`
      );
    }
    if (this.byId.has(event.id)) {
      throw new StoreError(`append: duplicate event id ${event.id}`);
    }
    const clone = cloneEvent(event);
    this.events.push(clone);
    this.byId.set(clone.id, clone);
  }
  /** @inheritdoc */
  get(seq) {
    if (!Number.isInteger(seq) || seq < 1 || seq > this.events.length) return void 0;
    return cloneEvent(this.events[seq - 1]);
  }
  /** @inheritdoc */
  getById(id) {
    const ev = this.byId.get(id);
    return ev ? cloneEvent(ev) : void 0;
  }
  /** @inheritdoc */
  length() {
    return this.events.length;
  }
  /** @inheritdoc */
  all() {
    return this.events.map(cloneEvent);
  }
  /** @inheritdoc */
  snapshot() {
    return this.events.map(cloneEvent);
  }
  /** @inheritdoc */
  restore(events) {
    if (!Array.isArray(events)) {
      throw new StoreError("restore: events must be an array");
    }
    this.events.length = 0;
    this.byId.clear();
    for (let i = 0; i < events.length; i++) {
      const ev = events[i];
      if (!ev || typeof ev !== "object") {
        throw new StoreError(`restore: event ${i} is malformed`);
      }
      if (ev.seq !== i + 1) {
        throw new StoreError(
          `restore: event ${i} has seq=${ev.seq}, expected ${i + 1}`
        );
      }
      if (this.byId.has(ev.id)) {
        throw new StoreError(`restore: duplicate event id ${ev.id}`);
      }
      const clone = cloneEvent(ev);
      this.events.push(clone);
      this.byId.set(clone.id, clone);
    }
  }
};
function cloneEvent(event) {
  try {
    return JSON.parse(JSON.stringify(event));
  } catch (err) {
    throw new StoreError(
      "cloneEvent: event is not JSON-serializable: " + err.message,
      err
    );
  }
}

// packages/ledger/src/store/file.ts
var fs4 = __toESM(require("fs"));
var path4 = __toESM(require("path"));
var DEFAULT_COMPACT_THRESHOLD_BYTES = 1024 * 1024;
var FileLedgerStore = class {
  events = [];
  byId = /* @__PURE__ */ new Map();
  dataPath;
  indexPath;
  compactThreshold;
  /**
   * Open (or create) a file-backed store.
   *
   * @param dir - Directory holding the data + index files.
   * @param name - Base name (without extension).
   * @param opts - Optional parameters.
   */
  constructor(dir, name = "ledger", opts = {}) {
    if (typeof dir !== "string" || dir.length === 0) {
      throw new StoreError("FileLedgerStore: dir must be a non-empty string");
    }
    if (typeof name !== "string" || name.length === 0) {
      throw new StoreError("FileLedgerStore: name must be a non-empty string");
    }
    this.dataPath = path4.join(dir, `${name}.jsonl`);
    this.indexPath = path4.join(dir, `${name}.idx.json`);
    this.compactThreshold = opts.compactThresholdBytes ?? DEFAULT_COMPACT_THRESHOLD_BYTES;
    try {
      if (!fs4.existsSync(dir)) {
        fs4.mkdirSync(dir, { recursive: true });
      }
    } catch (err) {
      throw new StoreError(
        "FileLedgerStore: cannot create directory: " + err.message,
        err
      );
    }
    if (opts.load !== false) {
      this.load();
    }
  }
  /** @inheritdoc */
  append(event) {
    if (!event || typeof event !== "object") {
      throw new StoreError("append: event must be a LedgerEvent object");
    }
    if (typeof event.seq !== "number" || typeof event.id !== "string") {
      throw new StoreError("append: event is malformed");
    }
    if (event.seq !== this.events.length + 1) {
      throw new StoreError(
        `append: expected seq=${this.events.length + 1}, got seq=${event.seq}`
      );
    }
    if (this.byId.has(event.id)) {
      throw new StoreError(`append: duplicate event id ${event.id}`);
    }
    const clone = cloneEvent(event);
    const line = JSON.stringify(clone) + "\n";
    try {
      fs4.appendFileSync(this.dataPath, line, { encoding: "utf8" });
    } catch (err) {
      throw new StoreError(
        "append: write failed: " + err.message,
        err
      );
    }
    this.events.push(clone);
    this.byId.set(clone.id, clone);
    try {
      const stat = fs4.statSync(this.dataPath);
      if (stat.size > this.compactThreshold) {
        this.compact();
      }
    } catch {
    }
  }
  /** @inheritdoc */
  get(seq) {
    if (!Number.isInteger(seq) || seq < 1 || seq > this.events.length) return void 0;
    return cloneEvent(this.events[seq - 1]);
  }
  /** @inheritdoc */
  getById(id) {
    const ev = this.byId.get(id);
    return ev ? cloneEvent(ev) : void 0;
  }
  /** @inheritdoc */
  length() {
    return this.events.length;
  }
  /** @inheritdoc */
  all() {
    return this.events.map(cloneEvent);
  }
  /** @inheritdoc */
  snapshot() {
    return this.events.map(cloneEvent);
  }
  /** @inheritdoc */
  restore(events) {
    if (!Array.isArray(events)) {
      throw new StoreError("restore: events must be an array");
    }
    this.events.length = 0;
    this.byId.clear();
    for (let i = 0; i < events.length; i++) {
      const ev = events[i];
      if (!ev || typeof ev !== "object") {
        throw new StoreError(`restore: event ${i} is malformed`);
      }
      if (ev.seq !== i + 1) {
        throw new StoreError(
          `restore: event ${i} has seq=${ev.seq}, expected ${i + 1}`
        );
      }
      if (this.byId.has(ev.id)) {
        throw new StoreError(`restore: duplicate event id ${ev.id}`);
      }
      const clone = cloneEvent(ev);
      this.events.push(clone);
      this.byId.set(clone.id, clone);
    }
    this.compact();
  }
  /** Path to the JSONL data file (exposed for tests + tooling). */
  getDataPath() {
    return this.dataPath;
  }
  /** Path to the sidecar index file (exposed for tests + tooling). */
  getIndexPath() {
    return this.indexPath;
  }
  /**
   * Rewrite the data file from the in-memory state. Also rewrites the
   * sidecar index. Use after bulk in-memory mutations.
   */
  compact() {
    try {
      const lines = this.events.map((e) => JSON.stringify(e)).join("\n") + "\n";
      const tmp = this.dataPath + ".tmp";
      fs4.writeFileSync(tmp, lines, { encoding: "utf8" });
      fs4.renameSync(tmp, this.dataPath);
      const idx = {};
      this.events.forEach((e, i) => {
        idx[e.id] = i + 1;
      });
      const idxTmp = this.indexPath + ".tmp";
      fs4.writeFileSync(idxTmp, JSON.stringify(idx), { encoding: "utf8" });
      fs4.renameSync(idxTmp, this.indexPath);
    } catch (err) {
      throw new StoreError(
        "compact failed: " + err.message,
        err
      );
    }
  }
  /** Load events from the data file (called by the constructor). */
  load() {
    if (!fs4.existsSync(this.dataPath)) return;
    let content;
    try {
      content = fs4.readFileSync(this.dataPath, "utf8");
    } catch (err) {
      throw new StoreError(
        "load: cannot read data file: " + err.message,
        err
      );
    }
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length === 0) continue;
      let ev;
      try {
        ev = JSON.parse(line);
      } catch (err) {
        throw new StoreError(
          `load: cannot parse line ${i + 1}: ${err.message}`,
          err
        );
      }
      if (!ev || typeof ev !== "object") {
        throw new StoreError(`load: line ${i + 1} is not an object`);
      }
      if (ev.seq !== this.events.length + 1) {
        throw new StoreError(
          `load: line ${i + 1} has seq=${ev.seq}, expected ${this.events.length + 1}`
        );
      }
      if (this.byId.has(ev.id)) {
        throw new StoreError(`load: duplicate event id ${ev.id}`);
      }
      const clone = cloneEvent(ev);
      this.events.push(clone);
      this.byId.set(clone.id, clone);
    }
  }
};

// packages/ledger/src/export/exporter.ts
function exportAuditLog(events, format, opts = {}) {
  if (!Array.isArray(events)) {
    throw new ExportError("exportAuditLog: events must be an array");
  }
  const filtered = opts.filter ? events.filter(opts.filter) : events;
  const includeSigs = opts.includeSignatureFields !== false;
  switch (format) {
    case "json":
      return exportJson(filtered, includeSigs);
    case "jsonl":
      return exportJsonl(filtered, includeSigs);
    case "csv":
      return exportCsv(filtered, includeSigs, opts.maxCsvPayloadColumns ?? 64);
    default:
      throw new ExportError(`exportAuditLog: unknown format "${format}"`);
  }
}
function importJsonl(jsonl) {
  if (typeof jsonl !== "string") {
    throw new ExportError("importJsonl: input must be a string");
  }
  const lines = jsonl.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length === 0) continue;
    let ev;
    try {
      ev = JSON.parse(line);
    } catch (err) {
      throw new ExportError(
        `importJsonl: cannot parse line ${i + 1}: ${err.message}`,
        err
      );
    }
    out.push(ev);
  }
  return out;
}
function exportJson(events, includeSigs) {
  return JSON.stringify(events.map((e) => projectEvent(e, includeSigs)), null, 2);
}
function exportJsonl(events, includeSigs) {
  return events.map((e) => JSON.stringify(projectEvent(e, includeSigs))).join("\n") + (events.length ? "\n" : "");
}
function exportCsv(events, includeSigs, maxPayloadCols) {
  const baseCols = ["seq", "type", "actor", "timestamp", "hash", "prevHash"];
  const sigCols = includeSigs ? ["signature", "signatureAlgorithm"] : [];
  const payloadKeys = [];
  const seen = /* @__PURE__ */ new Set();
  for (const ev of events) {
    if (ev.payload && typeof ev.payload === "object") {
      for (const k of Object.keys(ev.payload)) {
        if (!seen.has(k)) {
          seen.add(k);
          payloadKeys.push(k);
        }
      }
    }
  }
  const payloadCols = payloadKeys.slice(0, maxPayloadCols);
  const hasPayloadExtra = payloadKeys.length > payloadCols.length;
  const header = [
    ...baseCols,
    ...payloadCols,
    ...hasPayloadExtra ? ["payload_extra"] : [],
    ...sigCols,
    "id"
  ];
  const rows = [header.map(csvEscape).join(",")];
  for (const ev of events) {
    const row = [];
    row.push(String(ev.seq));
    row.push(csvEscape(ev.type));
    row.push(csvEscape(ev.actor));
    row.push(csvEscape(ev.timestamp));
    row.push(csvEscape(ev.hash));
    row.push(csvEscape(ev.prevHash));
    for (const k of payloadCols) {
      const v = ev.payload?.[k];
      row.push(csvEscape(v === void 0 ? "" : typeof v === "string" ? v : JSON.stringify(v)));
    }
    if (hasPayloadExtra) {
      const extra = {};
      for (const k of payloadKeys.slice(maxPayloadCols)) {
        extra[k] = ev.payload[k];
      }
      row.push(csvEscape(JSON.stringify(extra)));
    }
    if (includeSigs) {
      row.push(csvEscape(ev.signature ?? ""));
      row.push(csvEscape(ev.signatureAlgorithm ?? ""));
    }
    row.push(csvEscape(ev.id));
    rows.push(row.join(","));
  }
  return rows.join("\n") + (rows.length ? "\n" : "");
}
function projectEvent(ev, includeSigs) {
  const out = {
    id: ev.id,
    seq: ev.seq,
    type: ev.type,
    actor: ev.actor,
    payload: ev.payload,
    timestamp: ev.timestamp,
    prevHash: ev.prevHash,
    hash: ev.hash
  };
  if (includeSigs && ev.signature !== void 0) out.signature = ev.signature;
  if (includeSigs && ev.signatureAlgorithm !== void 0) {
    out.signatureAlgorithm = ev.signatureAlgorithm;
  }
  if (ev.metadata !== void 0) out.metadata = ev.metadata;
  return out;
}
function csvEscape(value) {
  if (value === null || value === void 0) return "";
  const s = typeof value === "string" ? value : String(value);
  if (/[",\r\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

// packages/anonymize/src/errors.ts
var AnonymizeError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var DetectorError = class extends AnonymizeError {
  constructor(message, cause) {
    super(message, "DETECTOR_ERROR", cause);
  }
};
var RedactionError = class extends AnonymizeError {
  constructor(message, cause) {
    super(message, "REDACTION_ERROR", cause);
  }
};
var ValidationError = class extends AnonymizeError {
  constructor(message, cause) {
    super(message, "VALIDATION_ERROR", cause);
  }
};
var PublishingError = class extends AnonymizeError {
  constructor(message, cause) {
    super(message, "PUBLISHING_ERROR", cause);
  }
};

// packages/anonymize/src/logging.ts
var LEVEL_RANK = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100
};
var SCRUBBED_FIELD_NAMES3 = [
  "text",
  "value",
  "record",
  "content",
  "payload",
  "plaintext",
  "secret"
];
function shouldScrubField(name) {
  if (typeof name !== "string") return false;
  const lower = name.toLowerCase();
  for (const needle of SCRUBBED_FIELD_NAMES3) {
    const nl = needle.toLowerCase();
    if (lower === nl) return true;
    if (lower.endsWith("_" + nl)) return true;
    if (lower.endsWith(nl) && lower.length > nl.length) {
      const prev = name[name.length - nl.length - 1];
      if (prev && /[A-Z]/.test(prev)) return true;
    }
  }
  return false;
}
function scrubMetadata(meta) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Uint8Array) return `[uint8array:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map(scrubMetadata);
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    out[k] = shouldScrubField(k) ? "[redacted]" : scrubMetadata(v);
  }
  return out;
}
var ConsoleLogger = class {
  constructor(level = "info") {
    this.level = level;
    this.levelRank = LEVEL_RANK[level] ?? LEVEL_RANK.info;
  }
  level;
  levelRank;
  debug(msg, meta) {
    this.emit("debug", msg, meta);
  }
  info(msg, meta) {
    this.emit("info", msg, meta);
  }
  warn(msg, meta) {
    this.emit("warn", msg, meta);
  }
  error(msg, meta) {
    this.emit("error", msg, meta);
  }
  emit(level, msg, meta) {
    try {
      if (LEVEL_RANK[level] < this.levelRank) return;
      const entry = {
        level,
        msg,
        ts: (/* @__PURE__ */ new Date()).toISOString(),
        ...meta ? { meta: scrubMetadata(meta) } : {}
      };
      const line = JSON.stringify(entry);
      if (level === "error" || level === "warn") process.stderr.write(line + "\n");
      else process.stdout.write(line + "\n");
    } catch {
    }
  }
};
var SilentLogger3 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/anonymize/src/config/config.ts
var DEFAULT_CONFIG = {
  minConfidence: 0.5,
  defaultStrategy: "mask",
  strategyByCategory: {
    credit_card: "redact",
    national_id: "redact",
    password: "redact",
    api_key: "redact",
    jwt_token: "redact",
    bank_account: "redact"
  },
  disabledDetectors: [],
  validateOutput: true,
  maxResidualRisk: 0.05,
  logLevel: "info"
};
function mergeConfig(user) {
  return {
    ...DEFAULT_CONFIG,
    ...user ?? {},
    strategyByCategory: {
      ...DEFAULT_CONFIG.strategyByCategory,
      ...user?.strategyByCategory ?? {}
    }
  };
}

// packages/anonymize/src/detectors/registry.ts
function severityFor(category) {
  switch (category) {
    case "national_id":
    case "passport_number":
    case "drivers_license":
    case "credit_card":
    case "bank_account":
    case "password":
    case "api_key":
    case "jwt_token":
    case "medical_record_number":
    case "phi_diagnosis":
    case "phi_medication":
    case "phi_procedure":
      return "critical";
    case "person_name":
    case "email_address":
    case "phone_number":
    case "physical_address":
    case "date_of_birth":
    case "health_condition":
    case "medication":
    case "religion":
    case "ethnicity":
    case "sexual_orientation":
    case "political_affiliation":
    case "phi_provider":
    case "phi_facility":
      return "high";
    case "ip_address":
    case "mac_address":
    case "url":
    case "username":
    case "user_id":
    case "device_id":
    case "phi_dates":
    case "phi_age":
    case "phi_device":
      return "medium";
    default:
      return "low";
  }
}
function makeFinding(input, start, end, category, confidence, detectorName) {
  if (start < 0 || end <= start || end > input.length) return null;
  if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) return null;
  return {
    start,
    end,
    text: input.slice(start, end),
    category,
    confidence,
    severity: severityFor(category),
    detector: detectorName
  };
}
var DetectorRegistry = class {
  detectors = /* @__PURE__ */ new Map();
  register(detector) {
    if (this.detectors.has(detector.name)) {
      throw new DetectorError(`Detector '${detector.name}' already registered`);
    }
    this.detectors.set(detector.name, detector);
  }
  get(name) {
    return this.detectors.get(name);
  }
  list() {
    return Array.from(this.detectors.values());
  }
  /** Run all enabled detectors and merge their findings. */
  runAll(input, perDetectorConfig, minConfidence = 0.5) {
    const all = [];
    for (const det of this.detectors.values()) {
      const merged = { ...det.defaultConfig, ...perDetectorConfig?.[det.name] ?? {} };
      if (merged.enabled === false) continue;
      const findings = det.detect(input, merged);
      for (const f of findings) {
        if (f.confidence >= (merged.minConfidence ?? minConfidence)) all.push(f);
      }
    }
    return all;
  }
};
function resolveOverlaps(findings) {
  if (findings.length === 0) return [];
  const sorted = [...findings].sort((a, b) => a.start - b.start || b.confidence - a.confidence);
  const out = [];
  for (const f of sorted) {
    const last = out[out.length - 1];
    if (last && f.start < last.end) {
      if (f.confidence > last.confidence || f.confidence === last.confidence && f.end - f.start > last.end - last.start) {
        out[out.length - 1] = f;
      }
    } else {
      out.push(f);
    }
  }
  return out;
}

// packages/anonymize/src/detectors/patterns.ts
function regexDetector(name, category, pattern, confidence) {
  return {
    name,
    categories: [category],
    defaultConfig: { minConfidence: 0.5, enabled: true },
    detect(input, config) {
      const out = [];
      const re = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
      let m;
      while ((m = re.exec(input)) !== null) {
        if (m.index === m.index + m[0].length) {
          re.lastIndex++;
          continue;
        }
        const f = makeFinding(input, m.index, m.index + m[0].length, category, confidence, name);
        if (f) out.push(f);
      }
      return out;
    }
  };
}
var emailDetector = regexDetector(
  "email",
  "email_address",
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
  0.95
);
var phoneDetector = regexDetector(
  "phone",
  "phone_number",
  /(?:(?:\+|00)\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?){2,4}\d{2,4}(?:[\s.-]?\d{1,4})?\b/g,
  0.7
);
var ipv4Detector = regexDetector(
  "ipv4",
  "ip_address",
  /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g,
  0.95
);
var ipv6Detector = regexDetector(
  "ipv6",
  "ip_address",
  /\b(?:[A-F0-9]{1,4}:){2,7}[A-F0-9]{1,4}\b/gi,
  0.6
);
var macDetector = regexDetector(
  "mac",
  "mac_address",
  /\b(?:[0-9A-F]{2}[:-]){5}[0-9A-F]{2}\b/gi,
  0.95
);
var urlDetector = regexDetector(
  "url",
  "url",
  /\bhttps?:\/\/[^\s<>"']+[^\s<>"'.;,!?)]/gi,
  0.9
);
var creditCardDetector = {
  name: "credit_card",
  categories: ["credit_card"],
  defaultConfig: { minConfidence: 0.8, enabled: true },
  detect(input) {
    const out = [];
    const re = /\b(?:\d[ -]*?){13,19}\b/g;
    let m;
    while ((m = re.exec(input)) !== null) {
      const digits = m[0].replace(/[^\d]/g, "");
      if (digits.length < 13 || digits.length > 19) continue;
      if (!luhnValid(digits)) continue;
      const f = makeFinding(input, m.index, m.index + m[0].length, "credit_card", 0.92, "credit_card");
      if (f) out.push(f);
    }
    return out;
  }
};
function luhnValid(digits) {
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = digits.charCodeAt(i) - 48;
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum > 0 && sum % 10 === 0;
}
var ibanDetector = regexDetector(
  "iban",
  "bank_account",
  /\b[A-Z]{2}\d{2}(?:[ ]?[A-Z0-9]{1,4}){4,8}\b/g,
  0.85
);
var jwtDetector = regexDetector(
  "jwt",
  "jwt_token",
  /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g,
  0.95
);
var apiKeyDetector = regexDetector(
  "api_key",
  "api_key",
  /\b(?:sk|pk|api[_-]?key|key)[_:-][A-Za-z0-9]{24,}\b/gi,
  0.75
);
var isoDateDetector = regexDetector(
  "iso_date",
  "date",
  /\b(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b/g,
  0.7
);
var postalCodeDetector = regexDetector(
  "postal_code",
  "postal_code",
  /\b(?:\d{5}(?:-\d{4})?|[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2})\b/g,
  0.6
);
var usSsnDetector = regexDetector(
  "us_ssn",
  "national_id",
  /\b\d{3}-\d{2}-\d{4}\b/g,
  0.9
);
var zaIdDetector = {
  name: "za_id",
  categories: ["national_id"],
  defaultConfig: { minConfidence: 0.9, enabled: true },
  detect(input) {
    const out = [];
    const re = /\b(\d{2})(\d{2})(\d{2})(\d{4})(\d)(\d{2})\b/g;
    let m;
    while ((m = re.exec(input)) !== null) {
      const yy = parseInt(m[1], 10);
      const mm = parseInt(m[2], 10);
      const dd = parseInt(m[3], 10);
      if (mm < 1 || mm > 12) continue;
      if (dd < 1 || dd > 31) continue;
      if (!zaIdChecksumValid(m[0])) continue;
      const f = makeFinding(input, m.index, m.index + m[0].length, "national_id", 0.95, "za_id");
      if (f) out.push(f);
    }
    return out;
  }
};
function zaIdChecksumValid(id) {
  if (!/^\d{13}$/.test(id)) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const n = parseInt(id[i], 10);
    sum += i % 2 === 0 ? n : n * 2 > 9 ? n * 2 - 9 : n * 2;
  }
  const check = (10 - sum % 10) % 10;
  return check === parseInt(id[12], 10);
}
var ALL_PATTERN_DETECTORS = [
  emailDetector,
  phoneDetector,
  ipv4Detector,
  ipv6Detector,
  macDetector,
  urlDetector,
  creditCardDetector,
  ibanDetector,
  jwtDetector,
  apiKeyDetector,
  isoDateDetector,
  postalCodeDetector,
  usSsnDetector,
  zaIdDetector
];

// packages/anonymize/src/detectors/context.ts
var HONORIFICS = ["Mr", "Mrs", "Ms", "Miss", "Dr", "Prof", "Rev", "Hon", "Sir", "Madam", "Mx", "Lady", "Lord"];
var NAME_PART = /[A-Z][a-z]{1,}(?:[-'][A-Z][a-z]{1,})?/;
var personNameDetector = {
  name: "person_name",
  categories: ["person_name"],
  defaultConfig: { minConfidence: 0.65, enabled: true },
  detect(input, config) {
    const out = [];
    const allow = new Set((config?.nameAllowlist ?? []).map((s) => s.toLowerCase()));
    const re = new RegExp(`\\b(${HONORIFICS.join("|")})\\.?\\s+((?:${NAME_PART.source}\\s+){0,2}${NAME_PART.source})`, "g");
    let m;
    while ((m = re.exec(input)) !== null) {
      const nameText = m[2];
      if (allow.has(nameText.toLowerCase())) continue;
      const start = m.index + m[0].length - nameText.length;
      const f = makeFinding(input, start, start + nameText.length, "person_name", 0.75, "person_name");
      if (f) out.push(f);
    }
    return out;
  }
};
var STREET_SUFFIXES = ["Street", "St", "Avenue", "Ave", "Road", "Rd", "Drive", "Dr", "Lane", "Ln", "Boulevard", "Blvd", "Court", "Ct", "Way", "Place", "Pl", "Square", "Sq"];
var addressDetector = {
  name: "physical_address",
  categories: ["physical_address"],
  defaultConfig: { minConfidence: 0.6, enabled: true },
  detect(input) {
    const out = [];
    const re = new RegExp(`\\b\\d{1,6}[A-Z]?\\s+[A-Z][A-Za-z0-9.']+\\s+(?:${STREET_SUFFIXES.join("|")})\\b\\.?`, "g");
    let m;
    while ((m = re.exec(input)) !== null) {
      const f = makeFinding(input, m.index, m.index + m[0].length, "physical_address", 0.65, "physical_address");
      if (f) out.push(f);
    }
    return out;
  }
};
var DEFAULT_HEALTH_TERMS = [
  "HIV",
  "AIDS",
  "diabetes",
  "hypertension",
  "asthma",
  "cancer",
  "tumor",
  "tumour",
  "depression",
  "anxiety",
  "bipolar",
  "schizophrenia",
  "epilepsy",
  "stroke",
  "myocardial infarction",
  "heart attack",
  "arthritis",
  "dementia",
  "Alzheimer",
  "pregnancy",
  "miscarriage",
  "abortion",
  "infertility",
  "STD",
  "STI",
  "hepatitis",
  "tuberculosis",
  "malaria",
  "COVID",
  "COVID-19"
];
var healthConditionDetector = {
  name: "health_condition",
  categories: ["health_condition", "phi_diagnosis"],
  defaultConfig: { minConfidence: 0.7, enabled: true },
  detect(input, config) {
    const out = [];
    const terms = config?.healthTerms ?? DEFAULT_HEALTH_TERMS;
    for (const term of terms) {
      const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      let m;
      while ((m = re.exec(input)) !== null) {
        const f = makeFinding(input, m.index, m.index + m[0].length, "health_condition", 0.78, "health_condition");
        if (f) out.push(f);
      }
    }
    return out;
  }
};
var DEFAULT_MEDICATION_TERMS = [
  "paracetamol",
  "ibuprofen",
  "aspirin",
  "amoxicillin",
  "azithromycin",
  "metformin",
  "insulin",
  "atorvastatin",
  "lisinopril",
  "amlodipine",
  "omeprazole",
  "citalopram",
  "sertraline",
  "fluoxetine",
  "diazepam",
  "morphine",
  "fentanyl",
  "oxycodone",
  "tramadol",
  "warfarin"
];
var medicationDetector = {
  name: "medication",
  categories: ["medication", "phi_medication"],
  defaultConfig: { minConfidence: 0.7, enabled: true },
  detect(input, config) {
    const out = [];
    const terms = config?.medicationTerms ?? DEFAULT_MEDICATION_TERMS;
    for (const term of terms) {
      const re = new RegExp(`\\b${term}\\b`, "gi");
      let m;
      while ((m = re.exec(input)) !== null) {
        const f = makeFinding(input, m.index, m.index + m[0].length, "medication", 0.78, "medication");
        if (f) out.push(f);
      }
    }
    return out;
  }
};
var DEFAULT_PROVIDER_TERMS = [
  "Dr.",
  "Physician",
  "Surgeon",
  "Nurse",
  "Clinic",
  "Hospital",
  "Ward",
  "Emergency Room",
  "ICU",
  "Pharmacy"
];
var providerDetector = {
  name: "phi_provider",
  categories: ["phi_provider", "phi_facility"],
  defaultConfig: { minConfidence: 0.6, enabled: true },
  detect(input) {
    const out = [];
    for (const term of DEFAULT_PROVIDER_TERMS) {
      const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
      let m;
      while ((m = re.exec(input)) !== null) {
        const cat = term === "Dr." || term === "Physician" || term === "Surgeon" || term === "Nurse" ? "phi_provider" : "phi_facility";
        const f = makeFinding(input, m.index, m.index + m[0].length, cat, 0.6, "phi_provider");
        if (f) out.push(f);
      }
    }
    return out;
  }
};
var ALL_CONTEXT_DETECTORS = [
  personNameDetector,
  addressDetector,
  healthConditionDetector,
  medicationDetector,
  providerDetector
];

// packages/anonymize/src/redactors/strategies.ts
var import_crypto6 = require("crypto");
var MaskRedactor = class {
  strategy = "mask";
  redact(finding) {
    const t = finding.text;
    if (t.length <= 2) return "*".repeat(t.length);
    if (t.length <= 6) return t[0] + "*".repeat(t.length - 2) + t[t.length - 1];
    return t.slice(0, 2) + "*".repeat(Math.min(t.length - 4, 8)) + t.slice(-2);
  }
};
var HashRedactor = class {
  constructor(prefix = "sha256", length = 12) {
    this.prefix = prefix;
    this.length = length;
    if (length < 4 || length > 64) throw new RedactionError("HashRedactor.length must be in [4,64]");
  }
  prefix;
  length;
  strategy = "hash";
  redact(finding) {
    const h = (0, import_crypto6.createHash)("sha256").update(finding.text).digest("hex");
    return `[${this.prefix}:${h.slice(0, this.length)}]`;
  }
};
var TokenRedactor = class {
  constructor(prefixTemplate = (c) => c.toUpperCase()) {
    this.prefixTemplate = prefixTemplate;
  }
  prefixTemplate;
  strategy = "token";
  counters = /* @__PURE__ */ new Map();
  mapping = /* @__PURE__ */ new Map();
  redact(finding) {
    const cached = this.mapping.get(finding.text);
    if (cached) return cached;
    const n = (this.counters.get(finding.category) ?? 0) + 1;
    this.counters.set(finding.category, n);
    const token = `[${this.prefixTemplate(finding.category)}_${String(n).padStart(3, "0")}]`;
    this.mapping.set(finding.text, token);
    return token;
  }
  /** Return the original→token map (for de-identification logs only). */
  getMapping() {
    return this.mapping;
  }
};
var FullRedactor = class {
  constructor(replacement = "[REDACTED]") {
    this.replacement = replacement;
  }
  replacement;
  strategy = "redact";
  redact() {
    return this.replacement;
  }
};
var GeneralizeRedactor = class {
  strategy = "generalize";
  redact(finding) {
    const num = parseInt(finding.text, 10);
    if (!Number.isNaN(num)) {
      if (finding.category === "date_of_birth" || finding.category === "phi_age") {
        const band = Math.floor(num / 10) * 10;
        return `[age:${band}-${band + 9}]`;
      }
      return `[num:${Math.floor(num / 10) * 10}+]`;
    }
    return "[generalized]";
  }
};
var SynthesizeRedactor = class {
  strategy = "synthesize";
  redact(finding) {
    switch (finding.category) {
      case "email_address":
        return `user${Math.floor(Math.random() * 9999)}@example.com`;
      case "phone_number":
        return `+1-555-01${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}-${String(Math.floor(Math.random() * 9999)).padStart(4, "0")}`;
      case "credit_card":
        return "4111-1111-1111-1111";
      case "ip_address":
        return `10.0.0.${Math.floor(Math.random() * 254) + 1}`;
      case "person_name":
        return ["Alex Sample", "Sam Test", "Pat Example", "Jordan Demo"][Math.floor(Math.random() * 4)];
      default:
        return "[synthesized]";
    }
  }
};
function applyRedactions(input, findings, redactorFor) {
  const ordered = [...findings].sort((a, b) => b.start - a.start);
  let out = input;
  const redactions = [];
  for (const f of ordered) {
    const r = redactorFor(f);
    const replacement = r.redact(f);
    out = out.slice(0, f.start) + replacement + out.slice(f.end);
    redactions.push({ finding: f, replacement, strategy: r.strategy });
  }
  redactions.reverse();
  return { output: out, redactions };
}

// packages/anonymize/src/metadata/scrubber.ts
var SENSITIVE_METADATA_KEYS = [
  "author",
  "creator",
  "createdBy",
  "lastModifiedBy",
  "owner",
  "gps",
  "gpslatitude",
  "gpslongitude",
  "gpsaltitude",
  "gpsposition",
  "location",
  "latlong",
  "coordinates",
  "geolocation",
  "deviceid",
  "deviceid",
  "serialnumber",
  "imei",
  "imsi",
  "meid",
  "macaddress",
  "ssid",
  "bssid",
  "userid",
  "username",
  "useragent",
  "ip",
  "ipaddress",
  "remoteaddr",
  "phonenumber",
  "email",
  "address",
  "birthdate",
  "dob",
  "exif",
  "xmp",
  "iptc",
  "signature",
  "signedby",
  "token",
  "apikey",
  "secret",
  "password",
  "sessionid"
];
function isSensitiveKey(key, opts = {}) {
  const lower = key.toLowerCase();
  const allow = new Set((opts.allowlist ?? []).map((k) => k.toLowerCase()));
  if (allow.has(lower)) return false;
  const deny = new Set(SENSITIVE_METADATA_KEYS.map((k) => k.toLowerCase()));
  for (const k of opts.additionalKeys ?? []) deny.add(k.toLowerCase());
  if (deny.has(lower)) return true;
  for (const d of deny) {
    if (lower.length > d.length && lower.includes(d)) return true;
  }
  return false;
}
function scrubMetadata2(meta, opts = {}) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map((v) => scrubMetadata2(v, opts));
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    if (isSensitiveKey(k, opts)) {
      if (opts.redactInsteadOfDelete) out[k] = "[redacted]";
    } else {
      out[k] = scrubMetadata2(v, opts);
    }
  }
  return out;
}
function diffMetadata(a, b) {
  const onlyInA = [];
  const onlyInB = [];
  const changed = [];
  const ak = new Set(Object.keys(a));
  const bk = new Set(Object.keys(b));
  for (const k of ak) {
    if (!bk.has(k)) onlyInA.push(k);
    else if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) changed.push(k);
  }
  for (const k of bk) if (!ak.has(k)) onlyInB.push(k);
  return { onlyInA, onlyInB, changed };
}
function assertClean(meta, opts = {}) {
  if (meta === null || meta === void 0 || typeof meta !== "object") return;
  if (Array.isArray(meta)) {
    meta.forEach((v) => assertClean(v, opts));
    return;
  }
  for (const [k, v] of Object.entries(meta)) {
    if (isSensitiveKey(k, opts)) throw new AnonymizeError(`Residual sensitive key: '${k}'`);
    assertClean(v, opts);
  }
}

// packages/anonymize/src/ocr/handling.ts
var OCR_SUBSTITUTIONS = [
  [/\b0(?=\d{2,}\b)/g, "O"],
  // leading-zero words: probably letters
  [/5(?=[A-Za-z])/g, "S"],
  [/1(?=[A-Za-z])/g, "l"],
  [/\b[lI]\b/g, "1"],
  // single-char l/I often means 1
  [/\bO\b/g, "0"],
  [/@/g, "@"],
  // no-op (stability)
  [/\s+/g, " "]
];
function normalizeOcrText(input) {
  if (typeof input !== "string") throw new AnonymizeError("normalizeOcrText: input must be string");
  let out = input;
  for (const [re, rep] of OCR_SUBSTITUTIONS) out = out.replace(re, rep);
  return out.trim();
}
function ocrPageToText(page) {
  const lines = /* @__PURE__ */ new Map();
  for (const w of page.words) {
    const row = Math.floor(w.y / Math.max(10, w.h || 10));
    if (!lines.has(row)) lines.set(row, []);
    lines.get(row).push(w);
  }
  const sortedRows = [...lines.keys()].sort((a, b) => a - b);
  return sortedRows.map((r) => {
    const ws = lines.get(r).sort((a, b) => a.x - b.x);
    return ws.map((w) => w.text).join(" ");
  }).join("\n");
}
function stripOcrGeometry(page) {
  return { text: ocrPageToText(page) };
}
function findOcrPiiCandidates(text) {
  const out = [];
  const hints = [
    [/\bemai[lI1]+\b/gi, "email"],
    [/\bph(?:one|0ne)\b/gi, "phone"],
    [/\b(?:soc(?:ial)?[\s-]*)?(?:sec(?:urity)?)?\s*\d{3}-?\s*\d{2}-?\s*\d{4}\b/gi, "ssn"],
    [/\bpassw(?:ord|0rd|0rd)\b/gi, "password"]
  ];
  for (const [re, hint] of hints) {
    let m;
    while ((m = re.exec(text)) !== null) {
      out.push({ start: m.index, end: m.index + m[0].length, text: m[0], hint });
    }
  }
  return out;
}

// packages/anonymize/src/images/redact.ts
var import_crypto7 = require("crypto");
var JPEG_SOI = 65496;
var JPEG_APP1 = 65505;
var EXIF_MAGIC = Buffer.from("Exif\0\0", "ascii");
function stripJpegExif(input) {
  if (input.length < 4) throw new AnonymizeError("stripJpegExif: buffer too small");
  if (input.readUInt16BE(0) !== JPEG_SOI) return input;
  const out = [input.slice(0, 2)];
  let i = 2;
  while (i < input.length - 1) {
    if (input[i] !== 255) break;
    const marker = input.readUInt16BE(i);
    const segLen = i + 4 <= input.length ? input.readUInt16BE(i + 2) : 0;
    if (marker === JPEG_APP1 && input.slice(i + 4, i + 10).equals(EXIF_MAGIC)) {
      i += 2 + segLen;
      continue;
    }
    if (segLen > 0 && i + 2 + segLen <= input.length) {
      out.push(input.slice(i, i + 2 + segLen));
      i += 2 + segLen;
    } else {
      out.push(input.slice(i));
      break;
    }
  }
  return Buffer.concat(out);
}
function dhash(input, width = 8, height = 8) {
  const block = Math.floor(input.length / (width * height));
  if (block === 0) return (0, import_crypto7.createHash)("sha256").update(input).digest("hex").slice(0, 16);
  const pixels = [];
  for (let i = 0; i < width * height; i++) {
    let sum = 0;
    for (let b = 0; b < block; b++) sum += input[i * block + b];
    pixels.push(sum / block);
  }
  let bits = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width - 1; x++) {
      const a = pixels[y * width + x];
      const b = pixels[y * width + x + 1];
      bits += a > b ? "1" : "0";
    }
  }
  while (bits.length % 4 !== 0) bits = "0" + bits;
  let hex = "";
  for (let i = 0; i < bits.length; i += 4) hex += parseInt(bits.slice(i, i + 4), 2).toString(16);
  while (hex.length < 16) hex = "0" + hex;
  return hex.slice(0, 16);
}
function redactImage(input) {
  if (!Buffer.isBuffer(input)) throw new AnonymizeError("redactImage: input must be Buffer");
  const originalLength = input.length;
  const isJpeg = input.length >= 2 && input.readUInt16BE(0) === JPEG_SOI;
  const bytes = isJpeg ? stripJpegExif(input) : input;
  return {
    bytes,
    exifStripped: isJpeg,
    thumbnailsStripped: isJpeg,
    // APP1 also carries thumbnails in EXIF
    perceptualHash: dhash(bytes),
    originalLength,
    finalLength: bytes.length
  };
}
function imageIdentifier(input) {
  return dhash(input);
}

// packages/anonymize/src/documents/metadata.ts
function parsePdfInfo(raw) {
  const out = {};
  const re = /\/(Title|Author|Subject|Keywords|Creator|Producer|CreationDate|ModDate|ID)\s*\(([^)]*)\)/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    out[m[1]] = m[2];
  }
  return out;
}
function parseDocxCoreXml(raw) {
  const out = {};
  const fields = [
    ["title", /<dc:title>([^<]*)<\/dc:title>/],
    ["author", /<dc:creator>([^<]*)<\/dc:creator>/],
    ["subject", /<dc:subject>([^<]*)<\/dc:subject>/],
    ["keywords", /<cp:keywords>([^<]*)<\/cp:keywords>/],
    ["createdAt", /<dcterms:created[^>]*>([^<]*)<\/dcterms:created>/],
    ["modifiedAt", /<dcterms:modified[^>]*>([^<]*)<\/dcterms:modified>/],
    ["revision", /<cp:revision>([^<]*)<\/cp:revision>/],
    ["identifier", /<dc:identifier>([^<]*)<\/dc:identifier>/]
  ];
  for (const [k, re] of fields) {
    const m = re.exec(raw);
    if (m) out[k] = m[1];
  }
  return out;
}
function normalizeMetadata(kind, raw) {
  const get = (key) => {
    const lk = key.toLowerCase();
    for (const k of Object.keys(raw)) {
      if (k.toLowerCase() === lk) return raw[k];
    }
    return void 0;
  };
  const keywords = get("keywords");
  const revision = get("revision");
  return {
    kind,
    raw,
    normalized: {
      title: get("title"),
      author: get("author"),
      subject: get("subject"),
      keywords: typeof keywords === "string" ? keywords.split(",").map((s) => s.trim()) : void 0,
      creator: get("creator"),
      producer: get("producer"),
      createdAt: get("createdAt"),
      modifiedAt: get("modifiedAt"),
      revision: typeof revision === "string" ? parseInt(revision, 10) : typeof revision === "number" ? revision : void 0,
      identifier: get("identifier")
    }
  };
}
function scrubDocumentMetadata(meta, opts = {}) {
  const clean = scrubMetadata2(meta.raw, opts);
  return normalizeMetadata(meta.kind, clean);
}
function assertDocumentClean(meta, opts = {}) {
  if (meta.normalized.author) throw new AnonymizeError(`Document author not stripped: '${meta.normalized.author}'`);
  if (meta.normalized.identifier) throw new AnonymizeError(`Document identifier not stripped: '${meta.normalized.identifier}'`);
  for (const k of Object.keys(meta.raw)) {
    if (k.toLowerCase() === "author" || k.toLowerCase() === "creator") {
      throw new AnonymizeError(`Residual sensitive field: '${k}'`);
    }
  }
  void opts;
}

// packages/anonymize/src/validation/validator.ts
var import_crypto8 = require("crypto");
var Validator = class {
  constructor(registry) {
    this.registry = registry;
  }
  registry;
  /**
   * Validate an anonymized output by re-scanning it.
   * Returns a report; does not throw unless validation cannot run.
   */
  validate(output, originalFindings, pipelineConfigHash, opts = {}) {
    const entries = [];
    const residual = this.registry.runAll(output, {}, 0.5);
    const residualCounts = {};
    for (const f of residual) {
      residualCounts[f.category] = (residualCounts[f.category] ?? 0) + 1;
      entries.push({
        level: f.severity === "critical" ? "error" : f.severity === "high" ? "error" : "warning",
        code: `RESIDUAL_${f.category.toUpperCase()}`,
        message: `Residual ${f.category} found in output: '${f.text.slice(0, 40)}'`
      });
    }
    if (originalFindings.length === 0) {
      entries.push({ level: "info", code: "NO_FINDINGS", message: "No PII/PHI detected in input." });
    }
    let risk = 0;
    for (const f of residual) {
      const w = f.severity === "critical" ? 1 : f.severity === "high" ? 0.5 : f.severity === "medium" ? 0.2 : 0.05;
      risk += w * f.confidence;
    }
    risk = Math.min(1, risk);
    let passed = residual.length === 0;
    if (opts.failOnHighOrCritical) {
      passed = passed && !residual.some((f) => f.severity === "critical" || f.severity === "high");
    }
    if (opts.maxResidualRisk !== void 0 && risk > opts.maxResidualRisk) {
      passed = false;
      entries.push({
        level: "error",
        code: "RESIDUAL_RISK_TOO_HIGH",
        message: `Residual risk ${risk.toFixed(3)} exceeds threshold ${opts.maxResidualRisk}`
      });
    }
    return {
      passed,
      entries,
      residualRisk: risk,
      residualCounts,
      configHash: pipelineConfigHash
    };
  }
  /** Throws if validation fails. */
  assertValid(report) {
    if (!report.passed) {
      throw new ValidationError(
        `Anonymization validation failed (residualRisk=${report.residualRisk.toFixed(3)}, ${report.entries.length} entries)`
      );
    }
  }
};
function hashConfig(config) {
  const canon = JSON.stringify(config, Object.keys(config ?? {}).sort());
  return (0, import_crypto8.createHash)("sha256").update(canon).digest("hex");
}

// packages/anonymize/src/publishing/manifest.ts
var import_crypto9 = require("crypto");
function hashRecord(record) {
  return (0, import_crypto9.createHash)("sha256").update(record).digest("hex");
}
function hashDataset(recordHashes) {
  return (0, import_crypto9.createHash)("sha256").update(recordHashes.join("\n")).digest("hex");
}
function buildManifest(name, records, configHash, validation) {
  if (!name || typeof name !== "string") throw new PublishingError("Dataset name is required");
  if (!Array.isArray(records)) throw new PublishingError("records must be an array");
  const recordHashes = records.map(hashRecord);
  const datasetHash = hashDataset(recordHashes);
  return {
    schemaVersion: 1,
    name,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    recordCount: records.length,
    recordHashes,
    datasetHash,
    configHash,
    validation: { passed: validation.passed, residualRisk: validation.residualRisk }
  };
}
function verifyManifest(manifest, records) {
  if (manifest.recordCount !== records.length) return false;
  for (let i = 0; i < records.length; i++) {
    if (hashRecord(records[i]) !== manifest.recordHashes[i]) return false;
  }
  return hashDataset(manifest.recordHashes) === manifest.datasetHash;
}
function serializeManifest(manifest) {
  return JSON.stringify(manifest, null, 2);
}

// packages/anonymize/src/anonymizer.ts
function defaultRegistry() {
  const reg = new DetectorRegistry();
  for (const d of [...ALL_PATTERN_DETECTORS, ...ALL_CONTEXT_DETECTORS]) reg.register(d);
  return reg;
}
function redactorForStrategy(strategy) {
  switch (strategy) {
    case "mask":
      return new MaskRedactor();
    case "hash":
      return new HashRedactor();
    case "token":
      return new TokenRedactor();
    case "redact":
      return new FullRedactor();
    case "generalize":
      return new GeneralizeRedactor();
    case "synthesize":
      return new SynthesizeRedactor();
    default:
      throw new AnonymizeError(`Unknown strategy: ${strategy}`);
  }
}
var Anonymizer = class {
  registry;
  validator;
  config;
  logger;
  constructor(config, registry) {
    this.config = mergeConfig(config);
    this.logger = this.config.logger ?? (this.config.logLevel === "silent" ? new SilentLogger3() : new ConsoleLogger(this.config.logLevel));
    this.registry = registry ?? defaultRegistry();
    for (const name of this.config.disabledDetectors) {
      const d = this.registry.get(name);
      if (d) d.defaultConfig.enabled = false;
    }
    this.validator = new Validator(this.registry);
  }
  /** Run the full anonymization pipeline. */
  anonymize(input) {
    if (typeof input !== "string") throw new AnonymizeError("anonymize: input must be string");
    const start = Date.now();
    this.logger.debug("anonymize: starting", { inputLength: input.length });
    const rawFindings = this.registry.runAll(input, {}, this.config.minConfidence);
    const findings = resolveOverlaps(rawFindings);
    this.logger.debug("anonymize: detected", { findingCount: findings.length });
    const redactorFor = (f) => {
      const strat = this.config.strategyByCategory[f.category] ?? this.config.defaultStrategy;
      return redactorForStrategy(strat);
    };
    const { output, redactions } = applyRedactions(input, findings, redactorFor);
    const counts = {};
    for (const f of findings) counts[f.category] = (counts[f.category] ?? 0) + 1;
    const elapsedMs = Date.now() - start;
    const result = {
      output,
      findings,
      redactions,
      safe: false,
      // set after validation
      counts,
      elapsedMs
    };
    let report;
    if (this.config.validateOutput) {
      const configHash = hashConfig({
        minConfidence: this.config.minConfidence,
        defaultStrategy: this.config.defaultStrategy,
        strategyByCategory: this.config.strategyByCategory,
        disabledDetectors: this.config.disabledDetectors
      });
      report = this.validator.validate(output, findings, configHash, {
        maxResidualRisk: this.config.maxResidualRisk,
        failOnHighOrCritical: true
      });
    } else {
      report = {
        passed: true,
        entries: [],
        residualRisk: 0,
        residualCounts: {},
        configHash: "validation-disabled"
      };
    }
    result.safe = report.passed;
    this.logger.info("anonymize: complete", {
      findings: findings.length,
      residualRisk: report.residualRisk,
      safe: result.safe,
      elapsedMs
    });
    return { result, report };
  }
  /** Anonymize a batch of records and produce a manifest. */
  anonymizeBatch(records, name) {
    const results = records.map((r) => this.anonymize(r).result);
    const residualCounts = {};
    let maxRisk = 0;
    for (const r of results) {
      const rep = this.validator.validate(r.output, r.findings, "batch", { failOnHighOrCritical: true });
      for (const [k, v] of Object.entries(rep.residualCounts)) residualCounts[k] = (residualCounts[k] ?? 0) + v;
      maxRisk = Math.max(maxRisk, rep.residualRisk);
    }
    const report = {
      passed: Object.keys(residualCounts).length === 0,
      entries: [],
      residualRisk: maxRisk,
      residualCounts,
      configHash: hashConfig({ name, count: records.length })
    };
    const manifest = buildManifest(
      name,
      results.map((r) => r.output),
      report.configHash,
      report
    );
    return { results, report, manifest };
  }
};
function anonymize(input, config) {
  return new Anonymizer(config).anonymize(input);
}

// packages/customs-shield/src/errors.ts
var CustomsShieldError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var HSCodeError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "HS_CODE_ERROR", cause);
  }
};
var SanctionsError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "SANCTIONS_ERROR", cause);
  }
};
var ComplianceError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "COMPLIANCE_ERROR", cause);
  }
};
var RestrictionError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "RESTRICTION_ERROR", cause);
  }
};
var RiskError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "RISK_ERROR", cause);
  }
};
var ReportingError = class extends CustomsShieldError {
  constructor(message, cause) {
    super(message, "REPORTING_ERROR", cause);
  }
};

// packages/customs-shield/src/logging.ts
var LEVEL_RANK2 = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100
};
var SCRUBBED_FIELD_NAMES4 = [
  "taxId",
  "secret",
  "token",
  "apiKey",
  "password"
];
function shouldScrubField2(name) {
  const lower = name.toLowerCase();
  for (const needle of SCRUBBED_FIELD_NAMES4) {
    const nl = needle.toLowerCase();
    if (lower === nl) return true;
    if (lower.endsWith("_" + nl)) return true;
  }
  return false;
}
function scrubMetadata3(meta) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map(scrubMetadata3);
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    out[k] = shouldScrubField2(k) ? "[redacted]" : scrubMetadata3(v);
  }
  return out;
}
var ConsoleLogger2 = class {
  constructor(level = "info") {
    this.level = level;
    this.levelRank = LEVEL_RANK2[level] ?? LEVEL_RANK2.info;
  }
  level;
  levelRank;
  debug(msg, meta) {
    this.emit("debug", msg, meta);
  }
  info(msg, meta) {
    this.emit("info", msg, meta);
  }
  warn(msg, meta) {
    this.emit("warn", msg, meta);
  }
  error(msg, meta) {
    this.emit("error", msg, meta);
  }
  emit(level, msg, meta) {
    try {
      if (LEVEL_RANK2[level] < this.levelRank) return;
      const entry = { level, msg, ts: (/* @__PURE__ */ new Date()).toISOString(), ...meta ? { meta: scrubMetadata3(meta) } : {} };
      const line = JSON.stringify(entry);
      if (level === "error" || level === "warn") process.stderr.write(line + "\n");
      else process.stdout.write(line + "\n");
    } catch {
    }
  }
};
var SilentLogger4 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/customs-shield/src/config/config.ts
var DEFAULT_CONFIG2 = {
  sanctionsThreshold: 0.75,
  holdThreshold: 50,
  computeDuty: true,
  logLevel: "info"
};
function mergeConfig2(user) {
  return { ...DEFAULT_CONFIG2, ...user ?? {} };
}

// packages/customs-shield/src/hscode/catalog.ts
var CHAPTER_DESCRIPTIONS = {
  "01": "Live animals",
  "02": "Meat and edible meat offal",
  "03": "Fish and aquatic invertebrates",
  "04": "Dairy produce, birds eggs, natural honey",
  "05": "Products of animal origin, n.e.s.",
  "06": "Live trees and other plants",
  "07": "Edible vegetables and certain roots/tubers",
  "08": "Edible fruit and nuts",
  "09": "Coffee, tea, mate and spices",
  "10": "Cereals",
  "11": "Products of the milling industry",
  "12": "Oil seeds and oleaginous fruits",
  "13": "Lac, gums, resins, vegetable saps",
  "14": "Vegetable plaiting materials, vegetable products n.e.s.",
  "15": "Animal or vegetable fats and oils",
  "16": "Preparations of meat, fish, etc.",
  "17": "Sugars and sugar confectionery",
  "18": "Cocoa and cocoa preparations",
  "19": "Preparations of cereals, flour, starch, milk",
  "20": "Preparations of vegetables, fruit, etc.",
  "21": "Miscellaneous edible preparations",
  "22": "Beverages, spirits and vinegar",
  "23": "Residues and waste of food industry, animal fodder",
  "24": "Tobacco and manufactured tobacco substitutes",
  "25": "Salt, sulfur, earths, stones, plasters, limes, cement",
  "26": "Ores, slag and ash",
  "27": "Mineral fuels, mineral oils and products",
  "28": "Inorganic chemicals",
  "29": "Organic chemicals",
  "30": "Pharmaceutical products",
  "31": "Fertilizers",
  "32": "Tanning/dye extracts, tannins, pigments, paints",
  "33": "Essential oils, cosmetics, toiletries",
  "34": "Soap, organic surface-active agents, waxes",
  "35": "Albuminoidal substances, modified starches, glues, enzymes",
  "36": "Explosives, pyrotechnic products, matches",
  "37": "Photographic or cinematographic goods",
  "38": "Miscellaneous chemical products",
  "39": "Plastics and articles thereof",
  "40": "Rubber and articles thereof",
  "41": "Raw hides and skins, leather",
  "42": "Articles of leather, saddlery, handbags",
  "43": "Furskins and artificial fur",
  "44": "Wood and articles of wood",
  "45": "Cork and articles of cork",
  "46": "Manufactures of straw, esparto, plaiting materials",
  "47": "Pulp of wood or other cellulosic material",
  "48": "Paper and paperboard, articles thereof",
  "49": "Printed books, newspapers, pictures",
  "50": "Silk",
  "51": "Wool, fine or coarse animal hair",
  "52": "Cotton",
  "53": "Other vegetable textile fibers, paper yarn",
  "54": "Man-made filaments",
  "55": "Man-made staple fibres",
  "56": "Wadding, felt, nonwovens, special yarns, twine, cordage",
  "57": "Carpets and other textile floor coverings",
  "58": "Special woven fabrics, tufted textile fabrics, lace",
  "59": "Impregnated, coated, covered or laminated textile fabrics",
  "60": "Knitted or crocheted fabrics",
  "61": "Articles of apparel, knitted or crocheted",
  "62": "Articles of apparel, not knitted or crocheted",
  "63": "Other made-up textile articles, sets, worn clothing",
  "64": "Footwear, gaiters, parts thereof",
  "65": "Headgear and parts thereof",
  "66": "Umbrellas, sun umbrellas, walking-sticks, seat-sticks",
  "67": "Prepared feathers, artificial flowers, articles of human hair",
  "68": "Articles of stone, plaster, cement, asbestos, mica",
  "69": "Ceramic products",
  "70": "Glass and glassware",
  "71": "Natural or cultured pearls, precious stones, metals",
  "72": "Iron and steel",
  "73": "Articles of iron or steel",
  "74": "Copper and articles thereof",
  "75": "Nickel and articles thereof",
  "76": "Aluminium and articles thereof",
  "78": "Lead and articles thereof",
  "79": "Zinc and articles thereof",
  "80": "Tin and articles thereof",
  "81": "Other base metals, cermets, articles thereof",
  "82": "Tools, implements, cutlery, spoons, forks, of base metal",
  "83": "Miscellaneous articles of base metal",
  "84": "Nuclear reactors, boilers, machinery and mechanical appliances",
  "85": "Electrical machinery and equipment, sound recorders, TV",
  "86": "Railway or tramway locomotives, rolling stock, track",
  "87": "Vehicles other than railway or tramway rolling stock",
  "88": "Aircraft, spacecraft, and parts thereof",
  "89": "Ships, boats and floating structures",
  "90": "Optical, photographic, cinematographic, measuring, medical instruments",
  "91": "Clocks and watches and parts thereof",
  "92": "Musical instruments, parts and accessories",
  "93": "Arms and ammunition, parts and accessories",
  "94": "Furniture, bedding, mattresses, lamps, signs, prefabricated buildings",
  "95": "Toys, games, sports requisites",
  "96": "Miscellaneous manufactured articles",
  "97": "Works of art, collectors pieces and antiques",
  "98": "Special classification provisions",
  "99": "Special transaction certificates"
};
function isValidFormat(code) {
  if (typeof code !== "string") return false;
  const clean = code.replace(/[ .-]/g, "");
  return /^\d{6,10}$/.test(clean);
}
function normalize(code) {
  if (typeof code !== "string") throw new HSCodeError("HS code must be string");
  const clean = code.replace(/[ .-]/g, "");
  if (!/^\d{6,10}$/.test(clean)) {
    throw new HSCodeError(`Invalid HS code format: '${code}'`);
  }
  return clean;
}
function chapter(code) {
  if (!isValidFormat(code)) return "";
  return normalize(code).slice(0, 2);
}
function heading(code) {
  if (!isValidFormat(code)) return "";
  return normalize(code).slice(0, 4);
}
function international(code) {
  if (!isValidFormat(code)) return "";
  return normalize(code).slice(0, 6);
}
function buildDefaultCatalog() {
  const cat = /* @__PURE__ */ new Map();
  for (const [ch, desc] of Object.entries(CHAPTER_DESCRIPTIONS)) {
    cat.set(ch + "0000", {
      issuingCountry: "WCO",
      international: ch + "0000",
      description: `${desc} (chapter-level placeholder)`
    });
  }
  return cat;
}
var globalCatalog = buildDefaultCatalog();
function setCatalog(cat) {
  globalCatalog = cat;
}
function getCatalog() {
  return globalCatalog;
}
function lookup(code) {
  const n = normalize(code);
  const exact = globalCatalog.get(n.slice(0, 6));
  if (exact) return exact;
  return globalCatalog.get(chapter(n) + "0000");
}
function validate(code) {
  if (!isValidFormat(code)) {
    return { valid: false, reason: `Invalid format: '${code}' (expected 6-10 digits)` };
  }
  const n = normalize(code);
  if (n.length < 6) return { valid: false, reason: "HS code must be at least 6 digits" };
  const ch = chapter(n);
  if (!CHAPTER_DESCRIPTIONS[ch]) {
    return { valid: false, reason: `Unknown chapter: '${ch}'` };
  }
  const entry = lookup(n);
  if (!entry) return { valid: false, reason: `No catalog entry for '${n}'` };
  const partial = entry.international.endsWith("0000");
  return { valid: true, partial, entry };
}
function suggest(description, limit = 5) {
  if (typeof description !== "string" || !description.trim()) return [];
  const lower = description.toLowerCase();
  const tokens = lower.split(/\W+/).filter((t) => t.length > 2);
  const scored = [];
  for (const [ch, desc] of Object.entries(CHAPTER_DESCRIPTIONS)) {
    const dLower = desc.toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (dLower.includes(t)) score += 1;
    }
    if (score > 0) scored.push({ code: ch + "0000", description: desc, score });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}
function verifyMatch(code, description) {
  const entry = lookup(code);
  if (!entry) return { match: false, confidence: 0, reason: "HS code not in catalog" };
  const entryTokens = new Set(entry.description.toLowerCase().split(/\W+/).filter((t) => t.length > 2));
  const descTokens = description.toLowerCase().split(/\W+/).filter((t) => t.length > 2);
  if (descTokens.length === 0) return { match: false, confidence: 0, reason: "Description has no usable tokens" };
  let hits = 0;
  for (const t of descTokens) if (entryTokens.has(t)) hits++;
  const confidence = hits / descTokens.length;
  return { match: confidence >= 0.3, confidence, reason: `${hits}/${descTokens.length} tokens matched` };
}

// packages/customs-shield/src/sanctions/screener.ts
var DEFAULT_COUNTRY_SANCTIONS = [
  { list: "OFAC", name: "Cuba", sanctionedCountry: "CU", program: "Cuban Assets Control Regulations" },
  { list: "OFAC", name: "Iran", sanctionedCountry: "IR", program: "Iranian Transactions and Sanctions Regulations" },
  { list: "OFAC", name: "North Korea", sanctionedCountry: "KP", program: "North Korea Sanctions Policy" },
  { list: "OFAC", name: "Syria", sanctionedCountry: "SY", program: "Syrian Civilian Protection" },
  { list: "EU", name: "Russia", sanctionedCountry: "RU", program: "EU Sanctions Regulation 833/2014" },
  { list: "EU", name: "Belarus", sanctionedCountry: "BY", program: "EU Belarus Sanctions" },
  { list: "UN", name: "Sudan", sanctionedCountry: "SD", program: "UN Security Council Resolution 1591" },
  { list: "UK", name: "Myanmar", sanctionedCountry: "MM", program: "UK Myanmar Sanctions" }
];
var globalSanctionsList = [...DEFAULT_COUNTRY_SANCTIONS];
function setSanctionsList(list) {
  if (!Array.isArray(list)) throw new SanctionsError("Sanctions list must be an array");
  globalSanctionsList = list;
}
function getSanctionsList() {
  return globalSanctionsList;
}
function normalizeName(name) {
  if (typeof name !== "string") return "";
  return name.toUpperCase().replace(/[''`-]/g, "").replace(/[^A-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function levenshtein(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let prev = new Array(b.length + 1);
  let curr = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}
function similarity(a, b) {
  const na = normalizeName(a);
  const nb = normalizeName(b);
  if (na.length === 0 && nb.length === 0) return 1;
  const d = levenshtein(na, nb);
  return 1 - d / Math.max(na.length, nb.length);
}
function screenParty(party, threshold = 0.75) {
  if (!party) throw new SanctionsError("screenParty: party is required");
  const hits = [];
  const namesToCheck = [party.name, ...party.aliases ?? []];
  for (const entry of globalSanctionsList) {
    if (entry.sanctionedCountry && entry.sanctionedCountry === party.country) {
      hits.push({ entry, confidence: 1, matchType: "exact", matchBasis: "country" });
      continue;
    }
    const entryNames = [entry.name, ...entry.aliases ?? []];
    let bestSim = 0;
    let bestType = "fuzzy";
    for (const candidate of namesToCheck) {
      for (const entryName of entryNames) {
        const sim = similarity(candidate, entryName);
        if (sim === 1) {
          bestSim = 1;
          bestType = "exact";
          break;
        }
        if (sim > bestSim) {
          bestSim = sim;
          bestType = sim >= 0.95 ? "exact" : sim >= 0.85 ? "partial" : "fuzzy";
        }
      }
      if (bestSim === 1) break;
    }
    if (bestSim >= threshold) {
      hits.push({ entry, confidence: bestSim, matchType: bestType, matchBasis: "name" });
    }
  }
  return { party, hits };
}
function screenParties(parties, threshold = 0.75) {
  const findings = [];
  for (const p of parties) {
    const result = screenParty(p, threshold);
    for (const h of result.hits) {
      let category;
      let severity;
      if (h.matchBasis === "country") {
        category = "sanctions_country_hit";
        severity = "critical";
      } else {
        category = "sanctions_hit";
        severity = h.matchType === "exact" ? "critical" : h.matchType === "partial" ? "high" : "medium";
      }
      findings.push({
        category,
        severity,
        message: `Potential sanctions match: party '${p.name}' (${p.country}) matches '${h.entry.name}' on ${h.entry.list} list (${h.entry.program ?? "n/a"}) \u2014 basis: ${h.matchBasis}`,
        ref: p.name,
        remediation: "Verify identity; if confirmed, halt transaction and file blocking report.",
        confidence: h.confidence
      });
    }
  }
  return findings;
}

// packages/customs-shield/src/compliance/rules.ts
var DEFAULT_RULE_SET = {
  embargoes: [
    { fromCountry: "US", toCountry: "CU", reason: "US embargo on Cuba" },
    { fromCountry: "US", toCountry: "IR", reason: "US embargo on Iran" },
    { fromCountry: "US", toCountry: "KP", reason: "US embargo on North Korea" },
    { fromCountry: "US", toCountry: "SY", reason: "US embargo on Syria" },
    { fromCountry: "EU", toCountry: "RU", reason: "EU sanctions on Russia (partial)" }
  ],
  licenses: [
    { destinationCountry: "US", hsChapter: "93", licenseType: "both", reason: "Firearms and ammunition require ATF/ECC license" },
    { destinationCountry: "US", hsChapter: "90", licenseType: "both", reason: "Some medical devices require FDA clearance" },
    { destinationCountry: "ZA", hsChapter: "27", licenseType: "import", reason: "Fuel imports require DOE license (South Africa)" },
    { destinationCountry: "EU", hsChapter: "85", licenseType: "both", reason: "Dual-use electronics may require export license" }
  ],
  restrictedOrigins: [
    { destinationCountry: "US", originCountry: "CN", reason: "Section 1260H restrictions on certain goods" },
    { destinationCountry: "EU", originCountry: "RU", reason: "14th sanctions package restrictions" }
  ],
  duties: [
    { destinationCountry: "US", hsChapter: "61", rate: 16.5 },
    { destinationCountry: "US", hsChapter: "62", rate: 16.5 },
    { destinationCountry: "US", hsChapter: "64", rate: 8.5 },
    { destinationCountry: "US", hsChapter: "85", rate: 2.5 },
    { destinationCountry: "US", hsChapter: "87", rate: 2.5 },
    { destinationCountry: "ZA", hsChapter: "61", rate: 30 },
    { destinationCountry: "ZA", hsChapter: "62", rate: 30 },
    { destinationCountry: "ZA", hsChapter: "85", rate: 5 },
    { destinationCountry: "EU", hsChapter: "61", rate: 12 },
    { destinationCountry: "EU", hsChapter: "62", rate: 12 },
    { destinationCountry: "EU", hsChapter: "85", rate: 0 }
  ]
};
var globalRuleSet = DEFAULT_RULE_SET;
function setRuleSet(rules) {
  if (!rules || !Array.isArray(rules.embargoes)) {
    throw new ComplianceError("Invalid rule set");
  }
  globalRuleSet = rules;
}
function getRuleSet() {
  return globalRuleSet;
}
function checkEmbargoes(shipment) {
  const out = [];
  for (const r of globalRuleSet.embargoes) {
    if (shipment.originCountry === r.fromCountry && shipment.destinationCountry === r.toCountry) {
      out.push({
        category: "restriction_violation",
        severity: "critical",
        message: `Embargo violation: ${r.reason}`,
        ref: shipment.id,
        remediation: "Halt shipment immediately.",
        confidence: 1
      });
    }
  }
  return out;
}
function checkLicenses(shipment) {
  const out = [];
  for (const item of shipment.items) {
    const ch = chapter(item.hsCode);
    for (const r of globalRuleSet.licenses) {
      if (r.destinationCountry !== shipment.destinationCountry) continue;
      if (r.hsChapter !== ch) continue;
      out.push({
        category: "license_required",
        severity: "high",
        message: `Item '${item.description.slice(0, 50)}' (HS chapter ${ch}) requires ${r.licenseType} license into ${r.destinationCountry}: ${r.reason}`,
        ref: item.hsCode,
        remediation: `Obtain ${r.licenseType} license before shipping.`,
        confidence: 0.95
      });
    }
  }
  return out;
}
function checkRestrictedOrigins(shipment) {
  const out = [];
  for (const item of shipment.items) {
    for (const r of globalRuleSet.restrictedOrigins) {
      if (r.destinationCountry !== shipment.destinationCountry) continue;
      if (r.originCountry !== item.countryOfOrigin) continue;
      out.push({
        category: "restriction_violation",
        severity: "high",
        message: `Restricted origin: '${item.description.slice(0, 50)}' from ${item.countryOfOrigin} into ${r.destinationCountry}: ${r.reason}`,
        ref: item.hsCode,
        remediation: "Source from a different origin or apply for an exception.",
        confidence: 0.9
      });
    }
  }
  return out;
}
function calculateDuty(shipment) {
  const perItem = [];
  let expected = 0;
  for (const item of shipment.items) {
    const ch = chapter(item.hsCode);
    const rule = globalRuleSet.duties.find((d) => d.destinationCountry === shipment.destinationCountry && d.hsChapter === ch);
    const rate = rule?.rate ?? 0;
    const value = item.quantity * item.unitValue;
    const duty = value * (rate / 100);
    expected += duty;
    perItem.push({ hsCode: item.hsCode, rate, value, duty });
  }
  const declared = shipment.declaredDuty ?? 0;
  return { declared, expected, delta: expected - declared, perItem };
}

// packages/customs-shield/src/restrictions/rules.ts
var DEFAULT_PRODUCT_RESTRICTIONS = [
  // Dual-use goods (Wassenaar Arrangement, simplified).
  { destinationCountry: "*", hsChapters: ["90", "93"], type: "license_required", reason: "Wassenaar dual-use controls" },
  // Drug precursors (UN Convention against Illicit Traffic).
  { destinationCountry: "*", hsChapters: ["29"], type: "license_required", reason: "UN drug precursor controls" },
  // Cultural property (UNESCO 1970).
  { destinationCountry: "*", hsChapters: ["97"], type: "documentation_required", reason: "UNESCO 1970 cultural property convention" },
  // Ozone-depleting substances (Montreal Protocol).
  { destinationCountry: "*", hsChapters: ["38"], type: "license_required", reason: "Montreal Protocol on ozone-depleting substances" },
  // Endangered species (CITES).
  { destinationCountry: "*", hsChapters: ["01", "05", "41", "43"], type: "documentation_required", reason: "CITES endangered species convention" }
];
var globalRestrictions = [...DEFAULT_PRODUCT_RESTRICTIONS];
function setRestrictions(list) {
  if (!Array.isArray(list)) throw new RestrictionError("Restrictions must be an array");
  globalRestrictions = list;
}
function getRestrictions() {
  return globalRestrictions;
}
function checkShipment(shipment) {
  const out = [];
  for (const item of shipment.items) {
    const ch = chapter(item.hsCode);
    for (const r of globalRestrictions) {
      if (r.destinationCountry !== "*" && r.destinationCountry !== shipment.destinationCountry) continue;
      if (!r.hsChapters.includes(ch)) continue;
      const severity = r.type === "prohibited" ? "critical" : r.type === "license_required" ? "high" : "medium";
      out.push({
        category: r.type === "prohibited" ? "restriction_violation" : "license_required",
        severity,
        message: `Item '${item.description.slice(0, 50)}' (HS ${item.hsCode}, chapter ${ch}) \u2014 ${r.type.replace(/_/g, " ")}: ${r.reason}`,
        ref: item.hsCode,
        remediation: r.type === "prohibited" ? "Cannot ship." : r.type === "license_required" ? "Obtain required license." : "Provide additional documentation.",
        confidence: 0.95
      });
    }
  }
  return out;
}

// packages/customs-shield/src/risk/scoring.ts
var HIGH_RISK_TRANSSHIPMENT = ["AE", "PA", "HK", "SG", "MT", "CY", "BS", "KY"];
var INDICATOR_WEIGHTS = {
  sanctions_country_hit: 45,
  sanctions_hit: 35,
  restriction_violation: 30,
  license_required: 12,
  hs_code_invalid: 10,
  hs_code_mismatch: 6,
  hs_code_suggestion: 2,
  duty_miscalculation: 6,
  documentation_gap: 4,
  vulnerability: 5,
  risk_indicator: 3
};
var SEVERITY_MULTIPLIER = {
  info: 0.3,
  low: 0.5,
  medium: 0.75,
  high: 1,
  critical: 1.2
};
var MAX_PER_FINDING = {
  info: 5,
  low: 10,
  medium: 20,
  high: 40,
  critical: 80
};
function detectIndicators(shipment) {
  const out = [];
  if (shipment.transshipmentCountries) {
    for (const c of shipment.transshipmentCountries) {
      if (HIGH_RISK_TRANSSHIPMENT.includes(c)) {
        out.push({
          category: "risk_indicator",
          severity: "medium",
          message: `Transshipment through high-risk country: ${c}`,
          ref: c,
          remediation: "Verify cargo integrity at transshipment point.",
          confidence: 0.7
        });
      }
    }
  }
  for (const item of shipment.items) {
    if (item.weightKg && item.weightKg > 0) {
      const valuePerKg = item.quantity * item.unitValue / item.weightKg;
      if (valuePerKg > 1e4) {
        out.push({
          category: "risk_indicator",
          severity: "medium",
          message: `Item '${item.description.slice(0, 40)}' has unusually high value/weight ratio (${valuePerKg.toFixed(0)}/kg) \u2014 possible misclassification or undervaluation`,
          ref: item.hsCode,
          remediation: "Verify HS code and declared value.",
          confidence: 0.6
        });
      } else if (valuePerKg < 0.5) {
        out.push({
          category: "risk_indicator",
          severity: "low",
          message: `Item '${item.description.slice(0, 40)}' has unusually low value/weight ratio (${valuePerKg.toFixed(2)}/kg) \u2014 possible overvaluation or waste shipment`,
          ref: item.hsCode,
          remediation: "Verify HS code and declared value.",
          confidence: 0.5
        });
      }
    }
  }
  if (!shipment.incoterm) {
    out.push({
      category: "documentation_gap",
      severity: "low",
      message: "Incoterm not declared",
      ref: shipment.id,
      remediation: "Specify Incoterm 2020 code.",
      confidence: 0.95
    });
  }
  if (!shipment.mode) {
    out.push({
      category: "documentation_gap",
      severity: "low",
      message: "Mode of transport not declared",
      ref: shipment.id,
      remediation: "Specify transport mode.",
      confidence: 0.95
    });
  }
  for (const item of shipment.items) {
    if (!item.weightKg) {
      out.push({
        category: "documentation_gap",
        severity: "low",
        message: `Item '${item.description.slice(0, 40)}' missing weight`,
        ref: item.hsCode,
        remediation: "Declare weight in kilograms.",
        confidence: 0.9
      });
    }
  }
  return out;
}
function bandFor(score) {
  if (score < 10) return "low";
  if (score < 25) return "moderate";
  if (score < 50) return "elevated";
  if (score < 75) return "high";
  return "critical";
}
function scoreFrom(findings) {
  if (!Array.isArray(findings)) throw new RiskError("Findings must be an array");
  let score = 0;
  let hasCritical = false;
  for (const f of findings) {
    const w = INDICATOR_WEIGHTS[f.category] ?? 1;
    const mult = SEVERITY_MULTIPLIER[f.severity] ?? 1;
    const cap = MAX_PER_FINDING[f.severity] ?? 20;
    const contribution = Math.min(cap, w * mult * f.confidence);
    score += contribution;
    if (f.severity === "critical") hasCritical = true;
  }
  score = Math.min(100, score);
  const band = bandFor(score);
  const holdForReview = hasCritical || score >= 50;
  return { score, band, holdForReview };
}
function analyzeVulnerabilities(shipment) {
  const out = [];
  const totalValue = shipment.items.reduce((s, i) => s + i.quantity * i.unitValue, 0);
  for (const item of shipment.items) {
    const itemValue = item.quantity * item.unitValue;
    if (totalValue > 0 && itemValue / totalValue > 0.8) {
      out.push({
        category: "vulnerability",
        severity: "medium",
        message: `Single-item value concentration: '${item.description.slice(0, 40)}' is ${(itemValue / totalValue * 100).toFixed(0)}% of shipment value`,
        ref: item.hsCode,
        remediation: "Consider splitting high-value shipments or adding insurance.",
        confidence: 0.85
      });
    }
  }
  if (shipment.shipper.name === shipment.consignee.name) {
    out.push({
      category: "vulnerability",
      severity: "low",
      message: "Shipper and consignee are the same party \u2014 potential circular trade",
      ref: shipment.id,
      remediation: "Verify legitimate related-party transaction.",
      confidence: 0.6
    });
  }
  return out;
}

// packages/customs-shield/src/reporting/builder.ts
function buildImportDeclaration(shipment, regulator) {
  if (!shipment) throw new ReportingError("Shipment is required");
  if (!regulator) throw new ReportingError("Regulator is required");
  const duty = calculateDuty(shipment);
  const fields = {
    shipmentId: shipment.id,
    shipperName: shipment.shipper.name,
    shipperCountry: shipment.shipper.country,
    consigneeName: shipment.consignee.name,
    consigneeCountry: shipment.consignee.country,
    originCountry: shipment.originCountry,
    destinationCountry: shipment.destinationCountry,
    declaredValue: shipment.declaredValue,
    currency: shipment.currency,
    incoterm: shipment.incoterm ?? "NOT_DECLARED",
    modeOfTransport: shipment.mode ?? "NOT_DECLARED",
    itemCount: shipment.items.length,
    totalWeightKg: shipment.items.reduce((s, i) => s + (i.weightKg ?? 0), 0),
    expectedDuty: duty.expected.toFixed(2),
    itemDetails: shipment.items.map((i) => ({
      hsCode: i.hsCode,
      description: i.description,
      quantity: i.quantity,
      unitValue: i.unitValue,
      countryOfOrigin: i.countryOfOrigin
    }))
  };
  return {
    regulator,
    shipmentId: shipment.id,
    type: "import_declaration",
    fields,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function buildSanctionsRecord(shipment, regulator, report) {
  if (!shipment) throw new ReportingError("Shipment is required");
  if (!report) throw new ReportingError("Shield report is required");
  return {
    regulator,
    shipmentId: shipment.id,
    type: "sanctions_screening_record",
    fields: {
      screenedAt: report.generatedAt,
      riskScore: report.riskScore,
      riskBand: report.riskBand,
      holdForReview: report.holdForReview,
      findingCount: report.findings.length,
      criticalFindings: report.findings.filter((f) => f.severity === "critical").length,
      highFindings: report.findings.filter((f) => f.severity === "high").length,
      sanctionsHits: report.counts.sanctions_hit ?? 0,
      countryHits: report.counts.sanctions_country_hit ?? 0
    },
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function validate2(report) {
  const missing = [];
  if (!report.regulator) missing.push("regulator");
  if (!report.shipmentId) missing.push("shipmentId");
  if (!report.type) missing.push("type");
  if (!report.generatedAt) missing.push("generatedAt");
  if (!report.fields || Object.keys(report.fields).length === 0) missing.push("fields");
  return { valid: missing.length === 0, missing };
}

// packages/customs-shield/src/shield.ts
var CustomsShield = class {
  config;
  logger;
  constructor(config) {
    this.config = mergeConfig2(config);
    this.logger = this.config.logger ?? (this.config.logLevel === "silent" ? new SilentLogger4() : new ConsoleLogger2(this.config.logLevel));
  }
  /** Screen a shipment end-to-end. */
  screen(shipment) {
    if (!shipment) throw new CustomsShieldError("Shipment is required");
    if (!shipment.id) throw new CustomsShieldError("Shipment ID is required");
    if (!Array.isArray(shipment.items)) throw new CustomsShieldError("Shipment items must be array");
    const start = Date.now();
    this.logger.debug("screen: starting", { shipmentId: shipment.id, itemCount: shipment.items.length });
    const findings = [];
    for (const item of shipment.items) {
      const v = validate(item.hsCode);
      if (!v.valid) {
        findings.push({
          category: "hs_code_invalid",
          severity: "high",
          message: `Invalid HS code '${item.hsCode}' on item '${item.description.slice(0, 40)}': ${v.reason}`,
          ref: item.hsCode,
          remediation: "Provide a valid 6-to-10-digit HS code.",
          confidence: 0.95
        });
      } else if (v.partial) {
        findings.push({
          category: "hs_code_suggestion",
          severity: "low",
          message: `HS code '${item.hsCode}' resolved only to chapter level \u2014 refine to 6+ digits`,
          ref: item.hsCode,
          remediation: "Use a more specific HS code.",
          confidence: 0.7
        });
      }
    }
    const parties = [shipment.shipper, shipment.consignee];
    findings.push(...screenParties(parties, this.config.sanctionsThreshold));
    if (shipment.transshipmentCountries) {
      for (const tc of shipment.transshipmentCountries) {
        findings.push(...screenParties([{ name: tc, country: tc }], this.config.sanctionsThreshold));
      }
    }
    findings.push(...checkEmbargoes(shipment));
    findings.push(...checkLicenses(shipment));
    findings.push(...checkRestrictedOrigins(shipment));
    findings.push(...checkShipment(shipment));
    findings.push(...detectIndicators(shipment));
    findings.push(...analyzeVulnerabilities(shipment));
    const { score, band, holdForReview } = scoreFrom(findings);
    const hold = holdForReview || score >= this.config.holdThreshold;
    let duty;
    if (this.config.computeDuty) {
      const d = calculateDuty(shipment);
      duty = { declared: d.declared, expected: d.expected, delta: d.delta };
      if (Math.abs(d.delta) > 1 && d.expected > 0) {
        findings.push({
          category: "duty_miscalculation",
          severity: Math.abs(d.delta) / d.expected > 0.1 ? "high" : "medium",
          message: `Duty mismatch: declared ${d.declared.toFixed(2)}, expected ${d.expected.toFixed(2)} (delta ${d.delta.toFixed(2)})`,
          ref: shipment.id,
          remediation: "Reconcile declared duty with calculated duty.",
          confidence: 0.9
        });
        const reScore = scoreFrom(findings);
        return this.buildReport(shipment.id, findings, reScore.score, reScore.band, hold || reScore.holdForReview, duty, start);
      }
    }
    return this.buildReport(shipment.id, findings, score, band, hold, duty, start);
  }
  buildReport(shipmentId, findings, score, band, holdForReview, duty, start) {
    const counts = {};
    for (const f of findings) counts[f.category] = (counts[f.category] ?? 0) + 1;
    const elapsedMs = Date.now() - start;
    const report = {
      shipmentId,
      riskScore: Math.round(score * 10) / 10,
      riskBand: band,
      holdForReview,
      findings,
      counts,
      duty,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      elapsedMs
    };
    this.logger.info("screen: complete", {
      shipmentId,
      riskScore: report.riskScore,
      band: report.riskBand,
      holdForReview,
      findingCount: findings.length,
      elapsedMs
    });
    return report;
  }
};
function screen(shipment, config) {
  return new CustomsShield(config).screen(shipment);
}

// packages/weave/src/errors.ts
var WeaveError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? "WEAVE_ERROR";
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var GraphError = class extends WeaveError {
  constructor(message, cause) {
    super(message, "GRAPH_ERROR", cause);
  }
};
var LayoutError = class extends WeaveError {
  constructor(message, cause) {
    super(message, "LAYOUT_ERROR", cause);
  }
};
var ExportError2 = class extends WeaveError {
  constructor(message, cause) {
    super(message, "EXPORT_ERROR", cause);
  }
};

// packages/weave/src/graph/graph.ts
var Graph = class _Graph {
  /** Whether this graph is directed. */
  directed;
  nodesById = /* @__PURE__ */ new Map();
  edgesById = /* @__PURE__ */ new Map();
  /** Out-adjacency: node id → set of neighbor ids. */
  outAdj = /* @__PURE__ */ new Map();
  /** In-adjacency: node id → set of predecessor ids. */
  inAdj = /* @__PURE__ */ new Map();
  constructor(directed = false) {
    this.directed = directed;
  }
  // ---------- node ops ----------
  /** Add a node. Throws if a node with the same id already exists. */
  addNode(node) {
    if (!node || typeof node.id !== "string") throw new GraphError("Node.id must be a string");
    if (this.nodesById.has(node.id)) {
      throw new GraphError(`Node already exists: ${node.id}`);
    }
    this.nodesById.set(node.id, { ...node });
    this.outAdj.set(node.id, /* @__PURE__ */ new Set());
    this.inAdj.set(node.id, /* @__PURE__ */ new Set());
    return this;
  }
  /** Add multiple nodes. */
  addNodes(nodes) {
    for (const n of nodes) this.addNode(n);
    return this;
  }
  /** Remove a node and any incident edges. No-op if the node does not exist. */
  removeNode(id) {
    if (!this.nodesById.has(id)) return this;
    const incident = [];
    for (const e of this.edgesById.values()) {
      if (e.source === id || e.target === id) incident.push(e.id);
    }
    for (const eid of incident) this.removeEdge(eid);
    this.nodesById.delete(id);
    this.outAdj.delete(id);
    this.inAdj.delete(id);
    return this;
  }
  /** Get a node by id, or undefined. */
  getNode(id) {
    return this.nodesById.get(id);
  }
  /** True iff a node with this id exists. */
  hasNode(id) {
    return this.nodesById.has(id);
  }
  /** Update an existing node's data (label/type/properties). Throws if missing. */
  updateNode(id, patch) {
    const existing = this.nodesById.get(id);
    if (!existing) throw new GraphError(`Node not found: ${id}`);
    this.nodesById.set(id, { ...existing, ...patch, id });
    return this;
  }
  // ---------- edge ops ----------
  /** Add an edge. Both endpoints must already exist. */
  addEdge(edge) {
    if (!edge || typeof edge.id !== "string") throw new GraphError("Edge.id must be a string");
    if (this.edgesById.has(edge.id)) {
      throw new GraphError(`Edge already exists: ${edge.id}`);
    }
    if (!this.nodesById.has(edge.source)) {
      throw new GraphError(`Edge source node not found: ${edge.source}`);
    }
    if (!this.nodesById.has(edge.target)) {
      throw new GraphError(`Edge target node not found: ${edge.target}`);
    }
    if (edge.source === edge.target) {
      throw new GraphError(`Self-loops are not supported: ${edge.id}`);
    }
    this.edgesById.set(edge.id, { ...edge });
    this.outAdj.get(edge.source).add(edge.target);
    this.inAdj.get(edge.target).add(edge.source);
    if (!this.directed) {
      this.outAdj.get(edge.target).add(edge.source);
      this.inAdj.get(edge.source).add(edge.target);
    }
    return this;
  }
  /** Add multiple edges. */
  addEdges(edges) {
    for (const e of edges) this.addEdge(e);
    return this;
  }
  /** Remove an edge. No-op if missing. */
  removeEdge(id) {
    const edge = this.edgesById.get(id);
    if (!edge) return this;
    this.edgesById.delete(id);
    this.outAdj.get(edge.source)?.delete(edge.target);
    this.inAdj.get(edge.target)?.delete(edge.source);
    if (!this.directed) {
      this.outAdj.get(edge.target)?.delete(edge.source);
      this.inAdj.get(edge.source)?.delete(edge.target);
    }
    return this;
  }
  /** Get an edge by id. */
  getEdge(id) {
    return this.edgesById.get(id);
  }
  /** True iff an edge with this id exists. */
  hasEdge(id) {
    return this.edgesById.has(id);
  }
  // ---------- queries ----------
  /** Snapshot of all nodes (new array). */
  get nodes() {
    return Array.from(this.nodesById.values());
  }
  /** Snapshot of all edges (new array). */
  get edges() {
    return Array.from(this.edgesById.values());
  }
  /** Number of nodes. */
  size() {
    return this.nodesById.size;
  }
  /** Number of edges. */
  edgeCount() {
    return this.edgesById.size;
  }
  /** Outgoing neighbors (successors) of a node. */
  successors(id) {
    const s = this.outAdj.get(id);
    return s ? Array.from(s) : [];
  }
  /** Incoming neighbors (predecessors) of a node. */
  predecessors(id) {
    const s = this.inAdj.get(id);
    return s ? Array.from(s) : [];
  }
  /** All neighbors. For undirected graphs this equals `successors`. */
  neighbors(id) {
    const seen = new Set(this.successors(id));
    for (const p of this.predecessors(id)) seen.add(p);
    return Array.from(seen);
  }
  /** Out-degree (number of outgoing edges). */
  outDegree(id) {
    return this.outAdj.get(id)?.size ?? 0;
  }
  /** In-degree (number of incoming edges). */
  inDegree(id) {
    return this.inAdj.get(id)?.size ?? 0;
  }
  /** Total degree. For undirected graphs this equals 2 × incident edges. */
  degree(id) {
    if (!this.directed) return this.outAdj.get(id)?.size ?? 0;
    return this.outDegree(id) + this.inDegree(id);
  }
  // ---------- algorithms ----------
  /** True iff the graph contains at least one cycle. */
  hasCycle() {
    if (!this.directed) {
      return this.hasCycleUndirected();
    }
    return this.hasCycleDirected();
  }
  hasCycleDirected() {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const color = /* @__PURE__ */ new Map();
    for (const id of this.nodesById.keys()) color.set(id, WHITE);
    const stack = [];
    for (const start of this.nodesById.keys()) {
      if (color.get(start) !== WHITE) continue;
      color.set(start, GRAY);
      stack.push([start, this.successors(start)[Symbol.iterator]()]);
      while (stack.length > 0) {
        const top = stack[stack.length - 1];
        const next = top[1].next();
        if (next.done) {
          color.set(top[0], BLACK);
          stack.pop();
          continue;
        }
        const w = next.value;
        const cw = color.get(w);
        if (cw === GRAY) return true;
        if (cw === WHITE) {
          color.set(w, GRAY);
          stack.push([w, this.successors(w)[Symbol.iterator]()]);
        }
      }
    }
    return false;
  }
  hasCycleUndirected() {
    const parent = /* @__PURE__ */ new Map();
    const find = (x) => {
      let root = x;
      while (parent.get(root) !== root) root = parent.get(root);
      let cur = x;
      while (parent.get(cur) !== root) {
        const next = parent.get(cur);
        parent.set(cur, root);
        cur = next;
      }
      return root;
    };
    for (const id of this.nodesById.keys()) parent.set(id, id);
    for (const e of this.edgesById.values()) {
      const ra = find(e.source);
      const rb = find(e.target);
      if (ra === rb) return true;
      parent.set(ra, rb);
    }
    return false;
  }
  /**
   * Topologically sort the nodes of a directed acyclic graph.
   * Throws `GraphError` if the graph contains a cycle or is undirected.
   */
  topologicalSort() {
    if (!this.directed) {
      throw new GraphError("topologicalSort requires a directed graph");
    }
    if (this.hasCycle()) {
      throw new GraphError("Cannot topologically sort a graph with cycles");
    }
    const inDeg = /* @__PURE__ */ new Map();
    for (const id of this.nodesById.keys()) inDeg.set(id, this.inDegree(id));
    const queue = [];
    for (const [id, d] of inDeg) if (d === 0) queue.push(id);
    queue.sort();
    const result = [];
    while (queue.length > 0) {
      const n = queue.shift();
      result.push(n);
      const succs = this.successors(n).sort();
      for (const s of succs) {
        const d = (inDeg.get(s) ?? 0) - 1;
        inDeg.set(s, d);
        if (d === 0) {
          let lo = 0, hi = queue.length;
          while (lo < hi) {
            const mid = lo + hi >> 1;
            if (queue[mid] < s) lo = mid + 1;
            else hi = mid;
          }
          queue.splice(lo, 0, s);
        }
      }
    }
    return result;
  }
  /** Find all connected components (undirected: connected; directed: weakly connected). */
  findConnectedComponents() {
    const visited = /* @__PURE__ */ new Set();
    const components = [];
    for (const start of this.nodesById.keys()) {
      if (visited.has(start)) continue;
      const comp = [];
      const stack = [start];
      visited.add(start);
      while (stack.length > 0) {
        const n = stack.pop();
        comp.push(n);
        for (const nb of this.neighbors(n)) {
          if (!visited.has(nb)) {
            visited.add(nb);
            stack.push(nb);
          }
        }
      }
      comp.sort();
      components.push(comp);
    }
    components.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    return components;
  }
  /** Return the connected component containing `id`, as a sorted id array. */
  componentOf(id) {
    if (!this.nodesById.has(id)) return [];
    const visited = /* @__PURE__ */ new Set([id]);
    const stack = [id];
    while (stack.length > 0) {
      const n = stack.pop();
      for (const nb of this.neighbors(n)) {
        if (!visited.has(nb)) {
          visited.add(nb);
          stack.push(nb);
        }
      }
    }
    return Array.from(visited).sort();
  }
  /**
   * Breadth-first traversal from `start` up to `maxDepth` (inclusive).
   * Returns a map of nodeId → depth.
   */
  bfsDepths(start, maxDepth = Infinity) {
    const result = /* @__PURE__ */ new Map();
    if (!this.nodesById.has(start)) return result;
    result.set(start, 0);
    const queue = [start];
    while (queue.length > 0) {
      const n = queue.shift();
      const d = result.get(n);
      if (d >= maxDepth) continue;
      for (const nb of this.neighbors(n)) {
        if (!result.has(nb)) {
          result.set(nb, d + 1);
          queue.push(nb);
        }
      }
    }
    return result;
  }
  /** Clone this graph (deep copy). */
  clone() {
    const g = new _Graph(this.directed);
    g.addNodes(this.nodes);
    g.addEdges(this.edges);
    return g;
  }
};
function createGraph(nodes, edges = [], directed = false) {
  const g = new Graph(directed);
  g.addNodes(nodes);
  g.addEdges(edges);
  return g;
}

// packages/weave/src/layout/layout.ts
function mulberry32(seed) {
  let a = seed >>> 0;
  return function() {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function assertNonEmpty(graph) {
  if (graph.size() === 0) throw new LayoutError("Cannot lay out an empty graph");
}
function initialPositions(graph, width, height, rng) {
  const pos = /* @__PURE__ */ new Map();
  const ids = graph.nodes.map((n) => n.id).sort();
  const cols = Math.max(1, Math.ceil(Math.sqrt(ids.length)));
  const cellW = width / (cols + 1);
  const cellH = height / (Math.ceil(ids.length / cols) + 1);
  ids.forEach((id, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const jx = (rng() - 0.5) * 10;
    const jy = (rng() - 0.5) * 10;
    pos.set(id, { x: cellW * (c + 1) + jx, y: cellH * (r + 1) + jy });
  });
  return pos;
}
function forceDirected(graph, opts = {}) {
  assertNonEmpty(graph);
  const width = opts.width ?? 800;
  const height = opts.height ?? 600;
  const iterations = opts.iterations ?? 300;
  const seed = opts.seed ?? 1;
  const repulsion = opts.repulsion ?? 1;
  const idealLength = opts.idealLength ?? Math.min(width, height) / Math.max(2, Math.sqrt(graph.size()));
  const rng = mulberry32(seed);
  const pos = initialPositions(graph, width, height, rng);
  const ids = graph.nodes.map((n) => n.id).sort();
  const edges = graph.edges;
  const temperature = width / 10;
  let cool = temperature;
  for (let iter = 0; iter < iterations; iter++) {
    const disp = /* @__PURE__ */ new Map();
    for (const id of ids) disp.set(id, { x: 0, y: 0 });
    for (let i = 0; i < ids.length; i++) {
      const v = ids[i];
      const pv = pos.get(v);
      for (let j = i + 1; j < ids.length; j++) {
        const u = ids[j];
        const pu = pos.get(u);
        let dx = pv.x - pu.x;
        let dy = pv.y - pu.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.01) {
          dist = 0.01;
          dx = (i - j) * 0.01 + 0.01;
          dy = (j - i) * 0.01 + 0.01;
        }
        const force = repulsion * idealLength * idealLength / (dist * dist);
        const fx = dx / dist * force;
        const fy = dy / dist * force;
        disp.get(v).x += fx;
        disp.get(v).y += fy;
        disp.get(u).x -= fx;
        disp.get(u).y -= fy;
      }
    }
    for (const e of edges) {
      const a = pos.get(e.source);
      const b = pos.get(e.target);
      if (!a || !b) continue;
      let dx = a.x - b.x;
      let dy = a.y - b.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.01) {
        dist = 0.01;
        dx = 0.01;
        dy = 0;
      }
      const force = dist * dist / idealLength;
      const fx = dx / dist * force;
      const fy = dy / dist * force;
      if (disp.has(e.source)) {
        disp.get(e.source).x -= fx;
        disp.get(e.source).y -= fy;
      }
      if (disp.has(e.target)) {
        disp.get(e.target).x += fx;
        disp.get(e.target).y += fy;
      }
    }
    for (const id of ids) {
      const d = disp.get(id);
      const dlen = Math.sqrt(d.x * d.x + d.y * d.y);
      if (dlen < 1e-6) continue;
      const limited = Math.min(dlen, cool);
      const p = pos.get(id);
      const nx = p.x + d.x / dlen * limited;
      const ny = p.y + d.y / dlen * limited;
      pos.set(id, {
        x: Math.max(20, Math.min(width - 20, nx)),
        y: Math.max(20, Math.min(height - 20, ny))
      });
    }
    cool = Math.max(cool * 0.95, 1);
  }
  return pos;
}
function hierarchical(graph, opts = {}) {
  assertNonEmpty(graph);
  const width = opts.width ?? 800;
  const height = opts.height ?? 600;
  const layerGap = opts.layerGap ?? 80;
  const nodeGap = opts.nodeGap ?? 80;
  const padding = opts.padding ?? 40;
  const layer = /* @__PURE__ */ new Map();
  const ids = graph.nodes.map((n) => n.id).sort();
  let roots2;
  if (opts.root) {
    roots2 = [opts.root];
  } else {
    roots2 = ids.filter((id) => graph.inDegree(id) === 0);
    if (roots2.length === 0) roots2 = [ids[0]];
  }
  for (const id of ids) layer.set(id, 0);
  for (let pass = 0; pass < ids.length + 1; pass++) {
    let changed = false;
    for (const e of graph.edges) {
      const a = layer.get(e.source) ?? 0;
      const b = layer.get(e.target) ?? 0;
      if (a + 1 > b) {
        layer.set(e.target, a + 1);
        changed = true;
      }
    }
    if (!changed) break;
  }
  if (!graph.directed) {
    for (const id of ids) layer.set(id, 0);
    const queue = [...roots2];
    const visited = new Set(roots2);
    while (queue.length > 0) {
      const n = queue.shift();
      const d = layer.get(n);
      for (const nb of graph.neighbors(n)) {
        if (!visited.has(nb)) {
          visited.add(nb);
          layer.set(nb, d + 1);
          queue.push(nb);
        }
      }
    }
    for (const id of ids) if (!layer.has(id)) layer.set(id, 0);
  }
  const maxLayer = Math.max(...layer.values(), 0);
  const layerNodes = Array.from({ length: maxLayer + 1 }, () => []);
  for (const id of ids) {
    layerNodes[layer.get(id)].push(id);
  }
  for (const ln of layerNodes) ln.sort();
  const pos = /* @__PURE__ */ new Map();
  for (let l = 0; l < layerNodes.length; l++) {
    const nodes = layerNodes[l];
    const totalW = (nodes.length - 1) * nodeGap;
    const startX = (width - totalW) / 2;
    for (let i = 0; i < nodes.length; i++) {
      pos.set(nodes[i], {
        x: startX + i * nodeGap,
        y: padding + l * layerGap
      });
    }
  }
  return pos;
}
function radial(graph, opts = {}) {
  assertNonEmpty(graph);
  const width = opts.width ?? 800;
  const height = opts.height ?? 600;
  const ringGap = opts.ringGap ?? 100;
  const padding = opts.padding ?? 40;
  const ids = graph.nodes.map((n) => n.id).sort();
  const root = opts.root ?? ids[0];
  if (!graph.hasNode(root)) {
    throw new LayoutError(`Radial root not found: ${root}`);
  }
  const depth = /* @__PURE__ */ new Map();
  depth.set(root, 0);
  const queue = [root];
  while (queue.length > 0) {
    const n = queue.shift();
    const d = depth.get(n);
    for (const nb of graph.neighbors(n)) {
      if (!depth.has(nb)) {
        depth.set(nb, d + 1);
        queue.push(nb);
      }
    }
  }
  const maxDepth = depth.size > 0 ? Math.max(...depth.values()) : 0;
  for (const id of ids) if (!depth.has(id)) depth.set(id, maxDepth + 1);
  const cx = width / 2;
  const cy = height / 2;
  const pos = /* @__PURE__ */ new Map();
  pos.set(root, { x: cx, y: cy });
  const byDepth = /* @__PURE__ */ new Map();
  for (const [id, d] of depth) {
    if (id === root) continue;
    if (!byDepth.has(d)) byDepth.set(d, []);
    byDepth.get(d).push(id);
  }
  for (const arr of byDepth.values()) arr.sort();
  for (const [d, nodes] of byDepth) {
    const r = d * ringGap;
    const angleStep = 2 * Math.PI / nodes.length;
    for (let i = 0; i < nodes.length; i++) {
      const angle = i * angleStep;
      pos.set(nodes[i], {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle)
      });
    }
  }
  for (const [id, p] of pos) {
    p.x = Math.max(padding, Math.min(width - padding, p.x));
    p.y = Math.max(padding, Math.min(height - padding, p.y));
    pos.set(id, p);
  }
  return pos;
}
function grid(graph, opts = {}) {
  assertNonEmpty(graph);
  const width = opts.width ?? 800;
  const height = opts.height ?? 600;
  const cellWidth = opts.cellWidth ?? 80;
  const cellHeight = opts.cellHeight ?? 80;
  const padding = opts.padding ?? 40;
  const ids = graph.nodes.map((n2) => n2.id).sort();
  const n = ids.length;
  const columns = opts.columns ?? Math.max(1, Math.ceil(Math.sqrt(n)));
  const pos = /* @__PURE__ */ new Map();
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / columns);
    const c = i % columns;
    pos.set(ids[i], {
      x: padding + c * cellWidth,
      y: padding + r * cellHeight
    });
  }
  return pos;
}

// packages/weave/src/filter/filter.ts
function subgraph(graph, keepIds) {
  const out = new Graph(graph.directed);
  const nodes = graph.nodes.filter((n) => keepIds.has(n.id));
  out.addNodes(nodes);
  const edges = graph.edges.filter((e) => keepIds.has(e.source) && keepIds.has(e.target));
  out.addEdges(edges);
  return out;
}
function filterByLabel(graph, predicate) {
  const keep = /* @__PURE__ */ new Set();
  for (const n of graph.nodes) if (predicate(n.label)) keep.add(n.id);
  return subgraph(graph, keep);
}
function filterByType(graph, type) {
  const keep = /* @__PURE__ */ new Set();
  for (const n of graph.nodes) {
    if (type === void 0 && n.type === void 0) keep.add(n.id);
    else if (n.type === type) keep.add(n.id);
  }
  return subgraph(graph, keep);
}
function filterByEdgeType(graph, type) {
  const out = new Graph(graph.directed);
  out.addNodes(graph.nodes);
  for (const e of graph.edges) {
    if (type === void 0 && e.type === void 0) out.addEdge(e);
    else if (e.type === type) out.addEdge(e);
  }
  return out;
}
function filterByComponent(graph, nodeId) {
  const comp = graph.componentOf(nodeId);
  return subgraph(graph, new Set(comp));
}
function filterByDepth(graph, rootId, maxDepth) {
  if (!graph.hasNode(rootId)) return new Graph(graph.directed);
  const depths = graph.bfsDepths(rootId, maxDepth);
  return subgraph(graph, new Set(depths.keys()));
}
function filterByProperty(graph, predicate) {
  const keep = /* @__PURE__ */ new Set();
  for (const n of graph.nodes) if (predicate(n.properties)) keep.add(n.id);
  return subgraph(graph, keep);
}
function filterNodes(graph, predicate) {
  const keep = /* @__PURE__ */ new Set();
  for (const n of graph.nodes) if (predicate(n)) keep.add(n.id);
  return subgraph(graph, keep);
}
function filterEdges(graph, predicate) {
  const out = new Graph(graph.directed);
  out.addNodes(graph.nodes);
  for (const e of graph.edges) if (predicate(e)) out.addEdge(e);
  return out;
}

// packages/weave/src/search/search.ts
function normalize2(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function levenshtein2(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const prev = new Array(n + 1);
  const curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= n; j++) prev[j] = curr[j];
  }
  return prev[n];
}
function similarity2(a, b) {
  if (a.length === 0 && b.length === 0) return 1;
  const d = levenshtein2(a, b);
  return 1 - d / Math.max(a.length, b.length);
}
function fieldsOf(node) {
  const out = [["label", node.label]];
  if (node.type) out.push(["type", node.type]);
  if (node.properties) {
    for (const [k, v] of Object.entries(node.properties)) {
      if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
        out.push([k, String(v)]);
      }
    }
  }
  return out;
}
function search(graph, query) {
  const q = normalize2(query);
  if (q.length === 0) return [];
  const results = [];
  for (const node of graph.nodes) {
    for (const [field, value] of fieldsOf(node)) {
      const nv = normalize2(value);
      if (nv === q) {
        results.push({ nodeId: node.id, score: 1, matchedField: field });
        break;
      }
      if (nv.includes(q)) {
        const score = q.length / nv.length;
        results.push({ nodeId: node.id, score, matchedField: field });
        break;
      }
    }
  }
  results.sort((a, b) => b.score - a.score || (a.nodeId < b.nodeId ? -1 : 1));
  return results;
}
function fuzzySearch(graph, query, threshold = 0.3) {
  const q = normalize2(query);
  if (q.length === 0) return [];
  const results = [];
  for (const node of graph.nodes) {
    let bestScore = 0;
    let bestField = "";
    for (const [field, value] of fieldsOf(node)) {
      const nv = normalize2(value);
      if (nv.length === 0) continue;
      const qTokens = q.split(" ").filter(Boolean);
      const vTokens = nv.split(" ").filter(Boolean);
      let acc = 0;
      let count = 0;
      for (const qt of qTokens) {
        let best = 0;
        for (const vt of vTokens) {
          const s = similarity2(qt, vt);
          if (s > best) best = s;
        }
        acc += best;
        count++;
      }
      const tokenScore = count > 0 ? acc / count : 0;
      const wholeScore = similarity2(q, nv);
      const fieldScore = Math.max(tokenScore, wholeScore);
      if (fieldScore > bestScore) {
        bestScore = fieldScore;
        bestField = field;
      }
    }
    if (bestScore >= threshold) {
      results.push({ nodeId: node.id, score: bestScore, matchedField: bestField });
    }
  }
  results.sort((a, b) => b.score - a.score || (a.nodeId < b.nodeId ? -1 : 1));
  return results;
}
function bfsPath(graph, start, target) {
  if (!graph.hasNode(start) || !graph.hasNode(target)) return null;
  if (start === target) return [start];
  const prev = /* @__PURE__ */ new Map();
  prev.set(start, null);
  const queue = [start];
  while (queue.length > 0) {
    const n = queue.shift();
    for (const nb of graph.neighbors(n)) {
      if (prev.has(nb)) continue;
      prev.set(nb, n);
      if (nb === target) {
        const path5 = [];
        let cur = nb;
        while (cur !== null) {
          path5.unshift(cur);
          cur = prev.get(cur) ?? null;
        }
        return path5;
      }
      queue.push(nb);
    }
  }
  return null;
}
function dijkstra(graph, start, target) {
  if (!graph.hasNode(start) || !graph.hasNode(target)) {
    return { path: null, distance: Infinity };
  }
  if (start === target) return { path: [start], distance: 0 };
  const adj = /* @__PURE__ */ new Map();
  for (const id of graph.nodes.map((n) => n.id)) adj.set(id, []);
  for (const e of graph.edges) {
    const w = typeof e.weight === "number" && e.weight >= 0 ? e.weight : 1;
    adj.get(e.source).push({ to: e.target, w });
    if (!graph.directed) adj.get(e.target).push({ to: e.source, w });
  }
  const dist = /* @__PURE__ */ new Map();
  const prev = /* @__PURE__ */ new Map();
  for (const id of adj.keys()) {
    dist.set(id, Infinity);
    prev.set(id, null);
  }
  dist.set(start, 0);
  const visited = /* @__PURE__ */ new Set();
  while (visited.size < dist.size) {
    let u = null;
    let best = Infinity;
    for (const [id, d] of dist) {
      if (!visited.has(id) && d < best) {
        best = d;
        u = id;
      }
    }
    if (u === null || best === Infinity) break;
    if (u === target) break;
    visited.add(u);
    for (const { to, w } of adj.get(u) ?? []) {
      if (visited.has(to)) continue;
      const alt = (dist.get(u) ?? Infinity) + w;
      if (alt < (dist.get(to) ?? Infinity)) {
        dist.set(to, alt);
        prev.set(to, u);
      }
    }
  }
  if (!isFinite(dist.get(target) ?? Infinity)) {
    return { path: null, distance: Infinity };
  }
  const path5 = [];
  let cur = target;
  while (cur !== null) {
    path5.unshift(cur);
    cur = prev.get(cur) ?? null;
  }
  return { path: path5, distance: dist.get(target) };
}

// packages/weave/src/export/exporter.ts
function jsonString2(s) {
  return JSON.stringify(s);
}
function isBareDotId(s) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(s);
}
function escapeMermaid(s) {
  return s.replace(/"/g, "#quot;");
}
function toJSON(graph) {
  return JSON.stringify({
    directed: graph.directed,
    nodes: graph.nodes,
    edges: graph.edges
  }, null, 2);
}
function toDot(graph, name = "G") {
  const lines = [];
  lines.push(`${graph.directed ? "digraph" : "graph"} ${name} {`);
  for (const n of graph.nodes) {
    const attrs = [`label=${jsonString2(n.label)}`];
    if (n.type) attrs.push(`type=${jsonString2(n.type)}`);
    lines.push(`  ${isBareDotId(n.id) ? n.id : jsonString2(n.id)} [${attrs.join(", ")}];`);
  }
  const op = graph.directed ? "->" : "--";
  for (const e of graph.edges) {
    const s = isBareDotId(e.source) ? e.source : jsonString2(e.source);
    const t = isBareDotId(e.target) ? e.target : jsonString2(e.target);
    const attrs = [];
    if (e.label) attrs.push(`label=${jsonString2(e.label)}`);
    if (e.type) attrs.push(`type=${jsonString2(e.type)}`);
    if (typeof e.weight === "number") attrs.push(`weight=${e.weight}`);
    const attrStr = attrs.length > 0 ? ` [${attrs.join(", ")}]` : "";
    lines.push(`  ${s} ${op} ${t}${attrStr};`);
  }
  lines.push("}");
  return lines.join("\n");
}
function toMermaid(graph) {
  const dir = graph.directed ? "TD" : "LR";
  const lines = [`flowchart ${dir}`];
  const safeId = (id) => id.replace(/[^A-Za-z0-9_]/g, "_");
  const idMap = /* @__PURE__ */ new Map();
  for (const n of graph.nodes) {
    const sid = safeId(n.id);
    idMap.set(n.id, sid);
    lines.push(`  ${sid}["${escapeMermaid(n.label)}"]`);
  }
  for (const e of graph.edges) {
    const s = idMap.get(e.source);
    const t = idMap.get(e.target);
    if (e.label) {
      lines.push(`  ${s} -- "${escapeMermaid(e.label)}" --> ${t}`);
    } else {
      lines.push(`  ${s} --> ${t}`);
    }
  }
  return lines.join("\n");
}
function toSVG(graph, layout, width = 800, height = 600) {
  if (!layout) throw new ExportError2("toSVG requires a layout");
  const positions = [];
  for (const n of graph.nodes) {
    const p = layout.get(n.id);
    if (!p) throw new ExportError2(`Layout missing position for node: ${n.id}`);
    positions.push({ id: n.id, x: p.x, y: p.y });
  }
  const minX = Math.min(0, ...positions.map((p) => p.x)) - 30;
  const minY = Math.min(0, ...positions.map((p) => p.y)) - 30;
  const maxX = Math.max(width, ...positions.map((p) => p.x)) + 30;
  const maxY = Math.max(height, ...positions.map((p) => p.y)) + 30;
  const w = maxX - minX;
  const h = maxY - minY;
  const lines = [];
  lines.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${minX} ${minY} ${w} ${h}">`);
  lines.push(`<rect x="${minX}" y="${minY}" width="${w}" height="${h}" fill="white"/>`);
  for (const e of graph.edges) {
    const a = layout.get(e.source);
    const b = layout.get(e.target);
    if (!a || !b) continue;
    lines.push(`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="black" stroke-width="1"/>`);
  }
  for (const p of positions) {
    const node = graph.getNode(p.id);
    const label = node?.label ?? p.id;
    lines.push(`<circle cx="${p.x}" cy="${p.y}" r="15" fill="#eee" stroke="black" stroke-width="1"/>`);
    lines.push(`<text x="${p.x}" y="${p.y - 22}" font-size="11" font-family="sans-serif" text-anchor="middle" fill="black">${escapeXml(label)}</text>`);
  }
  lines.push("</svg>");
  return lines.join("\n");
}
function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

// packages/weave/src/render/renderer.ts
var DEFAULT_RENDER_CONFIG = {
  width: 800,
  height: 600,
  nodeRadius: 18,
  fontSize: 12,
  nodeColor: "#6ba8d6",
  edgeColor: "#888888",
  backgroundColor: "#ffffff",
  showLabels: true
};
function mergeRenderConfig(partial) {
  if (!partial) return { ...DEFAULT_RENDER_CONFIG };
  return { ...DEFAULT_RENDER_CONFIG, ...partial };
}
function escapeXml2(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function renderToSVG(graph, layout, config) {
  const cfg = mergeRenderConfig(config);
  if (!layout) throw new ExportError2("renderToSVG requires a layout");
  for (const n of graph.nodes) {
    if (!layout.has(n.id)) {
      throw new ExportError2(`Layout missing position for node: ${n.id}`);
    }
  }
  const lines = [];
  lines.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${cfg.width}" height="${cfg.height}" viewBox="0 0 ${cfg.width} ${cfg.height}">`);
  lines.push(`<rect x="0" y="0" width="${cfg.width}" height="${cfg.height}" fill="${escapeXml2(cfg.backgroundColor)}"/>`);
  if (graph.directed) {
    lines.push("<defs>");
    lines.push(`<marker id="weave-arrow" markerWidth="10" markerHeight="10" refX="${cfg.nodeRadius + 2}" refY="3" orient="auto" markerUnits="userSpaceOnUse">`);
    lines.push(`<path d="M0,0 L0,6 L6,3 z" fill="${escapeXml2(cfg.edgeColor)}"/>`);
    lines.push("</marker>");
    lines.push("</defs>");
  }
  for (const e of graph.edges) {
    const a = layout.get(e.source);
    const b = layout.get(e.target);
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    let x2 = b.x;
    let y2 = b.y;
    if (len > 0) {
      const ux = dx / len;
      const uy = dy / len;
      x2 = b.x - ux * cfg.nodeRadius;
      y2 = b.y - uy * cfg.nodeRadius;
    }
    const markerAttr = graph.directed ? ' marker-end="url(#weave-arrow)"' : "";
    lines.push(`<line x1="${a.x}" y1="${a.y}" x2="${x2}" y2="${y2}" stroke="${escapeXml2(cfg.edgeColor)}" stroke-width="1.5"${markerAttr}/>`);
    if (cfg.showLabels && e.label) {
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2 - 4;
      lines.push(`<text x="${mx}" y="${my}" font-size="${Math.max(8, cfg.fontSize - 2)}" font-family="sans-serif" text-anchor="middle" fill="${escapeXml2(cfg.edgeColor)}">${escapeXml2(e.label)}</text>`);
    }
  }
  for (const n of graph.nodes) {
    const p = layout.get(n.id);
    lines.push(`<circle cx="${p.x}" cy="${p.y}" r="${cfg.nodeRadius}" fill="${escapeXml2(cfg.nodeColor)}" stroke="black" stroke-width="1"/>`);
    if (cfg.showLabels) {
      const labelY = p.y - cfg.nodeRadius - 4;
      lines.push(`<text x="${p.x}" y="${labelY}" font-size="${cfg.fontSize}" font-family="sans-serif" text-anchor="middle" fill="black">${escapeXml2(n.label)}</text>`);
    }
  }
  lines.push("</svg>");
  return lines.join("\n");
}

// packages/weave/src/topology/topology.ts
function takeSnapshot(graph, takenAt = (/* @__PURE__ */ new Date()).toISOString()) {
  const nodes = graph.nodes.map((n) => ({ ...n, properties: n.properties ? { ...n.properties } : void 0 }));
  const edges = graph.edges.map((e) => ({ ...e, properties: e.properties ? { ...e.properties } : void 0 }));
  return {
    takenAt,
    graph: createGraph(nodes, edges, graph.directed)
  };
}
function nodeIds(s) {
  return new Set(s.graph.nodes.map((n) => n.id));
}
function edgeIds(s) {
  return new Set(s.graph.edges.map((e) => e.id));
}
function diffSnapshots(a, b) {
  const aNodes = nodeIds(a);
  const bNodes = nodeIds(b);
  const aEdges = edgeIds(a);
  const bEdges = edgeIds(b);
  const addedNodes = b.graph.nodes.filter((n) => !aNodes.has(n.id));
  const removedNodes = a.graph.nodes.map((n) => n.id).filter((id) => !bNodes.has(id));
  const addedEdges = b.graph.edges.filter((e) => !aEdges.has(e.id));
  const removedEdges = a.graph.edges.map((e) => e.id).filter((id) => !bEdges.has(id));
  return { addedNodes, removedNodes, addedEdges, removedEdges };
}
var TopologyTracker = class {
  maxHistory;
  history = [];
  /** @param maxHistory maximum number of snapshots to retain (default 10). */
  constructor(maxHistory = 10) {
    if (maxHistory < 1) throw new RangeError("maxHistory must be >= 1");
    this.maxHistory = maxHistory;
  }
  /** Record a snapshot of the given graph. Returns the new snapshot. */
  snapshot(graph, takenAt = (/* @__PURE__ */ new Date()).toISOString()) {
    const snap = takeSnapshot(graph, takenAt);
    this.history.push(snap);
    while (this.history.length > this.maxHistory) this.history.shift();
    return snap;
  }
  /** All retained snapshots in chronological order. */
  snapshots() {
    return this.history.slice();
  }
  /** The most recent snapshot, or undefined if none recorded. */
  current() {
    return this.history.length > 0 ? this.history[this.history.length - 1] : void 0;
  }
  /** The snapshot before the most recent, or undefined if < 2 snapshots exist. */
  previous() {
    return this.history.length >= 2 ? this.history[this.history.length - 2] : void 0;
  }
  /** Diff the two most recent snapshots. Returns null if < 2 exist. */
  diff() {
    const prev = this.previous();
    const curr = this.current();
    if (!prev || !curr) return null;
    return diffSnapshots(prev, curr);
  }
  /** Diff two arbitrary retained snapshots by index. */
  diffAt(i, j) {
    if (i < 0 || j < 0 || i >= this.history.length || j >= this.history.length) return null;
    return diffSnapshots(this.history[i], this.history[j]);
  }
  /** Clear all retained history. */
  reset() {
    this.history = [];
  }
};

// packages/weave/src/interactive/interactive.ts
var DEFAULT_VIEWPORT = { centerX: 0, centerY: 0, zoom: 1 };
var SelectionModel = class {
  selectedNodes = /* @__PURE__ */ new Set();
  selectedEdges = /* @__PURE__ */ new Set();
  /** Select a node by id. */
  selectNode(id) {
    this.selectedNodes.add(id);
    return this;
  }
  /** Select an edge by id. */
  selectEdge(id) {
    this.selectedEdges.add(id);
    return this;
  }
  /** Deselect a node. */
  deselectNode(id) {
    this.selectedNodes.delete(id);
    return this;
  }
  /** Deselect an edge. */
  deselectEdge(id) {
    this.selectedEdges.delete(id);
    return this;
  }
  /** Toggle node selection. Returns the new selection state. */
  toggleNode(id) {
    if (this.selectedNodes.has(id)) {
      this.selectedNodes.delete(id);
      return false;
    }
    this.selectedNodes.add(id);
    return true;
  }
  /** Toggle edge selection. Returns the new selection state. */
  toggleEdge(id) {
    if (this.selectedEdges.has(id)) {
      this.selectedEdges.delete(id);
      return false;
    }
    this.selectedEdges.add(id);
    return true;
  }
  /** True iff the node is currently selected. */
  isNodeSelected(id) {
    return this.selectedNodes.has(id);
  }
  /** True iff the edge is currently selected. */
  isEdgeSelected(id) {
    return this.selectedEdges.has(id);
  }
  /** All currently selected node ids. */
  selectedNodeIds() {
    return Array.from(this.selectedNodes).sort();
  }
  /** All currently selected edge ids. */
  selectedEdgeIds() {
    return Array.from(this.selectedEdges).sort();
  }
  /** Number of selected nodes. */
  nodeCount() {
    return this.selectedNodes.size;
  }
  /** Number of selected edges. */
  edgeCount() {
    return this.selectedEdges.size;
  }
  /** Clear all selections. */
  clear() {
    this.selectedNodes.clear();
    this.selectedEdges.clear();
    return this;
  }
  /** True iff nothing is selected. */
  isEmpty() {
    return this.selectedNodes.size === 0 && this.selectedEdges.size === 0;
  }
  /** Replace the selection with the given node/edge ids. */
  setSelection(nodes, edges = []) {
    this.clear();
    for (const n of nodes) this.selectedNodes.add(n);
    for (const e of edges) this.selectedEdges.add(e);
    return this;
  }
  /** Snapshot the current selection as plain arrays. */
  toJSON() {
    return { nodes: this.selectedNodeIds(), edges: this.selectedEdgeIds() };
  }
};
var IDENTITY_VIEWPORT = DEFAULT_VIEWPORT;
function validateViewport(v) {
  if (!Number.isFinite(v.centerX) || !Number.isFinite(v.centerY)) {
    throw new RangeError("Viewport.centerX/centerY must be finite");
  }
  if (!Number.isFinite(v.zoom) || v.zoom <= 0) {
    throw new RangeError("Viewport.zoom must be a positive finite number");
  }
}
function applyViewport(point, viewport) {
  validateViewport(viewport);
  return {
    x: (point.x - viewport.centerX) * viewport.zoom,
    y: (point.y - viewport.centerY) * viewport.zoom
  };
}
function inverseViewport(point, viewport) {
  validateViewport(viewport);
  return {
    x: point.x / viewport.zoom + viewport.centerX,
    y: point.y / viewport.zoom + viewport.centerY
  };
}
function panTo(graphPoint, screenPoint, zoom) {
  if (!Number.isFinite(zoom) || zoom <= 0) throw new RangeError("zoom must be positive");
  return {
    centerX: graphPoint.x - screenPoint.x / zoom,
    centerY: graphPoint.y - screenPoint.y / zoom,
    zoom
  };
}
function zoomAt(viewport, anchor, factor) {
  validateViewport(viewport);
  if (!Number.isFinite(factor) || factor <= 0) throw new RangeError("factor must be positive");
  const newZoom = viewport.zoom * factor;
  const graphAnchor = inverseViewport(anchor, viewport);
  return panTo(graphAnchor, anchor, newZoom);
}

// packages/contracts/src/errors.ts
var ContractsError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? "CONTRACTS_ERROR";
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var SchemaError = class extends ContractsError {
  constructor(message, cause) {
    super(message, "SCHEMA_ERROR", cause);
  }
};
var ManifestError = class extends ContractsError {
  constructor(message, code, cause) {
    super(message, code ?? "MANIFEST_ERROR", cause);
  }
};
var MANIFEST_ERROR_CODES = {
  INVALID_NAME: "MANIFEST_INVALID_NAME",
  INVALID_VERSION: "MANIFEST_INVALID_VERSION",
  INVALID_DEPENDENCY: "MANIFEST_INVALID_DEPENDENCY",
  MISSING_FIELD: "MANIFEST_MISSING_FIELD",
  INVALID_EXPORTS: "MANIFEST_INVALID_EXPORTS",
  INVALID_IMPORTS: "MANIFEST_INVALID_IMPORTS",
  INVALID_CAPABILITIES: "MANIFEST_INVALID_CAPABILITIES",
  INVALID_DEPENDENCIES: "MANIFEST_INVALID_DEPENDENCIES"
};
var CompatibilityError = class extends ContractsError {
  constructor(message, cause) {
    super(message, "COMPATIBILITY_ERROR", cause);
  }
};
var ApiValidationError = class extends ContractsError {
  constructor(message, cause) {
    super(message, "API_VALIDATION_ERROR", cause);
  }
};
var SyncError2 = class extends ContractsError {
  constructor(message, cause) {
    super(message, "SYNC_ERROR", cause);
  }
};
var BoundaryError = class extends ContractsError {
  constructor(message, cause) {
    super(message, "BOUNDARY_ERROR", cause);
  }
};
var ReportingError2 = class extends ContractsError {
  constructor(message, cause) {
    super(message, "REPORTING_ERROR", cause);
  }
};

// packages/contracts/src/schema/schema.ts
var SCHEMA_TYPES = /* @__PURE__ */ new Set([
  "string",
  "number",
  "boolean",
  "null",
  "object",
  "array",
  "enum",
  "ref",
  "union",
  "intersection"
]);
function compileSchema(definition) {
  if (!definition || typeof definition !== "object") {
    throw new SchemaError("schema definition must be an object");
  }
  const def = definition;
  if (typeof def.name !== "string" || def.name.length === 0) {
    throw new SchemaError("schema definition must have a non-empty name");
  }
  if (typeof def.version !== "string" || def.version.length === 0) {
    throw new SchemaError(`schema "${def.name}" must have a non-empty version`);
  }
  const fields = compileFields(def.name, def.fields);
  return {
    name: def.name,
    version: def.version,
    fields,
    ...def.description ? { description: def.description } : {}
  };
}
function compileFields(schemaName, raw) {
  if (raw === void 0 || raw === null) return [];
  if (Array.isArray(raw)) {
    return raw.map((f, i) => compileField(`${schemaName}.fields[${i}]`, f));
  }
  if (typeof raw === "object") {
    const out = [];
    for (const [name, def] of Object.entries(raw)) {
      const compiled = compileField(`${schemaName}.fields.${name}`, def);
      compiled.name = name;
      out.push(compiled);
    }
    return out;
  }
  throw new SchemaError(`schema "${schemaName}" has invalid fields (expected array or record)`);
}
function compileField(path5, def) {
  if (!def || typeof def !== "object") {
    throw new SchemaError(`field at ${path5} must be an object`);
  }
  const d = def;
  const type = d.type ?? "string";
  if (!SCHEMA_TYPES.has(type)) {
    throw new SchemaError(
      `field at ${path5} has invalid type "${type}"; expected one of ${[...SCHEMA_TYPES].join(", ")}`
    );
  }
  if (type === "enum" && (!Array.isArray(d.enum) || d.enum.length === 0)) {
    throw new SchemaError(`enum field at ${path5} must declare a non-empty "enum" array`);
  }
  if (type === "ref" && (typeof d.ref !== "string" || d.ref.length === 0)) {
    throw new SchemaError(`ref field at ${path5} must declare a non-empty "ref" string`);
  }
  if (type === "array" && (!d.of || typeof d.of !== "object")) {
    throw new SchemaError(`array field at ${path5} must declare an "of" element type`);
  }
  if (type === "union" && (!Array.isArray(d.oneOf) || d.oneOf.length === 0)) {
    throw new SchemaError(`union field at ${path5} must declare a non-empty "oneOf" array`);
  }
  if (type === "intersection" && (!Array.isArray(d.allOf) || d.allOf.length === 0)) {
    throw new SchemaError(`intersection field at ${path5} must declare a non-empty "allOf" array`);
  }
  const field = {
    name: d.name ?? path5.split(".").pop() ?? "",
    type,
    required: d.required ?? true
  };
  if (d.description !== void 0) field.description = d.description;
  if (d.default !== void 0) field.default = d.default;
  if (Array.isArray(d.enum)) field.enum = d.enum;
  if (d.ref !== void 0) field.ref = d.ref;
  if (d.of !== void 0) field.of = compileField(`${path5}.of`, d.of);
  if (Array.isArray(d.oneOf)) {
    field.oneOf = d.oneOf.map((m, i) => compileField(`${path5}.oneOf[${i}]`, m));
  }
  if (Array.isArray(d.allOf)) {
    field.allOf = d.allOf.map((m, i) => compileField(`${path5}.allOf[${i}]`, m));
  }
  if (d.fields !== void 0) {
    field.fields = compileFields(path5, d.fields);
  }
  return field;
}
function validateValue(schema, value, refs) {
  const errors = [];
  validateObject(schema.fields, value, schema.name, errors, refs ?? {});
  return { valid: errors.length === 0, errors };
}
function validateObject(fields, value, path5, errors, refs) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    errors.push({
      path: path5,
      message: `expected object, got ${describeType(value)}`,
      code: "SCHEMA_ERROR",
      expected: "object",
      actual: describeType(value)
    });
    return;
  }
  const record = value;
  for (const field of fields) {
    const fieldPath = path5 ? `${path5}.${field.name}` : field.name;
    const present = Object.prototype.hasOwnProperty.call(record, field.name);
    if (!present) {
      if (field.required) {
        errors.push({
          path: fieldPath,
          message: `required field "${field.name}" is missing`,
          code: "SCHEMA_ERROR",
          expected: "present",
          actual: "missing"
        });
      }
      continue;
    }
    const v = record[field.name];
    validateField(field, v, fieldPath, errors, refs);
  }
}
function validateField(field, value, path5, errors, refs) {
  switch (field.type) {
    case "string":
      if (typeof value !== "string") {
        errors.push(typeError(path5, "string", value));
      }
      break;
    case "number":
      if (typeof value !== "number" || Number.isNaN(value)) {
        errors.push(typeError(path5, "number", value));
      }
      break;
    case "boolean":
      if (typeof value !== "boolean") {
        errors.push(typeError(path5, "boolean", value));
      }
      break;
    case "null":
      if (value !== null) {
        errors.push(typeError(path5, "null", value));
      }
      break;
    case "enum":
      if (!Array.isArray(field.enum) || !field.enum.includes(value)) {
        errors.push({
          path: path5,
          message: `value ${JSON.stringify(value)} is not in enum [${(field.enum ?? []).map((v) => JSON.stringify(v)).join(", ")}]`,
          code: "SCHEMA_ERROR",
          expected: `enum[${(field.enum ?? []).length}]`,
          actual: describeType(value)
        });
      }
      break;
    case "object":
      if (value === null || typeof value !== "object" || Array.isArray(value)) {
        errors.push(typeError(path5, "object", value));
      } else if (field.fields && field.fields.length > 0) {
        validateObject(field.fields, value, path5, errors, refs);
      }
      break;
    case "array":
      if (!Array.isArray(value)) {
        errors.push(typeError(path5, "array", value));
      } else if (field.of) {
        for (let i = 0; i < value.length; i++) {
          validateField(field.of, value[i], `${path5}[${i}]`, errors, refs);
        }
      }
      break;
    case "ref": {
      const refName = field.ref ?? "";
      const refSchema = refs[refName];
      if (!refSchema) {
        if (value === void 0 || value === null) {
          errors.push(typeError(path5, `ref(${refName})`, value));
        }
        break;
      }
      validateObject(refSchema.fields, value, path5, errors, refs);
      break;
    }
    case "union": {
      const members = field.oneOf ?? [];
      const memberErrors = [];
      let matched = false;
      for (const member of members) {
        const sub = [];
        validateField(member, value, path5, sub, refs);
        if (sub.length === 0) {
          matched = true;
          break;
        }
        memberErrors.push(sub);
      }
      if (!matched) {
        errors.push({
          path: path5,
          message: `value did not match any union member at ${path5}`,
          code: "SCHEMA_ERROR",
          expected: `union[${members.length}]`,
          actual: describeType(value)
        });
      }
      break;
    }
    case "intersection": {
      const members = field.allOf ?? [];
      for (const member of members) {
        validateField(member, value, path5, errors, refs);
      }
      break;
    }
    default:
      errors.push({
        path: path5,
        message: `unknown schema type "${field.type}" at ${path5}`,
        code: "SCHEMA_ERROR",
        expected: "known type",
        actual: field.type
      });
  }
}
function typeError(path5, expected, value) {
  return {
    path: path5,
    message: `expected ${expected} at ${path5}, got ${describeType(value)}`,
    code: "SCHEMA_ERROR",
    expected,
    actual: describeType(value)
  };
}
function describeType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  return typeof value;
}

// packages/contracts/src/manifest/manifest.ts
var NAME_PATTERN = /^(@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*$/;
var SEMVER_PATTERN = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\w-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\w-]*))*))?(?:\+([\w.-]+))?$/;
function validateManifest(manifest) {
  const errors = [];
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    errors.push({
      path: "",
      message: "manifest must be a non-array object",
      code: MANIFEST_ERROR_CODES.MISSING_FIELD,
      expected: "object",
      actual: manifest === null ? "null" : typeof manifest
    });
    return { valid: false, errors };
  }
  const m = manifest;
  if (typeof m.name !== "string" || m.name.length === 0) {
    errors.push({
      path: "name",
      message: "manifest.name must be a non-empty string",
      code: MANIFEST_ERROR_CODES.MISSING_FIELD,
      expected: "string",
      actual: typeof m.name
    });
  } else if (!NAME_PATTERN.test(m.name)) {
    errors.push({
      path: "name",
      message: `manifest.name "${m.name}" is not a valid package name`,
      code: MANIFEST_ERROR_CODES.INVALID_NAME,
      expected: "lowercase scoped or unscoped package name",
      actual: m.name
    });
  }
  if (typeof m.version !== "string" || m.version.length === 0) {
    errors.push({
      path: "version",
      message: "manifest.version must be a non-empty semver string",
      code: MANIFEST_ERROR_CODES.MISSING_FIELD,
      expected: "semver string",
      actual: typeof m.version
    });
  } else if (!SEMVER_PATTERN.test(m.version)) {
    errors.push({
      path: "version",
      message: `manifest.version "${m.version}" is not a valid semver`,
      code: MANIFEST_ERROR_CODES.INVALID_VERSION,
      expected: "MAJOR.MINOR.PATCH[-prerelease][+build]",
      actual: m.version
    });
  }
  if (m.dependencies !== void 0) {
    if (!m.dependencies || typeof m.dependencies !== "object" || Array.isArray(m.dependencies)) {
      errors.push({
        path: "dependencies",
        message: "manifest.dependencies must be a record of name \u2192 range",
        code: MANIFEST_ERROR_CODES.INVALID_DEPENDENCIES,
        expected: "Record<string, string>",
        actual: describeType2(m.dependencies)
      });
    } else {
      for (const [dep, range] of Object.entries(m.dependencies)) {
        if (typeof range !== "string" || range.length === 0) {
          errors.push({
            path: `dependencies.${dep}`,
            message: `dependency "${dep}" must map to a non-empty version range string`,
            code: MANIFEST_ERROR_CODES.INVALID_DEPENDENCY,
            expected: "string",
            actual: typeof range
          });
        }
      }
    }
  }
  if (m.exports !== void 0) validateStringArray(m.exports, "exports", errors);
  if (m.imports !== void 0) validateStringArray(m.imports, "imports", errors);
  if (m.capabilities !== void 0) validateStringArray(m.capabilities, "capabilities", errors);
  return { valid: errors.length === 0, errors };
}
function validateStringArray(value, field, errors) {
  const code = field === "exports" ? MANIFEST_ERROR_CODES.INVALID_EXPORTS : field === "imports" ? MANIFEST_ERROR_CODES.INVALID_IMPORTS : MANIFEST_ERROR_CODES.INVALID_CAPABILITIES;
  if (!Array.isArray(value)) {
    errors.push({
      path: field,
      message: `manifest.${field} must be an array of strings`,
      code,
      expected: "string[]",
      actual: describeType2(value)
    });
    return;
  }
  for (let i = 0; i < value.length; i++) {
    if (typeof value[i] !== "string" || value[i].length === 0) {
      errors.push({
        path: `${field}[${i}]`,
        message: `manifest.${field}[${i}] must be a non-empty string`,
        code,
        expected: "string",
        actual: describeType2(value[i])
      });
    }
  }
}
function assertManifest(manifest) {
  const result = validateManifest(manifest);
  if (!result.valid) {
    const first = result.errors[0];
    throw new ManifestError(
      first ? `${first.path ? first.path + ": " : ""}${first.message}` : "invalid manifest",
      first?.code
    );
  }
}
function isValidManifest(manifest) {
  return validateManifest(manifest).valid;
}
function describeType2(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

// packages/contracts/src/compatibility/compatibility.ts
var SEMVER_PATTERN2 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\w-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\w-]*))*))?(?:\+([\w.-]+))?$/;
function isSemver(v) {
  return typeof v === "string" && SEMVER_PATTERN2.test(v);
}
function parseSemver(v) {
  if (typeof v !== "string") {
    throw new CompatibilityError(`expected semver string, got ${typeof v}`);
  }
  const m = v.match(SEMVER_PATTERN2);
  if (!m) {
    throw new CompatibilityError(`"${v}" is not a valid semver`);
  }
  const [, major, minor, patch, prerelease] = m;
  const out = {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch)
  };
  if (prerelease !== void 0 && prerelease.length > 0) out.prerelease = prerelease;
  return out;
}
function compareSemver(a, b) {
  const pa = parseSemver(a);
  const pb = parseSemver(b);
  return compareParsedSemver(pa, pb);
}
function compareParsedSemver(a, b) {
  if (a.major !== b.major) return a.major < b.major ? -1 : 1;
  if (a.minor !== b.minor) return a.minor < b.minor ? -1 : 1;
  if (a.patch !== b.patch) return a.patch < b.patch ? -1 : 1;
  const ap = a.prerelease;
  const bp = b.prerelease;
  if (ap === void 0 && bp === void 0) return 0;
  if (ap === void 0) return 1;
  if (bp === void 0) return -1;
  return comparePrerelease(ap, bp);
}
function comparePrerelease(a, b) {
  const aa = a.split(".");
  const bb = b.split(".");
  const n = Math.min(aa.length, bb.length);
  for (let i = 0; i < n; i++) {
    const x = aa[i];
    const y = bb[i];
    const xn = /^[0-9]+$/.test(x);
    const yn = /^[0-9]+$/.test(y);
    if (xn && yn) {
      const xi = Number(x);
      const yi = Number(y);
      if (xi !== yi) return xi < yi ? -1 : 1;
    } else if (xn !== yn) {
      return xn ? -1 : 1;
    } else if (x !== y) {
      return x < y ? -1 : 1;
    }
  }
  if (aa.length === bb.length) return 0;
  return aa.length < bb.length ? -1 : 1;
}
function satisfies(version, range) {
  const v = parseSemver(version);
  const r = range.trim();
  if (r === "" || r === "*") return true;
  if (r.startsWith(">=")) return compareSemver(version, r.slice(2).trim()) >= 0;
  if (r.startsWith("<=")) return compareSemver(version, r.slice(2).trim()) <= 0;
  if (r.startsWith(">")) return compareSemver(version, r.slice(1).trim()) > 0;
  if (r.startsWith("<")) return compareSemver(version, r.slice(1).trim()) < 0;
  if (r.startsWith("^")) {
    const target = parseSemver(r.slice(1).trim());
    if (compareParsedSemver(v, target) < 0) return false;
    if (target.major > 0) {
      return v.major === target.major;
    }
    if (target.minor > 0) {
      return v.major === 0 && v.minor === target.minor;
    }
    return v.major === 0 && v.minor === 0 && v.patch === target.patch;
  }
  if (r.startsWith("~")) {
    const target = parseSemver(r.slice(1).trim());
    if (compareParsedSemver(v, target) < 0) return false;
    if (target.major !== v.major) return false;
    return v.minor === target.minor;
  }
  return compareSemver(version, r) === 0;
}
function checkBackwardCompat(oldSchema, newSchema) {
  const breakingChanges = [];
  const oldByName = /* @__PURE__ */ new Map();
  for (const f of oldSchema.fields) oldByName.set(f.name, f);
  const newByName = /* @__PURE__ */ new Map();
  for (const f of newSchema.fields) newByName.set(f.name, f);
  for (const [name, oldField] of oldByName) {
    const newField = newByName.get(name);
    if (!newField) {
      breakingChanges.push({
        type: "field_removed",
        field: name,
        from: oldField.type
      });
      continue;
    }
    if (oldField.type !== newField.type) {
      breakingChanges.push({
        type: "type_changed",
        field: name,
        from: oldField.type,
        to: newField.type
      });
    }
    if (oldField.type === "enum" && newField.type === "enum") {
      const oldSet = new Set(oldField.enum?.map((v) => JSON.stringify(v)) ?? []);
      const newSet = new Set(newField.enum?.map((v) => JSON.stringify(v)) ?? []);
      for (const v of oldSet) {
        if (!newSet.has(v)) {
          breakingChanges.push({
            type: "enum_value_removed",
            field: name,
            from: v,
            to: void 0
          });
        }
      }
    }
  }
  for (const [name, newField] of newByName) {
    if (!oldByName.has(name) && newField.required) {
      breakingChanges.push({
        type: "required_added",
        field: name,
        to: newField.type
      });
    }
  }
  return { compatible: breakingChanges.length === 0, breakingChanges };
}

// packages/contracts/src/api/api.ts
function findEndpoint(contract, method, path5) {
  const m = method.toUpperCase();
  return contract.endpoints.find((e) => e.method === m && e.path === path5);
}
function validateRequest(contract, method, path5, request) {
  const errors = [];
  const endpoint = findEndpoint(contract, method, path5);
  if (!endpoint) {
    errors.push({
      path: path5,
      message: `no endpoint matches ${method.toUpperCase()} ${path5} in contract "${contract.name}"`,
      code: "API_VALIDATION_ERROR",
      expected: "known endpoint",
      actual: `${method.toUpperCase()} ${path5}`
    });
    return { valid: false, errors };
  }
  if (!endpoint.requestSchema) {
    return { valid: true, errors: [] };
  }
  return validateValue(endpoint.requestSchema, request);
}
function validateResponse(contract, method, path5, response) {
  const errors = [];
  const endpoint = findEndpoint(contract, method, path5);
  if (!endpoint) {
    errors.push({
      path: path5,
      message: `no endpoint matches ${method.toUpperCase()} ${path5} in contract "${contract.name}"`,
      code: "API_VALIDATION_ERROR",
      expected: "known endpoint",
      actual: `${method.toUpperCase()} ${path5}`
    });
    return { valid: false, errors };
  }
  return validateValue(endpoint.responseSchema, response);
}
function assertValidContract(contract) {
  if (!contract || typeof contract !== "object" || Array.isArray(contract)) {
    throw new ApiValidationError("API contract must be a non-array object");
  }
  const c = contract;
  if (typeof c.name !== "string" || c.name.length === 0) {
    throw new ApiValidationError("API contract.name must be a non-empty string");
  }
  if (typeof c.version !== "string" || c.version.length === 0) {
    throw new ApiValidationError(`contract "${c.name}".version must be a non-empty string`);
  }
  if (!Array.isArray(c.endpoints) || c.endpoints.length === 0) {
    throw new ApiValidationError(`contract "${c.name}" must declare a non-empty endpoints array`);
  }
  for (let i = 0; i < c.endpoints.length; i++) {
    const e = c.endpoints[i];
    if (!e || typeof e !== "object") {
      throw new ApiValidationError(`endpoint[${i}] in contract "${c.name}" must be an object`);
    }
    if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(e.method ?? "")) {
      throw new ApiValidationError(`endpoint[${i}].method must be one of GET|POST|PUT|DELETE|PATCH`);
    }
    if (typeof e.path !== "string" || e.path.length === 0) {
      throw new ApiValidationError(`endpoint[${i}].path must be a non-empty string`);
    }
    if (!e.responseSchema || typeof e.responseSchema !== "object") {
      throw new ApiValidationError(`endpoint[${i}] (${e.method} ${e.path}) must declare a responseSchema`);
    }
  }
}

// packages/contracts/src/sync/sync.ts
function diffSchemas(oldSchema, newSchema) {
  const oldByName = /* @__PURE__ */ new Map();
  for (const f of oldSchema.fields) oldByName.set(f.name, f);
  const newByName = /* @__PURE__ */ new Map();
  for (const f of newSchema.fields) newByName.set(f.name, f);
  const added = [];
  const removed = [];
  const changed = [];
  for (const [name, newField] of newByName) {
    const oldField = oldByName.get(name);
    if (!oldField) {
      added.push(newField);
    } else if (!fieldsEqual(oldField, newField)) {
      changed.push({ field: name, from: oldField, to: newField });
    }
  }
  for (const [name] of oldByName) {
    if (!newByName.has(name)) removed.push(name);
  }
  return { added, removed, changed };
}
function mergeSchemas(local, remote) {
  if (local.name !== remote.name) {
    throw new SyncError2(
      `cannot merge schemas with different names: "${local.name}" vs "${remote.name}"`
    );
  }
  const mergedVersion = compareSemver(local.version, remote.version) >= 0 ? local.version : remote.version;
  const localByName = /* @__PURE__ */ new Map();
  for (const f of local.fields) localByName.set(f.name, f);
  const remoteByName = /* @__PURE__ */ new Map();
  for (const f of remote.fields) remoteByName.set(f.name, f);
  const conflicts = [];
  const mergedFields = [];
  for (const [name, localField] of localByName) {
    const remoteField = remoteByName.get(name);
    if (!remoteField) {
      mergedFields.push(localField);
      continue;
    }
    if (localField.type === remoteField.type) {
      mergedFields.push(localField);
    } else {
      conflicts.push({
        field: name,
        localType: localField.type,
        remoteType: remoteField.type,
        resolution: "local"
      });
      mergedFields.push(localField);
    }
  }
  for (const [name, remoteField] of remoteByName) {
    if (!localByName.has(name)) {
      mergedFields.push(remoteField);
    }
  }
  const schema = {
    name: local.name,
    version: mergedVersion,
    fields: mergedFields,
    ...local.description ?? remote.description ? { description: local.description ?? remote.description } : {}
  };
  return { schema, conflicts };
}
function fieldsEqual(a, b) {
  if (a === b) return true;
  if (a.type !== b.type) return false;
  if (a.required !== b.required) return false;
  if ((a.description ?? "") !== (b.description ?? "")) return false;
  if (!enumEquals(a.enum, b.enum)) return false;
  if ((a.ref ?? "") !== (b.ref ?? "")) return false;
  if ((a.of ?? void 0) !== void 0 || (b.of ?? void 0) !== void 0) {
    if (!a.of || !b.of || !fieldsEqual(a.of, b.of)) return false;
  }
  if (!arrayEqual(a.oneOf, b.oneOf, fieldsEqual)) return false;
  if (!arrayEqual(a.allOf, b.allOf, fieldsEqual)) return false;
  if (!arrayEqual(a.fields, b.fields, fieldsEqual)) return false;
  if (JSON.stringify(a.default) !== JSON.stringify(b.default)) return false;
  return true;
}
function enumEquals(a, b) {
  if (a === void 0 && b === void 0) return true;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const aa = a.map((v) => JSON.stringify(v)).sort();
  const bb = b.map((v) => JSON.stringify(v)).sort();
  return aa.every((v, i) => v === bb[i]);
}
function arrayEqual(a, b, eq) {
  if (a === void 0 && b === void 0) return true;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  return a.every((v, i) => eq(v, b[i]));
}

// packages/contracts/src/boundaries/boundaries.ts
function matchRule(policy, caller, callee) {
  let exact;
  let fromWild;
  let toWild;
  let anyWild;
  for (const r of policy.rules) {
    if (r.from === caller && r.to === callee) {
      exact = r;
      break;
    }
    if (r.from === "*" && r.to === callee) fromWild = fromWild ?? r;
    else if (r.from === caller && r.to === "*") toWild = toWild ?? r;
    else if (r.from === "*" && r.to === "*") anyWild = anyWild ?? r;
  }
  return exact ?? fromWild ?? toWild ?? anyWild;
}
function enforceBoundary(policy, caller, callee) {
  if (typeof caller !== "string" || caller.length === 0) {
    throw new BoundaryError("caller must be a non-empty string");
  }
  if (typeof callee !== "string" || callee.length === 0) {
    throw new BoundaryError("callee must be a non-empty string");
  }
  const rule = matchRule(policy, caller, callee);
  if (rule) {
    return {
      allowed: rule.allowed,
      reason: rule.reason ?? (rule.allowed ? "allowed by rule" : "denied by rule"),
      matchedRule: rule
    };
  }
  return {
    allowed: policy.defaultAllow,
    reason: policy.defaultAllow ? "allowed by default" : "denied by default"
  };
}
function detectViolations(policy, callGraph) {
  if (!Array.isArray(callGraph)) {
    throw new BoundaryError("callGraph must be an array of { from, to } edges");
  }
  const violations = [];
  for (const edge of callGraph) {
    if (!edge || typeof edge !== "object") {
      throw new BoundaryError("each call-graph edge must be an object");
    }
    const result = enforceBoundary(policy, edge.from, edge.to);
    if (!result.allowed) {
      violations.push({
        from: edge.from,
        to: edge.to,
        reason: result.reason ?? "denied"
      });
    }
  }
  return violations;
}
function isPolicySatisfied(policy, callGraph) {
  return detectViolations(policy, callGraph).length === 0;
}

// packages/contracts/src/reporting/reporting.ts
function aggregateReports(reports, name = "aggregate") {
  if (!Array.isArray(reports)) {
    throw new ReportingError2("reports must be an array");
  }
  const sections = [];
  for (const r of reports) {
    for (const s of r.sections) {
      sections.push({
        name: reports.length > 1 ? `${r.name}:${s.name}` : s.name,
        passed: s.passed,
        errors: [...s.errors]
      });
    }
  }
  const passed = reports.length === 0 || reports.every((r) => r.passed);
  return {
    name,
    passed,
    sections,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}

// packages/cortex/src/errors.ts
var CortexError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var DecompositionError = class extends CortexError {
  constructor(message, cause) {
    super(message, "DECOMPOSITION_ERROR", cause);
  }
};
var PlanningError = class extends CortexError {
  constructor(message, cause) {
    super(message, "PLANNING_ERROR", cause);
  }
};
var ToolError = class extends CortexError {
  constructor(message, cause) {
    super(message, "TOOL_ERROR", cause);
  }
};
var RoutingError = class extends CortexError {
  constructor(message, cause) {
    super(message, "ROUTING_ERROR", cause);
  }
};
var SchedulerError = class extends CortexError {
  constructor(message, cause) {
    super(message, "SCHEDULER_ERROR", cause);
  }
};
var ConfidenceError = class extends CortexError {
  constructor(message, cause) {
    super(message, "CONFIDENCE_ERROR", cause);
  }
};
var GoalError = class extends CortexError {
  constructor(message, cause) {
    super(message, "GOAL_ERROR", cause);
  }
};
var ResourceError = class extends CortexError {
  constructor(message, cause) {
    super(message, "RESOURCE_ERROR", cause);
  }
};
var WorkflowError2 = class extends CortexError {
  constructor(message, cause) {
    super(message, "WORKFLOW_ERROR", cause);
  }
};
var RetryError = class extends CortexError {
  constructor(message, cause) {
    super(message, "RETRY_ERROR", cause);
  }
};
var CoordinationError = class extends CortexError {
  constructor(message, cause) {
    super(message, "COORDINATION_ERROR", cause);
  }
};

// packages/cortex/src/logging.ts
var LEVEL_RANK3 = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100
};
var SCRUBBED_FIELD_NAMES5 = ["secret", "token", "apiKey", "password", "privateKey"];
function shouldScrubField3(name) {
  const lower = name.toLowerCase();
  for (const needle of SCRUBBED_FIELD_NAMES5) {
    const nl = needle.toLowerCase();
    if (lower === nl) return true;
    if (lower.endsWith("_" + nl)) return true;
  }
  return false;
}
function scrubMetadata4(meta) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map(scrubMetadata4);
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    out[k] = shouldScrubField3(k) ? "[redacted]" : scrubMetadata4(v);
  }
  return out;
}
var ConsoleLogger3 = class {
  constructor(level = "info") {
    this.level = level;
    this.levelRank = LEVEL_RANK3[level] ?? LEVEL_RANK3.info;
  }
  level;
  levelRank;
  debug(msg, meta) {
    this.emit("debug", msg, meta);
  }
  info(msg, meta) {
    this.emit("info", msg, meta);
  }
  warn(msg, meta) {
    this.emit("warn", msg, meta);
  }
  error(msg, meta) {
    this.emit("error", msg, meta);
  }
  emit(level, msg, meta) {
    try {
      if (LEVEL_RANK3[level] < this.levelRank) return;
      const entry = { level, msg, ts: (/* @__PURE__ */ new Date()).toISOString(), ...meta ? { meta: scrubMetadata4(meta) } : {} };
      const line = JSON.stringify(entry);
      if (level === "error" || level === "warn") process.stderr.write(line + "\n");
      else process.stdout.write(line + "\n");
    } catch {
    }
  }
};
var SilentLogger5 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/cortex/src/config/config.ts
var DEFAULT_CONFIG3 = {
  defaultStrategy: "adaptive",
  retryPolicy: {
    maxAttempts: 3,
    backoff: "exponential",
    baseDelayMs: 100,
    maxDelayMs: 5e3,
    retryableErrors: ["timeout", "transient", "busy", "unavailable"]
  },
  resourceBudget: {
    maxCost: 1e3,
    maxParallel: 4,
    maxDurationMs: 6e4,
    spentCost: 0,
    activeWorkers: 0,
    elapsedMs: 0
  },
  logLevel: "info"
};
function mergeConfig3(user) {
  return {
    ...DEFAULT_CONFIG3,
    ...user ?? {},
    retryPolicy: { ...DEFAULT_CONFIG3.retryPolicy, ...user?.retryPolicy ?? {} },
    resourceBudget: { ...DEFAULT_CONFIG3.resourceBudget, ...user?.resourceBudget ?? {} }
  };
}

// packages/cortex/src/util.ts
var import_crypto10 = require("crypto");
function randomId(prefix = "ctx", bytes = 8) {
  return `${prefix}_${(0, import_crypto10.randomBytes)(bytes).toString("hex")}`;
}

// packages/cortex/src/decompose/decompose.ts
var ACTION_VERBS = [
  "fetch",
  "load",
  "read",
  "write",
  "send",
  "receive",
  "parse",
  "validate",
  "compute",
  "calculate",
  "transform",
  "filter",
  "sort",
  "merge",
  "split",
  "create",
  "delete",
  "update",
  "find",
  "search",
  "query",
  "authenticate",
  "authorize",
  "encrypt",
  "decrypt",
  "sign",
  "verify",
  "publish",
  "subscribe",
  "start",
  "stop",
  "restart",
  "deploy",
  "rollback",
  "monitor",
  "alert"
];
var CONJUNCTIONS = [" and ", ", then ", "; ", " after that ", " followed by "];
function decompose(goalDescription, opts) {
  if (!goalDescription || typeof goalDescription !== "string") {
    throw new DecompositionError("goalDescription must be a non-empty string");
  }
  const tasks = [];
  const parts = splitOnConjunctions(goalDescription);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part) continue;
    const verb = findActionVerb(part);
    const tools = inferTools(part, verb);
    const task = {
      id: randomId("task"),
      goalId: opts?.goalId,
      description: part,
      requiredTools: tools,
      status: "pending",
      createdAt: Date.now(),
      dependsOn: i > 0 ? [tasks[i - 1].id] : []
    };
    tasks.push(task);
  }
  if (tasks.length === 0) {
    tasks.push({
      id: randomId("task"),
      goalId: opts?.goalId,
      description: goalDescription,
      status: "pending",
      createdAt: Date.now()
    });
  }
  return tasks;
}
function splitOnConjunctions(text) {
  let parts = [text];
  for (const conj of CONJUNCTIONS) {
    const next = [];
    for (const p of parts) next.push(...p.split(conj));
    parts = next;
  }
  return parts.map((p) => p.trim()).filter(Boolean);
}
function findActionVerb(text) {
  const lower = text.toLowerCase();
  for (const v of ACTION_VERBS) {
    const re = new RegExp(`\\b${v}\\b`);
    if (re.test(lower)) return v;
  }
  return void 0;
}
function inferTools(text, verb) {
  const tools = /* @__PURE__ */ new Set();
  if (verb) tools.add(verb);
  const lower = text.toLowerCase();
  if (/\bfile|filesystem|path\b/.test(lower)) tools.add("fs");
  if (/\bhttp|api|endpoint|url\b/.test(lower)) tools.add("http");
  if (/\bdb|database|sql|query\b/.test(lower)) tools.add("db");
  if (/\bmemory|recall|remember\b/.test(lower)) tools.add("memory");
  if (/\bsign|verify|encrypt|decrypt\b/.test(lower)) tools.add("crypto");
  if (/\bsend|receive|publish|broadcast\b/.test(lower)) tools.add("messaging");
  return Array.from(tools);
}
function estimateComplexity(goalDescription) {
  const lower = goalDescription.toLowerCase();
  let depth = 1;
  for (const conj of CONJUNCTIONS) {
    if (lower.includes(conj)) depth++;
  }
  if (lower.includes(" if ") || lower.includes(" when ")) depth++;
  if (lower.includes(" for each ") || lower.includes(" all ")) depth++;
  return Math.min(5, depth);
}

// packages/cortex/src/planner/planner.ts
var Planner = class {
  /** Plan a goal by decomposing it and ordering the tasks. */
  plan(goal, strategy = "adaptive") {
    if (!goal) throw new PlanningError("goal is required");
    const complexity = estimateComplexity(goal.description);
    let tasks;
    if (strategy === "decompose-first" || strategy === "adaptive" && complexity >= 2) {
      tasks = decompose(goal.description, { goalId: goal.id });
    } else {
      tasks = [{
        id: randomId("task"),
        goalId: goal.id,
        description: goal.description,
        status: "pending",
        createdAt: Date.now()
      }];
    }
    const ordered = topoSort(tasks);
    let estimatedCost = 0;
    let estimatedDurationMs = 0;
    for (const t of ordered) {
      t.estimatedCost = t.estimatedCost ?? 1;
      t.estimatedDurationMs = t.estimatedDurationMs ?? 1e3;
      estimatedCost += t.estimatedCost;
      estimatedDurationMs += t.estimatedDurationMs;
    }
    const confidence = estimatePlanConfidence(ordered, complexity);
    return {
      id: randomId("plan"),
      goalId: goal.id,
      tasks: ordered,
      confidence,
      estimatedCost,
      estimatedDurationMs,
      strategy,
      createdAt: Date.now()
    };
  }
  /** Replan a failed plan — mark failed tasks as skipped, retry or skip dependents. */
  replan(plan, failedTaskId, opts) {
    const failed = plan.tasks.find((t) => t.id === failedTaskId);
    if (!failed) throw new PlanningError(`task ${failedTaskId} not in plan`);
    failed.status = opts.retry ? "pending" : "skipped";
    if (!opts.retry) {
      const dependents = /* @__PURE__ */ new Set();
      const queue = [failedTaskId];
      while (queue.length) {
        const id = queue.shift();
        for (const t of plan.tasks) {
          if (t.dependsOn?.includes(id) && !dependents.has(t.id)) {
            dependents.add(t.id);
            queue.push(t.id);
          }
        }
      }
      for (const t of plan.tasks) {
        if (dependents.has(t.id)) t.status = "skipped";
      }
    }
    plan.tasks = topoSort(plan.tasks);
    plan.estimatedCost = plan.tasks.reduce((s, t) => s + (t.estimatedCost ?? 0), 0);
    plan.estimatedDurationMs = plan.tasks.reduce((s, t) => s + (t.estimatedDurationMs ?? 0), 0);
    plan.confidence = estimatePlanConfidence(plan.tasks, 1);
    return plan;
  }
};
function topoSort(tasks) {
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const visited = /* @__PURE__ */ new Set();
  const visiting = /* @__PURE__ */ new Set();
  const out = [];
  const visit = (id) => {
    if (visited.has(id)) return;
    if (visiting.has(id)) throw new PlanningError(`cycle detected at task ${id}`);
    visiting.add(id);
    const t = byId.get(id);
    if (!t) throw new PlanningError(`unknown task id ${id}`);
    for (const dep of t.dependsOn ?? []) visit(dep);
    visiting.delete(id);
    visited.add(id);
    out.push(t);
  };
  for (const t of tasks) visit(t.id);
  return out;
}
function estimatePlanConfidence(tasks, complexity) {
  if (tasks.length === 0) return 0;
  let score = 0.5;
  score -= Math.min(0.3, tasks.length * 0.05);
  score -= Math.min(0.2, complexity * 0.05);
  const withTools = tasks.filter((t) => t.requiredTools && t.requiredTools.length > 0).length;
  score += withTools / tasks.length * 0.2;
  return Math.max(0, Math.min(1, score));
}

// packages/cortex/src/tools/registry.ts
var ToolRegistry = class {
  tools = /* @__PURE__ */ new Map();
  /** Register a tool. */
  register(tool) {
    if (!tool?.name) throw new ToolError("tool.name is required");
    if (this.tools.has(tool.name)) throw new ToolError(`tool '${tool.name}' already registered`);
    if (typeof tool.handler !== "function") throw new ToolError("tool.handler must be a function");
    this.tools.set(tool.name, tool);
  }
  /** Unregister a tool. */
  unregister(name) {
    return this.tools.delete(name);
  }
  /** Get a tool by name. */
  get(name) {
    return this.tools.get(name);
  }
  /** List all tool names. */
  list() {
    return Array.from(this.tools.keys());
  }
  /** Find tools by tag. */
  findByTag(tag) {
    return Array.from(this.tools.values()).filter((t) => t.tags?.includes(tag));
  }
  /** Select the best tool for a task based on required tool names or tags. */
  select(requiredTools, preferredTags) {
    if (requiredTools && requiredTools.length > 0) {
      for (const name of requiredTools) {
        const t = this.tools.get(name);
        if (t) return t;
      }
    }
    if (preferredTags && preferredTags.length > 0) {
      for (const tag of preferredTags) {
        const tools = this.findByTag(tag);
        if (tools.length > 0) return tools[0];
      }
    }
    return void 0;
  }
  /** Invoke a tool by name. */
  async invoke(name, input, ctx) {
    const tool = this.tools.get(name);
    if (!tool) throw new ToolError(`tool '${name}' not found`);
    const start = Date.now();
    try {
      const result = await Promise.resolve(tool.handler(input, ctx));
      const durationMs = Date.now() - start;
      return {
        success: result.success,
        output: result.output,
        error: result.error,
        confidence: result.confidence,
        durationMs
      };
    } catch (err) {
      const durationMs = Date.now() - start;
      return {
        success: false,
        error: err instanceof Error ? err.message : String(err),
        durationMs
      };
    }
  }
  /** Generate a unique id (helper for tools that need one). */
  newId(prefix = "tool_call") {
    return randomId(prefix);
  }
};

// packages/cortex/src/router/router.ts
var INTENT_TO_COMPONENT = {
  planning: "planner",
  recall: "memory",
  execution: "actuators",
  communication: "telepathy",
  analysis: "council",
  monitoring: "nervous-system",
  unknown: "planner"
};
var INTENT_CUES = [
  { intent: "recall", cues: ["remember", "what is", "recall", "who is", "when did", "where is", "how many"] },
  { intent: "execution", cues: ["execute", "do", "run", "perform", "apply", "deploy", "start", "stop"] },
  { intent: "communication", cues: ["tell", "ask", "send", "broadcast", "notify", "inform", "message", "reply"] },
  { intent: "analysis", cues: ["analyze", "evaluate", "assess", "compare", "review", "critique", "rank"] },
  { intent: "monitoring", cues: ["watch", "monitor", "observe", "track", "listen", "subscribe", "detect"] },
  { intent: "planning", cues: ["plan", "decompose", "schedule", "prepare", "design", "orchestrate"] }
];
var Router = class {
  /** Per-instance component overrides (takes precedence over the default map). */
  overrides = /* @__PURE__ */ new Map();
  /** Classify an input string into an Intent. */
  classify(input) {
    if (!input || typeof input !== "string") return "unknown";
    const lower = input.toLowerCase();
    let bestIntent = "unknown";
    let bestScore = 0;
    for (const { intent, cues } of INTENT_CUES) {
      let score = 0;
      for (const cue of cues) {
        if (lower.includes(cue)) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }
    }
    return bestIntent;
  }
  /** Route an input to the appropriate component. */
  route(input) {
    if (!input) throw new RoutingError("input is required");
    const intent = this.classify(input);
    const component = this.overrides.get(intent) ?? INTENT_TO_COMPONENT[intent];
    const confidence = intent === "unknown" ? 0.3 : 0.7 + Math.min(0.25, intent.length * 0.01);
    return {
      id: randomId("route"),
      input,
      component,
      confidence,
      reason: intent === "unknown" ? "No intent cues matched; defaulting to planner." : `Matched intent '${intent}' via keyword cues.`,
      routedAt: Date.now()
    };
  }
  /** Override the intent-to-component mapping for this Router instance. */
  setComponent(intent, component) {
    this.overrides.set(intent, component);
  }
};

// packages/cortex/src/scheduler/scheduler.ts
var Scheduler = class {
  queue = [];
  /** Schedule a task. Returns the ScheduledTask. */
  schedule(task, worker, opts) {
    if (!task) throw new SchedulerError("task is required");
    if (!worker) throw new SchedulerError("worker is required");
    const priority = opts?.priority ?? 0.5;
    const scheduledAt = opts?.at ?? Date.now();
    if (task.dependsOn && task.dependsOn.length > 0) {
      for (const dep of task.dependsOn) {
        const depScheduled = this.queue.find((s) => s.taskId === dep);
        if (!depScheduled) {
          throw new SchedulerError(`dependency ${dep} not scheduled`);
        }
        if (scheduledAt < depScheduled.scheduledAt) {
          throw new SchedulerError(`task ${task.id} scheduled before dependency ${dep}`);
        }
      }
    }
    if (opts?.budget) {
      if (opts.budget.spentCost + (task.estimatedCost ?? 0) > opts.budget.maxCost) {
        throw new SchedulerError(`task ${task.id} would exceed cost budget`);
      }
      if (opts.budget.activeWorkers >= opts.budget.maxParallel) {
        throw new SchedulerError(`task ${task.id} would exceed parallel worker budget`);
      }
    }
    const st = {
      taskId: task.id,
      scheduledAt,
      worker,
      priority
    };
    this.queue.push(st);
    this.queue.sort((a, b) => a.scheduledAt - b.scheduledAt || b.priority - a.priority);
    return st;
  }
  /** Get the next task to run (highest-priority whose dependencies are complete). */
  next(completedTaskIds) {
    for (const st of this.queue) {
      void completedTaskIds;
      return st;
    }
    return void 0;
  }
  /** Pop the next schedulable task. */
  popNext() {
    return this.queue.shift();
  }
  /** Remove a scheduled task. */
  cancel(taskId) {
    const idx = this.queue.findIndex((s) => s.taskId === taskId);
    if (idx < 0) return false;
    this.queue.splice(idx, 1);
    return true;
  }
  /** All scheduled tasks. */
  all() {
    return [...this.queue];
  }
  /** Count. */
  size() {
    return this.queue.length;
  }
  /** Clear the queue. */
  clear() {
    this.queue.length = 0;
  }
};

// packages/cortex/src/confidence/confidence.ts
var DEFAULT_WEIGHTS = {
  planConfidence: 0.25,
  toolReliability: 0.25,
  evidenceCount: 0.15,
  agreementRate: 0.25,
  domainFamiliarity: 0.1
};
var ConfidenceEstimator = class {
  history = [];
  /** Estimate confidence from factors. */
  estimate(factors) {
    const w = DEFAULT_WEIGHTS;
    const contributions = [];
    let confidence = 0;
    let totalWeight = 0;
    if (factors.planConfidence !== void 0) {
      const c = factors.planConfidence * w.planConfidence;
      confidence += c;
      totalWeight += w.planConfidence;
      contributions.push({ name: "planConfidence", weight: w.planConfidence, contribution: c });
    }
    if (factors.toolReliability !== void 0) {
      const c = factors.toolReliability * w.toolReliability;
      confidence += c;
      totalWeight += w.toolReliability;
      contributions.push({ name: "toolReliability", weight: w.toolReliability, contribution: c });
    }
    if (factors.evidenceCount !== void 0) {
      const norm = Math.min(1, Math.log2((factors.evidenceCount || 0) + 1) / 4);
      const c = norm * w.evidenceCount;
      confidence += c;
      totalWeight += w.evidenceCount;
      contributions.push({ name: "evidenceCount", weight: w.evidenceCount, contribution: c });
    }
    if (factors.agreementRate !== void 0) {
      const c = factors.agreementRate * w.agreementRate;
      confidence += c;
      totalWeight += w.agreementRate;
      contributions.push({ name: "agreementRate", weight: w.agreementRate, contribution: c });
    }
    if (factors.domainFamiliarity !== void 0) {
      const c = factors.domainFamiliarity * w.domainFamiliarity;
      confidence += c;
      totalWeight += w.domainFamiliarity;
      contributions.push({ name: "domainFamiliarity", weight: w.domainFamiliarity, contribution: c });
    }
    if (totalWeight === 0) throw new ConfidenceError("at least one factor is required");
    const final = confidence / totalWeight;
    const reasoning = contributions.map((c) => `${c.name}=${c.contribution.toFixed(3)}`).join(", ");
    return {
      confidence: Math.max(0, Math.min(1, final)),
      reasoning: `Weighted sum: ${reasoning} (total weight ${totalWeight.toFixed(2)})`,
      factors: contributions
    };
  }
  /** Record a task outcome (for past-success-rate calibration). */
  recordOutcome(task, success) {
    this.history.push({ task, success });
  }
  /** Past success rate for tasks matching a substring. */
  pastSuccessRate(taskSubstring) {
    const matching = this.history.filter((h) => h.task.includes(taskSubstring));
    if (matching.length === 0) return 0.5;
    return matching.filter((m) => m.success).length / matching.length;
  }
};

// packages/cortex/src/goals/manager.ts
var VALID_TRANSITIONS = {
  pending: ["active", "abandoned"],
  active: ["blocked", "achieved", "abandoned"],
  blocked: ["active", "abandoned"],
  achieved: [],
  abandoned: []
};
var GoalManager = class {
  goals = /* @__PURE__ */ new Map();
  /** Create a new goal. */
  create(description, opts) {
    if (!description) throw new GoalError("description is required");
    if (opts?.parentId && !this.goals.has(opts.parentId)) {
      throw new GoalError(`parent goal ${opts.parentId} not found`);
    }
    const goal = {
      id: randomId("goal"),
      description,
      parentId: opts?.parentId,
      priority: opts?.priority ?? 0.5,
      status: "pending",
      deadline: opts?.deadline,
      successCriteria: opts?.successCriteria,
      createdAt: Date.now()
    };
    this.goals.set(goal.id, goal);
    return goal;
  }
  /** Get a goal by id. */
  get(id) {
    return this.goals.get(id);
  }
  /** Transition a goal to a new status. */
  transition(id, newStatus) {
    const goal = this.goals.get(id);
    if (!goal) throw new GoalError(`goal ${id} not found`);
    const allowed = VALID_TRANSITIONS[goal.status];
    if (!allowed.includes(newStatus)) {
      throw new GoalError(`invalid transition ${goal.status} \u2192 ${newStatus}`);
    }
    goal.status = newStatus;
    return goal;
  }
  /** Update goal priority. */
  setPriority(id, priority) {
    const g = this.goals.get(id);
    if (!g) throw new GoalError(`goal ${id} not found`);
    if (priority < 0 || priority > 1) throw new GoalError("priority must be in [0,1]");
    g.priority = priority;
  }
  /** Get all goals. */
  all() {
    return Array.from(this.goals.values());
  }
  /** Get active goals (sorted by priority desc). */
  active() {
    return this.all().filter((g) => g.status === "active").sort((a, b) => b.priority - a.priority);
  }
  /** Get child goals of a parent. */
  children(parentId) {
    return this.all().filter((g) => g.parentId === parentId);
  }
  /** Find goals past their deadline and not yet achieved/abandoned. */
  overdue(now = Date.now()) {
    return this.all().filter((g) => g.deadline && g.deadline < now && (g.status === "pending" || g.status === "active" || g.status === "blocked"));
  }
  /** Delete a goal. */
  delete(id) {
    return this.goals.delete(id);
  }
};

// packages/cortex/src/resources/manager.ts
var ResourceManager = class {
  budget;
  constructor(initial) {
    this.budget = {
      maxCost: initial?.maxCost ?? 1e3,
      maxParallel: initial?.maxParallel ?? 4,
      maxDurationMs: initial?.maxDurationMs ?? 6e4,
      spentCost: initial?.spentCost ?? 0,
      activeWorkers: initial?.activeWorkers ?? 0,
      elapsedMs: initial?.elapsedMs ?? 0
    };
  }
  /** Current budget snapshot. */
  snapshot() {
    return { ...this.budget };
  }
  /** Check whether a task can be admitted. */
  canAdmit(task, now = Date.now()) {
    const cost = task.estimatedCost ?? 0;
    const duration = task.estimatedDurationMs ?? 0;
    if (this.budget.spentCost + cost > this.budget.maxCost) {
      return { admit: false, reason: `cost budget exceeded (${this.budget.spentCost + cost} > ${this.budget.maxCost})` };
    }
    if (this.budget.activeWorkers >= this.budget.maxParallel) {
      return { admit: false, reason: `parallel worker budget exceeded (${this.budget.activeWorkers} >= ${this.budget.maxParallel})` };
    }
    if (this.budget.elapsedMs + duration > this.budget.maxDurationMs) {
      return { admit: false, reason: `duration budget exceeded (${this.budget.elapsedMs + duration} > ${this.budget.maxDurationMs})` };
    }
    void now;
    return { admit: true, reason: "within budget" };
  }
  /** Reserve resources for a task. Throws if insufficient. */
  reserve(task) {
    const check = this.canAdmit(task);
    if (!check.admit) throw new ResourceError(check.reason);
    this.budget.spentCost += task.estimatedCost ?? 0;
    this.budget.activeWorkers += 1;
  }
  /** Release resources after a task completes. */
  release(task, actualDurationMs) {
    this.budget.activeWorkers = Math.max(0, this.budget.activeWorkers - 1);
    this.budget.elapsedMs += actualDurationMs ?? task.estimatedDurationMs ?? 0;
  }
  /** Reset utilization (e.g. between plan executions). */
  reset() {
    this.budget.spentCost = 0;
    this.budget.activeWorkers = 0;
    this.budget.elapsedMs = 0;
  }
  /** Update the budget caps. */
  setCaps(caps) {
    if (caps.maxCost !== void 0) this.budget.maxCost = caps.maxCost;
    if (caps.maxParallel !== void 0) this.budget.maxParallel = caps.maxParallel;
    if (caps.maxDurationMs !== void 0) this.budget.maxDurationMs = caps.maxDurationMs;
  }
  /** Utilization ratio in [0,1]. */
  utilization() {
    return {
      cost: this.budget.spentCost / this.budget.maxCost,
      parallel: this.budget.activeWorkers / this.budget.maxParallel,
      duration: this.budget.elapsedMs / this.budget.maxDurationMs
    };
  }
};

// packages/cortex/src/workflow/engine.ts
var WorkflowEngine = class {
  constructor(tools) {
    this.tools = tools;
  }
  tools;
  /** Execute a workflow. Returns the final execution state. */
  async execute(workflow, initialInput) {
    if (!workflow) throw new WorkflowError2("workflow is required");
    const step = this.findStep(workflow, workflow.initialStep);
    if (!step) throw new WorkflowError2(`initial step ${workflow.initialStep} not found`);
    const exec2 = {
      id: randomId("wfexec"),
      workflowId: workflow.id,
      currentStepId: workflow.initialStep,
      visitedSteps: [workflow.initialStep],
      outputs: {},
      status: "running",
      startedAt: Date.now()
    };
    let currentStep = step;
    let currentInput = initialInput;
    while (currentStep && !currentStep.terminal && exec2.status === "running") {
      const result = await this.executeStep(currentStep, currentInput);
      exec2.outputs[currentStep.id] = result.output;
      if (!result.success) {
        exec2.status = "failed";
        exec2.error = result.error;
        exec2.endedAt = Date.now();
        break;
      }
      const nextId = currentStep.nextOnSuccess;
      if (!nextId) {
        exec2.status = "completed";
        exec2.endedAt = Date.now();
        break;
      }
      const nextStep = this.findStep(workflow, nextId);
      if (!nextStep) {
        exec2.status = "failed";
        exec2.error = `next step ${nextId} not found`;
        exec2.endedAt = Date.now();
        break;
      }
      exec2.currentStepId = nextId;
      exec2.visitedSteps.push(nextId);
      currentInput = result.output;
      currentStep = nextStep;
    }
    if (exec2.status === "running" && currentStep?.terminal) {
      exec2.status = "completed";
      exec2.endedAt = Date.now();
    }
    return exec2;
  }
  findStep(workflow, stepId) {
    return workflow.steps.find((s) => s.id === stepId);
  }
  async executeStep(step, input) {
    if (!step.tool) {
      return { success: true, output: input };
    }
    return this.tools.invoke(step.tool, step.input ?? input);
  }
  /** Abort a running execution. */
  abort(exec2) {
    if (exec2.status !== "running") return exec2;
    exec2.status = "aborted";
    exec2.endedAt = Date.now();
    return exec2;
  }
};

// packages/cortex/src/retry/retry.ts
var DEFAULT_RETRY_POLICY = {
  maxAttempts: 3,
  backoff: "exponential",
  baseDelayMs: 100,
  maxDelayMs: 5e3,
  retryableErrors: ["timeout", "transient", "busy", "unavailable"]
};
function backoffDelay(policy, attempt) {
  const n = Math.max(1, attempt);
  let delay;
  if (policy.backoff === "fixed") {
    delay = policy.baseDelayMs;
  } else if (policy.backoff === "linear") {
    delay = policy.baseDelayMs * n;
  } else {
    delay = policy.baseDelayMs * Math.pow(2, n - 1);
  }
  return Math.min(delay, policy.maxDelayMs);
}
function isRetryable(policy, errorMessage) {
  if (!policy.retryableErrors || policy.retryableErrors.length === 0) return true;
  const lower = errorMessage.toLowerCase();
  return policy.retryableErrors.some((s) => lower.includes(s.toLowerCase()));
}
async function withRetry(fn, policy = DEFAULT_RETRY_POLICY) {
  if (!fn || typeof fn !== "function") throw new RetryError("fn must be a function");
  let lastError;
  for (let attempt = 1; attempt <= policy.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt >= policy.maxAttempts) break;
      if (!isRetryable(policy, lastError.message)) break;
      const delay = backoffDelay(policy, attempt);
      await sleep(delay);
    }
  }
  throw new RetryError(`all ${policy.maxAttempts} attempts failed: ${lastError?.message ?? "unknown error"}`, lastError);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// packages/cortex/src/coordinate/coordinator.ts
var Coordinator = class {
  constructor(tools, scheduler, resources, confidence, opts) {
    this.tools = tools;
    this.scheduler = scheduler;
    this.resources = resources;
    this.confidence = confidence;
    this.logger = opts?.logger ?? new SilentLogger5();
    this.retryPolicy = opts?.retryPolicy ?? DEFAULT_RETRY_POLICY;
  }
  tools;
  scheduler;
  resources;
  confidence;
  events = [];
  logger;
  retryPolicy;
  /** Execute a plan end-to-end. Returns the plan with task results. */
  async execute(plan) {
    if (!plan) throw new CoordinationError("plan is required");
    this.logger.info("coordinator: starting plan execution", { planId: plan.id, taskCount: plan.tasks.length });
    this.emit("plan_created", { planId: plan.id });
    for (const task of plan.tasks) {
      if (task.status === "skipped") continue;
      this.scheduler.schedule(task, "default", { priority: task.goalId ? 0.5 : 0.5 });
      this.emit("task_scheduled", { taskId: task.id });
      const admit = this.resources.canAdmit(task);
      if (!admit.admit) {
        task.status = "skipped";
        task.error = admit.reason;
        this.logger.warn("coordinator: task skipped (resources)", { taskId: task.id, reason: admit.reason });
        continue;
      }
      this.resources.reserve(task);
      this.emit("task_started", { taskId: task.id });
      const tool = task.requiredTools && task.requiredTools.length > 0 ? this.tools.select(task.requiredTools) : void 0;
      try {
        const start = Date.now();
        let result;
        if (tool) {
          result = await withRetry(
            () => this.tools.invoke(tool.name, task.description, { taskId: task.id, goalId: task.goalId }),
            this.retryPolicy
          );
        } else {
          result = { success: true, output: void 0, durationMs: Date.now() - start };
        }
        const duration = Date.now() - start;
        this.resources.release(task, duration);
        if (result.success) {
          task.status = "completed";
          task.result = result.output;
          this.confidence.recordOutcome(task.description, true);
          this.emit("task_completed", { taskId: task.id, durationMs: duration });
        } else {
          task.status = "failed";
          task.error = result.error;
          this.confidence.recordOutcome(task.description, false);
          this.emit("task_failed", { taskId: task.id, error: result.error });
          this.logger.error("coordinator: task failed", { taskId: task.id, error: result.error });
        }
      } catch (err) {
        this.resources.release(task, 0);
        task.status = "failed";
        task.error = err instanceof Error ? err.message : String(err);
        this.emit("task_failed", { taskId: task.id, error: task.error });
      }
    }
    this.logger.info("coordinator: plan execution complete", {
      planId: plan.id,
      completed: plan.tasks.filter((t) => t.status === "completed").length,
      failed: plan.tasks.filter((t) => t.status === "failed").length,
      skipped: plan.tasks.filter((t) => t.status === "skipped").length
    });
    return plan;
  }
  /** Get all reasoning events emitted during execution. */
  getEvents() {
    return [...this.events];
  }
  emit(type, meta) {
    this.events.push({
      id: randomId("evt"),
      type,
      timestamp: Date.now(),
      meta
    });
  }
};

// packages/cortex/src/cortex.ts
var Cortex = class {
  goals;
  planner;
  tools;
  router;
  scheduler;
  confidence;
  resources;
  workflows;
  coordinator;
  config;
  logger;
  constructor(config) {
    this.config = mergeConfig3(config);
    this.logger = this.config.logger ?? (this.config.logLevel === "silent" ? new SilentLogger5() : new ConsoleLogger3(this.config.logLevel));
    this.goals = new GoalManager();
    this.planner = new Planner();
    this.tools = new ToolRegistry();
    this.router = new Router();
    this.scheduler = new Scheduler();
    this.confidence = new ConfidenceEstimator();
    this.resources = new ResourceManager(this.config.resourceBudget);
    this.workflows = new WorkflowEngine(this.tools);
    this.coordinator = new Coordinator(
      this.tools,
      this.scheduler,
      this.resources,
      this.confidence,
      { logger: this.logger, retryPolicy: this.config.retryPolicy }
    );
  }
  /** Set a goal. */
  setGoal(description, opts) {
    const goal = this.goals.create(description, opts);
    this.goals.transition(goal.id, "active");
    this.logger.info("cortex: goal set", { goalId: goal.id, description: description.slice(0, 60) });
    return goal;
  }
  /** Plan a goal. */
  planGoal(goal) {
    return this.planner.plan(goal, this.config.defaultStrategy);
  }
  /** Execute a plan end-to-end. */
  async executePlan(plan) {
    return this.coordinator.execute(plan);
  }
  /** Convenience: set a goal, plan it, and execute. */
  async reason(description, opts) {
    const goal = this.setGoal(description, opts);
    const plan = this.planGoal(goal);
    const executed = await this.executePlan(plan);
    this.goals.transition(goal.id, executed.tasks.every((t) => t.status === "completed") ? "achieved" : "active");
    return { goal, plan: executed, events: this.coordinator.getEvents() };
  }
  /** Route an input to the appropriate component. */
  route(input) {
    return this.router.route(input);
  }
  /** Register a tool. */
  registerTool(tool) {
    this.tools.register(tool);
  }
  /** Execute a workflow. */
  async runWorkflow(workflow, initialInput) {
    return this.workflows.execute(workflow, initialInput);
  }
  /** Get all reasoning events from the last coordination run. */
  getEvents() {
    return this.coordinator.getEvents();
  }
  /** Reset the cortex for a fresh run. */
  reset() {
    this.scheduler.clear();
    this.resources.reset();
  }
};

// packages/memory/src/errors.ts
var MemoryError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? new.target.name;
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var WorkingMemoryError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "WORKING_MEMORY_ERROR", cause);
  }
};
var EpisodicMemoryError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "EPISODIC_MEMORY_ERROR", cause);
  }
};
var SemanticMemoryError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "SEMANTIC_MEMORY_ERROR", cause);
  }
};
var ProceduralMemoryError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "PROCEDURAL_MEMORY_ERROR", cause);
  }
};
var LongTermMemoryError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "LONGTERM_MEMORY_ERROR", cause);
  }
};
var IndexError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "INDEX_ERROR", cause);
  }
};
var PermissionError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "PERMISSION_ERROR", cause);
  }
};
var SyncError3 = class extends MemoryError {
  constructor(message, cause) {
    super(message, "SYNC_ERROR", cause);
  }
};
var BackupError = class extends MemoryError {
  constructor(message, cause) {
    super(message, "BACKUP_ERROR", cause);
  }
};

// packages/memory/src/logging.ts
var LEVEL_RANK4 = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100
};
var SCRUBBED_FIELD_NAMES6 = ["secret", "token", "apiKey", "password", "privateKey"];
function shouldScrubField4(name) {
  const lower = name.toLowerCase();
  for (const needle of SCRUBBED_FIELD_NAMES6) {
    const nl = needle.toLowerCase();
    if (lower === nl) return true;
    if (lower.endsWith("_" + nl)) return true;
  }
  return false;
}
function scrubMetadata5(meta) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map(scrubMetadata5);
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    out[k] = shouldScrubField4(k) ? "[redacted]" : scrubMetadata5(v);
  }
  return out;
}
var ConsoleLogger4 = class {
  constructor(level = "info") {
    this.level = level;
    this.levelRank = LEVEL_RANK4[level] ?? LEVEL_RANK4.info;
  }
  level;
  levelRank;
  debug(msg, meta) {
    this.emit("debug", msg, meta);
  }
  info(msg, meta) {
    this.emit("info", msg, meta);
  }
  warn(msg, meta) {
    this.emit("warn", msg, meta);
  }
  error(msg, meta) {
    this.emit("error", msg, meta);
  }
  emit(level, msg, meta) {
    try {
      if (LEVEL_RANK4[level] < this.levelRank) return;
      const entry = { level, msg, ts: (/* @__PURE__ */ new Date()).toISOString(), ...meta ? { meta: scrubMetadata5(meta) } : {} };
      const line = JSON.stringify(entry);
      if (level === "error" || level === "warn") process.stderr.write(line + "\n");
      else process.stdout.write(line + "\n");
    } catch {
    }
  }
};
var SilentLogger6 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/memory/src/config/config.ts
var DEFAULT_CONFIG4 = {
  aging: {
    workingTtlMs: 5 * 60 * 1e3,
    episodicMaxCount: 1e4,
    episodicPruneThreshold: 0.3,
    longtermCompressAfterDays: 90
  },
  rankingWeights: { tfidf: 0.4, importance: 0.3, recency: 0.2, access: 0.1 },
  logLevel: "info"
};
function mergeConfig4(user) {
  return {
    ...DEFAULT_CONFIG4,
    ...user ?? {},
    aging: { ...DEFAULT_CONFIG4.aging, ...user?.aging ?? {} },
    rankingWeights: { ...DEFAULT_CONFIG4.rankingWeights, ...user?.rankingWeights ?? {} }
  };
}

// packages/memory/src/longterm/keys.ts
var import_crypto11 = require("crypto");
function randomId2(prefix = "mem", bytes = 8) {
  return `${prefix}_${(0, import_crypto11.randomBytes)(bytes).toString("hex")}`;
}

// packages/memory/src/working/working.ts
var WorkingMemory = class {
  constructor(defaultTtlMs = 5 * 60 * 1e3) {
    this.defaultTtlMs = defaultTtlMs;
    if (typeof setInterval === "function" && typeof process !== "undefined" && process.versions?.node) {
      this.sweeper = setInterval(() => this.sweep(), 3e4);
      if (this.sweeper && typeof this.sweeper.unref === "function") this.sweeper.unref();
    }
  }
  defaultTtlMs;
  store = /* @__PURE__ */ new Map();
  sweeper = null;
  /** Store a value with optional TTL. Returns the entry id. */
  set(key, value, ttlMs, tags) {
    if (!key || typeof key !== "string") throw new WorkingMemoryError("key must be non-empty string");
    const id = randomId2("wk");
    const entry = {
      id,
      key,
      value,
      createdAt: Date.now(),
      ttlMs: ttlMs ?? this.defaultTtlMs,
      tags
    };
    this.store.set(key, entry);
    return id;
  }
  /** Retrieve a value. Returns null if missing or expired. */
  get(key) {
    const e = this.store.get(key);
    if (!e) return null;
    if (this.isExpired(e)) {
      this.store.delete(key);
      return null;
    }
    return e.value;
  }
  /** Get the full entry (including metadata). */
  getEntry(key) {
    const e = this.store.get(key);
    if (!e) return null;
    if (this.isExpired(e)) {
      this.store.delete(key);
      return null;
    }
    return e;
  }
  /** Check if a key exists (and is not expired). */
  has(key) {
    const e = this.store.get(key);
    if (!e) return false;
    if (this.isExpired(e)) {
      this.store.delete(key);
      return false;
    }
    return true;
  }
  /** Delete a key. */
  delete(key) {
    return this.store.delete(key);
  }
  /** Clear all working memory. */
  clear() {
    this.store.clear();
  }
  /** Number of non-expired entries. */
  size() {
    this.sweep();
    return this.store.size;
  }
  /** Iterate non-expired entries. */
  entries() {
    this.sweep();
    return Array.from(this.store.values());
  }
  /** Find entries by tag. */
  findByTag(tag) {
    return this.entries().filter((e) => e.tags?.includes(tag));
  }
  /** Stop the sweeper. */
  dispose() {
    if (this.sweeper) {
      clearInterval(this.sweeper);
      this.sweeper = null;
    }
  }
  isExpired(e) {
    if (!e.ttlMs) return false;
    return Date.now() - e.createdAt > e.ttlMs;
  }
  /** Remove expired entries. Returns count removed. */
  sweep() {
    let removed = 0;
    for (const [k, e] of this.store) {
      if (this.isExpired(e)) {
        this.store.delete(k);
        removed++;
      }
    }
    return removed;
  }
};

// packages/memory/src/episodic/episodic.ts
var EpisodicMemory = class {
  events = [];
  maxCount;
  constructor(maxCount = 1e4) {
    if (maxCount < 1) throw new EpisodicMemoryError("maxCount must be positive");
    this.maxCount = maxCount;
  }
  /** Record an event. Returns the event id. */
  record(agent, event, context, opts) {
    if (!agent) throw new EpisodicMemoryError("agent is required");
    if (!event) throw new EpisodicMemoryError("event is required");
    const id = opts?.id ?? randomId2("ep");
    const e = {
      id,
      timestamp: opts?.timestamp ?? Date.now(),
      agent,
      event,
      context,
      importance: opts?.importance ?? 0.5,
      tags: opts?.tags,
      source: opts?.source
    };
    const existingIdx = this.events.findIndex((ev) => ev.id === id);
    if (existingIdx >= 0) this.events[existingIdx] = e;
    else {
      this.events.push(e);
      if (this.events.length > this.maxCount) this.events.shift();
    }
    return id;
  }
  /** Recall the last N events. */
  recall(limit = 10, agentFilter) {
    const filtered = agentFilter ? this.events.filter((e) => e.agent === agentFilter) : this.events;
    return filtered.slice(-limit);
  }
  /** Recall events in a time range. */
  recallRange(startMs, endMs, limit = 100) {
    return this.events.filter((e) => e.timestamp >= startMs && e.timestamp <= endMs).slice(-limit);
  }
  /** Find events matching a substring (case-insensitive). */
  search(query, limit = 20) {
    const q = query.toLowerCase();
    return this.events.filter((e) => e.event.toLowerCase().includes(q) || e.context && JSON.stringify(e.context).toLowerCase().includes(q)).slice(-limit);
  }
  /** Find by tag. */
  findByTag(tag) {
    return this.events.filter((e) => e.tags?.includes(tag));
  }
  /** Find by id. */
  findById(id) {
    return this.events.find((e) => e.id === id);
  }
  /** Get all events (read-only). */
  all() {
    return [...this.events];
  }
  /** Count events. */
  count() {
    return this.events.length;
  }
  /** Delete events older than cutoff. Returns count removed. */
  pruneOlderThan(cutoffMs) {
    const before = this.events.length;
    const kept = this.events.filter((e) => e.timestamp >= cutoffMs);
    const removed = before - kept.length;
    this.events.length = 0;
    this.events.push(...kept);
    return removed;
  }
  /** Prune low-importance events when over a count threshold. */
  pruneLowImportance(threshold = 0.3, maxCount) {
    const cap = maxCount ?? this.maxCount;
    if (this.events.length <= cap) return 0;
    const before = this.events.length;
    const kept = this.events.filter((e) => (e.importance ?? 0) >= threshold);
    const recent = this.events.slice(-100);
    const seen = new Set(recent.map((e) => e.id));
    for (const e of kept) if (!seen.has(e.id)) seen.add(e.id);
    const final = this.events.filter((e) => seen.has(e.id));
    this.events.length = 0;
    this.events.push(...final);
    return before - this.events.length;
  }
};

// packages/memory/src/semantic/semantic.ts
var SemanticMemory = class {
  /** Index: entity → attribute → fact. */
  facts = /* @__PURE__ */ new Map();
  /** Reverse index: attribute → entities that have it. */
  byAttribute = /* @__PURE__ */ new Map();
  /** Learn (or update) a fact. Returns the fact id. */
  learn(entity, attribute, value, confidence = 1, source) {
    if (!entity) throw new SemanticMemoryError("entity is required");
    if (!attribute) throw new SemanticMemoryError("attribute is required");
    if (confidence < 0 || confidence > 1) throw new SemanticMemoryError("confidence must be in [0,1]");
    const id = randomId2("sem");
    const fact = {
      id,
      entity,
      attribute,
      value,
      confidence,
      learnedAt: Date.now(),
      source
    };
    if (!this.facts.has(entity)) this.facts.set(entity, /* @__PURE__ */ new Map());
    this.facts.get(entity).set(attribute, fact);
    if (!this.byAttribute.has(attribute)) this.byAttribute.set(attribute, /* @__PURE__ */ new Set());
    this.byAttribute.get(attribute).add(entity);
    return id;
  }
  /** Recall a single fact (entity + attribute). */
  recall(entity, attribute) {
    return this.facts.get(entity)?.get(attribute) ?? null;
  }
  /** Recall all attributes for an entity. */
  recallEntity(entity) {
    const map = this.facts.get(entity);
    return map ? Array.from(map.values()) : [];
  }
  /** Find entities by attribute. */
  findByAttribute(attribute, valueMatch) {
    const entities = this.byAttribute.get(attribute);
    if (!entities) return [];
    const out = [];
    for (const e of entities) {
      const f = this.facts.get(e)?.get(attribute);
      if (f && (valueMatch === void 0 || JSON.stringify(f.value) === JSON.stringify(valueMatch))) {
        out.push(f);
      }
    }
    return out;
  }
  /** Forget a fact. Returns true if it existed. */
  forget(entity, attribute) {
    const removed = this.facts.get(entity)?.delete(attribute) ?? false;
    if (removed) {
      const set = this.byAttribute.get(attribute);
      if (set) {
        set.delete(entity);
        if (set.size === 0) this.byAttribute.delete(attribute);
      }
      const entMap = this.facts.get(entity);
      if (entMap && entMap.size === 0) this.facts.delete(entity);
    }
    return removed;
  }
  /** Update confidence on a fact. */
  updateConfidence(entity, attribute, confidence) {
    const f = this.recall(entity, attribute);
    if (!f) throw new SemanticMemoryError(`No fact for ${entity}.${attribute}`);
    if (confidence < 0 || confidence > 1) throw new SemanticMemoryError("confidence must be in [0,1]");
    f.confidence = confidence;
  }
  /** All facts. */
  all() {
    const out = [];
    for (const entMap of this.facts.values()) out.push(...entMap.values());
    return out;
  }
  /** Count facts. */
  count() {
    let n = 0;
    for (const m of this.facts.values()) n += m.size;
    return n;
  }
};

// packages/memory/src/procedural/procedural.ts
var ProceduralMemory = class {
  skills = /* @__PURE__ */ new Map();
  /** Register a skill. Returns the skill id. */
  learn(name, handler, opts) {
    if (!name) throw new ProceduralMemoryError("skill name is required");
    if (typeof handler !== "function") throw new ProceduralMemoryError("handler must be a function");
    if (this.skills.has(name)) throw new ProceduralMemoryError(`skill '${name}' already learned`);
    const id = randomId2("proc");
    const skill = {
      id,
      name,
      handler,
      description: opts?.description,
      arguments: opts?.arguments,
      learnedAt: Date.now(),
      tags: opts?.tags
    };
    this.skills.set(name, skill);
    return id;
  }
  /** Execute a skill by name. */
  execute(name, ...args) {
    const s = this.skills.get(name);
    if (!s) throw new ProceduralMemoryError(`procedural skill '${name}' not found`);
    if (!s.handler) throw new ProceduralMemoryError(`skill '${name}' has no handler (likely restored from snapshot)`);
    return s.handler(...args);
  }
  /** Get a skill (metadata only — no handler exposed). */
  get(name) {
    return this.skills.get(name);
  }
  /** Forget a skill. */
  forget(name) {
    return this.skills.delete(name);
  }
  /** List all skill names. */
  list() {
    return Array.from(this.skills.keys());
  }
  /** Count skills. */
  count() {
    return this.skills.size;
  }
  /** Find skills by tag. */
  findByTag(tag) {
    return Array.from(this.skills.values()).filter((s) => s.tags?.includes(tag));
  }
};

// packages/memory/src/longterm/longterm.ts
var LongTermMemory = class {
  records = /* @__PURE__ */ new Map();
  byTag = /* @__PURE__ */ new Map();
  byType = /* @__PURE__ */ new Map();
  /** Store a record. Returns its id. */
  store(payload, opts) {
    const id = opts?.id ?? randomId2("lt");
    if (this.records.has(id)) throw new LongTermMemoryError(`record '${id}' already exists`);
    const now = Date.now();
    const rec = {
      id,
      type: opts?.type ?? "longterm",
      payload,
      createdAt: now,
      lastAccessedAt: now,
      accessCount: 0,
      importance: opts?.importance ?? 0.5,
      tags: opts?.tags,
      source: opts?.source
    };
    this.records.set(id, rec);
    for (const t of rec.tags ?? []) {
      if (!this.byTag.has(t)) this.byTag.set(t, /* @__PURE__ */ new Set());
      this.byTag.get(t).add(id);
    }
    if (!this.byType.has(rec.type)) this.byType.set(rec.type, /* @__PURE__ */ new Set());
    this.byType.get(rec.type).add(id);
    return id;
  }
  /** Retrieve a record (updates access stats). */
  retrieve(id) {
    const r = this.records.get(id);
    if (!r) return null;
    r.lastAccessedAt = Date.now();
    r.accessCount++;
    return r;
  }
  /** Peek without updating access stats. */
  peek(id) {
    return this.records.get(id) ?? null;
  }
  /** Update a record's payload. */
  update(id, payload) {
    const r = this.records.get(id);
    if (!r) throw new LongTermMemoryError(`record '${id}' not found`);
    r.payload = payload;
  }
  /** Delete a record. */
  delete(id) {
    const r = this.records.get(id);
    if (!r) return false;
    for (const t of r.tags ?? []) this.byTag.get(t)?.delete(id);
    this.byType.get(r.type)?.delete(id);
    return this.records.delete(id);
  }
  /** Find by tag. */
  findByTag(tag) {
    const ids = this.byTag.get(tag);
    if (!ids) return [];
    return Array.from(ids).map((id) => this.records.get(id)).filter(Boolean);
  }
  /** Find by type. */
  findByType(type) {
    const ids = this.byType.get(type);
    if (!ids) return [];
    return Array.from(ids).map((id) => this.records.get(id)).filter(Boolean);
  }
  /** All records. */
  all() {
    return Array.from(this.records.values());
  }
  /** Count. */
  count() {
    return this.records.size;
  }
  /** Records not accessed since cutoff (candidates for compression/archival). */
  staleSince(cutoffMs) {
    return this.all().filter((r) => r.lastAccessedAt < cutoffMs);
  }
  /** Apply an aging policy: mark records as low-importance based on age & access. */
  applyAging(now = Date.now()) {
    let aged = 0;
    for (const r of this.records.values()) {
      const ageDays = (now - r.createdAt) / 864e5;
      if (ageDays > 30 && r.accessCount < 3) {
        r.importance = Math.max(0, r.importance - 0.1);
        aged++;
      }
    }
    return aged;
  }
};

// packages/memory/src/index/index.ts
var InvertedIndex = class _InvertedIndex {
  index = /* @__PURE__ */ new Map();
  docLengths = /* @__PURE__ */ new Map();
  /** Tokenize a string into lowercase terms. */
  static tokenize(text) {
    if (typeof text !== "string") return [];
    return text.toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 1);
  }
  /** Add a document (record) to the index. */
  add(recordId, text) {
    if (!recordId) throw new IndexError("recordId is required");
    const tokens = _InvertedIndex.tokenize(text);
    this.docLengths.set(recordId, tokens.length);
    const freqs = /* @__PURE__ */ new Map();
    for (const t of tokens) freqs.set(t, (freqs.get(t) ?? 0) + 1);
    for (const [token, freq] of freqs) {
      if (!this.index.has(token)) {
        this.index.set(token, { token, recordIds: [], frequencies: {} });
      }
      const entry = this.index.get(token);
      if (!entry.frequencies[recordId]) entry.recordIds.push(recordId);
      entry.frequencies[recordId] = freq;
    }
  }
  /** Remove a document from the index. */
  remove(recordId) {
    this.docLengths.delete(recordId);
    for (const [token, entry] of this.index) {
      if (entry.frequencies[recordId]) {
        delete entry.frequencies[recordId];
        entry.recordIds = entry.recordIds.filter((id) => id !== recordId);
        if (entry.recordIds.length === 0) this.index.delete(token);
      }
    }
  }
  /** Look up records containing a token. */
  lookup(token) {
    return this.index.get(token.toLowerCase());
  }
  /** Search by query string. Returns record IDs with TF scores. */
  search(query) {
    const tokens = _InvertedIndex.tokenize(query);
    if (tokens.length === 0) return [];
    const scores = /* @__PURE__ */ new Map();
    for (const t of tokens) {
      const entry = this.lookup(t);
      if (!entry) continue;
      const idf = Math.log(this.docLengths.size / (entry.recordIds.length + 1));
      for (const id of entry.recordIds) {
        const tf = entry.frequencies[id] ?? 0;
        const docLen = this.docLengths.get(id) ?? 1;
        const normalized = tf / docLen;
        scores.set(id, (scores.get(id) ?? 0) + normalized * idf);
      }
    }
    return Array.from(scores.entries()).map(([recordId, score]) => ({ recordId, score })).sort((a, b) => b.score - a.score);
  }
  /** Number of unique tokens. */
  size() {
    return this.index.size;
  }
  /** All entries (for serialization). */
  entries() {
    return Array.from(this.index.values());
  }
};

// packages/memory/src/link/link.ts
var LinkGraph = class _LinkGraph {
  links = /* @__PURE__ */ new Map();
  outgoing = /* @__PURE__ */ new Map();
  incoming = /* @__PURE__ */ new Map();
  static key(from, to, relation) {
    return `${from}|${to}|${relation}`;
  }
  /** Add a link. Returns true if newly added. */
  add(from, to, relation, weight) {
    const k = _LinkGraph.key(from, to, relation);
    if (this.links.has(k)) return false;
    this.links.set(k, { fromId: from, toId: to, relation, weight });
    if (!this.outgoing.has(from)) this.outgoing.set(from, /* @__PURE__ */ new Set());
    this.outgoing.get(from).add(k);
    if (!this.incoming.has(to)) this.incoming.set(to, /* @__PURE__ */ new Set());
    this.incoming.get(to).add(k);
    return true;
  }
  /** Remove a link. */
  remove(from, to, relation) {
    const k = _LinkGraph.key(from, to, relation);
    const removed = this.links.delete(k);
    if (removed) {
      this.outgoing.get(from)?.delete(k);
      this.incoming.get(to)?.delete(k);
    }
    return removed;
  }
  /** All links from a record. */
  outgoingFrom(id) {
    const keys = this.outgoing.get(id);
    if (!keys) return [];
    return Array.from(keys).map((k) => this.links.get(k)).filter(Boolean);
  }
  /** All links to a record. */
  incomingTo(id) {
    const keys = this.incoming.get(id);
    if (!keys) return [];
    return Array.from(keys).map((k) => this.links.get(k)).filter(Boolean);
  }
  /** All links of a specific relation type. */
  byRelation(relation) {
    return Array.from(this.links.values()).filter((l) => l.relation === relation);
  }
  /** BFS from a record following links of a given relation. Returns visited ids (excluding start). */
  traverse(start, relation, maxDepth = 5) {
    const visited = /* @__PURE__ */ new Set([start]);
    const queue = [{ id: start, depth: 0 }];
    while (queue.length > 0) {
      const { id, depth } = queue.shift();
      if (depth >= maxDepth) continue;
      const out = this.outgoingFrom(id).filter((l) => l.relation === relation);
      for (const l of out) {
        if (!visited.has(l.toId)) {
          visited.add(l.toId);
          queue.push({ id: l.toId, depth: depth + 1 });
        }
      }
    }
    return Array.from(visited).filter((id) => id !== start);
  }
  /** All links. */
  all() {
    return Array.from(this.links.values());
  }
  /** Count. */
  size() {
    return this.links.size;
  }
};

// packages/memory/src/permissions/permissions.ts
var PermissionModel = class {
  perms = /* @__PURE__ */ new Map();
  /** Set or replace permissions for a record. */
  set(permission) {
    if (!permission.recordId) throw new PermissionError("recordId is required");
    this.perms.set(permission.recordId, { ...permission });
  }
  /** Get permissions for a record. */
  get(recordId) {
    return this.perms.get(recordId);
  }
  /** Check if a subject can read a record. */
  canRead(recordId, subject) {
    const p = this.perms.get(recordId);
    if (!p) return true;
    return p.readers.includes("*") || p.readers.includes(subject);
  }
  /** Check if a subject can write a record. */
  canWrite(recordId, subject) {
    const p = this.perms.get(recordId);
    if (!p) return true;
    return p.writers.includes("*") || p.writers.includes(subject);
  }
  /** Check if a subject can delete a record. */
  canDelete(recordId, subject) {
    const p = this.perms.get(recordId);
    if (!p) return true;
    return p.deleters.includes("*") || p.deleters.includes(subject);
  }
  /** Grant a permission to a subject. */
  grant(recordId, subject, mode) {
    let p = this.perms.get(recordId);
    if (!p) {
      p = { recordId, readers: [], writers: [], deleters: [] };
      this.perms.set(recordId, p);
    }
    if (mode === "read" && !p.readers.includes(subject)) p.readers.push(subject);
    if (mode === "write" && !p.writers.includes(subject)) p.writers.push(subject);
    if (mode === "delete" && !p.deleters.includes(subject)) p.deleters.push(subject);
  }
  /** Revoke a permission. */
  revoke(recordId, subject, mode) {
    const p = this.perms.get(recordId);
    if (!p) return;
    if (mode === "read") p.readers = p.readers.filter((s) => s !== subject);
    if (mode === "write") p.writers = p.writers.filter((s) => s !== subject);
    if (mode === "delete") p.deleters = p.deleters.filter((s) => s !== subject);
    if (p.readers.length === 0 && p.writers.length === 0 && p.deleters.length === 0) {
      this.perms.delete(recordId);
    }
  }
  /** Remove all permissions for a record. */
  clear(recordId) {
    return this.perms.delete(recordId);
  }
  /** All permission records. */
  all() {
    return Array.from(this.perms.values());
  }
  /** Assert read access; throws if denied. */
  assertRead(recordId, subject) {
    if (!this.canRead(recordId, subject)) {
      throw new PermissionError(`subject '${subject}' cannot read record '${recordId}'`);
    }
  }
  /** Assert write access. */
  assertWrite(recordId, subject) {
    if (!this.canWrite(recordId, subject)) {
      throw new PermissionError(`subject '${subject}' cannot write record '${recordId}'`);
    }
  }
};

// packages/memory/src/aging/aging.ts
var DEFAULT_AGING_POLICY = {
  workingTtlMs: 5 * 60 * 1e3,
  // 5 minutes
  episodicMaxCount: 1e4,
  episodicPruneThreshold: 0.3,
  longtermCompressAfterDays: 90
};
function mergeAgingPolicy(p) {
  return { ...DEFAULT_AGING_POLICY, ...p ?? {} };
}
function ageScore(createdAt, now = Date.now()) {
  const ageDays = Math.max(0, (now - createdAt) / 864e5);
  return 1 - Math.exp(-ageDays / 90);
}
function effectiveImportance(record, now = Date.now()) {
  const age = ageScore(record.createdAt, now);
  const accessBoost = Math.min(0.3, Math.log10(record.accessCount + 1) * 0.1);
  return Math.max(0, Math.min(1, record.importance * (1 - age * 0.5) + accessBoost));
}
function shouldPruneEpisodic(event, policy, now = Date.now()) {
  const age = ageScore(event.timestamp, now);
  return (event.importance ?? 0) < policy.episodicPruneThreshold && age > 0.6;
}
function shouldCompressLongTerm(record, policy, now = Date.now()) {
  const ageDays = (now - record.createdAt) / 864e5;
  return ageDays > policy.longtermCompressAfterDays && record.accessCount < 2;
}

// packages/memory/src/rank/rank.ts
var DEFAULT_WEIGHTS2 = {
  tfidf: 0.4,
  importance: 0.3,
  recency: 0.2,
  access: 0.1
};
function rankLongTerm(tfidfScores, records, weights = DEFAULT_WEIGHTS2, now = Date.now()) {
  const maxTfidf = Math.max(1, ...tfidfScores.values());
  const maxAccess = Math.max(1, ...records.map((r) => r.accessCount));
  const out = [];
  for (const r of records) {
    const tfidf = (tfidfScores.get(r.id) ?? 0) / maxTfidf;
    const importance = r.importance;
    const recency = 1 - ageScore(r.lastAccessedAt, now);
    const access = r.accessCount / maxAccess;
    const score = weights.tfidf * tfidf + weights.importance * importance + weights.recency * recency + weights.access * access;
    const matchedBy = [];
    if (tfidf > 0) matchedBy.push("tfidf");
    if (importance > 0.5) matchedBy.push("importance");
    if (recency > 0.5) matchedBy.push("recency");
    out.push({ record: r, score, matchedBy });
  }
  return out.sort((a, b) => b.score - a.score);
}
function rankEpisodic(query, events, weights = { text: 0.5, importance: 0.2, recency: 0.3 }, now = Date.now()) {
  const q = query.toLowerCase();
  const tokens = q.split(/\s+/).filter((t) => t.length > 0);
  const out = [];
  for (const e of events) {
    const text = e.event.toLowerCase();
    let textScore = 0;
    for (const t of tokens) {
      if (text.includes(t)) textScore += 1;
    }
    textScore = tokens.length > 0 ? textScore / tokens.length : 0;
    const importance = e.importance ?? 0.5;
    const recency = 1 - ageScore(e.timestamp, now);
    const score = weights.text * textScore + weights.importance * importance + weights.recency * recency;
    const matchedBy = [];
    if (textScore > 0) matchedBy.push("text");
    if (importance > 0.5) matchedBy.push("importance");
    if (recency > 0.5) matchedBy.push("recency");
    out.push({ record: e, score, matchedBy });
  }
  return out.sort((a, b) => b.score - a.score);
}

// packages/memory/src/compress/compress.ts
var import_zlib = require("zlib");
function compress(payload) {
  if (payload === void 0) throw new MemoryError("compress: payload is undefined");
  const json = JSON.stringify(payload);
  const originalBuf = Buffer.from(json, "utf8");
  const compressed = (0, import_zlib.gzipSync)(originalBuf);
  return {
    algorithm: "gzip+json",
    data: compressed.toString("base64"),
    originalLength: originalBuf.length,
    compressedLength: compressed.length
  };
}
function decompress(c) {
  if (!c || c.algorithm !== "gzip+json") throw new MemoryError("decompress: unsupported algorithm");
  const buf = Buffer.from(c.data, "base64");
  const json = (0, import_zlib.gunzipSync)(buf).toString("utf8");
  return JSON.parse(json);
}
function ratio(c) {
  if (c.originalLength === 0) return 1;
  return c.compressedLength / c.originalLength;
}

// packages/memory/src/sync/sync.ts
function computeDelta(local, remote) {
  if (!local || !remote) throw new SyncError3("snapshots are required");
  if (local.schemaVersion !== remote.schemaVersion) {
    throw new SyncError3(`schema version mismatch: ${local.schemaVersion} vs ${remote.schemaVersion}`);
  }
  const localEpi = new Map(local.episodic.map((e) => [e.id, e]));
  const remoteEpi = new Map(remote.episodic.map((e) => [e.id, e]));
  const localSem = new Map(local.semantic.map((s) => [s.id, s]));
  const remoteSem = new Map(remote.semantic.map((s) => [s.id, s]));
  const localLt = new Map(local.longterm.map((r) => [r.id, r]));
  const remoteLt = new Map(remote.longterm.map((r) => [r.id, r]));
  const delta = {
    addedEpisodic: [],
    updatedEpisodic: [],
    addedSemantic: [],
    addedLongTerm: [],
    updatedLongTerm: [],
    addedLinks: 0,
    conflicts: []
  };
  for (const [id, e] of remoteEpi) {
    if (!localEpi.has(id)) delta.addedEpisodic.push(id);
    else {
      const local2 = localEpi.get(id);
      if (e.timestamp > local2.timestamp) delta.updatedEpisodic.push(id);
      else if (e.timestamp < local2.timestamp) delta.conflicts.push({ id, localTimestamp: local2.timestamp, remoteTimestamp: e.timestamp });
    }
  }
  for (const [id] of remoteSem) if (!localSem.has(id)) delta.addedSemantic.push(id);
  for (const [id, r] of remoteLt) {
    if (!localLt.has(id)) delta.addedLongTerm.push(id);
    else if (r.lastAccessedAt > localLt.get(id).lastAccessedAt) delta.updatedLongTerm.push(id);
  }
  const localLinks = new Set(local.links.map((l) => `${l.fromId}|${l.toId}|${l.relation}`));
  for (const l of remote.links) {
    if (!localLinks.has(`${l.fromId}|${l.toId}|${l.relation}`)) delta.addedLinks++;
  }
  return delta;
}
function applyDelta(local, remote, delta) {
  const remoteEpi = new Map(remote.episodic.map((e) => [e.id, e]));
  const remoteSem = new Map(remote.semantic.map((s) => [s.id, s]));
  const remoteLt = new Map(remote.longterm.map((r) => [r.id, r]));
  for (const id of [...delta.addedEpisodic, ...delta.updatedEpisodic]) {
    const e = remoteEpi.get(id);
    if (e) {
      const idx = local.episodic.findIndex((x) => x.id === id);
      if (idx >= 0) local.episodic[idx] = e;
      else local.episodic.push(e);
    }
  }
  for (const id of delta.addedSemantic) {
    const s = remoteSem.get(id);
    if (s) local.semantic.push(s);
  }
  for (const id of [...delta.addedLongTerm, ...delta.updatedLongTerm]) {
    const r = remoteLt.get(id);
    if (r) {
      const idx = local.longterm.findIndex((x) => x.id === id);
      if (idx >= 0) local.longterm[idx] = r;
      else local.longterm.push(r);
    }
  }
  const localLinkKeys = new Set(local.links.map((l) => `${l.fromId}|${l.toId}|${l.relation}`));
  for (const l of remote.links) {
    const k = `${l.fromId}|${l.toId}|${l.relation}`;
    if (!localLinkKeys.has(k)) local.links.push(l);
  }
  return local;
}

// packages/memory/src/backup/backup.ts
var import_crypto12 = require("crypto");
function createBackup2(snapshot) {
  if (!snapshot) throw new BackupError("snapshot is required");
  const canon = JSON.stringify(snapshot);
  const hash = (0, import_crypto12.createHash)("sha256").update(canon).digest("hex");
  return {
    schemaVersion: 1,
    takenAt: (/* @__PURE__ */ new Date()).toISOString(),
    snapshot,
    hash
  };
}
function verifyBackup(backup) {
  if (!backup || !backup.snapshot) return false;
  const canon = JSON.stringify(backup.snapshot);
  const hash = (0, import_crypto12.createHash)("sha256").update(canon).digest("hex");
  return hash === backup.hash;
}
function restoreBackup2(backup) {
  if (!verifyBackup(backup)) throw new BackupError("backup integrity check failed");
  return JSON.parse(JSON.stringify(backup.snapshot));
}
function serializeBackup(backup) {
  return JSON.stringify(backup, null, 2);
}
function parseBackup(json) {
  try {
    const b = JSON.parse(json);
    if (!b.snapshot || !b.hash) throw new BackupError("invalid backup structure");
    return b;
  } catch (err) {
    throw new BackupError("failed to parse backup", err);
  }
}

// packages/memory/src/io/io.ts
function exportSnapshot(snapshot) {
  if (!snapshot) throw new MemoryError("snapshot is required");
  return JSON.stringify(snapshot, null, 2);
}
function importSnapshot(json) {
  try {
    const s = JSON.parse(json);
    if (!s.schemaVersion || !Array.isArray(s.episodic)) {
      throw new MemoryError("invalid snapshot structure");
    }
    return s;
  } catch (err) {
    if (err instanceof MemoryError) throw err;
    throw new MemoryError("failed to parse snapshot", void 0, err);
  }
}
function exportEpisodic(snapshot) {
  return JSON.stringify({ schemaVersion: 1, type: "episodic", events: snapshot.episodic }, null, 2);
}
function exportSemantic(snapshot) {
  return JSON.stringify({ schemaVersion: 1, type: "semantic", facts: snapshot.semantic }, null, 2);
}
function mergeImport(base, json) {
  const partial = JSON.parse(json);
  if (partial.type === "episodic" && Array.isArray(partial.events)) {
    const existingIds = new Set(base.episodic.map((e) => e.id));
    for (const e of partial.events) {
      const ev = e;
      if (!existingIds.has(ev.id)) base.episodic.push(ev);
    }
  } else if (partial.type === "semantic" && Array.isArray(partial.facts)) {
    const existingIds = new Set(base.semantic.map((s) => s.id));
    for (const s of partial.facts) {
      const fact = s;
      if (!existingIds.has(fact.id)) base.semantic.push(fact);
    }
  } else {
    throw new MemoryError("unrecognized import format");
  }
  return base;
}

// packages/memory/src/memory.ts
var MemorySystem = class {
  working;
  episodic;
  semantic;
  procedural;
  longterm;
  index;
  links;
  permissions;
  config;
  logger;
  constructor(config) {
    this.config = mergeConfig4(config);
    this.logger = this.config.logger ?? (this.config.logLevel === "silent" ? new SilentLogger6() : new ConsoleLogger4(this.config.logLevel));
    this.working = new WorkingMemory(this.config.aging.workingTtlMs);
    this.episodic = new EpisodicMemory(this.config.aging.episodicMaxCount);
    this.semantic = new SemanticMemory();
    this.procedural = new ProceduralMemory();
    this.longterm = new LongTermMemory();
    this.index = new InvertedIndex();
    this.links = new LinkGraph();
    this.permissions = new PermissionModel();
  }
  /** Record an episodic event AND index it. */
  remember(agent, event, context, opts) {
    const id = this.episodic.record(agent, event, context, opts);
    const text = `${event} ${context ? JSON.stringify(context) : ""}`;
    this.index.add(id, text);
    this.logger.debug("remember: recorded", { id, agent, event: event.slice(0, 60) });
    return id;
  }
  /** Recall events by query. Returns ranked results. */
  recall(query, limit = 10) {
    const events = this.episodic.all();
    const w = this.config.rankingWeights;
    const episodicWeights = { text: w.tfidf, importance: w.importance, recency: w.recency };
    return rankEpisodic(query, events, episodicWeights).slice(0, limit);
  }
  /** Learn a semantic fact AND index it. */
  learn(entity, attribute, value, confidence, source) {
    const id = this.semantic.learn(entity, attribute, value, confidence, source);
    this.index.add(id, `${entity} ${attribute} ${JSON.stringify(value)}`);
    return id;
  }
  /** Store a long-term record AND index it. */
  store(payload, opts) {
    const id = this.longterm.store(payload, opts);
    this.index.add(id, typeof payload === "string" ? payload : JSON.stringify(payload));
    return id;
  }
  /** Retrieve a long-term record (updates access stats). */
  retrieve(id) {
    return this.longterm.retrieve(id);
  }
  /** Unified search across all memory types. Returns ranked long-term records. */
  search(query, limit = 10) {
    const results = this.index.search(query);
    const tfidf = /* @__PURE__ */ new Map();
    for (const r of results) tfidf.set(r.recordId, r.score);
    const records = [];
    for (const r of results) {
      const rec = this.longterm.peek(r.recordId);
      if (rec) records.push(rec);
    }
    return rankLongTerm(tfidf, records, this.config.rankingWeights).slice(0, limit);
  }
  /** Link two records. */
  link(fromId, toId, relation, weight) {
    return this.links.add(fromId, toId, relation, weight);
  }
  /** Find related records via links. */
  related(id, relation, maxDepth) {
    if (relation) return this.links.traverse(id, relation, maxDepth ?? 5);
    const out = /* @__PURE__ */ new Set();
    for (const l of this.links.outgoingFrom(id)) out.add(l.toId);
    for (const l of this.links.incomingTo(id)) out.add(l.fromId);
    return Array.from(out);
  }
  /** Run aging: prune low-importance episodic events, decay long-term importance. */
  age(now = Date.now()) {
    const policy = mergeAgingPolicy(this.config.aging);
    const before = this.episodic.count();
    const all = this.episodic.all();
    const toKeep = all.filter((e) => !shouldPruneEpisodic(e, policy, now));
    if (toKeep.length < all.length) {
      const recent = all.slice(-100);
      const seen = new Set(recent.map((e) => e.id));
      for (const e of toKeep) seen.add(e.id);
      const oldestKept = Math.min(...toKeep.map((e) => e.timestamp), ...recent.map((e) => e.timestamp));
      this.episodic.pruneOlderThan(oldestKept);
    }
    const prunedEpisodic = before - this.episodic.count();
    const agedLongTerm = this.longterm.applyAging(now);
    this.logger.debug("age: complete", { prunedEpisodic, agedLongTerm });
    return { prunedEpisodic, agedLongTerm };
  }
  /** Snapshot the entire memory state. */
  snapshot() {
    return {
      schemaVersion: 1,
      takenAt: (/* @__PURE__ */ new Date()).toISOString(),
      working: this.working.entries(),
      episodic: this.episodic.all(),
      semantic: this.semantic.all(),
      procedural: this.procedural.list().map((name) => {
        const s = this.procedural.get(name);
        return { ...s, handler: void 0, handlerSerialized: false };
      }),
      longterm: this.longterm.all(),
      links: this.links.all(),
      permissions: this.permissions.all()
    };
  }
  /** Restore from a snapshot. */
  restore(snapshot) {
    if (!snapshot || snapshot.schemaVersion !== 1) throw new MemoryError("invalid snapshot");
    this.working.clear();
    this.episodic.pruneOlderThan(Date.now() + 1);
    for (const e of snapshot.episodic) this.episodic.record(e.agent, e.event, e.context, { importance: e.importance, tags: e.tags, source: e.source, id: e.id, timestamp: e.timestamp });
    for (const s of snapshot.semantic) this.semantic.learn(s.entity, s.attribute, s.value, s.confidence, s.source);
    for (const r of snapshot.longterm) this.longterm.store(r.payload, { type: r.type, importance: r.importance, tags: r.tags, source: r.source, id: r.id });
    for (const l of snapshot.links) this.links.add(l.fromId, l.toId, l.relation, l.weight);
    for (const p of snapshot.permissions) this.permissions.set(p);
  }
  /** Backup the current state. */
  backup() {
    return createBackup2(this.snapshot());
  }
  /** Restore from a backup. */
  restoreFromBackup(backup) {
    if (!verifyBackup(backup)) throw new MemoryError("backup verification failed");
    this.restore(restoreBackup2(backup));
  }
  /** Synchronize with a remote snapshot. Returns the applied delta. */
  synchronize(remoteSnapshot) {
    const local = this.snapshot();
    const delta = computeDelta(local, remoteSnapshot);
    const merged = applyDelta(local, remoteSnapshot, delta);
    this.restore(merged);
    return delta;
  }
  /** Export the snapshot to a JSON string. */
  export() {
    return exportSnapshot(this.snapshot());
  }
  /** Import a snapshot from a JSON string. */
  import(json) {
    this.restore(importSnapshot(json));
  }
  /** Dispose of resources (sweepers, etc.). */
  dispose() {
    this.working.dispose();
  }
};

// packages/constitution/src/errors.ts
var ConstitutionError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? "CONSTITUTION_ERROR";
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var RuleError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "RULE_ERROR", cause);
  }
};
var PolicyError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "POLICY_ERROR", cause);
  }
};
var PermissionError2 = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "PERMISSION_ERROR", cause);
  }
};
var HierarchyError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "HIERARCHY_ERROR", cause);
  }
};
var EmergencyError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "EMERGENCY_ERROR", cause);
  }
};
var SafetyError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "SAFETY_ERROR", cause);
  }
};
var ConflictError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "CONFLICT_ERROR", cause);
  }
};
var EnforcementError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "ENFORCEMENT_ERROR", cause);
  }
};
var DocumentError = class extends ConstitutionError {
  constructor(message, cause) {
    super(message, "DOCUMENT_ERROR", cause);
  }
};

// packages/constitution/src/rules/rules.ts
var RULE_CATEGORIES = [
  "harm",
  "deception",
  "privacy",
  "fairness",
  "autonomy",
  "transparency"
];
function extractActionVerb(description) {
  const lower = description.toLowerCase();
  const stripped = lower.replace(/^(do|must|shall|should)\s+not\s+/, "").replace(/^(must|shall|should)\s+/, "");
  const match = stripped.match(/[a-z]+/);
  return match ? match[0] : lower;
}
function evaluateRule(rule, context) {
  if (!rule || typeof rule !== "object") {
    throw new RuleError("rule must be a non-null object");
  }
  if (!context || typeof context !== "object") {
    throw new RuleError("context must be a non-null object");
  }
  if (typeof rule.id !== "string" || rule.id.length === 0) {
    throw new RuleError("rule.id must be a non-empty string");
  }
  const verb = extractActionVerb(rule.description);
  const actionStr = (context.action ?? "").toLowerCase();
  const reasonStr = typeof context.metadata?.reason === "string" ? String(context.metadata.reason).toLowerCase() : "";
  const haystack = `${actionStr} ${reasonStr}`;
  const matches = haystack.includes(verb);
  if (rule.forbidden) {
    if (matches) {
      return {
        violated: true,
        reason: `prohibition "${rule.id}" triggered: action matches "${verb}"`,
        ruleId: rule.id,
        severity: rule.severity
      };
    }
    return { violated: false, ruleId: rule.id, severity: rule.severity };
  }
  if (!matches) {
    return {
      violated: true,
      reason: `requirement "${rule.id}" not satisfied: action missing "${verb}"`,
      ruleId: rule.id,
      severity: rule.severity
    };
  }
  return { violated: false, ruleId: rule.id, severity: rule.severity };
}
function evaluateRuleSet(rules, context) {
  if (!rules || !Array.isArray(rules.rules)) {
    throw new RuleError("rules.rules must be an array");
  }
  const out = [];
  for (const r of rules.rules) {
    const ev = evaluateRule(r, context);
    if (ev.violated) out.push(ev);
  }
  return out;
}
function validateRule(rule) {
  if (!rule || typeof rule !== "object") {
    throw new RuleError("rule must be an object");
  }
  if (typeof rule.id !== "string" || rule.id.length === 0) {
    throw new RuleError("rule.id must be a non-empty string");
  }
  if (typeof rule.name !== "string" || rule.name.length === 0) {
    throw new RuleError("rule.name must be a non-empty string");
  }
  if (typeof rule.description !== "string" || rule.description.length === 0) {
    throw new RuleError("rule.description must be a non-empty string");
  }
  if (!RULE_CATEGORIES.includes(rule.category)) {
    throw new RuleError(`rule.category must be one of: ${RULE_CATEGORIES.join(", ")}`);
  }
  if (typeof rule.forbidden !== "boolean") {
    throw new RuleError("rule.forbidden must be a boolean");
  }
  const validSev = ["info", "low", "medium", "high", "critical"];
  if (!validSev.includes(rule.severity)) {
    throw new RuleError(`rule.severity must be one of: ${validSev.join(", ")}`);
  }
}

// packages/constitution/src/policies/policies.ts
var KEYWORDS = {
  and: "AND",
  or: "OR",
  not: "NOT",
  in: "IN",
  true: "TRUE",
  false: "FALSE",
  null: "NULL"
};
function tokenize(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const ch = src[i];
    if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
      i++;
      continue;
    }
    if (ch === "=" && src[i + 1] === "=") {
      out.push({ type: "EQ", value: "==", pos: i });
      i += 2;
      continue;
    }
    if (ch === "!" && src[i + 1] === "=") {
      out.push({ type: "NEQ", value: "!=", pos: i });
      i += 2;
      continue;
    }
    if (ch === "(") {
      out.push({ type: "LPAREN", value: "(", pos: i });
      i++;
      continue;
    }
    if (ch === ")") {
      out.push({ type: "RPAREN", value: ")", pos: i });
      i++;
      continue;
    }
    if (ch === "[") {
      out.push({ type: "LBRACKET", value: "[", pos: i });
      i++;
      continue;
    }
    if (ch === "]") {
      out.push({ type: "RBRACKET", value: "]", pos: i });
      i++;
      continue;
    }
    if (ch === ",") {
      out.push({ type: "COMMA", value: ",", pos: i });
      i++;
      continue;
    }
    if (ch === "'" || ch === '"') {
      const quote = ch;
      const start = i;
      i++;
      let buf = "";
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < n) {
          buf += src[i + 1];
          i += 2;
        } else {
          buf += src[i];
          i++;
        }
      }
      if (i >= n) throw new PolicyError(`unterminated string literal at position ${start}`);
      i++;
      out.push({ type: "STRING", value: buf, pos: start });
      continue;
    }
    if (ch >= "0" && ch <= "9") {
      const start = i;
      let num = "";
      while (i < n && (src[i] >= "0" && src[i] <= "9" || src[i] === ".")) {
        num += src[i];
        i++;
      }
      out.push({ type: "NUMBER", value: num, pos: start });
      continue;
    }
    if (isIdentStart(ch)) {
      const start = i;
      let ident = "";
      while (i < n && isIdentPart(src[i])) {
        ident += src[i];
        i++;
      }
      while (i < n && src[i] === "." && i + 1 < n && isIdentStart(src[i + 1])) {
        ident += ".";
        i++;
        while (i < n && isIdentPart(src[i])) {
          ident += src[i];
          i++;
        }
      }
      const lower = ident.toLowerCase();
      if (KEYWORDS[lower] && !ident.includes(".")) {
        out.push({ type: KEYWORDS[lower], value: ident, pos: start });
      } else {
        out.push({ type: "IDENT", value: ident, pos: start });
      }
      continue;
    }
    throw new PolicyError(`unexpected character '${ch}' at position ${i}`);
  }
  out.push({ type: "EOF", value: "", pos: i });
  return out;
}
function isIdentStart(ch) {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_";
}
function isIdentPart(ch) {
  return isIdentStart(ch) || ch >= "0" && ch <= "9";
}
var Parser = class {
  constructor(tokens) {
    this.tokens = tokens;
  }
  tokens;
  pos = 0;
  peek() {
    return this.tokens[this.pos];
  }
  next() {
    return this.tokens[this.pos++];
  }
  expect(type) {
    const t = this.next();
    if (t.type !== type) {
      throw new PolicyError(`expected ${type} but got ${t.type} ('${t.value}') at position ${t.pos}`);
    }
    return t;
  }
  parse() {
    const node = this.parseOr();
    if (this.peek().type !== "EOF") {
      const t = this.peek();
      throw new PolicyError(`unexpected token '${t.value}' at position ${t.pos}`);
    }
    return node;
  }
  parseOr() {
    let left = this.parseAnd();
    while (this.peek().type === "OR") {
      this.next();
      const right = this.parseAnd();
      left = { kind: "or", left, right };
    }
    return left;
  }
  parseAnd() {
    let left = this.parseNot();
    while (this.peek().type === "AND") {
      this.next();
      const right = this.parseNot();
      left = { kind: "and", left, right };
    }
    return left;
  }
  parseNot() {
    if (this.peek().type === "NOT") {
      this.next();
      const operand = this.parseNot();
      return { kind: "not", operand };
    }
    return this.parsePrimary();
  }
  parsePrimary() {
    const t = this.peek();
    if (t.type === "LPAREN") {
      this.next();
      const node = this.parseOr();
      this.expect("RPAREN");
      return node;
    }
    return this.parseComparison();
  }
  parseComparison() {
    const left = this.parseOperand();
    const opTok = this.peek();
    if (opTok.type === "EQ" || opTok.type === "NEQ" || opTok.type === "IN") {
      this.next();
      const right = this.parseOperand();
      const op = opTok.type === "EQ" ? "==" : opTok.type === "NEQ" ? "!=" : "in";
      return { kind: "cmp", op, left, right };
    }
    if (left.kind === "field") {
      return { kind: "cmp", op: "==", left, right: { kind: "literal", value: true } };
    }
    throw new PolicyError(`expected operator after operand at position ${opTok.pos}`);
  }
  parseOperand() {
    const t = this.next();
    switch (t.type) {
      case "IDENT":
        return this.parseField(t.value);
      case "STRING":
        return { kind: "literal", value: t.value };
      case "NUMBER":
        return { kind: "literal", value: parseNumber(t.value) };
      case "TRUE":
        return { kind: "literal", value: true };
      case "FALSE":
        return { kind: "literal", value: false };
      case "NULL":
        return { kind: "literal", value: null };
      case "LBRACKET":
        return this.parseList();
      default:
        throw new PolicyError(`unexpected token '${t.value}' at position ${t.pos}`);
    }
  }
  parseField(value) {
    const path5 = value.split(".");
    if (path5[0] === "context") path5.shift();
    if (path5.length === 0) {
      throw new PolicyError(`invalid field reference '${value}'`);
    }
    return { kind: "field", path: path5 };
  }
  parseList() {
    const items = [];
    if (this.peek().type === "RBRACKET") {
      this.next();
      return { kind: "list", items };
    }
    for (; ; ) {
      const t = this.next();
      switch (t.type) {
        case "STRING":
          items.push(t.value);
          break;
        case "NUMBER":
          items.push(parseNumber(t.value));
          break;
        case "TRUE":
          items.push(true);
          break;
        case "FALSE":
          items.push(false);
          break;
        case "NULL":
          items.push(null);
          break;
        default:
          throw new PolicyError(`invalid list element '${t.value}' at position ${t.pos}`);
      }
      if (this.peek().type === "COMMA") {
        this.next();
        continue;
      }
      break;
    }
    this.expect("RBRACKET");
    return { kind: "list", items };
  }
};
function parseNumber(s) {
  const n = Number(s);
  if (Number.isNaN(n)) throw new PolicyError(`invalid number literal '${s}'`);
  return n;
}
function lookupField(path5, context) {
  const root = path5[0];
  const TOP_LEVEL = /* @__PURE__ */ new Set(["subject", "action", "resource", "timestamp"]);
  let cur;
  if (TOP_LEVEL.has(root)) {
    const topVal = context[root];
    if (topVal !== void 0) {
      cur = topVal;
    } else if (context.metadata && typeof context.metadata === "object") {
      cur = context.metadata[root];
    } else {
      cur = void 0;
    }
  } else if (context.metadata && typeof context.metadata === "object") {
    cur = context.metadata[root];
  } else {
    cur = void 0;
  }
  for (let i = 1; i < path5.length; i++) {
    if (cur === null || cur === void 0) return void 0;
    if (typeof cur !== "object") return void 0;
    cur = cur[path5[i]];
  }
  return cur;
}
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) {
    if (typeof a === "number" && typeof b === "number") return a === b;
    return false;
  }
  if (a === null || b === null) return a === b;
  if (typeof a !== "object") return a === b;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ak = Object.keys(a);
  const bk = Object.keys(b);
  if (ak.length !== bk.length) return false;
  return ak.every((k) => deepEqual(
    a[k],
    b[k]
  ));
}
function evaluate(node, context) {
  switch (node.kind) {
    case "and":
      return Boolean(evaluate(node.left, context)) && Boolean(evaluate(node.right, context));
    case "or":
      return Boolean(evaluate(node.left, context)) || Boolean(evaluate(node.right, context));
    case "not":
      return !Boolean(evaluate(node.operand, context));
    case "cmp": {
      const left = evaluate(node.left, context);
      const right = evaluate(node.right, context);
      switch (node.op) {
        case "==":
          return deepEqual(left, right);
        case "!=":
          return !deepEqual(left, right);
        case "in": {
          if (!Array.isArray(right)) {
            throw new PolicyError("`in` operator requires a list on the right-hand side");
          }
          return right.some((v) => deepEqual(left, v));
        }
        default:
          throw new PolicyError(`unknown operator ${node.op}`);
      }
    }
    case "field":
      return lookupField(node.path, context);
    case "literal":
      return node.value;
    case "list":
      return node.items;
    default:
      throw new PolicyError(`unknown AST node kind ${node.kind}`);
  }
}
var parseCache = /* @__PURE__ */ new Map();
function parseCondition(condition) {
  if (typeof condition !== "string" || condition.length === 0) {
    throw new PolicyError("condition must be a non-empty string");
  }
  const cached = parseCache.get(condition);
  if (cached) return cached;
  const tokens = tokenize(condition);
  const ast = new Parser(tokens).parse();
  parseCache.set(condition, ast);
  return ast;
}
function clearConditionCache() {
  parseCache.clear();
}
function evaluateCondition(condition, context) {
  const ast = parseCondition(condition);
  return Boolean(evaluate(ast, context));
}
function evaluatePolicy(policy, context) {
  if (!policy || typeof policy !== "object") {
    throw new PolicyError("policy must be a non-null object");
  }
  if (typeof policy.id !== "string" || policy.id.length === 0) {
    throw new PolicyError("policy.id must be a non-empty string");
  }
  const matched = evaluateCondition(policy.condition, context);
  return {
    matched,
    action: policy.action,
    reason: matched ? `condition "${policy.condition}" matched` : `condition "${policy.condition}" did not match`,
    policyId: policy.id
  };
}
function evaluatePolicySet(policies, context) {
  if (!policies || !Array.isArray(policies.policies)) {
    throw new PolicyError("policies.policies must be an array");
  }
  let best;
  for (const p of policies.policies) {
    const ev = evaluatePolicy(p, context);
    if (!ev.matched) continue;
    if (!best || p.priority > best.policy.priority) {
      best = { policy: p, eval_: ev };
      continue;
    }
    if (p.priority === best.policy.priority) {
      const rank = { allow: 0, require_approval: 1, deny: 2 };
      if (rank[p.action] > rank[best.policy.action]) {
        best = { policy: p, eval_: ev };
      }
    }
  }
  if (!best) {
    return {
      matched: false,
      action: "allow",
      reason: "no matching policy; defaulting to allow",
      policyId: ""
    };
  }
  return best.eval_;
}

// packages/constitution/src/permissions/permissions.ts
var WILDCARD = "*";
function requireRole(model, name) {
  const r = model.roles.find((x) => x.name === name);
  if (!r) throw new PermissionError2(`unknown role: ${name}`);
  return r;
}
function expandRoles(model, start) {
  const visited = /* @__PURE__ */ new Set();
  const onStack = /* @__PURE__ */ new Set();
  const visit = (name) => {
    if (visited.has(name)) return;
    if (onStack.has(name)) {
      throw new PermissionError2(`inheritance cycle detected at role ${name}`);
    }
    onStack.add(name);
    const role = model.roles.find((r) => r.name === name);
    if (!role) throw new PermissionError2(`unknown role: ${name}`);
    if (role.inherits) {
      for (const parent of role.inherits) {
        if (parent === name) {
          throw new PermissionError2(`inheritance cycle detected at role ${name} (self-inheritance)`);
        }
        visit(parent);
      }
    }
    onStack.delete(name);
    visited.add(name);
  };
  visit(start);
  return visited;
}
function permissionsForRole(model, role) {
  const roles = expandRoles(model, role);
  const out = /* @__PURE__ */ new Set();
  for (const name of roles) {
    const r = model.roles.find((x) => x.name === name);
    if (!r) continue;
    for (const p of r.permissions) out.add(p);
  }
  return out;
}
function permissionMatches(granted, requested) {
  if (granted === requested) return true;
  if (granted === WILDCARD) return true;
  const gParts = granted.split(":");
  const rParts = requested.split(":");
  if (gParts.length === 2 && rParts.length === 2) {
    if (gParts[1] === WILDCARD && gParts[0] === rParts[0]) return true;
  }
  return false;
}
function rolesForSubject(model, subject) {
  return model.assignments.filter((a) => a.subject === subject).map((a) => a.role);
}
function can(model, subject, permission) {
  const roles = rolesForSubject(model, subject);
  for (const r of roles) {
    let perms;
    try {
      perms = permissionsForRole(model, r);
    } catch {
      continue;
    }
    for (const p of perms) {
      if (permissionMatches(p, permission)) return true;
    }
  }
  return false;
}
function whoCan(model, permission) {
  const out = /* @__PURE__ */ new Set();
  const subjects = new Set(model.assignments.map((a) => a.subject));
  for (const s of subjects) {
    if (can(model, s, permission)) out.add(s);
  }
  return Array.from(out).sort();
}
function grantRole(model, subject, role) {
  if (typeof subject !== "string" || subject.length === 0) {
    throw new PermissionError2("subject must be a non-empty string");
  }
  requireRole(model, role);
  const exists = model.assignments.some((a) => a.subject === subject && a.role === role);
  if (exists) return model;
  const assignment = { subject, role };
  return { ...model, assignments: [...model.assignments, assignment] };
}
function revokeRole(model, subject, role) {
  return {
    ...model,
    assignments: model.assignments.filter(
      (a) => !(a.subject === subject && a.role === role)
    )
  };
}
function validatePermissionModel(model) {
  if (!model || !Array.isArray(model.roles) || !Array.isArray(model.assignments)) {
    throw new PermissionError2("model must have roles[] and assignments[]");
  }
  const names = /* @__PURE__ */ new Set();
  for (const r of model.roles) {
    if (names.has(r.name)) {
      throw new PermissionError2(`duplicate role name: ${r.name}`);
    }
    names.add(r.name);
    if (typeof r.name !== "string" || r.name.length === 0) {
      throw new PermissionError2("role.name must be a non-empty string");
    }
    if (!Array.isArray(r.permissions)) {
      throw new PermissionError2(`role ${r.name}: permissions must be an array`);
    }
    for (const p of r.permissions) {
      if (typeof p !== "string" || p !== "*" && !p.includes(":")) {
        throw new PermissionError2(`role ${r.name}: invalid permission '${p}' (must be 'module:action' or '*')`);
      }
    }
  }
  for (const r of model.roles) {
    if (r.inherits) {
      for (const parent of r.inherits) {
        if (!names.has(parent)) {
          throw new PermissionError2(`role ${r.name} inherits unknown role ${parent}`);
        }
      }
    }
    expandRoles(model, r.name);
  }
  for (const a of model.assignments) {
    if (typeof a.subject !== "string" || a.subject.length === 0) {
      throw new PermissionError2("assignment.subject must be a non-empty string");
    }
    if (!names.has(a.role)) {
      throw new PermissionError2(`assignment references unknown role: ${a.role}`);
    }
  }
}

// packages/constitution/src/hierarchy/hierarchy.ts
function requireNode(hierarchy, id) {
  if (!hierarchy || !Array.isArray(hierarchy.nodes)) {
    throw new HierarchyError("hierarchy.nodes must be an array");
  }
  const node = hierarchy.nodes.find((n) => n.id === id);
  if (!node) throw new HierarchyError(`unknown node: ${id}`);
  return node;
}
function escalationPath(hierarchy, id) {
  const path5 = [];
  const seen = /* @__PURE__ */ new Set();
  let cur = requireNode(hierarchy, id);
  for (; ; ) {
    if (seen.has(cur.id)) {
      throw new HierarchyError(`cycle detected at node ${cur.id}`);
    }
    seen.add(cur.id);
    path5.push(cur.id);
    if (!cur.parent) break;
    cur = requireNode(hierarchy, cur.parent);
  }
  return path5;
}
function findCommonAuthority(hierarchy, a, b) {
  const pathA = escalationPath(hierarchy, a).reverse();
  const pathB = escalationPath(hierarchy, b).reverse();
  let common;
  const len = Math.min(pathA.length, pathB.length);
  for (let i = 0; i < len; i++) {
    if (pathA[i] === pathB[i]) {
      common = pathA[i];
    } else {
      break;
    }
  }
  return common;
}
function canOverride(hierarchy, decider, original) {
  const d = requireNode(hierarchy, decider);
  const o = requireNode(hierarchy, original);
  return d.authority > o.authority;
}
function ancestors(hierarchy, id) {
  const path5 = escalationPath(hierarchy, id);
  return path5.slice(1);
}
function roots(hierarchy) {
  if (!hierarchy || !Array.isArray(hierarchy.nodes)) {
    throw new HierarchyError("hierarchy.nodes must be an array");
  }
  return hierarchy.nodes.filter((n) => !n.parent);
}
function children(hierarchy, id) {
  if (!hierarchy || !Array.isArray(hierarchy.nodes)) {
    throw new HierarchyError("hierarchy.nodes must be an array");
  }
  return hierarchy.nodes.filter((n) => n.parent === id);
}
function validateHierarchy(hierarchy) {
  if (!hierarchy || !Array.isArray(hierarchy.nodes)) {
    throw new HierarchyError("hierarchy.nodes must be an array");
  }
  const ids = /* @__PURE__ */ new Set();
  for (const n of hierarchy.nodes) {
    if (typeof n.id !== "string" || n.id.length === 0) {
      throw new HierarchyError("node.id must be a non-empty string");
    }
    if (ids.has(n.id)) {
      throw new HierarchyError(`duplicate node id: ${n.id}`);
    }
    ids.add(n.id);
    if (typeof n.authority !== "number" || Number.isNaN(n.authority)) {
      throw new HierarchyError(`node ${n.id}: authority must be a number`);
    }
    if (n.parent !== void 0 && !ids.has(n.parent) && !hierarchy.nodes.some((x) => x.id === n.parent)) {
    }
  }
  for (const n of hierarchy.nodes) {
    if (n.parent !== void 0 && !ids.has(n.parent)) {
      throw new HierarchyError(`node ${n.id} references unknown parent ${n.parent}`);
    }
  }
  for (const n of hierarchy.nodes) {
    escalationPath(hierarchy, n.id);
  }
}

// packages/constitution/src/emergency/emergency.ts
var STATE_RANK = {
  normal: 0,
  heightened: 1,
  emergency: 2,
  critical: 3
};
var STATE_ORDER = ["normal", "heightened", "emergency", "critical"];
var EmergencyController = class {
  state = "normal";
  procedure;
  declaredAt;
  listeners = [];
  /** Returns the current emergency state. */
  getState() {
    return this.state;
  }
  /** Returns the active procedure, if any. */
  getActiveProcedure() {
    return this.procedure;
  }
  /** Returns the ISO 8601 timestamp when the current state was declared. */
  getDeclaredAt() {
    return this.declaredAt;
  }
  /**
   * Declares an emergency at `state` and activates `procedure`. The procedure's
   * `state` field must match `state`. Throws `EmergencyError` when:
   *   - the state is `normal` (use `liftEmergency` instead)
   *   - the procedure's state does not match
   *   - escalation is more than one level higher than the current state
   *     (de-escalation is allowed by any amount)
   */
  declareEmergency(state, procedure) {
    if (state === "normal") {
      throw new EmergencyError("use liftEmergency() to return to normal");
    }
    if (!procedure || typeof procedure !== "object") {
      throw new EmergencyError("procedure must be an object");
    }
    if (procedure.state !== state) {
      throw new EmergencyError(
        `procedure.state (${procedure.state}) does not match declared state (${state})`
      );
    }
    const curRank = STATE_RANK[this.state];
    const newRank = STATE_RANK[state];
    if (newRank - curRank > 1) {
      throw new EmergencyError(
        `cannot escalate from ${this.state} to ${state}; intermediate state required`
      );
    }
    this.state = state;
    this.procedure = procedure;
    this.declaredAt = (/* @__PURE__ */ new Date()).toISOString();
    this.emit();
  }
  /**
   * Lifts the emergency: sets state to `normal`, clears the procedure, and
   * emits the change.
   */
  liftEmergency() {
    this.state = "normal";
    this.procedure = void 0;
    this.declaredAt = void 0;
    this.emit();
  }
  /**
   * Returns true when `action` is allowed under the active procedure. When no
   * procedure is active (state is `normal`), all actions are allowed.
   *
   * Wildcards: an entry of `*` in `allowedActions` allows all actions; an
   * entry of `module:*` allows all actions in `module`.
   */
  isActionAllowed(action) {
    if (!this.procedure) return true;
    const allowed = this.procedure.allowedActions;
    if (allowed.includes("*")) return true;
    for (const entry of allowed) {
      if (entry === action) return true;
      if (entry.endsWith(":*") && action.startsWith(entry.slice(0, -1))) return true;
    }
    return false;
  }
  /**
   * Returns true when the active procedure has timed out, given `now` (ISO
   * 8601). A timeout of 0 means no timeout.
   */
  isTimedOut(now) {
    if (!this.procedure || !this.declaredAt) return false;
    if (this.procedure.timeout <= 0) return false;
    const elapsed = Date.parse(now) - Date.parse(this.declaredAt);
    return elapsed >= this.procedure.timeout;
  }
  /**
   * Registers a listener that is invoked whenever the state changes.
   */
  onStateChange(listener) {
    this.listeners.push(listener);
  }
  emit() {
    for (const l of this.listeners) {
      try {
        l(this.state, this.procedure);
      } catch {
      }
    }
  }
};
function validateProcedure(procedure) {
  if (!procedure || typeof procedure !== "object") {
    throw new EmergencyError("procedure must be an object");
  }
  if (typeof procedure.id !== "string" || procedure.id.length === 0) {
    throw new EmergencyError("procedure.id must be a non-empty string");
  }
  if (typeof procedure.name !== "string" || procedure.name.length === 0) {
    throw new EmergencyError("procedure.name must be a non-empty string");
  }
  if (!STATE_ORDER.includes(procedure.state)) {
    throw new EmergencyError(`procedure.state must be one of: ${STATE_ORDER.join(", ")}`);
  }
  if (!Array.isArray(procedure.triggerConditions)) {
    throw new EmergencyError("procedure.triggerConditions must be an array");
  }
  if (!Array.isArray(procedure.allowedActions)) {
    throw new EmergencyError("procedure.allowedActions must be an array");
  }
  if (!Array.isArray(procedure.requiredApprovals)) {
    throw new EmergencyError("procedure.requiredApprovals must be an array");
  }
  if (typeof procedure.timeout !== "number" || procedure.timeout < 0) {
    throw new EmergencyError("procedure.timeout must be a non-negative number");
  }
}

// packages/constitution/src/safety/safety.ts
var ENFORCEMENT_POINTS = ["pre", "post", "both"];
function validateSafetyRule(rule) {
  if (!rule || typeof rule !== "object") {
    throw new SafetyError("rule must be an object");
  }
  if (typeof rule.id !== "string" || rule.id.length === 0) {
    throw new SafetyError("rule.id must be a non-empty string");
  }
  if (typeof rule.invariant !== "string" || rule.invariant.length === 0) {
    throw new SafetyError("rule.invariant must be a non-empty string");
  }
  if (!ENFORCEMENT_POINTS.includes(rule.enforcementPoint)) {
    throw new SafetyError(`rule.enforcementPoint must be one of: ${ENFORCEMENT_POINTS.join(", ")}`);
  }
  const validSev = ["info", "low", "medium", "high", "critical"];
  if (!validSev.includes(rule.severity)) {
    throw new SafetyError(`rule.severity must be one of: ${validSev.join(", ")}`);
  }
}
var SafetyChecker = class {
  rules = /* @__PURE__ */ new Map();
  predicates = /* @__PURE__ */ new Map();
  order = [];
  /** Registers a rule and its predicate. Throws `SafetyError` on duplicate id. */
  register(rule, predicate) {
    validateSafetyRule(rule);
    if (this.rules.has(rule.id)) {
      throw new SafetyError(`safety rule already registered: ${rule.id}`);
    }
    this.rules.set(rule.id, rule);
    this.predicates.set(rule.id, predicate);
    this.order.push(rule.id);
    return this;
  }
  /** Removes a rule by id. */
  unregister(id) {
    this.rules.delete(id);
    this.predicates.delete(id);
    const idx = this.order.indexOf(id);
    if (idx >= 0) this.order.splice(idx, 1);
    return this;
  }
  /** Returns the list of registered rules in insertion order. */
  list() {
    return this.order.map((id) => this.rules.get(id));
  }
  /** Returns the rule with the given id, or undefined. */
  get(id) {
    return this.rules.get(id);
  }
  /**
   * Runs all rules whose enforcement point applies to `point` (i.e. `point`
   * itself or `both`). Returns the list of violations.
   */
  run(point, context) {
    if (!context || typeof context !== "object") {
      throw new SafetyError("context must be a non-null object");
    }
    const out = [];
    for (const id of this.order) {
      const rule = this.rules.get(id);
      if (!appliesAt(rule.enforcementPoint, point)) continue;
      const pred = this.predicates.get(id);
      let result;
      try {
        result = pred(rule, context);
      } catch (err) {
        out.push({
          ruleId: rule.id,
          invariant: rule.invariant,
          reason: `predicate threw: ${err.message}`,
          enforcementPoint: point,
          severity: rule.severity
        });
        continue;
      }
      if (!result.satisfied) {
        out.push({
          ruleId: rule.id,
          invariant: rule.invariant,
          reason: result.reason ?? `invariant "${rule.invariant}" not satisfied`,
          enforcementPoint: point,
          severity: rule.severity
        });
      }
    }
    return out;
  }
  /** Convenience: runs pre-checks. */
  runPre(context) {
    return this.run("pre", context);
  }
  /** Convenience: runs post-checks. */
  runPost(context) {
    return this.run("post", context);
  }
  /**
   * Runs pre-checks and throws `SafetyError` when any rule with severity
   * `medium` or higher is violated. Returns the list of all violations
   * (including low-severity ones) otherwise.
   */
  assertSafe(context) {
    const violations = this.runPre(context);
    const blocking = violations.filter((v) => v.severity === "medium" || v.severity === "high" || v.severity === "critical");
    if (blocking.length > 0) {
      const first = blocking[0];
      throw new SafetyError(
        `safety assertion failed: ${first.reason} (rule ${first.ruleId}, severity ${first.severity})`
      );
    }
    return violations;
  }
  /**
   * Verifies all rules (regardless of enforcement point) against `context`
   * and returns all violations.
   */
  verifyInvariants(context) {
    if (!context || typeof context !== "object") {
      throw new SafetyError("context must be a non-null object");
    }
    const out = [];
    for (const id of this.order) {
      const rule = this.rules.get(id);
      const pred = this.predicates.get(id);
      let result;
      try {
        result = pred(rule, context);
      } catch (err) {
        out.push({
          ruleId: rule.id,
          invariant: rule.invariant,
          reason: `predicate threw: ${err.message}`,
          enforcementPoint: "pre",
          severity: rule.severity
        });
        continue;
      }
      if (!result.satisfied) {
        out.push({
          ruleId: rule.id,
          invariant: rule.invariant,
          reason: result.reason ?? `invariant "${rule.invariant}" not satisfied`,
          enforcementPoint: "pre",
          severity: rule.severity
        });
      }
    }
    return out;
  }
};
function appliesAt(enforcementPoint, point) {
  if (enforcementPoint === "both") return true;
  return enforcementPoint === point;
}

// packages/constitution/src/conflict/conflict.ts
var RESOLUTION_STRATEGIES = [
  "consensus",
  "majority",
  "authority",
  "arbitration",
  "escalation"
];
var CONFLICT_SEVERITIES = [
  "low",
  "medium",
  "high",
  "critical"
];
function validateConflict(conflict) {
  if (!conflict || typeof conflict !== "object") {
    throw new ConflictError("conflict must be an object");
  }
  if (typeof conflict.id !== "string" || conflict.id.length === 0) {
    throw new ConflictError("conflict.id must be a non-empty string");
  }
  if (!Array.isArray(conflict.parties) || conflict.parties.length < 2) {
    throw new ConflictError("conflict.parties must have at least 2 entries");
  }
  if (typeof conflict.description !== "string" || conflict.description.length === 0) {
    throw new ConflictError("conflict.description must be a non-empty string");
  }
  if (!CONFLICT_SEVERITIES.includes(conflict.severity)) {
    throw new ConflictError(`conflict.severity must be one of: ${CONFLICT_SEVERITIES.join(", ")}`);
  }
  const seen = /* @__PURE__ */ new Set();
  for (const p of conflict.parties) {
    if (typeof p !== "string" || p.length === 0) {
      throw new ConflictError("each party must be a non-empty string");
    }
    if (seen.has(p)) {
      throw new ConflictError(`duplicate party: ${p}`);
    }
    seen.add(p);
  }
}
var ConflictResolver = class {
  /** Resolves `conflict` using `strategy` and the provided `options`. */
  resolveConflict(conflict, strategy, options = {}) {
    validateConflict(conflict);
    if (!RESOLUTION_STRATEGIES.includes(strategy)) {
      throw new ConflictError(`unknown strategy: ${strategy}`);
    }
    const proposed = options.proposedResolution ?? `Resolve per ${strategy}`;
    switch (strategy) {
      case "consensus":
        return this.resolveConsensus(conflict, options, proposed);
      case "majority":
        return this.resolveMajority(conflict, options, proposed);
      case "authority":
        return this.resolveAuthority(conflict, options, proposed);
      case "arbitration":
        return this.resolveArbitration(conflict, options, proposed);
      case "escalation":
        return this.resolveEscalation(conflict, proposed);
      default:
        throw new ConflictError(`unhandled strategy: ${strategy}`);
    }
  }
  resolveConsensus(conflict, options, proposed) {
    if (!Array.isArray(options.agreements)) {
      throw new ConflictError("consensus strategy requires options.agreements");
    }
    const agreed = new Set(options.agreements);
    const dissenters = conflict.parties.filter((p) => !agreed.has(p));
    if (dissenters.length === 0) {
      return {
        resolution: proposed,
        reason: "all parties agreed",
        strategy: "consensus"
      };
    }
    return {
      resolution: "No consensus reached; escalation required",
      reason: `${dissenters.length} of ${conflict.parties.length} parties dissented`,
      dissenters,
      strategy: "consensus"
    };
  }
  resolveMajority(conflict, options, proposed) {
    if (!Array.isArray(options.agreements)) {
      throw new ConflictError("majority strategy requires options.agreements");
    }
    const agreed = new Set(options.agreements);
    const agreeCount = conflict.parties.filter((p) => agreed.has(p)).length;
    const needed = Math.ceil(conflict.parties.length / 2);
    if (agreeCount >= needed) {
      return {
        resolution: proposed,
        reason: `${agreeCount} of ${conflict.parties.length} parties agreed (needed ${needed})`,
        dissenters: conflict.parties.filter((p) => !agreed.has(p)),
        strategy: "majority"
      };
    }
    return {
      resolution: "No majority; escalation required",
      reason: `only ${agreeCount} of ${conflict.parties.length} agreed (needed ${needed})`,
      dissenters: conflict.parties.filter((p) => !agreed.has(p)),
      strategy: "majority"
    };
  }
  resolveAuthority(conflict, options, proposed) {
    if (!options.authorities || typeof options.authorities !== "object") {
      throw new ConflictError("authority strategy requires options.authorities");
    }
    let topParty;
    let topAuth = -Infinity;
    for (const p of conflict.parties) {
      const a = options.authorities[p];
      if (typeof a !== "number") {
        throw new ConflictError(`authority strategy: missing authority for party ${p}`);
      }
      if (a > topAuth) {
        topAuth = a;
        topParty = p;
      }
    }
    return {
      resolution: proposed,
      reason: `decided by highest-authority party ${topParty} (authority ${topAuth})`,
      dissenters: conflict.parties.filter((p) => p !== topParty),
      strategy: "authority"
    };
  }
  resolveArbitration(_conflict, options, proposed) {
    if (typeof options.arbitrator !== "string" || options.arbitrator.length === 0) {
      throw new ConflictError("arbitration strategy requires options.arbitrator");
    }
    return {
      resolution: proposed,
      reason: `arbitrated by ${options.arbitrator}`,
      strategy: "arbitration"
    };
  }
  resolveEscalation(conflict, proposed) {
    return {
      resolution: `Escalated: ${proposed}`,
      reason: `conflict ${conflict.id} (severity ${conflict.severity}) escalated to higher authority`,
      strategy: "escalation"
    };
  }
};

// packages/constitution/src/enforce/enforce.ts
var auditCounter = 0;
function newAuditId(timestamp) {
  auditCounter += 1;
  const ts = timestamp.replace(/[^0-9]/g, "");
  return `audit-${ts}-${auditCounter.toString(36).padStart(6, "0")}`;
}
var EnforcementEngine = class {
  ruleSet;
  policySet;
  permissionModel;
  safety;
  audit = [];
  requireApprovalDenies;
  constructor(opts = {}) {
    this.requireApprovalDenies = opts.requireApprovalDenies ?? true;
  }
  /** Registers the ethical rule set. */
  registerRuleSet(ruleSet) {
    this.ruleSet = ruleSet;
    return this;
  }
  /** Registers the operational policy set. */
  registerPolicySet(policySet) {
    this.policySet = policySet;
    return this;
  }
  /** Registers the permission model. */
  registerPermissionModel(model) {
    this.permissionModel = model;
    return this;
  }
  registerSafetyChecker(arg) {
    if (arg instanceof SafetyChecker) {
      this.safety = arg;
    } else if (Array.isArray(arg)) {
      const checker = new SafetyChecker();
      for (const { rule, predicate } of arg) checker.register(rule, predicate);
      this.safety = checker;
    } else {
      throw new EnforcementError("registerSafetyChecker: invalid argument");
    }
    return this;
  }
  /**
   * Evaluates `action` by `subject` against the registered governance.
   * Returns an `EnforcementResult` and appends an entry to the audit log.
   */
  evaluate(action, subject, context) {
    if (typeof action !== "string" || action.length === 0) {
      throw new EnforcementError("action must be a non-empty string");
    }
    if (typeof subject !== "string" || subject.length === 0) {
      throw new EnforcementError("subject must be a non-empty string");
    }
    if (!context || typeof context !== "object") {
      throw new EnforcementError("context must be a non-null object");
    }
    const reasons = [];
    const violations = [];
    if (this.permissionModel) {
      const permitted = can(this.permissionModel, subject, action);
      if (permitted) {
        reasons.push(`permission granted: ${subject} can ${action}`);
      } else {
        violations.push(`permission denied: ${subject} cannot ${action}`);
      }
    } else {
      reasons.push("no permission model registered; skipping permission check");
    }
    if (this.policySet) {
      const ev = evaluatePolicySet(this.policySet, context);
      if (ev.matched) {
        if (ev.action === "allow") {
          reasons.push(`policy ${ev.policyId} allowed`);
        } else if (ev.action === "deny") {
          violations.push(`policy ${ev.policyId} denied: ${ev.reason ?? "denied"}`);
        } else if (ev.action === "require_approval") {
          if (this.requireApprovalDenies) {
            violations.push(`policy ${ev.policyId} requires approval: ${ev.reason ?? "approval required"}`);
          } else {
            reasons.push(`policy ${ev.policyId} requires approval (non-blocking)`);
          }
        }
      } else {
        reasons.push("no matching policy; default allow");
      }
    } else {
      reasons.push("no policy set registered; skipping policy check");
    }
    if (this.safety) {
      const sv = this.safety.runPre(context);
      for (const v of sv) {
        if (v.severity === "medium" || v.severity === "high" || v.severity === "critical") {
          violations.push(`safety ${v.ruleId} violated: ${v.reason}`);
        } else {
          reasons.push(`safety ${v.ruleId} advisory: ${v.reason}`);
        }
      }
      if (sv.length === 0) {
        reasons.push("safety pre-checks passed");
      }
    } else {
      reasons.push("no safety checker registered; skipping safety check");
    }
    if (this.ruleSet) {
      const rv = evaluateRuleSet(this.ruleSet, context);
      for (const v of rv) {
        violations.push(`ethical rule ${v.ruleId} violated: ${v.reason ?? "violated"}`);
      }
      if (rv.length === 0) {
        reasons.push("ethical rules passed");
      }
    } else {
      reasons.push("no rule set registered; skipping ethical check");
    }
    const allowed = violations.length === 0;
    const auditId = newAuditId(context.timestamp);
    const entry = {
      auditId,
      timestamp: context.timestamp,
      action,
      subject,
      allowed,
      reasons,
      violations
    };
    this.audit.push(entry);
    return { allowed, reasons, violations, auditId };
  }
  /** Returns a defensive copy of the audit log. */
  getAuditLog() {
    return this.audit.map((e) => ({ ...e, reasons: [...e.reasons], violations: [...e.violations] }));
  }
  /** Returns the audit entry with the given id, or undefined. */
  getAuditEntry(id) {
    return this.audit.find((e) => e.auditId === id);
  }
  /** Clears the audit log. */
  clearAuditLog() {
    this.audit.length = 0;
  }
};

// packages/constitution/src/documents/documents.ts
var SECTION_TYPES = [
  "preamble",
  "article",
  "amendment",
  "appendix",
  "schedule",
  "other"
];
var DOCUMENT_STATUSES = [
  "draft",
  "proposed",
  "ratified",
  "superseded"
];
function compareVersions(a, b) {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  if (a.patch !== b.patch) return a.patch - b.patch;
  if (a.prerelease && !b.prerelease) return -1;
  if (!a.prerelease && b.prerelease) return 1;
  if (a.prerelease && b.prerelease) {
    return a.prerelease < b.prerelease ? -1 : a.prerelease > b.prerelease ? 1 : 0;
  }
  return 0;
}
function formatVersion(v) {
  let s = `${v.major}.${v.minor}.${v.patch}`;
  if (v.prerelease) s += `-${v.prerelease}`;
  if (v.build) s += `+${v.build}`;
  return s;
}
function parseVersion(s) {
  if (typeof s !== "string") throw new DocumentError("version must be a string");
  const m = s.match(/^(\d+)\.(\d+)\.(\d+)(?:-([a-zA-Z0-9.-]+))?(?:\+([a-zA-Z0-9.-]+))?$/);
  if (!m) throw new DocumentError(`invalid semver: ${s}`);
  return {
    major: Number(m[1]),
    minor: Number(m[2]),
    patch: Number(m[3]),
    prerelease: m[4],
    build: m[5]
  };
}
function validateSection(section) {
  if (!section || typeof section !== "object") {
    throw new DocumentError("section must be an object");
  }
  if (typeof section.id !== "string" || section.id.length === 0) {
    throw new DocumentError("section.id must be a non-empty string");
  }
  if (typeof section.title !== "string" || section.title.length === 0) {
    throw new DocumentError("section.title must be a non-empty string");
  }
  if (typeof section.content !== "string") {
    throw new DocumentError("section.content must be a string");
  }
  if (!SECTION_TYPES.includes(section.type)) {
    throw new DocumentError(`section.type must be one of: ${SECTION_TYPES.join(", ")}`);
  }
}
function validateDocument(doc) {
  if (!doc || typeof doc !== "object") {
    throw new DocumentError("doc must be an object");
  }
  if (typeof doc.id !== "string" || doc.id.length === 0) {
    throw new DocumentError("doc.id must be a non-empty string");
  }
  if (typeof doc.name !== "string" || doc.name.length === 0) {
    throw new DocumentError("doc.name must be a non-empty string");
  }
  if (!doc.version || typeof doc.version !== "object") {
    throw new DocumentError("doc.version must be a SemverVersion");
  }
  if (!Array.isArray(doc.sections)) {
    throw new DocumentError("doc.sections must be an array");
  }
  const seen = /* @__PURE__ */ new Set();
  for (const s of doc.sections) {
    validateSection(s);
    if (seen.has(s.id)) {
      throw new DocumentError(`duplicate section id: ${s.id}`);
    }
    seen.add(s.id);
  }
  if (!DOCUMENT_STATUSES.includes(doc.status)) {
    throw new DocumentError(`doc.status must be one of: ${DOCUMENT_STATUSES.join(", ")}`);
  }
  if (doc.status === "ratified" && typeof doc.ratifiedAt !== "string") {
    throw new DocumentError("ratified document must have ratifiedAt");
  }
}
function isRatified(doc) {
  return doc.status === "ratified";
}
function ratify(doc, at) {
  validateDocument(doc);
  if (doc.status === "ratified") {
    throw new DocumentError("document is already ratified");
  }
  if (doc.status === "superseded") {
    throw new DocumentError("cannot ratify a superseded document");
  }
  return {
    ...doc,
    status: "ratified",
    ratifiedAt: at ?? (/* @__PURE__ */ new Date()).toISOString()
  };
}
function diffDocuments(oldDoc, newDoc) {
  validateDocument(oldDoc);
  validateDocument(newDoc);
  const oldMap = /* @__PURE__ */ new Map();
  for (const s of oldDoc.sections) oldMap.set(s.id, s);
  const newMap = /* @__PURE__ */ new Map();
  for (const s of newDoc.sections) newMap.set(s.id, s);
  const added = [];
  const removed = [];
  const changed = [];
  for (const s of newDoc.sections) {
    if (!oldMap.has(s.id)) {
      added.push(s);
    }
  }
  for (const s of oldDoc.sections) {
    if (!newMap.has(s.id)) {
      removed.push(s);
    }
  }
  for (const s of newDoc.sections) {
    const o = oldMap.get(s.id);
    if (!o) continue;
    if (o.title !== s.title || o.content !== s.content || o.type !== s.type) {
      changed.push({ id: s.id, oldSection: o, newSection: s });
    }
  }
  return { added, removed, changed };
}
function supersede(oldDoc, newDoc) {
  validateDocument(oldDoc);
  validateDocument(newDoc);
  if (!isRatified(oldDoc)) {
    throw new DocumentError("only ratified documents can be superseded");
  }
  if (compareVersions(newDoc.version, oldDoc.version) <= 0) {
    throw new DocumentError(
      `successor version ${formatVersion(newDoc.version)} must be greater than ${formatVersion(oldDoc.version)}`
    );
  }
  if (newDoc.status !== "proposed" && newDoc.status !== "ratified") {
    throw new DocumentError("successor must be proposed or ratified");
  }
  const superseded = {
    ...oldDoc,
    status: "superseded",
    supersededBy: newDoc.id
  };
  return { superseded, successor: { ...newDoc } };
}

// packages/council/src/errors.ts
var CouncilError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? "COUNCIL_ERROR";
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var RoutingError2 = class extends CouncilError {
  constructor(message, cause) {
    super(message, "ROUTING_ERROR", cause);
  }
};
var AnalysisError = class extends CouncilError {
  constructor(message, cause) {
    super(message, "ANALYSIS_ERROR", cause);
  }
};
var ScoringError = class extends CouncilError {
  constructor(message, cause) {
    super(message, "SCORING_ERROR", cause);
  }
};
var ConflictError2 = class extends CouncilError {
  constructor(message, cause) {
    super(message, "CONFLICT_ERROR", cause);
  }
};
var DebateError = class extends CouncilError {
  constructor(message, cause) {
    super(message, "DEBATE_ERROR", cause);
  }
};
var ConsensusError = class extends CouncilError {
  constructor(message, cause) {
    super(message, "CONSENSUS_ERROR", cause);
  }
};
var SynthesisError = class extends CouncilError {
  constructor(message, cause) {
    super(message, "SYNTHESIS_ERROR", cause);
  }
};

// packages/council/src/util.ts
var STOP_WORDS = /* @__PURE__ */ new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "of",
  "to",
  "in",
  "on",
  "at",
  "for",
  "with",
  "by",
  "is",
  "are",
  "be",
  "this",
  "that",
  "these",
  "those",
  "it",
  "as",
  "from",
  "we",
  "our",
  "us",
  "i",
  "you",
  "your",
  "they",
  "their",
  "was",
  "were",
  "will",
  "would",
  "should",
  "shall",
  "may",
  "might",
  "can",
  "could",
  "has",
  "have",
  "had",
  "do",
  "does",
  "did",
  "if",
  "then",
  "else",
  "so",
  "than",
  "too",
  "very",
  "just",
  "about",
  "into",
  "over",
  "under",
  "again",
  "further",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "s",
  "t",
  "because",
  "while"
]);
var POSITIVE_MARKERS = /* @__PURE__ */ new Set([
  "yes",
  "recommend",
  "support",
  "approve",
  "endorse",
  "agree",
  "proceed",
  "accept",
  "positive",
  "pass",
  "correct",
  "adopt",
  "allow",
  "permit",
  "go",
  "true",
  "valid",
  "sound",
  "good",
  "safe",
  "favor",
  "continue",
  "implement",
  "ship",
  "launch",
  "greenlight",
  "ok",
  "okay"
]);
var NEGATIVE_MARKERS = /* @__PURE__ */ new Set([
  "no",
  "not",
  "against",
  "oppose",
  "reject",
  "deny",
  "refuse",
  "decline",
  "block",
  "forbid",
  "prohibit",
  "fail",
  "false",
  "invalid",
  "unsound",
  "bad",
  "unsafe",
  "risk",
  "risky",
  "dont",
  "shouldnt",
  "cannot",
  "cant",
  "wont",
  "never",
  "negative",
  "veto",
  "stop",
  "halt",
  "abort",
  "discard",
  "overturn"
]);
function stem(token) {
  if (token.length > 4) {
    if (token.endsWith("ing")) return token.slice(0, -3);
    if (token.endsWith("ed")) return token.slice(0, -2);
    if (token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  }
  return token;
}
function tokenize2(text) {
  if (typeof text !== "string" || text.length === 0) return [];
  return text.toLowerCase().split(/[^a-z0-9]+/g).filter((t) => t.length > 0 && !STOP_WORDS.has(t));
}
function tokenSet(text) {
  return new Set(tokenize2(text));
}
function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  const [smaller, larger] = a.size <= b.size ? [a, b] : [b, a];
  for (const t of smaller) if (larger.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union > 0 ? intersection / union : 0;
}
function polarity(text) {
  const tokens = tokenize2(text);
  let pos = 0;
  let neg = 0;
  for (const t of tokens) {
    const s = stem(t);
    if (POSITIVE_MARKERS.has(s)) pos++;
    if (NEGATIVE_MARKERS.has(s)) neg++;
  }
  if (pos > neg) return "positive";
  if (neg > pos) return "negative";
  return "neutral";
}

// packages/council/src/router/router.ts
function validateSpecialist(specialist) {
  if (!specialist || typeof specialist !== "object") {
    throw new RoutingError2("specialist must be an object");
  }
  if (typeof specialist.id !== "string" || specialist.id.length === 0) {
    throw new RoutingError2("specialist.id must be a non-empty string");
  }
  if (typeof specialist.name !== "string" || specialist.name.length === 0) {
    throw new RoutingError2("specialist.name must be a non-empty string");
  }
  if (!Array.isArray(specialist.expertise)) {
    throw new RoutingError2("specialist.expertise must be an array");
  }
  for (const e of specialist.expertise) {
    if (typeof e !== "string" || e.length === 0) {
      throw new RoutingError2("each expertise entry must be a non-empty string");
    }
  }
  if (typeof specialist.weight !== "number" || !Number.isFinite(specialist.weight) || specialist.weight < 0) {
    throw new RoutingError2("specialist.weight must be a non-negative finite number");
  }
}
function matchScore(problem, specialist) {
  if (!problem || typeof problem !== "object") {
    throw new RoutingError2("problem must be an object");
  }
  validateSpecialist(specialist);
  const problemTokens = /* @__PURE__ */ new Set([
    ...tokenize2(problem.description),
    ...tokenize2(problem.domain)
  ]);
  const expertTokens = /* @__PURE__ */ new Set();
  for (const e of specialist.expertise) {
    for (const t of tokenize2(e)) expertTokens.add(t);
  }
  if (problemTokens.size === 0 || expertTokens.size === 0) return 0;
  let intersection = 0;
  for (const t of expertTokens) if (problemTokens.has(t)) intersection++;
  const union = problemTokens.size + expertTokens.size - intersection;
  return union > 0 ? intersection / union : 0;
}
function route(problem, specialists) {
  if (!problem || typeof problem !== "object") {
    throw new RoutingError2("problem must be an object");
  }
  if (!Array.isArray(specialists)) {
    throw new RoutingError2("specialists must be an array");
  }
  return specialists.map((s, idx) => ({ specialist: s, score: matchScore(problem, s), idx })).filter((m) => m.score > 0).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.specialist.weight !== a.specialist.weight) {
      return b.specialist.weight - a.specialist.weight;
    }
    return a.idx - b.idx;
  }).map((m) => m.specialist);
}
function routeAll(problem, specialists) {
  if (!problem || typeof problem !== "object") {
    throw new RoutingError2("problem must be an object");
  }
  if (!Array.isArray(specialists)) {
    throw new RoutingError2("specialists must be an array");
  }
  return specialists.map((s, idx) => ({ specialist: s, score: matchScore(problem, s), idx })).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.specialist.weight !== a.specialist.weight) {
      return b.specialist.weight - a.specialist.weight;
    }
    return a.idx - b.idx;
  }).map((m) => ({ specialist: m.specialist, score: m.score }));
}
var SpecialistRegistry = class {
  specialists = /* @__PURE__ */ new Map();
  order = [];
  /** Registers a specialist. Throws `RoutingError` on duplicate id or invalid fields. */
  register(specialist) {
    validateSpecialist(specialist);
    if (this.specialists.has(specialist.id)) {
      throw new RoutingError2(`specialist already registered: ${specialist.id}`);
    }
    this.specialists.set(specialist.id, specialist);
    this.order.push(specialist.id);
    return this;
  }
  /** Removes a specialist by id. No-op if not found. */
  unregister(id) {
    this.specialists.delete(id);
    const idx = this.order.indexOf(id);
    if (idx >= 0) this.order.splice(idx, 1);
    return this;
  }
  /** Returns the specialist with the given id, or `undefined`. */
  get(id) {
    return this.specialists.get(id);
  }
  /** Returns all registered specialists in insertion order. */
  list() {
    return this.order.map((id) => this.specialists.get(id));
  }
  /** Returns the ranked list of specialists with positive match scores. */
  route(problem) {
    return route(problem, this.list());
  }
  /** Returns every specialist with its match score, sorted best-first. */
  routeAll(problem) {
    return routeAll(problem, this.list());
  }
};

// packages/council/src/analysis/analysis.ts
function validateAnalysis(analysis) {
  if (!analysis || typeof analysis !== "object") {
    throw new AnalysisError("analysis must be an object");
  }
  if (typeof analysis.id !== "string" || analysis.id.length === 0) {
    throw new AnalysisError("analysis.id must be a non-empty string");
  }
  if (typeof analysis.specialistId !== "string" || analysis.specialistId.length === 0) {
    throw new AnalysisError("analysis.specialistId must be a non-empty string");
  }
  if (typeof analysis.problemId !== "string" || analysis.problemId.length === 0) {
    throw new AnalysisError("analysis.problemId must be a non-empty string");
  }
  if (typeof analysis.content !== "string" || analysis.content.length === 0) {
    throw new AnalysisError("analysis.content must be a non-empty string");
  }
  if (typeof analysis.confidence !== "number" || !Number.isFinite(analysis.confidence)) {
    throw new AnalysisError("analysis.confidence must be a finite number");
  }
  if (analysis.confidence < 0 || analysis.confidence > 1) {
    throw new AnalysisError("analysis.confidence must be between 0 and 1");
  }
  if (typeof analysis.reasoning !== "string" || analysis.reasoning.length === 0) {
    throw new AnalysisError("analysis.reasoning must be a non-empty string");
  }
  if (analysis.caveats !== void 0) {
    if (!Array.isArray(analysis.caveats)) {
      throw new AnalysisError("analysis.caveats must be an array if provided");
    }
    for (const c of analysis.caveats) {
      if (typeof c !== "string" || c.length === 0) {
        throw new AnalysisError("each caveat must be a non-empty string");
      }
    }
  }
}
var AnalysisCollector = class {
  analyses = /* @__PURE__ */ new Map();
  order = [];
  byProblem = /* @__PURE__ */ new Map();
  bySpecialist = /* @__PURE__ */ new Map();
  /**
   * Validates and stores `analysis`. Throws `AnalysisError` when the analysis
   * is malformed or an analysis with the same id has already been submitted.
   */
  submit(analysis) {
    validateAnalysis(analysis);
    if (this.analyses.has(analysis.id)) {
      throw new AnalysisError(`analysis already submitted: ${analysis.id}`);
    }
    this.analyses.set(analysis.id, analysis);
    this.order.push(analysis.id);
    if (!this.byProblem.has(analysis.problemId)) this.byProblem.set(analysis.problemId, []);
    this.byProblem.get(analysis.problemId).push(analysis.id);
    if (!this.bySpecialist.has(analysis.specialistId)) this.bySpecialist.set(analysis.specialistId, []);
    this.bySpecialist.get(analysis.specialistId).push(analysis.id);
    return this;
  }
  /** Returns the analysis with the given id, or `undefined`. */
  get(id) {
    return this.analyses.get(id);
  }
  /** Returns all analyses for the given problem, in submission order. */
  getAll(problemId) {
    const ids = this.byProblem.get(problemId) ?? [];
    return ids.map((id) => this.analyses.get(id));
  }
  /** Returns all analyses by the given specialist, in submission order. */
  getBySpecialist(specialistId) {
    const ids = this.bySpecialist.get(specialistId) ?? [];
    return ids.map((id) => this.analyses.get(id));
  }
  /** Returns all analyses in submission order. */
  list() {
    return this.order.map((id) => this.analyses.get(id));
  }
  /** Returns the number of analyses stored. */
  size() {
    return this.order.length;
  }
};

// packages/council/src/scoring/scoring.ts
var DEFAULT_OUTLIER_THRESHOLD = 0.25;
function assertAnalysis(analysis) {
  if (!analysis || typeof analysis !== "object") {
    throw new ScoringError("analysis must be an object");
  }
  const a = analysis;
  if (typeof a.id !== "string" || a.id.length === 0) {
    throw new ScoringError("analysis.id must be a non-empty string");
  }
  if (typeof a.specialistId !== "string" || a.specialistId.length === 0) {
    throw new ScoringError("analysis.specialistId must be a non-empty string");
  }
  if (typeof a.confidence !== "number" || !Number.isFinite(a.confidence) || a.confidence < 0 || a.confidence > 1) {
    throw new ScoringError("analysis.confidence must be a finite number in [0, 1]");
  }
}
function scoreAnalysis(analysis, specialistWeight) {
  assertAnalysis(analysis);
  if (typeof specialistWeight !== "number" || !Number.isFinite(specialistWeight) || specialistWeight < 0) {
    throw new ScoringError("specialistWeight must be a non-negative finite number");
  }
  return {
    analysisId: analysis.id,
    raw: analysis.confidence,
    weight: specialistWeight,
    weighted: analysis.confidence * specialistWeight
  };
}
function aggregateScores(analyses, weights) {
  if (!Array.isArray(analyses)) throw new ScoringError("analyses must be an array");
  if (!weights || typeof weights !== "object") {
    throw new ScoringError("weights must be an object");
  }
  if (analyses.length === 0) {
    return { combined: 0, variance: 0, stddev: 0, total: 0, weighted: [] };
  }
  const weighted = [];
  let totalWeight = 0;
  let weightedSum = 0;
  for (const a of analyses) {
    assertAnalysis(a);
    const w = weights[a.specialistId];
    if (typeof w !== "number" || !Number.isFinite(w) || w < 0) {
      throw new ScoringError(`missing or invalid weight for specialist ${a.specialistId}`);
    }
    const ws = a.confidence * w;
    weighted.push(ws);
    weightedSum += ws;
    totalWeight += w;
  }
  const combined = totalWeight > 0 ? weightedSum / totalWeight : 0;
  const mean = analyses.reduce((s, a) => s + a.confidence, 0) / analyses.length;
  const variance = analyses.reduce((s, a) => s + (a.confidence - mean) ** 2, 0) / analyses.length;
  return {
    combined,
    variance,
    stddev: Math.sqrt(variance),
    total: analyses.length,
    weighted
  };
}
function detectOutliers(analyses, threshold = DEFAULT_OUTLIER_THRESHOLD) {
  if (!Array.isArray(analyses)) throw new ScoringError("analyses must be an array");
  if (typeof threshold !== "number" || !Number.isFinite(threshold) || threshold < 0) {
    throw new ScoringError("threshold must be a non-negative finite number");
  }
  if (analyses.length < 2) return [];
  for (const a of analyses) assertAnalysis(a);
  const sorted = [...analyses].sort((a, b) => a.confidence - b.confidence);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 0 ? (sorted[mid - 1].confidence + sorted[mid].confidence) / 2 : sorted[mid].confidence;
  return analyses.filter((a) => Math.abs(a.confidence - median) > threshold);
}

// packages/council/src/conflict/conflict.ts
var CONFLICT_TYPES = [
  "opposing_conclusion",
  "factual_contradiction",
  "divergent_reasoning"
];
var OPPOSING_CONFIDENCE_THRESHOLD = 0.6;
var FACTUAL_OVERLAP_THRESHOLD = 0.3;
var DIVERGENT_REASONING_MAX_OVERLAP = 0.2;
var DIVERGENT_CONTENT_MIN_OVERLAP = 0.1;
var SEVERITY_HIGH_GAP = 0.5;
var SEVERITY_MEDIUM_GAP = 0.2;
function severityFor2(numAnalyses, confidenceGap) {
  if (numAnalyses >= 3 || confidenceGap >= SEVERITY_HIGH_GAP) return "high";
  if (confidenceGap >= SEVERITY_MEDIUM_GAP) return "medium";
  return "low";
}
var ConflictDetector = class {
  /**
   * Scans `analyses` and returns every detected conflict. Conflicts are
   * pairwise and tagged by `type`. The returned array is sorted by type then
   * by the ids of the analyses involved for deterministic output.
   */
  detect(analyses) {
    if (!Array.isArray(analyses)) {
      throw new ConflictError2("analyses must be an array");
    }
    for (const a of analyses) {
      if (!a || typeof a !== "object") {
        throw new ConflictError2("each analysis must be an object");
      }
      if (typeof a.id !== "string" || a.id.length === 0) {
        throw new ConflictError2("each analysis.id must be a non-empty string");
      }
    }
    const conflicts = [];
    if (analyses.length < 2) return conflicts;
    const byProblem = /* @__PURE__ */ new Map();
    for (const a of analyses) {
      if (!byProblem.has(a.problemId)) byProblem.set(a.problemId, []);
      byProblem.get(a.problemId).push(a);
    }
    for (const [problemId, group] of byProblem) {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const a = group[i];
          const b = group[j];
          const pa = polarity(a.content);
          const pb = polarity(b.content);
          const contentOverlap = jaccard(tokenSet(a.content), tokenSet(b.content));
          const reasoningOverlap = jaccard(tokenSet(a.reasoning), tokenSet(b.reasoning));
          const confidenceGap = Math.abs(a.confidence - b.confidence);
          if (a.confidence > OPPOSING_CONFIDENCE_THRESHOLD && b.confidence > OPPOSING_CONFIDENCE_THRESHOLD && pa !== "neutral" && pb !== "neutral" && pa !== pb) {
            conflicts.push({
              id: `conflict-opposing-${a.id}-${b.id}`,
              problemId,
              analysisIds: [a.id, b.id],
              description: `Analyses ${a.id} and ${b.id} reach opposing conclusions (${pa} vs ${pb}) with high confidence (> ${OPPOSING_CONFIDENCE_THRESHOLD}).`,
              severity: severityFor2(2, confidenceGap),
              type: "opposing_conclusion"
            });
          }
          if (contentOverlap >= FACTUAL_OVERLAP_THRESHOLD && pa !== "neutral" && pb !== "neutral" && pa !== pb) {
            conflicts.push({
              id: `conflict-factual-${a.id}-${b.id}`,
              problemId,
              analysisIds: [a.id, b.id],
              description: `Analyses ${a.id} and ${b.id} make contradictory factual claims about the same subject (content overlap ${contentOverlap.toFixed(2)}).`,
              severity: severityFor2(2, confidenceGap),
              type: "factual_contradiction"
            });
          }
          if (pa !== "neutral" && pa === pb && reasoningOverlap < DIVERGENT_REASONING_MAX_OVERLAP && contentOverlap > DIVERGENT_CONTENT_MIN_OVERLAP) {
            conflicts.push({
              id: `conflict-reasoning-${a.id}-${b.id}`,
              problemId,
              analysisIds: [a.id, b.id],
              description: `Analyses ${a.id} and ${b.id} reach the same conclusion (${pa}) via divergent reasoning (reasoning overlap ${reasoningOverlap.toFixed(2)}).`,
              severity: severityFor2(2, confidenceGap),
              type: "divergent_reasoning"
            });
          }
        }
      }
    }
    conflicts.sort((x, y) => {
      if (x.type !== y.type) return x.type.localeCompare(y.type);
      return x.id.localeCompare(y.id);
    });
    return conflicts;
  }
};

// packages/council/src/debate/debate.ts
var DEFAULT_MAX_DEBATE_ROUNDS = 10;
function validateRound(round) {
  if (!round || typeof round !== "object") {
    throw new DebateError("round must be an object");
  }
  if (typeof round.id !== "string" || round.id.length === 0) {
    throw new DebateError("round.id must be a non-empty string");
  }
  if (typeof round.analystId !== "string" || round.analystId.length === 0) {
    throw new DebateError("round.analystId must be a non-empty string");
  }
  if (typeof round.claim !== "string" || round.claim.length === 0) {
    throw new DebateError("round.claim must be a non-empty string");
  }
  if (typeof round.evidence !== "string" || round.evidence.length === 0) {
    throw new DebateError("round.evidence must be a non-empty string");
  }
  if (round.rebuttalTo !== void 0) {
    if (typeof round.rebuttalTo !== "string" || round.rebuttalTo.length === 0) {
      throw new DebateError("round.rebuttalTo must be a non-empty string when provided");
    }
  }
}
var DebateFacilitator = class {
  debates = /* @__PURE__ */ new Map();
  maxRounds;
  counter = 0;
  /**
   * @param maxRounds Maximum rounds per debate. Defaults to
   * {@link DEFAULT_MAX_DEBATE_ROUNDS}.
   */
  constructor(maxRounds = DEFAULT_MAX_DEBATE_ROUNDS) {
    if (typeof maxRounds !== "number" || !Number.isFinite(maxRounds) || maxRounds < 1) {
      throw new DebateError("maxRounds must be a positive finite number");
    }
    this.maxRounds = Math.floor(maxRounds);
  }
  /**
   * Opens a new debate over `problemId` triggered by the given conflict ids.
   * Returns the newly created (empty, status `'open'`) debate.
   */
  open(problemId, conflictIds = []) {
    if (typeof problemId !== "string" || problemId.length === 0) {
      throw new DebateError("problemId must be a non-empty string");
    }
    if (!Array.isArray(conflictIds)) {
      throw new DebateError("conflictIds must be an array");
    }
    for (const c of conflictIds) {
      if (typeof c !== "string" || c.length === 0) {
        throw new DebateError("each conflictId must be a non-empty string");
      }
    }
    this.counter += 1;
    const id = `debate-${this.counter}`;
    const debate = {
      id,
      problemId,
      conflictIds: [...conflictIds],
      rounds: [],
      status: "open",
      openedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.debates.set(id, debate);
    return debate;
  }
  /**
   * Appends `round` to the debate with id `debateId`. Throws `DebateError`
   * when:
   *   - the debate does not exist,
   *   - the debate is already concluded,
   *   - the round is malformed,
   *   - the round's `rebuttalTo` does not reference an existing round,
   *   - a round with the same id already exists in the debate,
   *   - the maximum number of rounds has been reached.
   *
   * Returns the (mutated) debate.
   */
  submitRound(debateId, round) {
    const debate = this.debates.get(debateId);
    if (!debate) {
      throw new DebateError(`debate not found: ${debateId}`);
    }
    if (debate.status === "concluded") {
      throw new DebateError(`debate ${debateId} is already concluded`);
    }
    validateRound(round);
    if (debate.rounds.some((r) => r.id === round.id)) {
      throw new DebateError(`round already exists in debate ${debateId}: ${round.id}`);
    }
    if (round.rebuttalTo !== void 0) {
      const exists = debate.rounds.some((r) => r.id === round.rebuttalTo);
      if (!exists) {
        throw new DebateError(
          `round.rebuttalTo does not reference an existing round: ${round.rebuttalTo}`
        );
      }
    }
    if (debate.rounds.length >= this.maxRounds) {
      throw new DebateError(
        `max rounds (${this.maxRounds}) reached for debate ${debateId}`
      );
    }
    debate.rounds.push(round);
    return debate;
  }
  /**
   * Concludes the debate with id `debateId`. Sets `status` to `'concluded'`
   * and stamps `concludedAt`. Throws `DebateError` if the debate does not
   * exist or is already concluded. Returns the (mutated) debate.
   */
  conclude(debateId) {
    const debate = this.debates.get(debateId);
    if (!debate) {
      throw new DebateError(`debate not found: ${debateId}`);
    }
    if (debate.status === "concluded") {
      throw new DebateError(`debate ${debateId} is already concluded`);
    }
    debate.status = "concluded";
    debate.concludedAt = (/* @__PURE__ */ new Date()).toISOString();
    return debate;
  }
  /** Returns the debate with the given id, or `undefined`. */
  get(debateId) {
    return this.debates.get(debateId);
  }
  /** Returns all debates, in opening order. */
  list() {
    return Array.from(this.debates.values());
  }
  /** Returns the configured maximum number of rounds per debate. */
  getMaxRounds() {
    return this.maxRounds;
  }
};

// packages/council/src/minority/minority.ts
function validateMinorityOpinion(opinion) {
  if (!opinion || typeof opinion !== "object") {
    throw new CouncilError("minority opinion must be an object");
  }
  if (typeof opinion.id !== "string" || opinion.id.length === 0) {
    throw new CouncilError("minority opinion.id must be a non-empty string");
  }
  if (typeof opinion.problemId !== "string" || opinion.problemId.length === 0) {
    throw new CouncilError("minority opinion.problemId must be a non-empty string");
  }
  if (typeof opinion.analystId !== "string" || opinion.analystId.length === 0) {
    throw new CouncilError("minority opinion.analystId must be a non-empty string");
  }
  if (typeof opinion.position !== "string" || opinion.position.length === 0) {
    throw new CouncilError("minority opinion.position must be a non-empty string");
  }
  if (typeof opinion.reasoning !== "string" || opinion.reasoning.length === 0) {
    throw new CouncilError("minority opinion.reasoning must be a non-empty string");
  }
  if (typeof opinion.dissentReason !== "string" || opinion.dissentReason.length === 0) {
    throw new CouncilError("minority opinion.dissentReason must be a non-empty string");
  }
}
var MinorityOpinionTracker = class {
  opinions = /* @__PURE__ */ new Map();
  order = [];
  byProblem = /* @__PURE__ */ new Map();
  byAnalyst = /* @__PURE__ */ new Map();
  /**
   * Validates and stores `opinion`. Throws `CouncilError` when the opinion is
   * malformed or an opinion with the same id has already been recorded.
   */
  record(opinion) {
    validateMinorityOpinion(opinion);
    if (this.opinions.has(opinion.id)) {
      throw new CouncilError(`minority opinion already recorded: ${opinion.id}`);
    }
    this.opinions.set(opinion.id, opinion);
    this.order.push(opinion.id);
    if (!this.byProblem.has(opinion.problemId)) this.byProblem.set(opinion.problemId, []);
    this.byProblem.get(opinion.problemId).push(opinion.id);
    if (!this.byAnalyst.has(opinion.analystId)) this.byAnalyst.set(opinion.analystId, []);
    this.byAnalyst.get(opinion.analystId).push(opinion.id);
    return this;
  }
  /** Returns the opinion with the given id, or `undefined`. */
  get(id) {
    return this.opinions.get(id);
  }
  /** Returns all minority opinions for the given problem, in record order. */
  getForProblem(problemId) {
    const ids = this.byProblem.get(problemId) ?? [];
    return ids.map((id) => this.opinions.get(id));
  }
  /** Returns all minority opinions by the given analyst, in record order. */
  getByAnalyst(analystId) {
    const ids = this.byAnalyst.get(analystId) ?? [];
    return ids.map((id) => this.opinions.get(id));
  }
  /** Returns all minority opinions in record order. */
  list() {
    return this.order.map((id) => this.opinions.get(id));
  }
  /** Returns the number of opinions stored. */
  size() {
    return this.order.length;
  }
};

// packages/council/src/consensus/consensus.ts
var DEFAULT_CONSENSUS_THRESHOLD = 0.6;
var ConsensusBuilder = class {
  threshold;
  /**
   * @param threshold Weighted support ratio in `[0, 1]` required to reach
   * consensus. Defaults to {@link DEFAULT_CONSENSUS_THRESHOLD}.
   */
  constructor(threshold = DEFAULT_CONSENSUS_THRESHOLD) {
    if (typeof threshold !== "number" || !Number.isFinite(threshold) || threshold < 0 || threshold > 1) {
      throw new ConsensusError("threshold must be a finite number in [0, 1]");
    }
    this.threshold = threshold;
  }
  /** Returns the configured threshold. */
  getThreshold() {
    return this.threshold;
  }
  /**
   * Builds a {@link Consensus} for `problemId` from `analyses` and any
   * detected `conflicts`. Returns `null` when:
   *   - there are no analyses,
   *   - no analysis has a non-`neutral` polarity,
   *   - the weighted support ratio of the winning polarity is below the
   *     configured threshold.
   */
  build(problemId, analyses, conflicts = [], options = {}) {
    if (typeof problemId !== "string" || problemId.length === 0) {
      throw new ConsensusError("problemId must be a non-empty string");
    }
    if (!Array.isArray(analyses)) {
      throw new ConsensusError("analyses must be an array");
    }
    if (!Array.isArray(conflicts)) {
      throw new ConsensusError("conflicts must be an array");
    }
    if (options && typeof options !== "object") {
      throw new ConsensusError("options must be an object when provided");
    }
    if (analyses.length === 0) return null;
    const weights = options.weights ?? {};
    if (!weights || typeof weights !== "object") {
      throw new ConsensusError("options.weights must be an object when provided");
    }
    const withPolarity = analyses.map((a) => ({ analysis: a, polarity: polarity(a.content) })).filter((x) => x.polarity !== "neutral");
    if (withPolarity.length === 0) return null;
    const tally = {};
    let totalWeight = 0;
    for (const { analysis, polarity: pol } of withPolarity) {
      const w = weights[analysis.specialistId];
      if (w !== void 0 && (typeof w !== "number" || !Number.isFinite(w) || w < 0)) {
        throw new ConsensusError(
          `invalid weight for specialist ${analysis.specialistId}`
        );
      }
      const weight = w ?? 1;
      const contribution = weight * analysis.confidence;
      if (!tally[pol]) tally[pol] = { weight: 0, analysts: [] };
      tally[pol].weight += contribution;
      tally[pol].analysts.push(analysis.specialistId);
      totalWeight += contribution;
    }
    if (totalWeight === 0) return null;
    let winner = null;
    let winnerWeight = 0;
    for (const pol of Object.keys(tally)) {
      if (tally[pol].weight > winnerWeight) {
        winnerWeight = tally[pol].weight;
        winner = pol;
      }
    }
    if (!winner) return null;
    const supportRatio = winnerWeight / totalWeight;
    if (supportRatio < this.threshold) return null;
    const supportingAnalystIds = Array.from(new Set(tally[winner].analysts));
    const dissentingAnalystIds = Array.from(new Set(
      withPolarity.filter((x) => x.polarity !== winner).map((x) => x.analysis.specialistId).concat(options.minorityAnalystIds ?? [])
    ));
    const problemConflicts = conflicts.filter((c) => c.problemId === problemId);
    const conflictsResolved = problemConflicts.map((c) => c.id);
    const openIssues = problemConflicts.filter((c) => c.severity === "high").map((c) => `High-severity conflict ${c.id} remains unresolved: ${c.description}`);
    return {
      problemId,
      decision: winner === "positive" ? `Adopt the proposed action for problem ${problemId}.` : `Reject the proposed action for problem ${problemId}.`,
      confidence: supportRatio,
      supportingAnalystIds,
      dissentingAnalystIds,
      conflictsResolved,
      openIssues
    };
  }
};

// packages/council/src/synthesizer/synthesizer.ts
var DEFAULT_SYNTHESIS_THRESHOLD = 0.6;
var STRONG_CONSENSUS_RATIO = 0.8;
function classifyConsensus(consensus, threshold = DEFAULT_SYNTHESIS_THRESHOLD) {
  if (!consensus) return "none";
  if (consensus.dissentingAnalystIds.length === 0) return "unanimous";
  if (consensus.confidence >= STRONG_CONSENSUS_RATIO) return "strong";
  if (consensus.confidence >= threshold) return "majority";
  return "split";
}
function synthesize(problemId, consensus, analyses, conflicts = [], options = {}) {
  if (typeof problemId !== "string" || problemId.length === 0) {
    throw new SynthesisError("problemId must be a non-empty string");
  }
  if (!Array.isArray(analyses)) {
    throw new SynthesisError("analyses must be an array");
  }
  if (!Array.isArray(conflicts)) {
    throw new SynthesisError("conflicts must be an array");
  }
  if (consensus !== null && (!consensus || typeof consensus !== "object")) {
    throw new SynthesisError("consensus must be an object or null");
  }
  const threshold = options.threshold ?? DEFAULT_SYNTHESIS_THRESHOLD;
  if (typeof threshold !== "number" || !Number.isFinite(threshold) || threshold < 0 || threshold > 1) {
    throw new SynthesisError("threshold must be a finite number in [0, 1]");
  }
  const minorityOpinions = Array.isArray(options.minorityOpinions) ? options.minorityOpinions : [];
  const level = classifyConsensus(consensus, threshold);
  const participants = Array.from(new Set(analyses.map((a) => a.specialistId)));
  const decisionText = options.decision ?? consensus?.decision ?? `No actionable decision for problem ${problemId}; insufficient consensus.`;
  const confidence = consensus?.confidence ?? 0;
  const rationaleParts = [];
  if (consensus) {
    rationaleParts.push(
      `Consensus reached with ${consensus.supportingAnalystIds.length} supporting and ${consensus.dissentingAnalystIds.length} dissenting (weighted support ${(consensus.confidence * 100).toFixed(1)}%, level: ${level}).`
    );
    if (consensus.conflictsResolved.length > 0) {
      rationaleParts.push(
        `${consensus.conflictsResolved.length} conflict${consensus.conflictsResolved.length === 1 ? "" : "s"} considered.`
      );
    }
    if (consensus.openIssues.length > 0) {
      rationaleParts.push(
        `Open issues: ${consensus.openIssues.join("; ")}`
      );
    }
  } else {
    rationaleParts.push(
      `No consensus was reached across ${analyses.length} analysis${analyses.length === 1 ? "" : "ies"}.`
    );
  }
  if (conflicts.length > 0) {
    rationaleParts.push(
      `${conflicts.length} conflict${conflicts.length === 1 ? "" : "s"} taken into account.`
    );
  }
  if (minorityOpinions.length > 0) {
    rationaleParts.push(
      `${minorityOpinions.length} minority opinion${minorityOpinions.length === 1 ? "" : "s"} preserved on record.`
    );
  }
  const generatedAt = options.generatedAt ?? (/* @__PURE__ */ new Date()).toISOString();
  const id = options.decisionId ?? `decision-${problemId}-${generatedAt}`;
  return {
    id,
    problemId,
    decision: decisionText,
    rationale: rationaleParts.join(" "),
    confidence,
    consensusLevel: level,
    participants,
    generatedAt
  };
}

// packages/nervous-system/src/errors.ts
var NervousSystemError = class extends Error {
  code;
  cause;
  constructor(message, code, cause) {
    super(message);
    this.name = new.target.name;
    this.code = code ?? "NERVOUS_SYSTEM_ERROR";
    if (cause !== void 0) this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var FabricError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "FABRIC_ERROR", cause);
  }
};
var FilterError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "FILTER_ERROR", cause);
  }
};
var RouterError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "ROUTER_ERROR", cause);
  }
};
var RecorderError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "RECORDER_ERROR", cause);
  }
};
var SourceError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "SOURCE_ERROR", cause);
  }
};
var QueueError = class extends NervousSystemError {
  constructor(message, cause) {
    super(message, "QUEUE_ERROR", cause);
  }
};

// packages/nervous-system/src/logging.ts
var LEVEL_RANK5 = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100
};
var SCRUBBED_FIELD_NAMES7 = ["secret", "token", "apiKey", "password", "privateKey"];
function shouldScrubField5(name) {
  const lower = name.toLowerCase();
  for (const needle of SCRUBBED_FIELD_NAMES7) {
    const nl = needle.toLowerCase();
    if (lower === nl) return true;
    if (lower.endsWith("_" + nl)) return true;
  }
  return false;
}
function scrubMetadata6(meta) {
  if (meta === null || meta === void 0) return meta;
  if (typeof meta !== "object") return meta;
  if (Buffer.isBuffer(meta)) return `[buffer:${meta.length}]`;
  if (meta instanceof Date) return meta.toISOString();
  if (Array.isArray(meta)) return meta.map(scrubMetadata6);
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    out[k] = shouldScrubField5(k) ? "[redacted]" : scrubMetadata6(v);
  }
  return out;
}
var ConsoleLogger5 = class {
  constructor(level = "info") {
    this.level = level;
    this.levelRank = LEVEL_RANK5[level] ?? LEVEL_RANK5.info;
  }
  level;
  levelRank;
  debug(msg, meta) {
    this.emit("debug", msg, meta);
  }
  info(msg, meta) {
    this.emit("info", msg, meta);
  }
  warn(msg, meta) {
    this.emit("warn", msg, meta);
  }
  error(msg, meta) {
    this.emit("error", msg, meta);
  }
  emit(level, msg, meta) {
    try {
      if (LEVEL_RANK5[level] < this.levelRank) return;
      const entry = { level, msg, ts: (/* @__PURE__ */ new Date()).toISOString(), ...meta ? { meta: scrubMetadata6(meta) } : {} };
      const line = JSON.stringify(entry);
      if (level === "error" || level === "warn") process.stderr.write(line + "\n");
      else process.stdout.write(line + "\n");
    } catch {
    }
  }
};
var SilentLogger7 = class {
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// packages/nervous-system/src/event/event.ts
var import_node_crypto = require("node:crypto");
var KNOWN_SEVERITIES = /* @__PURE__ */ new Set(["debug", "info", "warn", "error"]);
function generateEventId() {
  try {
    if (typeof import_node_crypto.randomUUID === "function") return (0, import_node_crypto.randomUUID)();
  } catch {
  }
  return `evt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}
function isSeverity(s) {
  return typeof s === "string" && KNOWN_SEVERITIES.has(s);
}
function createEvent2(topic, source, payload, opts) {
  if (!topic || typeof topic !== "string") throw new NervousSystemError("Event topic is required");
  if (!source || typeof source !== "string") throw new NervousSystemError("Event source is required");
  const severity = opts?.severity ?? "info";
  if (!isSeverity(severity)) throw new NervousSystemError(`Invalid severity: ${String(severity)}`);
  const event = {
    id: opts?.id ?? generateEventId(),
    topic,
    source,
    payload,
    timestamp: opts?.timestamp ?? Date.now(),
    severity
  };
  if (opts?.tags) event.tags = [...opts.tags];
  if (opts?.metadata) event.metadata = { ...opts.metadata };
  return event;
}
function serialize2(event, pretty) {
  try {
    return JSON.stringify(event, null, pretty ? 2 : 0);
  } catch (e) {
    throw new NervousSystemError("Failed to serialize event", void 0, e);
  }
}
function deserialize(json) {
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    throw new NervousSystemError("Failed to parse event JSON", void 0, e);
  }
  if (!parsed || typeof parsed !== "object") {
    throw new NervousSystemError("Event JSON must be an object");
  }
  const obj = parsed;
  if (typeof obj.id !== "string") throw new NervousSystemError("Event missing string field: id");
  if (typeof obj.topic !== "string") throw new NervousSystemError("Event missing string field: topic");
  if (typeof obj.source !== "string") throw new NervousSystemError("Event missing string field: source");
  if (typeof obj.timestamp !== "number") throw new NervousSystemError("Event missing number field: timestamp");
  if (!isSeverity(obj.severity)) throw new NervousSystemError(`Event has invalid severity: ${String(obj.severity)}`);
  if (obj.tags !== void 0 && !Array.isArray(obj.tags)) throw new NervousSystemError("Event tags must be array if present");
  if (obj.metadata !== void 0 && (typeof obj.metadata !== "object" || obj.metadata === null || Array.isArray(obj.metadata))) {
    throw new NervousSystemError("Event metadata must be object if present");
  }
  const out = {
    id: obj.id,
    topic: obj.topic,
    source: obj.source,
    payload: obj.payload,
    timestamp: obj.timestamp,
    severity: obj.severity
  };
  if (obj.tags !== void 0) out.tags = obj.tags;
  if (obj.metadata !== void 0) out.metadata = obj.metadata;
  return out;
}
function eventsEqual(a, b) {
  return serialize2(a) === serialize2(b);
}

// packages/nervous-system/src/filter/filter.ts
function compileFilter(filter) {
  if (!filter || typeof filter !== "object") {
    throw new FilterError("Filter must be an object");
  }
  const cf = filter;
  if (cf.__combinatorKind === "and") {
    const children2 = cf.__combinatorChildren ?? [];
    if (children2.length === 0) return () => true;
    return (e) => {
      for (const f of children2) {
        if (!f(e)) return false;
      }
      return true;
    };
  }
  if (cf.__combinatorKind === "or") {
    const children2 = cf.__combinatorChildren ?? [];
    if (children2.length === 0) return () => false;
    return (e) => {
      for (const f of children2) {
        if (f(e)) return true;
      }
      return false;
    };
  }
  if (cf.__combinatorKind === "not") {
    const child = cf.__combinatorChild;
    return (e) => !child(e);
  }
  let topicCheck;
  if (filter.topic === void 0) {
    topicCheck = () => true;
  } else if (filter.topic === "*") {
    topicCheck = () => true;
  } else if (filter.topic instanceof RegExp) {
    const rx = filter.topic;
    topicCheck = (e) => rx.test(e.topic);
  } else if (typeof filter.topic === "string") {
    const t = filter.topic;
    topicCheck = (e) => e.topic === t;
  } else {
    throw new FilterError("Filter topic must be string or RegExp");
  }
  let sourceCheck;
  if (filter.source === void 0) {
    sourceCheck = () => true;
  } else if (typeof filter.source === "string") {
    const s = filter.source;
    sourceCheck = (e) => e.source === s;
  } else {
    throw new FilterError("Filter source must be string");
  }
  let severityCheck;
  if (filter.severity === void 0) {
    severityCheck = () => true;
  } else if (Array.isArray(filter.severity)) {
    if (filter.severity.length === 0) {
      severityCheck = () => true;
    } else {
      const set = new Set(filter.severity);
      severityCheck = (e) => set.has(e.severity);
    }
  } else if (typeof filter.severity === "string") {
    const sev = filter.severity;
    severityCheck = (e) => e.severity === sev;
  } else {
    throw new FilterError("Filter severity must be string or array of strings");
  }
  let tagsCheck;
  if (filter.tags === void 0 || filter.tags.length === 0) {
    tagsCheck = () => true;
  } else {
    const required = filter.tags.slice();
    tagsCheck = (e) => {
      const ev = e.tags;
      if (!ev || ev.length === 0) return false;
      for (const t of required) {
        if (!ev.includes(t)) return false;
      }
      return true;
    };
  }
  let payloadCheck = null;
  if (typeof filter.payloadPredicate === "function") {
    const fn = filter.payloadPredicate;
    payloadCheck = (e) => {
      try {
        return !!fn(e.payload);
      } catch (err) {
        throw new FilterError("payloadPredicate threw", err);
      }
    };
  }
  return (event) => {
    if (!event) return false;
    if (!topicCheck(event)) return false;
    if (!sourceCheck(event)) return false;
    if (!severityCheck(event)) return false;
    if (!tagsCheck(event)) return false;
    if (payloadCheck && !payloadCheck(event)) return false;
    return true;
  };
}
function matchEvent(filter, event) {
  return compileFilter(filter)(event);
}
function and(...filters) {
  const children2 = filters.map((f) => {
    try {
      return compileFilter(f);
    } catch (e) {
      throw new FilterError("and(): invalid filter", e);
    }
  });
  return {
    __combinatorKind: "and",
    __combinatorChildren: children2
  };
}
function or(...filters) {
  const children2 = filters.map((f) => {
    try {
      return compileFilter(f);
    } catch (e) {
      throw new FilterError("or(): invalid filter", e);
    }
  });
  return {
    __combinatorKind: "or",
    __combinatorChildren: children2
  };
}
function not(filter) {
  let child;
  try {
    child = compileFilter(filter);
  } catch (e) {
    throw new FilterError("not(): invalid filter", e);
  }
  return {
    __combinatorKind: "not",
    __combinatorChild: child
  };
}

// packages/nervous-system/src/fabric/fabric.ts
var import_node_events = require("node:events");
var import_node_crypto2 = require("node:crypto");

// packages/nervous-system/src/recorder/recorder.ts
var DEFAULT_RECORDER_MAX_SIZE = 1e4;
var EventRecorder = class {
  buffer;
  capacity;
  head = 0;
  filled = 0;
  recording = false;
  constructor(maxSize = DEFAULT_RECORDER_MAX_SIZE) {
    if (!Number.isInteger(maxSize) || maxSize <= 0) {
      throw new RecorderError("maxSize must be a positive integer");
    }
    this.capacity = maxSize;
    this.buffer = new Array(maxSize);
  }
  /** Begin recording. Idempotent. */
  start(maxSize) {
    if (maxSize !== void 0) {
      if (maxSize !== this.capacity) {
        throw new RecorderError(`start(maxSize=${maxSize}) does not match constructor capacity ${this.capacity}; construct a new recorder instead`);
      }
    }
    this.recording = true;
  }
  /** Stop recording. Idempotent. Buffer contents are preserved. */
  stop() {
    this.recording = false;
  }
  /** Whether the recorder is currently recording. */
  isRecording() {
    return this.recording;
  }
  /** Maximum capacity of the buffer. */
  getCapacity() {
    return this.capacity;
  }
  /** Number of events currently stored. */
  size() {
    return this.filled;
  }
  /** Record an event. Returns true if recorded, false if not recording. */
  record(event) {
    if (!this.recording) return false;
    if (!event || typeof event !== "object") throw new RecorderError("record(): event must be an object");
    this.buffer[this.head] = event;
    this.head = (this.head + 1) % this.capacity;
    if (this.filled < this.capacity) this.filled++;
    return true;
  }
  /**
   * Return all stored events (optionally filtered) in chronological order.
   * Returns a fresh array; mutating it does not affect the recorder.
   */
  getEvents(filter) {
    const compiled = filter ? compileFilter(filter) : null;
    const out = [];
    if (this.filled === 0) return out;
    if (this.filled < this.capacity) {
      for (let i = 0; i < this.filled; i++) {
        const e = this.buffer[i];
        if (!compiled || compiled(e)) out.push(e);
      }
    } else {
      for (let i = 0; i < this.capacity; i++) {
        const idx = (this.head + i) % this.capacity;
        const e = this.buffer[idx];
        if (!compiled || compiled(e)) out.push(e);
      }
    }
    return out;
  }
  /** Clear all stored events. Recording state is unaffected. */
  clear() {
    this.head = 0;
    this.filled = 0;
    this.buffer.fill(void 0);
  }
  /** Export events as an array (alias of {@link getEvents}). */
  export(filter) {
    return this.getEvents(filter);
  }
  /** Export events as a JSON string. */
  exportJSON(filter, pretty) {
    try {
      return JSON.stringify(this.getEvents(filter), null, pretty ? 2 : 0);
    } catch (e) {
      throw new RecorderError("exportJSON(): serialization failed", e);
    }
  }
};

// packages/nervous-system/src/metrics/metrics.ts
var DEFAULT_LATENCY_BUFFER = 1024;
var DEFAULT_LATENCY_SAMPLE_EVERY = 1;
var MetricsCollector = class {
  buffer;
  capacity;
  sampleEvery;
  head = 0;
  filled = 0;
  published = 0;
  delivered = 0;
  dropped = 0;
  activeSubscriptions = 0;
  activeSources = 0;
  sampledCount = 0;
  sampleCounter = 0;
  constructor(capacity = DEFAULT_LATENCY_BUFFER, sampleEvery = DEFAULT_LATENCY_SAMPLE_EVERY) {
    if (!Number.isInteger(capacity) || capacity <= 0) throw new RangeError("capacity must be positive integer");
    if (!Number.isInteger(sampleEvery) || sampleEvery <= 0) throw new RangeError("sampleEvery must be positive integer");
    this.capacity = capacity;
    this.buffer = new Float64Array(capacity);
    this.sampleEvery = sampleEvery;
  }
  /** Increment the published-events counter. */
  recordPublish() {
    this.published++;
  }
  /** Increment the delivered-events counter (one per successful subscriber delivery). */
  recordDeliver() {
    this.delivered++;
  }
  /** Increment the dropped-events counter (e.g. due to handler throw or backpressure). */
  recordDrop() {
    this.dropped++;
  }
  /** Set the current active-subscription gauge. */
  setActiveSubscriptions(n) {
    if (!Number.isInteger(n) || n < 0) throw new RangeError("activeSubscriptions must be >= 0 integer");
    this.activeSubscriptions = n;
  }
  /** Increment the active-subscriptions gauge by 1. */
  incSubscription() {
    this.activeSubscriptions++;
  }
  /** Decrement the active-subscriptions gauge by 1 (floor at 0). */
  decSubscription() {
    if (this.activeSubscriptions > 0) this.activeSubscriptions--;
  }
  /** Set the current active-sources gauge. */
  setActiveSources(n) {
    if (!Number.isInteger(n) || n < 0) throw new RangeError("activeSources must be >= 0 integer");
    this.activeSources = n;
  }
  /** Increment active sources. */
  incSource() {
    this.activeSources++;
  }
  /** Decrement active sources (floor at 0). */
  decSource() {
    if (this.activeSources > 0) this.activeSources--;
  }
  /**
   * Record a latency sample (ms). Sampling may be applied per the configured
   * `sampleEvery` to amortize overhead in high-throughput workloads.
   */
  recordLatency(ms) {
    if (typeof ms !== "number" || !Number.isFinite(ms) || ms < 0) return;
    this.sampleCounter++;
    if (this.sampleCounter % this.sampleEvery !== 0) return;
    this.buffer[this.head] = ms;
    this.head = (this.head + 1) % this.capacity;
    if (this.filled < this.capacity) this.filled++;
    this.sampledCount++;
  }
  /** Returns the number of latency samples currently stored. */
  sampleCount() {
    return this.filled;
  }
  /** Returns the total number of latency samples ever observed (including unsampled). */
  totalSamplesObserved() {
    return this.sampledCount;
  }
  /** Compute the average latency across stored samples. */
  avgLatency() {
    if (this.filled === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.filled; i++) sum += this.buffer[i];
    return sum / this.filled;
  }
  /** Compute the p-th percentile latency (0 ≤ p ≤ 100) across stored samples. */
  percentile(p) {
    if (p < 0 || p > 100) throw new RangeError("percentile must be in [0,100]");
    if (this.filled === 0) return 0;
    const copy = Array.prototype.slice.call(this.buffer.subarray(0, this.filled));
    copy.sort((a, b) => a - b);
    if (p === 0) return copy[0];
    if (p === 100) return copy[copy.length - 1];
    const rank = Math.ceil(p / 100 * copy.length);
    const idx = Math.max(0, Math.min(copy.length - 1, rank - 1));
    return copy[idx];
  }
  /** Snapshot the current metrics. */
  snapshot() {
    return {
      eventsPublished: this.published,
      eventsDelivered: this.delivered,
      eventsDropped: this.dropped,
      activeSubscriptions: this.activeSubscriptions,
      activeSources: this.activeSources,
      avgLatencyMs: round3(this.avgLatency()),
      p50LatencyMs: round3(this.percentile(50)),
      p99LatencyMs: round3(this.percentile(99))
    };
  }
  /** Reset every counter and clear the latency buffer. */
  reset() {
    this.head = 0;
    this.filled = 0;
    this.published = 0;
    this.delivered = 0;
    this.dropped = 0;
    this.activeSubscriptions = 0;
    this.activeSources = 0;
    this.sampledCount = 0;
    this.sampleCounter = 0;
    this.buffer.fill(0);
  }
};
function round3(n) {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n * 1e3) / 1e3;
}

// packages/nervous-system/src/fabric/fabric.ts
var DEFAULT_NERVOUS_CONFIG = {
  defaultMaxSize: DEFAULT_RECORDER_MAX_SIZE,
  recordByDefault: false,
  logLevel: "info"
};
var subscriptionCounter = 0;
function newSubscriptionId() {
  subscriptionCounter++;
  try {
    if (typeof import_node_crypto2.randomUUID === "function") return `sub-${(0, import_node_crypto2.randomUUID)()}`;
  } catch {
  }
  return `sub-${Date.now().toString(36)}-${subscriptionCounter.toString(36)}`;
}
var EventFabric = class {
  ee = new import_node_events.EventEmitter();
  subscribers = /* @__PURE__ */ new Map();
  /** Index from topic-key → subscription ids registered under that key. */
  topicIndex = /* @__PURE__ */ new Map();
  sources = /* @__PURE__ */ new Map();
  logger;
  config;
  recorder;
  metrics;
  recordByDefault;
  constructor(config) {
    const merged = { ...DEFAULT_NERVOUS_CONFIG, ...config ?? {} };
    this.config = merged;
    this.logger = config?.logger ?? (merged.logLevel === "silent" ? new SilentLogger7() : new ConsoleLogger5(merged.logLevel));
    this.recorder = new EventRecorder(merged.defaultMaxSize);
    this.metrics = new MetricsCollector();
    this.recordByDefault = !!merged.recordByDefault;
    if (this.recordByDefault) this.recorder.start();
    this.ee.setMaxListeners(0);
  }
  /** The configured logger. */
  getLogger() {
    return this.logger;
  }
  /** Whether the fabric is currently auto-recording published events. */
  isRecording() {
    return this.recorder.isRecording();
  }
  /** Start auto-recording published events. */
  startRecording() {
    this.recorder.start();
  }
  /** Stop auto-recording. Recorded events are preserved. */
  stopRecording() {
    this.recorder.stop();
  }
  subscribe(filter, idOrHandler, maybeHandler) {
    if (!filter || typeof filter !== "object") throw new FabricError("subscribe(): filter must be an object");
    let id;
    let handler;
    if (typeof idOrHandler === "function") {
      id = newSubscriptionId();
      handler = idOrHandler;
    } else if (typeof idOrHandler === "string" && typeof maybeHandler === "function") {
      id = idOrHandler;
      handler = maybeHandler;
      if (this.subscribers.has(id)) {
        throw new FabricError(`subscribe(): subscription id '${id}' already exists`);
      }
    } else {
      throw new FabricError("subscribe(): invalid arguments");
    }
    if (typeof handler !== "function") throw new FabricError("subscribe(): handler must be a function");
    const compiled = compileFilter(filter);
    const topicKey = indexKeyForFilter(filter);
    const sub = { id, filter, compiled, handler, topicKey };
    this.subscribers.set(id, sub);
    let bucket = this.topicIndex.get(topicKey);
    if (!bucket) {
      bucket = /* @__PURE__ */ new Set();
      this.topicIndex.set(topicKey, bucket);
    }
    bucket.add(id);
    this.metrics.setActiveSubscriptions(this.subscribers.size);
    this.logger.debug("subscribe", { id, topicKey });
    return id;
  }
  /** Unsubscribe by id. Returns true if removed, false if not present. */
  unsubscribe(id) {
    const sub = this.subscribers.get(id);
    if (!sub) return false;
    this.subscribers.delete(id);
    const bucket = this.topicIndex.get(sub.topicKey);
    if (bucket) {
      bucket.delete(id);
      if (bucket.size === 0) this.topicIndex.delete(sub.topicKey);
    }
    this.metrics.setActiveSubscriptions(this.subscribers.size);
    this.logger.debug("unsubscribe", { id });
    return true;
  }
  /** Number of active subscriptions. */
  subscriptionCount() {
    return this.subscribers.size;
  }
  /** Number of distinct topic keys currently indexed. */
  topicCount() {
    return this.topicIndex.size;
  }
  /**
   * Publish an event. The event is delivered to every matching subscriber
   * synchronously, in subscription-insertion order within each topic bucket.
   *
   * Performance: O(1) topic lookup, O(k) filter evaluation where k is the
   * number of subscribers indexed under the event's topic plus the wildcard
   * bucket.
   *
   * @returns the number of subscribers the event was delivered to.
   */
  publish(event) {
    if (!event || typeof event !== "object") throw new FabricError("publish(): event must be an object");
    if (typeof event.topic !== "string" || !event.topic) throw new FabricError("publish(): event.topic must be a non-empty string");
    const start = process.hrtime.bigint();
    this.metrics.recordPublish();
    if (this.recorder.isRecording()) this.recorder.record(event);
    let delivered = 0;
    let errored = 0;
    const exactBucket = this.topicIndex.get(event.topic);
    const wildcardBucket = this.topicIndex.get("*");
    const seen = /* @__PURE__ */ new Set();
    const runBucket = (bucket) => {
      if (!bucket || bucket.size === 0) return;
      const ids = Array.from(bucket);
      for (const id of ids) {
        if (seen.has(id)) continue;
        seen.add(id);
        const sub = this.subscribers.get(id);
        if (!sub) continue;
        let matched = false;
        try {
          matched = sub.compiled(event);
        } catch (e) {
          errored++;
          const err = e instanceof Error ? e : new FabricError("filter threw", e);
          this.logger.warn("publish: filter threw", { id, error: err.message });
          try {
            this.ee.emit("error", err, event);
          } catch {
          }
          this.metrics.recordDrop();
          continue;
        }
        if (!matched) continue;
        try {
          sub.handler(event);
          delivered++;
          this.metrics.recordDeliver();
        } catch (e) {
          errored++;
          const err = e instanceof Error ? e : new FabricError("handler threw", e);
          this.logger.warn("publish: handler threw", { id, error: err.message });
          try {
            this.ee.emit("error", err, event);
          } catch {
          }
          this.metrics.recordDrop();
        }
      }
    };
    runBucket(exactBucket);
    runBucket(wildcardBucket);
    const elapsedNs = Number(process.hrtime.bigint() - start);
    this.metrics.recordLatency(elapsedNs / 1e6);
    if (delivered === 0 && errored === 0) {
      try {
        this.ee.emit("dropped", event);
      } catch {
      }
    }
    try {
      this.ee.emit("published", event);
    } catch {
    }
    return delivered;
  }
  /** Attach an event source. The source's `start()` is called with a sink
   * that funnels events into this fabric via `publish`. */
  attach(source) {
    if (!source || typeof source !== "object") throw new FabricError("attach(): source must be an object");
    if (typeof source.id !== "string" || !source.id) throw new FabricError("attach(): source.id must be non-empty string");
    if (this.sources.has(source.id)) {
      throw new FabricError(`attach(): source '${source.id}' already attached`);
    }
    if (typeof source.start !== "function" || typeof source.stop !== "function") {
      throw new FabricError("attach(): source must implement start() and stop()");
    }
    this.sources.set(source.id, source);
    this.metrics.setActiveSources(this.sources.size);
    const sink = (event) => {
      try {
        this.publish(event);
      } catch (e) {
        const err = e instanceof Error ? e : new FabricError("source sink publish failed", e);
        this.logger.warn("source sink error", { sourceId: source.id, error: err.message });
      }
    };
    try {
      source.start(sink);
      this.logger.debug("attached source", { id: source.id });
    } catch (e) {
      this.sources.delete(source.id);
      this.metrics.setActiveSources(this.sources.size);
      throw new FabricError(`attach(): source '${source.id}' start() threw`, e);
    }
  }
  /** Detach a source by id. Calls `stop()` on the source. */
  detach(sourceId) {
    const source = this.sources.get(sourceId);
    if (!source) return false;
    try {
      source.stop();
    } catch (e) {
      this.logger.warn("source stop threw", { sourceId, error: e.message });
    }
    this.sources.delete(sourceId);
    this.metrics.setActiveSources(this.sources.size);
    this.logger.debug("detached source", { id: sourceId });
    return true;
  }
  /** Detach all attached sources. */
  detachAll() {
    for (const id of Array.from(this.sources.keys())) this.detach(id);
  }
  /** Returns the ids of all attached sources. */
  listSources() {
    return Array.from(this.sources.keys());
  }
  /** Number of attached sources. */
  sourceCount() {
    return this.sources.size;
  }
  on(event, handler) {
    this.ee.on(event, handler);
    return this;
  }
  /** Remove a fabric-level event listener. */
  off(event, handler) {
    this.ee.off(event, handler);
    return this;
  }
  /** Detach all sources, stop recording, and remove all subscribers. */
  shutdown() {
    this.detachAll();
    this.recorder.stop();
    this.subscribers.clear();
    this.topicIndex.clear();
    this.metrics.setActiveSubscriptions(0);
    this.metrics.setActiveSources(0);
    this.ee.removeAllListeners();
  }
};
function indexKeyForFilter(filter) {
  if (filter.topic === void 0) return "*";
  if (typeof filter.topic === "string") {
    if (filter.topic === "*") return "*";
    return filter.topic;
  }
  if (filter.topic instanceof RegExp) return "*";
  return "*";
}

// packages/nervous-system/src/router/router.ts
function validateRoute(route2) {
  if (!route2 || typeof route2 !== "object") throw new RouterError("Route must be an object");
  if (typeof route2.id !== "string" || !route2.id) throw new RouterError("Route.id must be non-empty string");
  if (!route2.filter || typeof route2.filter !== "object") throw new RouterError("Route.filter must be an object");
  if (route2.destination !== "handler" && route2.destination !== "queue" && route2.destination !== "topic") {
    throw new RouterError(`Route.destination must be 'handler' | 'queue' | 'topic', got: ${String(route2.destination)}`);
  }
  if (typeof route2.target !== "string" || !route2.target) throw new RouterError("Route.target must be non-empty string");
  if (typeof route2.priority !== "number" || !Number.isFinite(route2.priority)) {
    throw new RouterError("Route.priority must be a finite number");
  }
}
var EventRouter = class {
  routes = /* @__PURE__ */ new Map();
  order = [];
  /** Register a route. Throws if a route with the same id exists. */
  addRoute(route2) {
    validateRoute(route2);
    if (this.routes.has(route2.id)) {
      throw new RouterError(`Route with id '${route2.id}' already exists`);
    }
    this.routes.set(route2.id, { route: route2, compiled: compileFilter(route2.filter) });
    this.order.push(route2.id);
    this.order.sort((a, b) => {
      const pa = this.routes.get(a).route.priority;
      const pb = this.routes.get(b).route.priority;
      if (pa !== pb) return pa - pb;
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }
  /** Remove a route by id. Returns true if removed, false if not present. */
  removeRoute(id) {
    if (!this.routes.has(id)) return false;
    this.routes.delete(id);
    this.order = this.order.filter((rid) => rid !== id);
    return true;
  }
  /** Get a route by id (defensive copy). */
  getRoute(id) {
    const entry = this.routes.get(id);
    return entry ? { ...entry.route, filter: { ...entry.route.filter } } : null;
  }
  /** All route ids in priority order. */
  listRoutes() {
    return this.order.slice();
  }
  /** Number of routes registered. */
  size() {
    return this.routes.size;
  }
  /**
   * Route an event. Returns matched destinations in priority order.
   */
  route(event) {
    if (!event || typeof event !== "object") throw new RouterError("route(): event must be an object");
    const destinations = [];
    for (const id of this.order) {
      const entry = this.routes.get(id);
      try {
        if (entry.compiled(event)) {
          destinations.push({
            routeId: entry.route.id,
            destination: entry.route.destination,
            target: entry.route.target,
            priority: entry.route.priority
          });
        }
      } catch (e) {
        throw new RouterError(`route(): filter for route '${id}' threw`, e);
      }
    }
    return { event, destinations };
  }
  /** Remove all routes. */
  clear() {
    this.routes.clear();
    this.order = [];
  }
};
var routeCounter = 0;
function makeRouteId(prefix = "route") {
  routeCounter++;
  return `${prefix}-${routeCounter.toString(36)}`;
}
function makeRoute(filter, destination, target, priority = 0, id) {
  return { id: id ?? makeRouteId(), filter, destination, target, priority };
}

// packages/nervous-system/src/queue/queue.ts
var DEFAULT_QUEUE_CAPACITY = 1024;
var EventQueue = class {
  buf = [];
  capacity;
  waitWhenFull;
  waiters = [];
  dequeuers = [];
  producersPending = 0;
  stopped = false;
  constructor(opts) {
    const o = opts ?? {};
    this.waitWhenFull = !!o.waitWhenFull;
    if (o.capacity !== void 0 && (!Number.isInteger(o.capacity) || o.capacity < 0)) {
      throw new QueueError("capacity must be a non-negative integer");
    }
    this.capacity = o.capacity && o.capacity > 0 ? o.capacity : this.waitWhenFull ? DEFAULT_QUEUE_CAPACITY : 0;
  }
  /** Returns the configured capacity (0 = unbounded). */
  getCapacity() {
    return this.capacity;
  }
  /** Whether the queue will block producers when full. */
  isBlocking() {
    return this.waitWhenFull;
  }
  /** Current number of events buffered. */
  size() {
    return this.buf.length;
  }
  /** Whether the queue is empty. */
  isEmpty() {
    return this.buf.length === 0;
  }
  /** Whether the queue is at capacity. */
  isFull() {
    return this.capacity > 0 && this.buf.length >= this.capacity;
  }
  /** Whether `stop()` has been called. */
  isStopped() {
    return this.stopped;
  }
  /**
   * Enqueue an event.
   *
   * - If `waitWhenFull` is false and the queue is full, throws `QueueError`.
   * - If `waitWhenFull` is true and the queue is full, returns a Promise that
   *   resolves once space is available, then enqueues.
   * - Returns `true` synchronously when the event was enqueued immediately.
   */
  enqueue(event) {
    if (this.stopped) throw new QueueError("enqueue(): queue is stopped");
    if (!event || typeof event !== "object") throw new QueueError("enqueue(): event must be an object");
    if (this.capacity === 0 || this.buf.length < this.capacity) {
      this.pushInternal(event);
      return true;
    }
    if (!this.waitWhenFull) {
      throw new QueueError("enqueue(): queue is full");
    }
    this.producersPending++;
    return new Promise((resolve, reject) => {
      this.waiters.push({
        resolve: () => {
          this.producersPending--;
          try {
            this.pushInternal(event);
            resolve(true);
          } catch (e) {
            reject(e instanceof Error ? e : new QueueError("enqueue failed", e));
          }
        },
        reject: (e) => {
          this.producersPending--;
          reject(e);
        }
      });
    });
  }
  /**
   * Dequeue the next event. Blocks while the queue is empty (unless stopped).
   * Resolves with `null` if the queue is stopped and empty.
   */
  dequeue() {
    if (this.buf.length > 0) {
      return Promise.resolve(this.popInternal());
    }
    if (this.stopped) return Promise.resolve(null);
    return new Promise((resolve, reject) => {
      this.dequeuers.push({
        resolve: (e) => resolve(e),
        reject: (e) => reject(e)
      });
    });
  }
  /**
   * Resolves when there are no producers pending (i.e., all backpressure
   * has been relieved). The buffer may still contain events — draining the
   * buffer itself is the consumer's responsibility.
   */
  async drain() {
    while (this.producersPending > 0 || this.waiters.length > 0) {
      await nextTick();
    }
  }
  /** Stop the queue. Pending dequeuers resolve with `null`. Pending enqueues reject. */
  stop() {
    if (this.stopped) return;
    this.stopped = true;
    for (const w of this.waiters) w.reject(new QueueError("queue stopped"));
    this.waiters.length = 0;
    for (const d of this.dequeuers) d.resolve(null);
    this.dequeuers.length = 0;
  }
  /** Clear buffered events. Pending enqueues/dequeues are unaffected. */
  clear() {
    this.buf.length = 0;
  }
  // ----- internal helpers -----
  pushInternal(event) {
    this.buf.push(event);
    if (this.dequeuers.length > 0) {
      const next = this.dequeuers.shift();
      const e = this.buf.shift();
      next.resolve(e);
    }
  }
  popInternal() {
    const e = this.buf.shift();
    if (this.waiters.length > 0) {
      const w = this.waiters.shift();
      w.resolve();
    }
    return e;
  }
};
function nextTick() {
  return new Promise((resolve) => setImmediate(resolve));
}

// packages/nervous-system/src/sources/filesystem.ts
var import_node_fs = require("node:fs");
var FilesystemSource = class {
  id;
  path;
  recursive;
  severity;
  tags;
  watcher = null;
  sink = null;
  constructor(opts) {
    if (!opts || typeof opts.path !== "string" || !opts.path) {
      throw new SourceError("FilesystemSource: path is required");
    }
    this.id = opts.id ?? "filesystem";
    this.path = opts.path;
    this.recursive = !!opts.recursive;
    this.severity = opts.severity ?? "info";
    this.tags = opts.tags;
  }
  /** Returns true if a watcher is currently active. */
  isAvailable() {
    return this.watcher !== null;
  }
  /** Begin watching the directory. */
  start(sink) {
    if (this.watcher) return;
    this.sink = sink;
    try {
      this.watcher = (0, import_node_fs.watch)(this.path, { recursive: this.recursive }, (event, filename) => {
        if (!this.sink) return;
        const payload = {
          path: filename ? String(filename) : "",
          event
        };
        const ev = createEvent2("fs.change", this.id, payload, {
          severity: this.severity,
          tags: this.tags,
          metadata: { directory: this.path }
        });
        try {
          this.sink(ev);
        } catch {
        }
      });
      this.watcher.on("error", (err) => {
        const ev = createEvent2("fs.error", this.id, {
          error: err instanceof Error ? err.message : String(err),
          directory: this.path
        }, { severity: "error" });
        try {
          this.sink?.(ev);
        } catch {
        }
      });
    } catch (e) {
      this.watcher = null;
      throw new SourceError(`FilesystemSource: cannot watch '${this.path}'`, e);
    }
  }
  /** Stop watching. */
  stop() {
    if (this.watcher) {
      try {
        this.watcher.close();
      } catch {
      }
      this.watcher = null;
    }
    this.sink = null;
  }
};

// packages/nervous-system/src/sources/os.ts
var os2 = __toESM(require("node:os"));
var DEFAULT_OS_INTERVAL_MS = 5e3;
var OSSource = class {
  id;
  intervalMs;
  severity;
  tags;
  timer = null;
  sink = null;
  constructor(opts) {
    const o = opts ?? {};
    this.id = o.id ?? "os";
    this.intervalMs = o.intervalMs ?? DEFAULT_OS_INTERVAL_MS;
    this.severity = o.severity ?? "info";
    this.tags = o.tags;
    if (!Number.isFinite(this.intervalMs) || this.intervalMs <= 0) {
      throw new RangeError("OSSource: intervalMs must be a positive number");
    }
  }
  /** Begin emitting metrics on the configured interval. */
  start(sink) {
    if (this.timer) return;
    this.sink = sink;
    this.sample();
    this.timer = setInterval(() => this.sample(), this.intervalMs);
    if (typeof this.timer.unref === "function") this.timer.unref();
  }
  /** Stop emitting. */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.sink = null;
  }
  /** Emit a single sample. */
  sample() {
    if (!this.sink) return;
    const cpus3 = os2.cpus();
    const loadavg2 = os2.loadavg();
    const total = os2.totalmem();
    const free = os2.freemem();
    const used = total - free;
    const usedPct = total > 0 ? used / total : 0;
    const payload = {
      cpus: cpus3,
      loadavg: [loadavg2[0] ?? 0, loadavg2[1] ?? 0, loadavg2[2] ?? 0],
      memory: { total, free, used, usedPct },
      uptime: os2.uptime()
    };
    const ev = createEvent2("os.metrics", this.id, payload, {
      severity: this.severity,
      tags: this.tags
    });
    try {
      this.sink(ev);
    } catch {
    }
  }
};

// packages/nervous-system/src/sources/process.ts
var import_node_child_process = require("node:child_process");
var os3 = __toESM(require("node:os"));
var DEFAULT_PROCESS_INTERVAL_MS = 5e3;
var ProcessSource = class {
  id;
  intervalMs;
  severity;
  tags;
  timer = null;
  sink = null;
  seen = /* @__PURE__ */ new Map();
  warnedUnavailable = false;
  polling = false;
  constructor(opts) {
    const o = opts ?? {};
    this.id = o.id ?? "process";
    this.intervalMs = o.intervalMs ?? DEFAULT_PROCESS_INTERVAL_MS;
    this.severity = o.severity ?? "info";
    this.tags = o.tags;
    if (!Number.isFinite(this.intervalMs) || this.intervalMs <= 0) {
      throw new RangeError("ProcessSource: intervalMs must be a positive number");
    }
  }
  /** Begin polling. */
  start(sink) {
    if (this.timer) return;
    this.sink = sink;
    this.timer = setInterval(() => {
      void this.poll();
    }, this.intervalMs);
    if (typeof this.timer.unref === "function") this.timer.unref();
    void this.poll();
  }
  /** Stop polling. */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.sink = null;
    this.seen.clear();
  }
  /** Whether `ps`/`tasklist` is available. Probed on the first poll. */
  isAvailable() {
    return !this.warnedUnavailable;
  }
  /** Run a single poll. Public for testing. */
  async poll() {
    if (!this.sink || this.polling) return;
    this.polling = true;
    try {
      const entries = await this.snapshot();
      if (entries === null) {
        if (!this.warnedUnavailable) {
          this.warnedUnavailable = true;
          const ev = createEvent2("process.warning", this.id, {
            reason: "process list command unavailable"
          }, { severity: "warn" });
          this.emit(ev);
        }
        return;
      }
      this.warnedUnavailable = false;
      const currentPids = /* @__PURE__ */ new Set();
      for (const entry of entries) {
        currentPids.add(entry.pid);
        if (!this.seen.has(entry.pid)) {
          this.seen.set(entry.pid, entry);
          const ev = createEvent2("process.spawn", this.id, {
            pid: entry.pid,
            name: entry.name
          }, { severity: this.severity, tags: this.tags });
          this.emit(ev);
        }
      }
      for (const [pid, entry] of this.seen) {
        if (!currentPids.has(pid)) {
          this.seen.delete(pid);
          const ev = createEvent2("process.exit", this.id, {
            pid,
            name: entry.name
          }, { severity: this.severity, tags: this.tags });
          this.emit(ev);
        }
      }
    } finally {
      this.polling = false;
    }
  }
  emit(ev) {
    try {
      this.sink?.(ev);
    } catch {
    }
  }
  snapshot() {
    const platform2 = os3.platform();
    const cmd = platform2 === "win32" ? "tasklist /FO CSV /NH" : "ps -A -o pid=,comm=";
    return new Promise((resolve) => {
      (0, import_node_child_process.exec)(cmd, { timeout: 5e3 }, (err, stdout) => {
        if (err || !stdout) {
          resolve(null);
          return;
        }
        const out = [];
        const lines = stdout.split(/\r?\n/);
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          const entry = platform2 === "win32" ? parseTasklistLine(line) : parsePsLine(line);
          if (entry) out.push(entry);
        }
        resolve(out);
      });
    });
  }
};
function parsePsLine(line) {
  const match = line.match(/^\s*(\d+)\s+(.+)$/);
  if (!match) return null;
  const pid = Number(match[1]);
  if (!Number.isInteger(pid) || pid <= 0) return null;
  return { pid, name: match[2].trim() };
}
function parseTasklistLine(line) {
  const cells = line.split('","').map((s) => s.replace(/^"|"$/g, ""));
  if (cells.length < 2) return null;
  const name = cells[0];
  const pid = Number(cells[1]);
  if (!name || !Number.isInteger(pid) || pid < 0) return null;
  return { pid, name };
}

// packages/nervous-system/src/sources/network.ts
var import_node_fs2 = require("node:fs");
var os4 = __toESM(require("node:os"));
var DEFAULT_NETWORK_INTERVAL_MS = 5e3;
var NetworkSource = class {
  id;
  intervalMs;
  severity;
  tags;
  timer = null;
  sink = null;
  warned = false;
  constructor(opts) {
    const o = opts ?? {};
    this.id = o.id ?? "network";
    this.intervalMs = o.intervalMs ?? DEFAULT_NETWORK_INTERVAL_MS;
    this.severity = o.severity ?? "info";
    this.tags = o.tags;
    if (!Number.isFinite(this.intervalMs) || this.intervalMs <= 0) {
      throw new RangeError("NetworkSource: intervalMs must be a positive number");
    }
  }
  /** Begin emitting network stats on the configured interval. */
  start(sink) {
    if (this.timer) return;
    this.sink = sink;
    this.sample();
    this.timer = setInterval(() => this.sample(), this.intervalMs);
    if (typeof this.timer.unref === "function") this.timer.unref();
  }
  /** Stop emitting. */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.sink = null;
  }
  /** Emit a single sample. Public for testing. */
  sample() {
    if (!this.sink) return;
    const interfaces = readLinuxNetDev();
    if (interfaces === null) {
      if (!this.warned) {
        this.warned = true;
        const ev = createEvent2("net.warning", this.id, {
          reason: "/proc/net/dev unavailable on this platform; reporting interface names only"
        }, { severity: "warn" });
        this.emit(ev);
      }
      const names = Object.keys(os4.networkInterfaces() ?? {});
      const fallback = names.map((name) => ({ name, rxBytes: 0, txBytes: 0 }));
      this.emitStats(fallback);
      return;
    }
    this.emitStats(interfaces);
  }
  emitStats(interfaces) {
    let rx = 0, tx = 0;
    for (const i of interfaces) {
      rx += i.rxBytes;
      tx += i.txBytes;
    }
    const ev = createEvent2("net.stats", this.id, {
      interfaces,
      rx_bytes: rx,
      tx_bytes: tx
    }, { severity: this.severity, tags: this.tags });
    this.emit(ev);
  }
  emit(ev) {
    try {
      this.sink?.(ev);
    } catch {
    }
  }
};
function readLinuxNetDev() {
  let data;
  try {
    data = (0, import_node_fs2.readFileSync)("/proc/net/dev", "utf8");
  } catch {
    return null;
  }
  const lines = data.split("\n");
  const out = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line || !line.trim()) continue;
    const colonIdx = line.indexOf(":");
    if (colonIdx < 0) continue;
    const name = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim().split(/\s+/);
    const rxBytes = Number(rest[0] ?? 0);
    const txBytes = Number(rest[8] ?? 0);
    if (!Number.isFinite(rxBytes) || !Number.isFinite(txBytes)) continue;
    out.push({ name, rxBytes, txBytes });
  }
  return out;
}

// packages/nervous-system/src/sources/custom.ts
var CustomSource = class {
  id;
  producer;
  severity;
  tags;
  sink = null;
  started = false;
  onStop = null;
  constructor(opts) {
    if (!opts || typeof opts.producer !== "function") {
      throw new SourceError("CustomSource: producer function is required");
    }
    this.id = opts.id ?? "custom";
    this.producer = opts.producer;
    this.severity = opts.severity ?? "info";
    this.tags = opts.tags;
  }
  /** Begin producing events. The producer is invoked synchronously. */
  start(sink) {
    if (this.started) return;
    this.sink = sink;
    this.started = true;
    const emit = (input) => {
      if (!this.sink) return;
      let ev;
      if (input && typeof input === "object" && "id" in input && typeof input.id === "string" && "timestamp" in input) {
        ev = input;
      } else {
        const i = input;
        ev = createEvent2(i.topic, this.id, i.payload, {
          severity: i.severity ?? this.severity,
          tags: i.tags ?? this.tags,
          metadata: i.metadata
        });
      }
      try {
        this.sink(ev);
      } catch {
      }
    };
    try {
      const ret = this.producer(emit);
      if (typeof ret === "function") this.onStop = ret;
    } catch (e) {
      this.started = false;
      this.sink = null;
      throw new SourceError("CustomSource: producer threw", e);
    }
  }
  /** Stop the source. Calls the producer's cleanup function if one was returned. */
  stop() {
    if (this.onStop) {
      try {
        this.onStop();
      } catch {
      }
      this.onStop = null;
    }
    this.started = false;
    this.sink = null;
  }
};

// packages/nervous-system/src/sources/notification.ts
var NotificationSource = class {
  id;
  severity;
  tags;
  sink = null;
  constructor(opts) {
    const o = opts ?? {};
    this.id = o.id ?? "notifications";
    this.severity = o.severity ?? "info";
    this.tags = o.tags;
  }
  /** Start the source — stores the sink. */
  start(sink) {
    this.sink = sink;
  }
  /** Stop the source — clears the sink. */
  stop() {
    this.sink = null;
  }
  /**
   * Publish a notification. The topic is prefixed with `notification.`
   * unless the caller already provides a `notification.*` topic.
   *
   * @returns the constructed event, or `null` if the source is not started.
   */
  notify(topic, payload, opts) {
    if (!this.sink) return null;
    if (typeof topic !== "string" || !topic) throw new SourceError("notify(): topic is required");
    const fullTopic = topic.startsWith("notification.") ? topic : `notification.${topic}`;
    const ev = createEvent2(fullTopic, this.id, payload, {
      severity: opts?.severity ?? this.severity,
      tags: opts?.tags ?? this.tags,
      metadata: opts?.metadata
    });
    try {
      this.sink(ev);
    } catch {
    }
    return ev;
  }
};

// packages/nervous-system/src/sources/application.ts
var import_node_events2 = require("node:events");
var ApplicationSource = class {
  id;
  severity;
  tags;
  emitter;
  ownsEmitter;
  sink = null;
  listener = null;
  constructor(opts) {
    const o = opts ?? {};
    this.id = o.id ?? "application";
    this.severity = o.severity ?? "info";
    this.tags = o.tags;
    if (o.emitter) {
      this.emitter = o.emitter;
      this.ownsEmitter = false;
    } else {
      this.emitter = new import_node_events2.EventEmitter();
      this.emitter.setMaxListeners(0);
      this.ownsEmitter = true;
    }
  }
  /** Start listening for request events on the emitter. */
  start(sink) {
    if (this.listener) return;
    this.sink = sink;
    this.listener = (req) => {
      if (!this.sink) return;
      const payload = normalizeRequest(req);
      const ev = createEvent2("app.request", this.id, payload, {
        severity: this.severity,
        tags: this.tags
      });
      try {
        this.sink(ev);
      } catch {
      }
    };
    this.emitter.on("request", this.listener);
  }
  /** Stop listening. */
  stop() {
    if (this.listener) {
      this.emitter.off("request", this.listener);
      this.listener = null;
    }
    this.sink = null;
  }
  /** Simulate a request (only meaningful when no external emitter was supplied). */
  recordRequest(req) {
    this.emitter.emit("request", req);
  }
  /** The internal emitter (useful for `app.response` etc. extensions). */
  getEmitter() {
    return this.emitter;
  }
};
function normalizeRequest(req) {
  if (!req || typeof req !== "object") {
    return { method: "UNKNOWN", url: "" };
  }
  const r = req;
  return {
    method: typeof r.method === "string" ? r.method : "UNKNOWN",
    url: typeof r.url === "string" ? r.url : "",
    ...r.headers ? { headers: r.headers } : {},
    ...r.body !== void 0 ? { body: r.body } : {}
  };
}

// packages/nervous-system/src/sources/stubs.ts
var StubSource = class {
  id;
  name;
  severity;
  emitStatus;
  simulationIntervalMs;
  sink = null;
  timer = null;
  constructor(name, opts) {
    const o = opts ?? {};
    this.name = name;
    this.id = o.id ?? name;
    this.severity = o.severity ?? "debug";
    this.emitStatus = o.emitStatus !== false;
    this.simulationIntervalMs = o.simulationIntervalMs ?? 0;
  }
  /** Begin producing. Emits a single `stub.<name>.started` event. */
  start(sink) {
    this.sink = sink;
    if (this.emitStatus) {
      this.emit(createEvent2(`stub.${this.name}.started`, this.id, {
        message: `${this.name} source is a stub; no platform bindings attached`
      }, { severity: this.severity }));
    }
    if (this.simulationIntervalMs > 0) {
      this.timer = setInterval(() => {
        const sample = this.produceSample();
        if (sample !== null) {
          this.emit(createEvent2(`stub.${this.name}.sample`, this.id, sample, { severity: this.severity }));
        }
      }, this.simulationIntervalMs);
      if (typeof this.timer.unref === "function") this.timer.unref();
    }
  }
  /** Stop producing. */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.sink = null;
  }
  /** Whether the source is currently producing. */
  isRunning() {
    return this.sink !== null;
  }
  /** Override to produce simulated samples. Return `null` to skip. */
  produceSample() {
    return null;
  }
  /** Emit an event to the sink (defensive). */
  emit(ev) {
    try {
      this.sink?.(ev);
    } catch {
    }
  }
};
var UsbSource = class extends StubSource {
  constructor(opts) {
    super("usb", opts);
  }
  produceSample() {
    return { devices: [], simulated: true };
  }
};
var BluetoothSource = class extends StubSource {
  constructor(opts) {
    super("bluetooth", opts);
  }
  produceSample() {
    return { devices: [], simulated: true };
  }
};
var SensorSource = class extends StubSource {
  constructor(opts) {
    super("sensor", opts);
  }
  produceSample() {
    return { readings: {}, simulated: true };
  }
};
var CameraSource = class extends StubSource {
  constructor(opts) {
    super("camera", opts);
  }
  produceSample() {
    return { frame: null, simulated: true };
  }
};
var MicrophoneSource = class extends StubSource {
  constructor(opts) {
    super("microphone", opts);
  }
  produceSample() {
    return { sample: null, simulated: true };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AES_256_KEY_BYTES,
  AES_GCM_IV_BYTES,
  AES_GCM_TAG_BYTES,
  ALL_CONTEXT_DETECTORS,
  ALL_PATTERN_DETECTORS,
  ALL_ROLES,
  ATTESTATION_QUOTE_VERSION,
  AccessDeniedError,
  AccessEnforcer,
  AccessPolicySet,
  AnalysisCollector,
  AnalysisError,
  AnonymizeError,
  Anonymizer,
  ApiValidationError,
  ApplicationSource,
  AttestError,
  AttestationError,
  AuthenticationWorkflow,
  BACKUP_VERSION,
  BluetoothSource,
  BoundaryError,
  CHALLENGE_DECISION_THRESHOLD,
  COMMITMENT_BYTES,
  COMMITMENT_NONCE_BYTES,
  CONFLICT_TYPES,
  CameraSource,
  ChainError,
  ChallengeError,
  CompatibilityError,
  ComplianceError,
  ConfidenceError,
  ConfidenceEstimator,
  ConflictDetector,
  ConflictResolver,
  ConsensusBuilder,
  ConsensusError,
  ConstitutionError,
  ContractsError,
  CoordinationError,
  Coordinator,
  Cortex,
  CortexError,
  CouncilError,
  CredentialError,
  CustomSource,
  CustomsShield,
  CustomsShieldError,
  DEFAULT_AGING_POLICY,
  DEFAULT_ATTESTATION_FRESHNESS_MS,
  DEFAULT_CHALLENGE_BYTES,
  DEFAULT_CHALLENGE_TTL_MS,
  DEFAULT_COMPACT_THRESHOLD_BYTES,
  DEFAULT_CONSENSUS_THRESHOLD,
  DEFAULT_COUNTRY_SANCTIONS,
  DEFAULT_FACTOR_WEIGHTS,
  DEFAULT_LATENCY_BUFFER,
  DEFAULT_LATENCY_SAMPLE_EVERY,
  DEFAULT_MAX_DEBATE_ROUNDS,
  DEFAULT_NERVOUS_CONFIG,
  DEFAULT_NETWORK_INTERVAL_MS,
  DEFAULT_NONCE_BYTES,
  DEFAULT_NONCE_TTL_MS,
  DEFAULT_OS_INTERVAL_MS,
  DEFAULT_OUTLIER_THRESHOLD,
  DEFAULT_POLICY_ATTESTATION_FRESHNESS_MS,
  DEFAULT_POLICY_SESSION_TTL_MS,
  DEFAULT_PROCESS_INTERVAL_MS,
  DEFAULT_PRODUCT_RESTRICTIONS,
  DEFAULT_QUEUE_CAPACITY,
  DEFAULT_RECORDER_MAX_SIZE,
  DEFAULT_RENDER_CONFIG,
  DEFAULT_RETRY_POLICY,
  DEFAULT_RULE_SET,
  DEFAULT_SESSION_TTL_MS,
  DEFAULT_SYNTHESIS_THRESHOLD,
  DEFAULT_VIEWPORT,
  DIVERGENT_CONTENT_MIN_OVERLAP,
  DIVERGENT_REASONING_MAX_OVERLAP,
  DOCUMENT_STATUSES,
  DebateError,
  DebateFacilitator,
  DecompositionError,
  DecryptionError,
  DetectorError,
  DetectorRegistry,
  DeviceFingerprint,
  DocumentError,
  ENFORCEMENT_POINTS,
  EmergencyController,
  EmergencyError,
  EncryptionError,
  EnforcementEngine,
  EnforcementError,
  EpisodicMemory,
  EpisodicMemoryError,
  EventError,
  EventFabric,
  EventQueue,
  EventRecorder,
  EventReplayer,
  EventRouter,
  FACTUAL_OVERLAP_THRESHOLD,
  FabricError,
  FileLedgerStore,
  FileStorage,
  FilesystemSource,
  FilterError,
  FingerprintError,
  FullRedactor,
  GENESIS_PREV_HASH,
  GeneralizeRedactor,
  GoalError,
  GoalManager,
  Graph,
  GraphError,
  HIGH_RISK_TRANSSHIPMENT,
  HSCodeError,
  HardwareKeyError,
  HardwareValidationError,
  HardwareValidator,
  HashRedactor,
  HierarchyError,
  IDENTITY_VIEWPORT,
  INDICATOR_WEIGHTS,
  Identity,
  InMemoryLedgerStore,
  InMemorySessionStore,
  InMemoryStorage,
  IndexError,
  InvertedIndex,
  KeyGenerationError,
  KeyringError,
  KeyringWallet,
  LINUX_MACHINE_ID_PATHS,
  LayoutError,
  LedgerChain,
  LedgerError,
  LinkGraph,
  LocalTimestampAuthority,
  LongTermMemory,
  LongTermMemoryError,
  MANIFEST_ERROR_CODES,
  ManifestError,
  MaskRedactor,
  MemoryError,
  MemorySystem,
  MerkleError,
  MerkleTree,
  MetricsCollector,
  MicrophoneSource,
  MinorityOpinionTracker,
  MultiDeviceSync,
  NervousSystemError,
  NetworkSource,
  NonceError,
  NonceStore,
  NotificationSource,
  OPPOSING_CONFIDENCE_THRESHOLD,
  OSSource,
  PermissionModel,
  Planner,
  PlanningError,
  PolicyError,
  ProceduralMemory,
  ProceduralMemoryError,
  ProcessSource,
  PublishingError,
  QueueError,
  REDACTED,
  RESOLUTION_STRATEGIES,
  RULE_CATEGORIES,
  RecorderError,
  RecoveryError,
  RedactionError,
  ReplayError,
  ResourceError,
  ResourceManager,
  RestrictionError,
  RetryError,
  RiskError,
  Role,
  RoleManager,
  Router,
  RouterError,
  RuleError,
  SCHEMA_TYPES,
  SECTION_TYPES,
  SENSITIVE_METADATA_KEYS,
  SESSION_TOKEN_BYTES,
  SEVERITY_HIGH_GAP,
  SEVERITY_MEDIUM_GAP,
  STATE_ORDER,
  STATE_RANK,
  STRONG_CONSENSUS_RATIO,
  SafetyChecker,
  SafetyError,
  SanctionsError,
  Scheduler,
  SchedulerError,
  SchemaError,
  ScoringError,
  SelectionModel,
  SemanticMemory,
  SemanticMemoryError,
  SensorSource,
  SessionError,
  SessionManager,
  SignatureError,
  SoftwareAttestationProvider,
  SoftwareKeyProvider,
  SourceError,
  SpecialistRegistry,
  StorageError,
  StoreError,
  StubSource,
  SynthesisError,
  SynthesizeRedactor,
  TIMESTAMP_TOKEN_VERSION,
  TRUST_DECISION_THRESHOLD,
  TamperError,
  TimestampError,
  TokenRedactor,
  ToolError,
  ToolRegistry,
  TopologyTracker,
  TrustEvaluationError,
  TrustEvaluator,
  UsbSource,
  ValidationError,
  Validator,
  VerificationError,
  WALLET_MASTER_KEY_BYTES,
  WALLET_PBKDF2_ITERATIONS,
  WALLET_SALT_BYTES,
  WILDCARD,
  WeaveError,
  WorkflowEngine,
  WorkingMemory,
  WorkingMemoryError,
  _globDir,
  _internal,
  addressDetector,
  ageScore,
  aggregateReports,
  aggregateScore,
  aggregateScores,
  analyzeVulnerabilities,
  ancestors,
  and,
  anonymize,
  apiKeyDetector,
  applyDelta,
  applyRedactions,
  applyViewport,
  assertClean,
  assertDocumentClean,
  assertManifest,
  assertValidContract,
  assertValidKey,
  backoffDelay,
  bandFor,
  base58Encode,
  bfsPath,
  buildBundleFromParts,
  buildDefaultCatalog,
  buildImportDeclaration,
  buildManifest,
  buildPolicy,
  buildSanctionsRecord,
  buildTrustScore,
  calculateDuty,
  can,
  canOverride,
  canonicalCredentialBytes,
  canonicalQuoteBytes,
  canonicalSerialize,
  canonicalSerializeToString,
  canonicalTimestampBytes,
  chapter,
  checkBackwardCompat,
  checkEmbargoes,
  checkLicenses,
  checkRestrictedOrigins,
  children,
  classifyConsensus,
  clearConditionCache,
  cloneEvent,
  collectDeviceSignals,
  commit,
  compareParsedSemver,
  compareSemver,
  compareVersions,
  compileFilter,
  compileSchema,
  compress,
  computeDelta,
  computeEventHash,
  computeFactors,
  createGraph,
  createSoftwareWorkflow,
  creditCardDetector,
  decideFromScore,
  decodeChallenge,
  decompose,
  decompress,
  decrypt,
  defaultPolicy,
  defaultPolicySet,
  defaultRegistry,
  defaultTrustEvaluator,
  deriveDeviceId,
  deriveDidKey,
  deriveKey,
  describeType,
  deserialize,
  deserializeAndVerifyAttestation,
  deserializeQuote,
  detectIndicators,
  detectOutliers,
  detectViolations,
  dhash,
  diffDocuments,
  diffMetadata,
  diffSchemas,
  diffSnapshots,
  dijkstra,
  effectiveImportance,
  emailDetector,
  encrypt,
  enforceBoundary,
  escalationPath,
  estimateComplexity,
  evaluateCondition,
  evaluatePolicy,
  evaluatePolicySet,
  evaluateRule,
  evaluateRuleSet,
  eventKeyId,
  eventsEqual,
  expandRoles,
  exportAuditLog,
  exportEpisodic,
  exportSemantic,
  exportSnapshot,
  fieldsEqual,
  filterByComponent,
  filterByDepth,
  filterByEdgeType,
  filterByLabel,
  filterByProperty,
  filterByType,
  filterEdges,
  filterNodes,
  findCommonAuthority,
  findEndpoint,
  findOcrPiiCandidates,
  forceDirected,
  formatVersion,
  fuzzySearch,
  generateChallenge,
  generateEventId,
  getCatalog,
  getKeyId,
  getRestrictions,
  getRuleSet,
  getSanctionsList,
  gfDiv,
  gfEval,
  gfMul,
  grantRole,
  grid,
  hashConfig,
  hashDataset,
  hashRecord,
  heading,
  healthConditionDetector,
  hierarchical,
  hkdf,
  ibanDetector,
  imageIdentifier,
  importJsonl,
  importSnapshot,
  international,
  inverseViewport,
  ipv4Detector,
  ipv6Detector,
  isChallengeExpired,
  isPolicySatisfied,
  isRatified,
  isRetryable,
  isSemver,
  isSensitiveKey,
  isSeverity,
  isValidFormat,
  isValidManifest,
  isoDateDetector,
  issueCredential,
  issueTimestamp,
  jwtDetector,
  lookup,
  luhnValid,
  macDetector,
  makeFinding,
  makeRoute,
  makeRouteId,
  matchEvent,
  matchResource,
  matchRule,
  matchScore,
  medicationDetector,
  mergeAgingPolicy,
  mergeImport,
  mergeRenderConfig,
  mergeSchemas,
  mulberry32,
  newCorrelationId,
  newRoleAssignmentId,
  normalize,
  normalizeMetadata,
  normalizeName,
  normalizeOcrText,
  not,
  ocrPageToText,
  or,
  panTo,
  parseBackup,
  parseCondition,
  parseDocxCoreXml,
  parsePdfInfo,
  parseRole,
  parseSemver,
  parseVersion,
  pbkdf2,
  permissionMatches,
  permissionsForRole,
  personNameDetector,
  phoneDetector,
  postalCodeDetector,
  produceAndSerializeAttestation,
  produceAttestation,
  providerDetector,
  radial,
  rankEpisodic,
  rankLongTerm,
  ratify,
  ratio,
  readLinuxNetDev,
  redactImage,
  redactSignals,
  redactorForStrategy,
  renderToSVG,
  requireHardwareOrThrow,
  requireNode,
  resolveOverlaps,
  reveal,
  revokeRole,
  rolesForSubject,
  roots,
  route,
  routeAll,
  satisfies,
  scoreAnalysis,
  scoreFrom,
  screen,
  screenParties,
  screenParty,
  scrubDocumentMetadata,
  scrubObjectMetadata,
  search,
  serializeBackup,
  serializeManifest,
  serializeQuote,
  setCatalog,
  setRestrictions,
  setRuleSet,
  setSanctionsList,
  sha256Hex,
  shamirCombine,
  shamirSplit,
  shouldCompressLongTerm,
  shouldPruneEpisodic,
  signChallenge,
  signEvent,
  signForAttestation,
  signForChallenge,
  stableStringify,
  strictPolicy,
  stripJpegExif,
  stripOcrGeometry,
  suggest,
  supersede,
  synthesize,
  takeSnapshot,
  toDot,
  toJSON,
  toMermaid,
  toSVG,
  topoSort,
  urlDetector,
  usSsnDetector,
  validate,
  validateAnalysis,
  validateConflict,
  validateCredential,
  validateDocument,
  validateHierarchy,
  validateManifest,
  validateMinorityOpinion,
  validatePermissionModel,
  validatePolicy,
  validateProcedure,
  validateQuote,
  validateReport,
  validateRequest,
  validateResponse,
  validateRound,
  validateRule,
  validateSafetyRule,
  validateSection,
  validateSpecialist,
  validateValue,
  verifyAttestation,
  verifyBackup,
  verifyChain,
  verifyCredential,
  verifyEventSignature,
  verifyManifest,
  verifyMatch,
  verifyProof,
  verifyResponse,
  verifySharesConsistent,
  verifyTimestamp,
  whoCan,
  withRetry,
  zaIdChecksumValid,
  zaIdDetector,
  zoomAt
});
//# sourceMappingURL=manya-os.cjs.map
