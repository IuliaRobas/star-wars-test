import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

const getPeople = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let peopleUrl = `${apiUrl}/people`;
    if (searchQuery) {
      peopleUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(peopleUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

const getPersonById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/people/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export { getPeople, getPersonById };
