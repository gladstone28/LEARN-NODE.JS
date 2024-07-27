console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");

describe("", function () {
  it("", function () {
    let appModule;
    try {
      appModule = rewire("../dog.js");
    } catch (e) {
      expect(
        true,
        "Try checking your code again. You likely have a syntax error."
      ).to.equal(false);
    }

    let module;
    try {
      module = appModule.__get__("module");
    } catch (e) {
      expect(
        true,
        "Something went wrong! Try checking your code again."
      ).to.equal(false);
    }
    expect(
      module.exports,
      "Did you assign the `Dog` class as the value of `module.exports`?"
    ).to.be.a("function");
    let doggy = new module.exports("test", 5);
    expect(
      doggy.name,
      "Did you assign the `Dog` class as the value of `module.exports`?"
    ).to.equal("test");
  });
});
