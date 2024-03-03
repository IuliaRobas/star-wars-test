import express from "express";

import {
  peopleRoutes,
  planetsRoutes,
  filmsRoutes,
  speciesRoutes,
  vehiclesRoutes,
  starshipsRoutes
} from "./routes";

const app = express();
const PORT = 3000;

const router = express.Router();

router.use(peopleRoutes);
router.use(planetsRoutes);
router.use(filmsRoutes);
router.use(speciesRoutes);
router.use(vehiclesRoutes);
router.use(starshipsRoutes);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
