process.env.NODE_ENV = "test";

describe("API Tests", () => {
  it("error on empty search param", async () => {
    try {
      const requestUrl = encodeURI("http://localhost:3000/api/items");
      await fetch(requestUrl);
    } catch (e) {
      expect(e).toEqual({
        error: "Search parameter is required",
      });
    }
  });
});
