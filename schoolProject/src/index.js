import express from "express";
import courseRouter from "./routes/courses.routes.js";
import studentRouter from "./routes/student.routes.js";

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to School Management API</h1>");
});

// connect our routers to 
app.use("/courses", courseRouter);
app.use("/students", studentRouter);

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const nextPort = port + 1;
      console.log(`Port ${port} is busy. Trying ${nextPort}...`);
      startServer(nextPort);
    } else {
      console.error(error);
      process.exit(1);
    }
  });
};

const PORT = Number(process.env.PORT) || 8080;
startServer(PORT);
