import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

const getSpecies = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let speciesUrl = `${apiUrl}/species`;
    if (searchQuery) {
      speciesUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(speciesUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

const getSpeciesById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/species/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export { getSpecies, getSpeciesById };
