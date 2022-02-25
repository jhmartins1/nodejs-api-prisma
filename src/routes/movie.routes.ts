import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCase/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCase/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
