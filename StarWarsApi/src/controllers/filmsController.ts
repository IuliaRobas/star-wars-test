import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

export const getFilms = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let filmsUrl = `${apiUrl}/films`;
    if (searchQuery) {
      filmsUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(filmsUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export const getFilmById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/films/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};
