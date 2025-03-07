const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { marked } = require("marked");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/convertMarkdown", (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({ error: "Markdown data is required" });
  }
  const html = marked(markdown);
  res.json({ html });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
