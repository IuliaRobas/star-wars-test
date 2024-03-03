import express from "express";
import { getVehicles, getVehicleById } from "../controllers";

const vehiclesRoutes = express.Router();

vehiclesRoutes.get("/api/vehicles", getVehicles);
vehiclesRoutes.get("/api/vehicles/:id", getVehicleById);

export default vehiclesRoutes;
