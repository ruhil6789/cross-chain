import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY:any=process.env.PRIVATE_KEY
const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.API_URL,
      accounts: [PRIVATE_KEY],
    },
    tron: {
      url: process.env.API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  
};

export default config;
