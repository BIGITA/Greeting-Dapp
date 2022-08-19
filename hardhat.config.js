const { task } = require("hardhat/config");
require('dotenv').config();
const {API_URL,PRIVATE_KEY}=process.env;
require("@nomicfoundation/hardhat-toolbox");
task("accounts", "Prints the list of accounts", async (taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts){
    console.log(account.address);
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  paths:{
    artifacts: "./src/artifacts",
  },
  networks:{
    hardhat:{
      chainId:1337
    },
     goerli:{
        url:API_URL,
        accounts:[`0x${PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.4",

};
