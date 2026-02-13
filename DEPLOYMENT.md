# Deployment Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Vercel account (for frontend)
- Alchemy/Infura account (for Base)
- The Graph account (for indexing)

## Environment Variables

```env
NEXT_PUBLIC_RPC_URL=your_base_rpc_url
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_GRAPH_URL=your_subgraph_url
```

## Frontend Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Smart Contract Deployment

### Using Foundry

```bash
cd contracts
forge build
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/TriviaGame.sol:TriviaGame
```

## Subgraph Deployment

```bash
cd subgraph
graph deploy --product hosted-service your-username/reui
```
