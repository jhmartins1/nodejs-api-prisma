import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDto";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO) {
    // Check if user exists
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }
    // Create User
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return user;
  }
}
