import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

// Create the Express application instance.
const app = express();

// Create an HTTP server and attach Express to it.
const server = http.createServer(app);
const PORT = 8080;

// Middleware to parse incoming JSON request bodies.
app.use(express.json());

// Log each incoming request so the flow is easier to understand during development.
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
  next();
});

// Root route to confirm the server is running.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up & running",
    success: true,
  });
});

// Mount the user and product route modules.
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Start the server and listen on port 8080.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Press Ctrl + C to stop the server");
});
