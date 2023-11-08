const findText = require("./findText");
const getFileContent = require("./getFileContent");

jest.mock("./getFileContent");

describe("findText", function () {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return true if file contains text", async () => {
    getFileContent.mockResolvedValue("Hello world");
    const result = await findText("filepath/file", "world");
    expect(result).toEqual(true);
  });

  test("should return false if file does not contain text", async () => {
    getFileContent.mockResolvedValue("Hello world");
    const result = await findText("filepath/file", "randomWord");
    expect(result).toEqual(false);
  });

  test("should throw error if getFileContent rejects", async () => {
    getFileContent.mockRejectedValue(new Error());
    await expect(findText("filepath/file", "randomWord")).rejects.toBeInstanceOf(Error);
  });
});
