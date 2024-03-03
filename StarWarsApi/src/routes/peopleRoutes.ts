import express from "express";
import { getPeople, getPersonById } from "../controllers";

const peopleRoutes = express.Router();

peopleRoutes.get("/api/people", getPeople);
peopleRoutes.get("/api/people/:id", getPersonById);

export default peopleRoutes;
