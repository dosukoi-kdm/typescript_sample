import * as assert from "power-assert";
import * as AppTalk from "../src/app-talk";

describe("Talk", () => {
    const talk = AppTalk.Talk;
    const hello: string = "Hello!";
    const evening: string = "Good evening!";

    it("GetGreeting Test", () => {
        assert.equal(talk.getGreeting(new Date(2018, 1, 1, 1, 0, 0, 0)), hello);
        assert.equal(talk.getGreeting(new Date(2018, 1, 1, 12, 0, 0, 0)), evening);
    });
});
