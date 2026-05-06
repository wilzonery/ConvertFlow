const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files (if your index.html is in same folder)
app.use(express.static(path.join(__dirname)));

// Main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Important for hosting platforms like Northflank
app.listen(PORT, "0.0.0.0", () => {
  console.log(`ConvertFlow running on port ${PORT}`);
});
