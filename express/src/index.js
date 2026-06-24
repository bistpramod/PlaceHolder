import http from "http";
import express from "express";

const app = express();
const PORT = 3000;

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});
app.get("/users", (req, res) => {
  //   res.send("<h1>All Users</h1>");
    res.json({
      message: "users fetched",
      success: true,
      data: [
        {
          _id: 1,
          name: "John Doe",
          email: "john@gmail.com",
        },
      ],
    });
  });

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});