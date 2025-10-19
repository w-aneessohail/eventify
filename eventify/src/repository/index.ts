import { AppDataSource } from "../config/dataSource.config";
import { User } from "../entity/user.entity";
import { Organizer } from "../entity/organizer.entity";
import { OtpToken } from "../entity/otpToken.entity";
import { UserService } from "../service/user.service";
import { OrganizerService } from "../service/organizer.service";
import { OtpTokenService } from "../service/otpToken.service";
import { AuthTokenService } from "../service/authToken.service";
import { AuthToken } from "../entity/authToken.entity";

export const userRepository = new UserService(
  AppDataSource.getRepository(User)
);

export const organizerRepository = new OrganizerService(
  AppDataSource.getRepository(Organizer)
);

export const otpTokenRepository = new OtpTokenService(
    AppDataSource.getRepository(OtpToken)
  );

  export const authTokenRepository = new AuthTokenService(
    AppDataSource.getRepository(AuthToken)
  );

