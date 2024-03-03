import express from "express";
import { getStarships, getStarshipById } from "../controllers";

const starshipsRoutes = express.Router();

starshipsRoutes.get("/api/starships", getStarships);
starshipsRoutes.get("/api/starships/:id", getStarshipById);

export default starshipsRoutes;
