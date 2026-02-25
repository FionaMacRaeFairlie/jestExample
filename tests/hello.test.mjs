import request from "supertest";
import app from "../src/app.js";
test("GET /hello", async () => {
  const r = await request(app).get("/hello");
  expect(r.status).toBe(200);
  expect(r.body.message).toBe("Hello World");
});
