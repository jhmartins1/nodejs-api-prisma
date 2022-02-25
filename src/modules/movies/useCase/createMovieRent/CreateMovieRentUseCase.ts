import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO) {
    // Check if movie
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movieExists) {
      throw new AppError("Movie does not exists");
    }
    // Check that the movie is not rented by someone else
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId: movieId,
      },
    });
    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }
    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userExists) {
      throw new AppError("User does not exists");
    }
    // Create a rent
    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
