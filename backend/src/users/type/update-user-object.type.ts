import { Role } from 'src/common/enums';

export type UserUpdateObject = {
  hashed_password?: string;
  email?: string;
  phone_number?: string;
  role?: string;
};
