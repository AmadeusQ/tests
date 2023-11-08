const getFileContent = require("./getFileContent");

/**
 * @param filePath {string} Path to a file in which we want to search a text.
 * @param textToFind {string} Text that we search in a file
 * @returns {Promise<boolean>} that resolves to boolean that means whether a file contains the
 * text or not.
 */
async function findText(filePath, textToFind) {
  const content = await getFileContent(filePath);

  return content.includes(textToFind);
}

module.exports = findText;
