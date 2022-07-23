import {ethers} from "ethers";
// import {abi as ERC721_CONTRACT_ABI} from "@/contracts/ERC721.json";
// import {abi as BUNDLE_NFT_CONTRACT_ABI} from "@/contracts/BundleNFT.json";
// import {tokenFormat} from "@/utils/formatter";
// import getStorage from "@/utils/storage";

/*
*   @param provider - from connector.connection.subscribe
* */

import {    
    ProviderConnector,    
} from '@1inch/limit-order-protocol';


export function getProvider(provider) {
    console.log(provider, 'GET provider')
    return new ethers.providers.Web3Provider(provider, "any")
}