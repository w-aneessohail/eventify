import { Request, Response } from "express";
import { userRepository, organizerRepository } from "../repository";
import { UserRole } from "../enum/userRole.enum";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await userRepository.findAll();
    res.status(200).json(users);
  }

  static async getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await userRepository.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { role, organizerDetails, ...userData } = req.body;

      // Organizer role validation
      if (role === UserRole.ORGANIZER && !organizerDetails) {
        return res.status(400).json({
          message: "Organizer details are required when role is ORGANIZER",
        });
      }

      const newUser = await userRepository.createUser({ ...userData, role });

      if (role === UserRole.ORGANIZER && organizerDetails) {
        await organizerRepository.createOrganizer({
          ...organizerDetails,
          user: newUser,
        });
      }

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const updatedUser = await userRepository.updateUser(id, req.body);

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Error updating user" });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deleted = await userRepository.deleteUser(id);

      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user" });
    }
  }
}
