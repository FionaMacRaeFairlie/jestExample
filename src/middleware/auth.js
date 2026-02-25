export function auth(req, res, next) {
  if (req.headers["x-api-key"] !== "secret")
    return res.status(401).json({ error: "unauthorized" });
  next();
}
