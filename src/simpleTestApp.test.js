const startServer = require("./simpleTestApp");
const supertest = require("supertest");

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(() => {
  server.stop();
});

describe("simpleTestApp", function () {
  it("GET / should return an empty array", async () => {
    const response = await supertest(server).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it("POST / should add a task to the list", async () => {
    const task = {
      title: "task title",
      description: "task description",
    };
    const response = await supertest(server).post("/").send(task);
    expect(response.statusCode).toEqual(200);

    const getResponse = await supertest(server).get("/");
    expect(getResponse.statusCode).toEqual(200);
    expect(getResponse.body).toEqual(expect.arrayContaining([task]));
  });

  it("POST / should return 400 status code if validations fail", async () => {
    const task = {
      title: "qw",
      description: 10,
    };
    const response = await supertest(server).post("/").send(task);

    expect(response.statusCode).toEqual(400);
    expect(response.body.errors.length).toEqual(2);
  });
});
