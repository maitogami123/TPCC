import { Role } from 'src/roles/entity/role.entity';

export type UserUpdateObject = {
  hashed_password?: string;
  email?: string;
  phone_number?: string;
  role?: Role;
};
