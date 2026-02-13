export interface EnvConfig {
  rpcUrl: string;
  contractAddress: string;
  graphUrl: string;
  network: 'base-mainnet' | 'base-sepolia';
}

export const getEnvConfig = (): EnvConfig => ({
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || '',
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
  graphUrl: process.env.NEXT_PUBLIC_GRAPH_URL || '',
  network: (process.env.NEXT_PUBLIC_NETWORK as EnvConfig['network']) || 'base-sepolia',
});
