// routes/product.routes.js

import express from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/product.controller.js";

const router = express.Router();

// CRUD products

// get all products
router.get("/", getAll);

// get by id
router.get("/:id", getById);

// create
router.post("/products", create);

// update
router.put("/:id", update);

// delete
router.delete("/:id", remove);

export default router;