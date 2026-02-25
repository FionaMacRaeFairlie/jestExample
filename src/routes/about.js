import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, "../../public");

const r = Router();
r.get("/about", (req, res) => {
  res.sendFile(path.join(publicPath, "about.html"));
});

export default r;
