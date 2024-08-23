import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_unlockTime', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'when',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlockTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Storage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storageAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: '_addres', internalType: 'address', type: 'address' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Pay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'qnt', internalType: 'uint256', type: 'uint256' }],
    name: 'Withdraw',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_service', internalType: 'string', type: 'string' },
    ],
    name: 'setVendor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'vendor',
    outputs: [
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'service', internalType: 'string', type: 'string' },
      { name: '_address', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useReadLock = /*#__PURE__*/ createUseReadContract({ abi: lockAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLockOwner = /*#__PURE__*/ createUseReadContract({
  abi: lockAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"unlockTime"`
 */
export const useReadLockUnlockTime = /*#__PURE__*/ createUseReadContract({
  abi: lockAbi,
  functionName: 'unlockTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useWriteLock = /*#__PURE__*/ createUseWriteContract({
  abi: lockAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteLockWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useSimulateLock = /*#__PURE__*/ createUseSimulateContract({
  abi: lockAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateLockWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__
 */
export const useWatchLockEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: lockAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchLockWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useReadStorage = /*#__PURE__*/ createUseReadContract({
  abi: storageAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"vendor"`
 */
export const useReadStorageVendor = /*#__PURE__*/ createUseReadContract({
  abi: storageAbi,
  functionName: 'vendor',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useWriteStorage = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"Pay"`
 */
export const useWriteStoragePay = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
  functionName: 'Pay',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"Withdraw"`
 */
export const useWriteStorageWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
  functionName: 'Withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"setVendor"`
 */
export const useWriteStorageSetVendor = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
  functionName: 'setVendor',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useSimulateStorage = /*#__PURE__*/ createUseSimulateContract({
  abi: storageAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"Pay"`
 */
export const useSimulateStoragePay = /*#__PURE__*/ createUseSimulateContract({
  abi: storageAbi,
  functionName: 'Pay',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"Withdraw"`
 */
export const useSimulateStorageWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageAbi,
    functionName: 'Withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"setVendor"`
 */
export const useSimulateStorageSetVendor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: storageAbi,
    functionName: 'setVendor',
  })
