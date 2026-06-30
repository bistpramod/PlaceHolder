import express from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/category.controller.js";

const router = express.Router();

// CRUD categories

// get all categories
router.get("/", getAll);

// get by id
router.get("/:id", getById);

// create
router.post("/", create);

// update
router.put("/:id", update);

// delete
router.delete("/:id", remove);

export default router;