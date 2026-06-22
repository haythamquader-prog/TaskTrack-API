const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("TaskTrack API is running");
});

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Finish Assignment" },
    { id: 2, title: "Study Docker" }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`TaskTrack API is running`);
});