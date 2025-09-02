import assert from "node:assert";
import { test } from "node:test";
import { foo } from "../dist/index.js";

await test("sanity check", async () => {
    assert.strictEqual(foo(), "hello world");
})