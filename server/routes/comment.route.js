import express from "express";

const router = express.Router();

router.get("/comment", (req, res) => {
    res.status(200).send("Comments router");
});

export default router;