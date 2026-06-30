import express from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/product.controller.js";

const router = express.Router();

const middle = (req,res,next) =>{
  console.log("get all products mid");
  next();
}


//! crud products
//* get all products

router.get("/", getAll);

//* get by id
router.get("/:id", getById);

//* create
router.post("/products", create);

//* update
router.put("/:id", update);

//* delete
router.delete("/:id", remove);

export default router;