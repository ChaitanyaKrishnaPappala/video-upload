import express from "express";
const router = express.Router();
// const controller = require('../controller')

router.get("/test", (req, res) => res.send("hello world!"));

export default router;
