import { expect } from "chai";
import { ethers } from "hardhat";

export function shouldBehaveLikeUniswapV2Router(): void {
  it("should equate the WETH address", async function () {
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    expect(await this.uniswapv2router.WETH()).to.equal(WETH);
  });
  it("compare DAI price from USDT using getAmountsOut", async function () {
    const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const amountIn = ethers.utils.parseUnits("1", 6);
    const amountsOut = await this.uniswapv2router.getAmountsOut(amountIn, [USDT, DAI]);
    expect(amountsOut[1])
      .to.lessThanOrEqual(ethers.utils.parseUnits("1.1", 18))
      .to.greaterThanOrEqual(ethers.utils.parseUnits("0.99", 18));
  });
}
