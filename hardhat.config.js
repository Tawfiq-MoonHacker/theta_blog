require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 365
    },
   /* mumbai: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [process.env.pk]
    },*/
    
    theta: {
      url: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
      accounts: ["efcbcd5915959d94eecde692655d9a03e2d7f63a662ae3e68ac68792d4ebf62d"]
    }
  }
};