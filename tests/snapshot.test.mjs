import request from "supertest";
import app from "../src/app.js";
test("snapshot", async () => {
  const r = await request(app).get("/hello");
  expect(r.body).toMatchSnapshot();
});
