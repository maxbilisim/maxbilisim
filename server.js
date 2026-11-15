const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", app: "Max Bilisim" });
});

app.get("/api/status", (_req, res) => {
  res.json({ name: "Max Bilisim", status: "starting", message: "Website server is running." });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Max Bilisim listening on port ${PORT}`);
});
