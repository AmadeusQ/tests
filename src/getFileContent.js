const fs = require("fs/promises");

/**
 * @param filePath {string} Path to a file to read
 * @return {Promise<string>} File content
 */
function getFileContent(filePath) {
  return fs.readFile(filePath, {
    encoding: "utf-8",
  });
}

module.exports = getFileContent;
