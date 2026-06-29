import express from "express";

const router = express.Router();
const users = [];

//! CRUD users
//* get all users
router.get("/",getAll)

export default router;