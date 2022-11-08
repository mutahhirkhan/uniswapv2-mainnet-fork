import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { ethers } from "hardhat";

import { abi as ABI } from "./Uniswapv2RouterABI.json";

export async function deployUniswapv2RouterFixture(): Promise<{ uniswapv2router: Contract }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const UNISWAPV2_ROUTER_ADDRESS: string = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  console.log(signers.map((s) => s.address));
  const uniswapv2router = new ethers.Contract(UNISWAPV2_ROUTER_ADDRESS, ABI, admin);

  return { uniswapv2router };
}
