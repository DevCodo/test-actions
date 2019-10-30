describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {

    function sampleFunction(x: string): string {
      return x + x;
    }

    expect(sampleFunction("hello")).toEqual("hellohello");
  });
});