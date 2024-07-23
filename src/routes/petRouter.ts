import express from "express";
import PetController from "../controllers/PetController";

const router = express.Router();

const petController : PetController = new PetController

router.post("/criaPet",petController.storePet)

export default router