require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 365
    },
    
    theta: {
      url: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
      accounts: ["private key "]
    }
  }
};
