const express = require("express");
const makeStoppable = require("stoppable");
const http = require("http");
const bodyParser = require("body-parser");
const { check } = require("express-validator");
const { validationResult } = require("express-validator");

/**
 * @desc Performs check of validation result will reject the request with 400 (Bad Request) if the validation result
 * contains an error, otherwise calls next.
 * @param req
 * @param res
 * @param next
 */
function validate(req, res, next) {
  const { errors } = validationResult(req);

  if (errors.length > 0) {
    return res.status(400).json({
      errors
    });
  }

  return next();
}


const app = express();

app.use(bodyParser.json());

const mockDb = {
  tasks: [],
};

app.get("/", (req, res) => {
  res.json(mockDb.tasks).end();
})

app.post(
  "/",
  [
    check("title")
      .exists()
      .isString()
      .isLength({ min: 3 })
      .trim()
      .escape()
      .withMessage("Minimal length for task name is 3 letter!"),
    check("description")
      .exists()
      .isString()
      .trim()
      .escape()
      .withMessage("Description field is required!"),
    validate
  ],
  (req, res) => {
  mockDb.tasks.push(req.body);

  res.end();
});

const server = makeStoppable(http.createServer(app));

module.exports = async () => {
  return new Promise((resolve) => {
    server.listen(0, () => {
      console.log('Express server is listening on http://localhost:3000');
      resolve(server);
    });
  });
}
