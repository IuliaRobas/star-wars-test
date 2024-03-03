import { Request, Response } from "express";
import axios from "axios";
import { InternalServerError, apiUrl } from "../constants";

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search as string;
    let vehiclesUrl = `${apiUrl}/vehicles`;
    if (searchQuery) {
      vehiclesUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(vehiclesUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/vehicles/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: InternalServerError });
  }
};
