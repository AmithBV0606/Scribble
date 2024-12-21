import express from "express";

const router = express.Router();

router.get("/post", (req, res) => {
    res.status(200).send("Post router");
});

export default router;