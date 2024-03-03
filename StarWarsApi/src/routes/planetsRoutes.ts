import express from "express";
import { getPlanets, getPlanetById } from "../controllers";

const planetsRoutes = express.Router();

planetsRoutes.get("/api/planets", getPlanets);
planetsRoutes.get("/api/planets/:id", getPlanetById);

export default planetsRoutes;
