import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeUniswapV2Router } from "./Uniswapv2.behavior";
import { deployUniswapv2RouterFixture } from "./Uniswapv2.fixture";

describe("Uniswap v2 tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Uniswapv2Router", function () {
    before(async function () {
      const { uniswapv2router } = await this.loadFixture(deployUniswapv2RouterFixture);
      this.uniswapv2router = uniswapv2router;
    });
    shouldBehaveLikeUniswapV2Router();
  });
});
