import request from "supertest";
import app from "../src/app.js";
test("401", async () => {
  const r = await request(app).get("/private");
  expect(r.status).toBe(401);
});
test("200", async () => {
  const r = await request(app).get("/private").set("x-api-key", "secret");
  expect(r.status).toBe(200);
});
