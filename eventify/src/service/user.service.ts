import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ["organizers", "bookings", "reviews", "authTokens", "otpTokens"],
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      relations: ["organizers", "bookings", "reviews", "authTokens", "otpTokens"],
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ["organizers"],
    });
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return null;

    if ("password" in userData) {
      delete userData.password;
    }

    this.userRepository.merge(user, userData);
    await this.userRepository.save(user);
    return this.findById(id);
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.userRepository.delete({ id });
    return result.affected !== 0;
  }
}