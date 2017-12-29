import * as assert from "power-assert";

describe("Test Suite 1", () => {
    it("Test A", () => {
        assert.ok(true, "This shoudn't fail");
    });

    it("Test B", () => {
        assert.ok(1 === 1, "This shoudn't fail");
        assert.ok(false, "This shokd fail");
    });
});
