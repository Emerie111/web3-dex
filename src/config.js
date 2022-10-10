import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x5948feD6c090eEF5CDd29cbB280346005c093428"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/pLZWVyP4QziH5SC7-TpIQCIJUI961UWb",
  },
};