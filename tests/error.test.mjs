import request from "supertest";
import app from "../src/app.js";
// app.get("/boom", async (req, res, next) => {
//   try {
//     throw new Error("fail");
//   } catch (e) {
//     next(e);
//   }
// });
test("500 error", async () => {
  const r = await request(app).get("/boom");
  expect(r.status).toBe(500);
});
