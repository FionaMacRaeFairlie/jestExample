import express from "express";
import aboutRouter from "./routes/about.js";
import helloRouter from "./routes/hello.js";
import formRouter from "./routes/form.js";

import { auth } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.get("/private", auth, (req, res) => res.json({ ok: true }));
app.use("/hello", helloRouter);
app.get("/about", aboutRouter);
app.get("/form", formRouter);
app.get("/", (req, res) => res.send("Hello World!"));

// A route used in async error tests (define it here, not inside tests)
app.get("/boom", async (req, res, next) => {
  try {
    throw new Error("fail");
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

export default app;
