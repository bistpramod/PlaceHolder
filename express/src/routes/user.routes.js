import express from "express";

const router = express.Router();
const users = [];

// Helper function to keep responses consistent.
const sendResponse = (res, statusCode, message, success, data = null) => {
  res.status(statusCode).json({
    message,
    success,
    data,
  });
};

// GET /users
// Show all users currently stored in memory.
router.get("/", (req, res) => {
  const query = req.query;
  console.log("Query parameters received:", query);

  sendResponse(res, 200, "users fetched successfully", true, users);
});

// GET /users/:id
// Find a specific user by ID.
router.get("/:id", (req, res) => {
  const userId = Number(req.params.id);

  if (Number.isNaN(userId)) {
    sendResponse(res, 400, "invalid user id", false, null);
    return;
  }

  const user = users.find((item) => item._id === userId);

  if (!user) {
    sendResponse(res, 404, "user not found", false, null);
    return;
  }

  sendResponse(res, 200, `user with id ${userId} fetched`, true, user);
});

// POST /users
// Create a new user from the request body.
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    sendResponse(
      res,
      400,
      "name, email, and password are required",
      false,
      null,
    );
    return;
  }

  const newUser = {
    _id: users.length + 1,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  sendResponse(res, 201, "user created successfully", true, newUser);
});

// PUT /users/:id
// Update an existing user with the data provided in the request body.
router.put("/:id", (req, res) => {
  const userId = Number(req.params.id);

  if (Number.isNaN(userId)) {
    sendResponse(res, 400, "invalid user id", false, null);
    return;
  }

  const index = users.findIndex((item) => item._id === userId);

  if (index === -1) {
    sendResponse(res, 404, "user not found", false, null);
    return;
  }

  const updatedUser = { ...users[index] };

  if (req.body.name !== undefined) updatedUser.name = req.body.name;
  if (req.body.email !== undefined) updatedUser.email = req.body.email;
  if (req.body.password !== undefined) updatedUser.password = req.body.password;

  users[index] = updatedUser;
  sendResponse(res, 200, "user updated successfully", true, users[index]);
});

// DELETE /users/:id
// Remove a user from the in-memory list.
router.delete("/:id", (req, res) => {
  const userId = Number(req.params.id);

  if (Number.isNaN(userId)) {
    sendResponse(res, 400, "invalid user id", false, null);
    return;
  }

  const index = users.findIndex((item) => item._id === userId);

  if (index === -1) {
    sendResponse(res, 404, "user not found", false, null);
    return;
  }

  users.splice(index, 1);
  sendResponse(res, 200, "user deleted successfully", true, null);
});

export default router;
