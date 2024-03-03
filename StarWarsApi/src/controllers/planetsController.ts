import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

const getPlanets = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let planetsUrl = `${apiUrl}/planets`;
    if (searchQuery) {
      planetsUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(planetsUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

const getPlanetById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/planets/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export { getPlanets, getPlanetById };
