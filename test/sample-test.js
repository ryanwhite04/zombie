const { expect } = require("chai");

describe("Zombie Factory", function() {
  it("It should show 16 DNA Digits", async function() {
    const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
    const zombieFactory = await ZombieFactory.deploy();
    
    await zombieFactory.deployed();
    expect(await zombieFactory.dnaDigits()).to.equal(16);

  });
});
