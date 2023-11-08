const getFibonacci = require("./fibonacci");

describe("fibonacci", function () {
    it('should return 0 when called with value <= 0', () => {
        expect(getFibonacci(0)).toEqual(0);
        expect(getFibonacci(-1)).toEqual(0);
        expect(getFibonacci(-2)).toEqual(0);
    })

    it('should return 1 when called with 1', () => {
        expect(getFibonacci(1)).toEqual(1)
    })

    it('should return 5 when called with 5', () => {
        expect(getFibonacci(1)).toEqual(1)
    })
    it('should return 233 when called with 13', () => {
        expect(getFibonacci(13)).toEqual(233)
    })
});
