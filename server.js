const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// serve frontend
app.use(express.static(path.join(__dirname)));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// important for hosting platforms
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
