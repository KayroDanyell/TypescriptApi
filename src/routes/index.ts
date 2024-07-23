import express from "express";
import petRouter from "./petRouter"

const router = function router(app:express.Router) {
    app.use("/pets",petRouter);
}

export default router;
