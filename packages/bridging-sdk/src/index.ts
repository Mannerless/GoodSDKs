// Core SDK
export { BridgingSDK } from "./viem-sdk"

// Types
export type {
  BridgeProtocol,
  ChainId,
  BridgeChain,
  BridgeRequestEvent,
  ExecutedTransferEvent,
  EventOptions,
  TransactionStatus,
  GranularTransactionStatus,
  BridgeTransaction,
  FeeEstimate,
  CanBridgeResult,
  BridgeConfig,
  BridgeQuote,
  BridgeQuoteResult,
  BridgeRequirement,
  BridgeRequirementType,
  BridgeRouteLimits,
  ProtocolFeeInfo,
  BridgeStatus,
  GoodServerFeeResponse,
  LayerZeroScanResponse,
  AxelarscanResponse,
} from "./types"

// Utilities
export { normalizeAmount } from "./utils/decimals"

// Constants
export {
  SUPPORTED_CHAINS,
  BRIDGE_PROTOCOLS,
  API_ENDPOINTS,
  BRIDGE_CONTRACT_ADDRESSES,
  PROVIDER_ROUTE_MATRIX,
} from "./constants"

// ABI
export { MESSAGE_PASSING_BRIDGE_ABI } from "./abi"
