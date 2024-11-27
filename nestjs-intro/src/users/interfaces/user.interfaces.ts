import { Role } from '../enums/users.enum';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}
