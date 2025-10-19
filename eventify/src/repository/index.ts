import { AppDataSource } from "../config/dataSource.config";
import { User } from "../entity/user.entity";
import { Organizer } from "../entity/organizer.entity";

import { UserService } from "../service/user.service";
import { OrganizerService } from "../service/organizer.service";

export const userRepository = new UserService(
  AppDataSource.getRepository(User)
);

export const organizerRepository = new OrganizerService(
  AppDataSource.getRepository(Organizer)
);