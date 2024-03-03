import express from "express";
import { getSpecies, getSpeciesById } from "../controllers";

const speciesRoutes = express.Router();

speciesRoutes.get("/api/species", getSpecies);
speciesRoutes.get("/api/species/:id", getSpeciesById);

export default speciesRoutes;
