/**
 * Trivia Questions Database
 * Educational questions about Celo blockchain and DeFi concepts
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'Celo' | 'DeFi' | 'Web3' | 'GeneralCrypto' | 'NFTs' | 'DAOs';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is Celo's native stablecoin pegged to the US Dollar?",
    options: ["cUSD", "USDC", "DAI", "USDT"],
    correctAnswer: 0,
    explanation: "cUSD (Celo Dollar) is Celo's native stablecoin pegged to the US Dollar, enabling stable-value transactions on the network.",
    category: "Celo Basics",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What makes Celo unique among Layer 1 blockchains?",
    options: [
      "Proof of Work consensus",
      "No smart contract support",
      "Mobile-first design with phone number addresses",
      "NFT marketplace focus"
    ],
    correctAnswer: 2,
    explanation: "Celo is designed mobile-first, allowing users to send crypto using phone numbers instead of complex wallet addresses. This makes it accessible to billions of mobile users worldwide.",
    category: "Celo Basics",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is MiniPay?",
    options: [
      "A Celo mining tool",
      "A stablecoin wallet with built-in dApp discovery",
      "A gas fee reduction mechanism",
      "A smart contract language"
    ],
    correctAnswer: 1,
    explanation: "MiniPay is a lightweight stablecoin wallet integrated into Opera Mini with a built-in discovery page for dApps, making crypto accessible to millions of users.",
    category: "Celo Ecosystem",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "What can you use to pay gas fees on Celo?",
    options: [
      "Only CELO tokens",
      "Only ETH",
      "Stablecoins like cUSD",
      "Bitcoin"
    ],
    correctAnswer: 2,
    explanation: "Celo allows users to pay gas fees in stablecoins like cUSD, making transactions more predictable and user-friendly compared to volatile native tokens.",
    category: "DeFi Concepts",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What should you NEVER share with anyone?",
    options: [
      "Your wallet address",
      "Your private key/seed phrase",
      "Transaction hashes",
      "Your cUSD balance"
    ],
    correctAnswer: 1,
    explanation: "Your private key or seed phrase gives complete access to your wallet. Never share it with anyone - legitimate services will NEVER ask for it.",
    category: "Blockchain Security",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What consensus mechanism does Celo use?",
    options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of Authority"],
    correctAnswer: 1,
    explanation: "Celo uses Proof of Stake consensus, making it more energy-efficient than Proof of Work blockchains.",
    category: "Celo Basics",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "What is the purpose of CELO tokens?",
    options: ["Only for payments", "Governance and staking", "Mining rewards", "NFT creation"],
    correctAnswer: 1,
    explanation: "CELO tokens are used for governance voting and staking to secure the network.",
    category: "Celo Basics",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Which mobile wallet is optimized for Celo?",
    options: ["MetaMask", "Trust Wallet", "MiniPay", "Coinbase Wallet"],
    correctAnswer: 2,
    explanation: "MiniPay is specifically designed for Celo and integrated into Opera Mini browser.",
    category: "Celo Ecosystem",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "What is a key benefit of using stablecoins for gas fees?",
    options: ["Higher transaction speed", "Predictable costs", "Lower security", "More complexity"],
    correctAnswer: 1,
    explanation: "Using stablecoins for gas fees provides predictable transaction costs, unlike volatile cryptocurrencies.",
    category: "DeFi Concepts",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What should you do before connecting to a new dApp?",
    options: ["Share your private key", "Verify the URL and reputation", "Send test funds first", "Download random software"],
    correctAnswer: 1,
    explanation: "Always verify the URL and check the dApp's reputation before connecting your wallet to avoid scams.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 11,
    question: "What is DeFi?",
    options: ["Decentralized Finance", "Digital Financial Instruments", "Direct Fund Investment", "Distributed File System"],
    correctAnswer: 0,
    explanation: "DeFi stands for Decentralized Finance, which refers to financial services built on blockchain networks without traditional intermediaries.",
    category: "DeFi",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "What is a liquidity pool in DeFi?",
    options: ["A swimming pool for crypto", "A pool of tokens locked in a smart contract", "A pool of miners", "A pool of wallets"],
    correctAnswer: 1,
    explanation: "Liquidity pools are pools of tokens locked in smart contracts that enable decentralized trading and lending.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 13,
    question: "What is an NFT?",
    options: ["Non-Fungible Token", "New Financial Tool", "Network File Transfer", "Non-Financial Transaction"],
    correctAnswer: 0,
    explanation: "NFT stands for Non-Fungible Token, a unique digital asset that represents ownership of a specific item or piece of content.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "What blockchain is Ethereum built on?",
    options: ["Bitcoin", "Its own blockchain", "Celo", "Solana"],
    correctAnswer: 1,
    explanation: "Ethereum is a Layer 1 blockchain that introduced smart contracts and dApps.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "What is a DAO?",
    options: ["Decentralized Autonomous Organization", "Digital Asset Operator", "Direct Access Online", "Distributed Application Object"],
    correctAnswer: 0,
    explanation: "A DAO is a Decentralized Autonomous Organization, an organization governed by smart contracts and community voting.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 16,
    question: "What is yield farming?",
    options: ["Growing crops with crypto", "Earning rewards by providing liquidity", "Mining new coins", "Trading stocks"],
    correctAnswer: 1,
    explanation: "Yield farming involves providing liquidity to DeFi protocols to earn rewards and interest.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 17,
    question: "What makes NFTs unique?",
    options: ["They are interchangeable", "Each has unique metadata", "They are always cheap", "They can't be traded"],
    correctAnswer: 1,
    explanation: "NFTs are non-fungible, meaning each token has unique characteristics and cannot be exchanged on a 1:1 basis.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "What is Web3?",
    options: ["The next version of the internet", "A programming language", "A cryptocurrency", "A social media platform"],
    correctAnswer: 0,
    explanation: "Web3 refers to the next evolution of the internet, focusing on decentralization, blockchain, and user ownership of data.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 19,
    question: "What is governance in DAOs?",
    options: ["Only for governments", "Community voting on decisions", "Centralized control", "No decision making"],
    correctAnswer: 1,
    explanation: "DAO governance involves token holders voting on proposals and decisions affecting the organization.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "What is impermanent loss?",
    options: ["Permanent loss of funds", "Temporary loss due to price changes in liquidity pools", "Loss from hacking", "Loss from taxes"],
    correctAnswer: 1,
    explanation: "Impermanent loss occurs when providing liquidity to AMMs and token prices change, potentially leading to losses compared to holding tokens.",
    category: "DeFi",
    difficulty: "Hard"
  },
  {
    id: 21,
    question: "What is a smart contract?",
    options: ["A legal contract", "Self-executing code on blockchain", "A contract with AI", "A smart phone app"],
    correctAnswer: 1,
    explanation: "Smart contracts are programs stored on blockchain that automatically execute when predetermined conditions are met.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "What is staking?",
    options: ["Growing plants", "Locking tokens to support network and earn rewards", "Trading stocks", "Mining crypto"],
    correctAnswer: 1,
    explanation: "Staking involves locking cryptocurrency in a wallet to support blockchain operations and earn rewards.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "What is a blockchain oracle?",
    options: ["A fortune teller", "A service that provides external data to smart contracts", "A mining tool", "A wallet type"],
    correctAnswer: 1,
    explanation: "Oracles are services that feed external data (like price feeds) to smart contracts on blockchain.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "What is gas in Ethereum?",
    options: ["Fuel for cars", "Fee paid for transactions and smart contract execution", "A token", "A mining reward"],
    correctAnswer: 1,
    explanation: "Gas is the fee required to execute transactions and smart contracts on Ethereum network.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "What is a whitepaper in crypto?",
    options: ["A marketing document", "Technical document explaining a project", "Legal document", "Financial report"],
    correctAnswer: 1,
    explanation: "A whitepaper is a detailed technical document that explains a cryptocurrency project, its technology, and goals.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "What is a rug pull?",
    options: ["A yoga move", "When developers abandon a project and take investor funds", "A trading strategy", "A wallet hack"],
    correctAnswer: 1,
    explanation: "A rug pull occurs when project developers suddenly remove liquidity or abandon a project, leaving investors with worthless tokens.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "What is a DEX?",
    options: ["Digital Exchange", "Decentralized Exchange", "Direct Exchange", "Distributed Exchange"],
    correctAnswer: 1,
    explanation: "DEX stands for Decentralized Exchange, a platform for trading cryptocurrencies without a central authority.",
    category: "DeFi",
    difficulty: "Easy"
  },
  {
    id: 28,
    question: "What is the main benefit of NFTs?",
    options: ["They are cheap", "They provide provable ownership and scarcity", "They are easy to copy", "They are centralized"],
    correctAnswer: 1,
    explanation: "NFTs provide cryptographic proof of ownership and uniqueness for digital assets.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "What is a governance token?",
    options: ["For buying goods", "For voting on protocol changes", "For staking only", "For trading"],
    correctAnswer: 1,
    explanation: "Governance tokens allow holders to vote on proposals and changes to the protocol they govern.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "What is a flash loan?",
    options: ["A quick personal loan", "Uncollateralized loan that must be repaid in one transaction", "A loan from a bank", "A loan with flash storage"],
    correctAnswer: 1,
    explanation: "Flash loans allow borrowing without collateral as long as the loan is repaid within the same transaction.",
    category: "DeFi",
    difficulty: "Hard"
  },
  {
    id: 31,
    question: "What is Celo's approach to identity?",
    options: ["Username only", "Phone number mapping", "Email verification", "Government ID"],
    correctAnswer: 1,
    explanation: "Celo uses phone numbers as identifiers, making crypto accessible by mapping phone numbers to wallet addresses.",
    category: "Celo",
    difficulty: "Medium"
  },
  {
    id: 32,
    question: "What is the Celo Reserve?",
    options: ["A bank", "Collateral backing stablecoins", "A mining pool", "A wallet"],
    correctAnswer: 1,
    explanation: "The Celo Reserve holds assets that back the cUSD and cEUR stablecoins, ensuring their peg to fiat currencies.",
    category: "Celo",
    difficulty: "Medium"
  },
  {
    id: 33,
    question: "What is Proof of Stake?",
    options: ["Mining with computers", "Validators stake tokens to secure network", "A type of wallet", "A trading strategy"],
    correctAnswer: 1,
    explanation: "Proof of Stake is a consensus mechanism where validators stake cryptocurrency to participate in block validation.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "What is a dApp?",
    options: ["A mobile app", "Decentralized Application", "A desktop app", "A web browser"],
    correctAnswer: 1,
    explanation: "dApps are applications that run on decentralized networks like blockchain, not controlled by any single entity.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "What is a token bridge?",
    options: ["A physical bridge", "Technology to move tokens between blockchains", "A wallet connector", "A trading bot"],
    correctAnswer: 1,
    explanation: "Token bridges enable transferring assets between different blockchain networks.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 36,
    question: "What is a whale in crypto?",
    options: ["A large fish", "An investor holding large amounts of cryptocurrency", "A mining machine", "A type of NFT"],
    correctAnswer: 1,
    explanation: "A whale is a term for an individual or entity holding a large amount of a particular cryptocurrency.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "What is a cold wallet?",
    options: ["A wallet that gets cold", "Offline wallet for secure storage", "A wallet for winter", "A cheap wallet"],
    correctAnswer: 1,
    explanation: "Cold wallets are offline storage solutions that keep private keys away from internet-connected devices.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 38,
    question: "What is a liquidity provider?",
    options: ["Someone who provides water", "User who adds tokens to liquidity pools", "A bank", "A miner"],
    correctAnswer: 1,
    explanation: "Liquidity providers add tokens to pools in AMMs to facilitate trading and earn fees.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "What is minting an NFT?",
    options: ["Creating a physical coin", "Creating a new NFT on blockchain", "Buying an NFT", "Trading an NFT"],
    correctAnswer: 1,
    explanation: "Minting is the process of creating a new NFT and recording it on the blockchain.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 40,
    question: "What is a proposal in DAO governance?",
    options: ["A business plan", "A suggestion for changes voted on by token holders", "A legal document", "A marketing plan"],
    correctAnswer: 1,
    explanation: "Proposals in DAOs are suggestions for changes or actions that community members vote on.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 41,
    question: "What is slippage in trading?",
    options: ["A fall", "Difference between expected and actual trade price", "A trading fee", "A wallet error"],
    correctAnswer: 1,
    explanation: "Slippage is the difference between the expected price of a trade and the price at which it executes.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 42,
    question: "What is a seed phrase?",
    options: ["Plant seeds", "Series of words to recover wallet", "A password", "A username"],
    correctAnswer: 1,
    explanation: "A seed phrase is a set of words that can regenerate a wallet's private keys.",
    category: "Web3",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "What is a validator?",
    options: ["Someone who checks documents", "Node that validates transactions and creates blocks", "A trader", "A wallet user"],
    correctAnswer: 1,
    explanation: "Validators are nodes in proof-of-stake networks that validate transactions and create new blocks.",
    category: "GeneralCrypto",
    difficulty: "Medium"
  },
  {
    id: 44,
    question: "What is a smart contract audit?",
    options: ["Checking code for bugs", "Reviewing contract for security vulnerabilities", "Counting money", "Legal review"],
    correctAnswer: 1,
    explanation: "Smart contract audits involve reviewing code for security issues and vulnerabilities.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "What is a yield?",
    options: ["Farm produce", "Return on investment from DeFi", "A type of loan", "A trading fee"],
    correctAnswer: 1,
    explanation: "Yield refers to the returns earned from providing liquidity or staking in DeFi protocols.",
    category: "DeFi",
    difficulty: "Easy"
  },
  {
    id: 46,
    question: "What is metadata in NFTs?",
    options: ["Secret data", "Information describing the NFT", "Blockchain data", "Transaction data"],
    correctAnswer: 1,
    explanation: "Metadata contains information about the NFT, such as name, description, image URL, and attributes.",
    category: "NFTs",
    difficulty: "Medium"
  },
  {
    id: 47,
    question: "What is quadratic voting?",
    options: ["Voting with equations", "Voting system where cost increases with votes", "Simple majority voting", "Random voting"],
    correctAnswer: 1,
    explanation: "Quadratic voting is a system where each additional vote costs more, preventing whales from dominating decisions.",
    category: "DAOs",
    difficulty: "Hard"
  },
  {
    id: 48,
    question: "What is a layer 2 solution?",
    options: ["Second blockchain layer", "Scaling solution built on layer 1", "A wallet", "A dApp"],
    correctAnswer: 1,
    explanation: "Layer 2 solutions are technologies built on top of layer 1 blockchains to improve scalability.",
    category: "GeneralCrypto",
    difficulty: "Medium"
  },
  {
    id: 49,
    question: "What is a gasless transaction?",
    options: ["Free transaction", "Transaction where someone else pays gas", "No gas needed", "Cheap transaction"],
    correctAnswer: 1,
    explanation: "Gasless transactions allow users to interact with dApps without paying gas fees directly.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 50,
    question: "What is composability in DeFi?",
    options: ["Musical composition", "Ability of protocols to work together", "Code complexity", "User interface"],
    correctAnswer: 1,
    explanation: "Composability refers to how DeFi protocols can be combined to create new financial products.",
    category: "DeFi",
    difficulty: "Hard"
  },
  {
    id: 51,
    question: "What is Valora?",
    options: ["A Celo wallet", "A DeFi protocol", "A stablecoin", "A mining tool"],
    correctAnswer: 0,
    explanation: "Valora is a mobile wallet for Celo that allows sending crypto using phone numbers.",
    category: "Celo",
    difficulty: "Easy"
  },
  {
    id: 52,
    question: "What is cEUR?",
    options: ["Euro stablecoin on Celo", "A currency", "A wallet", "A dApp"],
    correctAnswer: 0,
    explanation: "cEUR is Celo's Euro-pegged stablecoin, allowing stable transactions in Euros.",
    category: "Celo",
    difficulty: "Easy"
  },
  {
    id: 53,
    question: "What is a Merkle tree?",
    options: ["A tree data structure", "Cryptographic structure for efficient verification", "A mining algorithm", "A wallet type"],
    correctAnswer: 1,
    explanation: "Merkle trees are cryptographic structures that allow efficient verification of large data sets.",
    category: "GeneralCrypto",
    difficulty: "Hard"
  },
  {
    id: 54,
    question: "What is a zero-knowledge proof?",
    options: ["No knowledge required", "Proving something without revealing information", "A math problem", "A security hack"],
    correctAnswer: 1,
    explanation: "Zero-knowledge proofs allow proving knowledge of information without revealing the information itself.",
    category: "Web3",
    difficulty: "Hard"
  },
  {
    id: 55,
    question: "What is an AMM?",
    options: ["Automated Market Maker", "Advanced Mining Machine", "Asset Management Module", "Automated Money Machine"],
    correctAnswer: 0,
    explanation: "AMM stands for Automated Market Maker, algorithms that enable decentralized trading.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 56,
    question: "What is rarity in NFTs?",
    options: ["How rare the NFT is", "Scarcity based on traits and attributes", "Price of the NFT", "Age of the NFT"],
    correctAnswer: 1,
    explanation: "NFT rarity is determined by the uniqueness and scarcity of its traits and attributes.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 57,
    question: "What is a snapshot in DAOs?",
    options: ["A photo", "Recording token holder balances at a point in time", "A meeting recording", "A financial report"],
    correctAnswer: 1,
    explanation: "Snapshots capture token balances at a specific time for governance voting.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 58,
    question: "What is arbitrage in DeFi?",
    options: ["Taking loans", "Exploiting price differences across platforms", "Providing liquidity", "Staking tokens"],
    correctAnswer: 1,
    explanation: "Arbitrage involves buying low on one platform and selling high on another to profit from price differences.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 59,
    question: "What is a soulbound token?",
    options: ["A token tied to your soul", "Non-transferable NFT representing credentials", "A cursed token", "A wallet token"],
    correctAnswer: 1,
    explanation: "Soulbound tokens are non-transferable NFTs that represent achievements, credentials, or memberships.",
    category: "NFTs",
    difficulty: "Medium"
  },
  {
    id: 60,
    question: "What is a multi-sig wallet?",
    options: ["Wallet with multiple signatures", "Multiple signatures required for transactions", "A shared wallet", "A secure wallet"],
    correctAnswer: 1,
    explanation: "Multi-signature wallets require multiple approvals before executing transactions.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 61,
    question: "What is the halving in Bitcoin?",
    options: ["Splitting coins", "Reducing mining rewards by half", "A market crash", "A fork"],
    correctAnswer: 1,
    explanation: "Bitcoin halving reduces the mining reward from 6.25 to 3.125 BTC approximately every 4 years.",
    category: "GeneralCrypto",
    difficulty: "Medium"
  },
  {
    id: 62,
    question: "What is a sidechain?",
    options: ["A chain next to main chain", "Separate blockchain connected to mainnet", "A mining side job", "A wallet chain"],
    correctAnswer: 1,
    explanation: "Sidechains are separate blockchains that run parallel to the main blockchain and can interact with it.",
    category: "GeneralCrypto",
    difficulty: "Hard"
  },
  {
    id: 63,
    question: "What is a Dutch auction?",
    options: ["Auction from Netherlands", "Price starts high and decreases", "Price starts low and increases", "Random pricing"],
    correctAnswer: 1,
    explanation: "In Dutch auctions, the price starts high and decreases until a buyer accepts it.",
    category: "NFTs",
    difficulty: "Medium"
  },
  {
    id: 64,
    question: "What is a timelock in smart contracts?",
    options: ["A clock", "Delay mechanism for executing functions", "A security feature", "A timer"],
    correctAnswer: 1,
    explanation: "Timelocks delay the execution of certain smart contract functions for security purposes.",
    category: "Web3",
    difficulty: "Hard"
  },
  {
    id: 65,
    question: "What is a rebase token?",
    options: ["Token that changes base", "Token supply adjusts to maintain peg", "A rebased wallet", "A forked token"],
    correctAnswer: 1,
    explanation: "Rebase tokens automatically adjust supply to maintain a stable price peg.",
    category: "DeFi",
    difficulty: "Hard"
  },
  {
    id: 66,
    question: "What is a genesis NFT?",
    options: ["First NFT ever", "NFT from project launch", "A special NFT", "A rare NFT"],
    correctAnswer: 1,
    explanation: "Genesis NFTs are the first NFTs minted in a collection, often with special significance.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 67,
    question: "What is a veto in DAO governance?",
    options: ["A vote against", "Power to block proposals", "A voting right", "A proposal type"],
    correctAnswer: 1,
    explanation: "A veto allows certain members to block proposals from being implemented.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 68,
    question: "What is a wrapped token?",
    options: ["Token in wrapping paper", "Token representing another asset on different chain", "A packaged token", "A gift token"],
    correctAnswer: 1,
    explanation: "Wrapped tokens represent assets from one blockchain on another blockchain.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 69,
    question: "What is a hard fork?",
    options: ["Difficult mining", "Permanent divergence in blockchain", "A software update", "A temporary split"],
    correctAnswer: 1,
    explanation: "A hard fork creates a permanent divergence in the blockchain, creating two separate chains.",
    category: "GeneralCrypto",
    difficulty: "Medium"
  },
  {
    id: 70,
    question: "What is a quadratic funding?",
    options: ["Funding with equations", "Funding mechanism that matches donations", "Government funding", "Bank funding"],
    correctAnswer: 1,
    explanation: "Quadratic funding matches donations to projects based on contribution distribution.",
    category: "DAOs",
    difficulty: "Hard"  },
  {
    id: 71,
    question: "What is a layer 1 blockchain?",
    options: ["First layer of internet", "Base blockchain network", "A wallet layer", "A dApp layer"],
    correctAnswer: 1,
    explanation: "Layer 1 blockchains are the foundational networks like Ethereum, Bitcoin, Celo.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 72,
    question: "What is a vesting schedule?",
    options: ["A calendar", "Time-locked token release", "A payment plan", "A reward system"],
    correctAnswer: 1,
    explanation: "Vesting schedules release tokens over time to align incentives and prevent dumps.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 73,
    question: "What is a bear market?",
    options: ["Market with bears", "Extended period of declining prices", "Bull market opposite", "Crypto winter"],
    correctAnswer: 1,
    explanation: "A bear market is characterized by falling asset prices and widespread pessimism.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 74,
    question: "What is a permissioned blockchain?",
    options: ["Requires permission to join", "Controlled access blockchain", "Private blockchain", "All of the above"],
    correctAnswer: 3,
    explanation: "Permissioned blockchains restrict participation to approved entities.",
    category: "Web3",
    difficulty: "Medium"
  },
  {
    id: 75,
    question: "What is a stablecoin?",
    options: ["Coin that doesn't change", "Cryptocurrency pegged to stable asset", "A safe investment", "A government coin"],
    correctAnswer: 1,
    explanation: "Stablecoins maintain a stable value by being pegged to assets like USD or commodities.",
    category: "DeFi",
    difficulty: "Easy"
  },
  {
    id: 76,
    question: "What is a fork in crypto?",
    options: ["Eating utensil", "Blockchain split into two paths", "A mining tool", "A wallet feature"],
    correctAnswer: 1,
    explanation: "A fork occurs when a blockchain diverges into two separate chains.",
    category: "GeneralCrypto",
    difficulty: "Easy"
  },
  {
    id: 77,
    question: "What is a DEX aggregator?",
    options: ["Collects DEX data", "Finds best prices across DEXs", "Aggregates liquidity", "All of the above"],
    correctAnswer: 3,
    explanation: "DEX aggregators compare prices across multiple decentralized exchanges to find the best rates.",
    category: "DeFi",
    difficulty: "Medium"
  },
  {
    id: 78,
    question: "What is a PFP NFT?",
    options: ["Profile Picture NFT", "Personal Finance Protocol", "Proof of Financial Performance", "Public Finance Platform"],
    correctAnswer: 0,
    explanation: "PFP NFTs are profile picture collections that serve as digital identity and community membership.",
    category: "NFTs",
    difficulty: "Easy"
  },
  {
    id: 79,
    question: "What is a delegate in DAO governance?",
    options: ["A representative", "Someone who votes on behalf of others", "A leader", "All of the above"],
    correctAnswer: 3,
    explanation: "Delegates represent community members in governance decisions.",
    category: "DAOs",
    difficulty: "Medium"
  },
  {
    id: 80,
    question: "What is Celo's carbon-negative feature?",
    options: ["Trees planted", "Offsetting emissions through reforestation", "No emissions", "Electric mining"],
    correctAnswer: 1,
    explanation: "Celo offsets its carbon emissions through reforestation and other environmental initiatives.",
    category: "Celo",
    difficulty: "Medium"  }
];

/**
 * Get a random set of questions
 * @param count Number of questions to return
 * @returns Array of random questions
 */
export function getRandomQuestions(count: number = 10): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
}

// Keep backward compatibility
export const SAMPLE_QUESTIONS = questions;

/**
 * Calculate score based on answers
 * @param answers Array of user's answer indices
 * @param questions Array of questions
 * @returns Score object with correct count and percentage
 */
export function calculateScore(
  answers: number[],
  questions: Question[]
): { correct: number; total: number; percentage: number } {
  let correct = 0;
  
  answers.forEach((answer, index) => {
    if (questions[index] && answer === questions[index].correctAnswer) {
      correct++;
    }
  });
  
  const total = questions.length;
  const percentage = Math.round((correct / total) * 100);
  
  return { correct, total, percentage };
}
