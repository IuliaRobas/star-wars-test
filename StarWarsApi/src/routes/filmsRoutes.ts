import express from "express";
import { getFilms, getFilmById } from "../controllers";

const filmsRoutes = express.Router();

filmsRoutes.get("/api/films", getFilms);
filmsRoutes.get("/api/films/:id", getFilmById);

export default filmsRoutes;
