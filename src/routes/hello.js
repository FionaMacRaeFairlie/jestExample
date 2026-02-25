import { Router } from "express";
const r = Router();
r.get("/", (req, res) => res.json({ message: "Hello World" }));
export default r;
