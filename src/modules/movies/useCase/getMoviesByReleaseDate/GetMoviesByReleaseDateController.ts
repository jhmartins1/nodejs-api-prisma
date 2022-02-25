import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./getMoviesByReleaseDateUseCase";

export class GetMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {
    const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase();
    const result = await getMoviesByReleaseDateUseCase.execute();

    return res.status(201).json(result);
  }
}
