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
    // 1. Load the user along with organizerData relation
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ["organizers"], // ensure nested data is loaded
    });
  
    if (!user) return null;
  
    // 2. Merge top-level user properties
    this.userRepository.merge(user, userData);
  
    // 3. Handle nested organizerData updates
    if (userData.organizers) {
      // Ensure organizerData exists before merging
      user.organizers = {
        ...user.organizers,
        ...userData.organizers,
      };
    }
  
    // 4. Save updated user
    await this.userRepository.save(user);
  
    // 5. Return the updated record (optional, for confirmation)
    return this.findById(id);
  }
  

  

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.userRepository.delete({ id });
    return result.affected !== 0;
  }
}