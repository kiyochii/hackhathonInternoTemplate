
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