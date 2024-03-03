import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

const getStarships = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let starshipsUrl = `${apiUrl}/starships`;
    if (searchQuery) {
      starshipsUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(starshipsUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

const getStarshipById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/starships/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export { getStarships, getStarshipById };
