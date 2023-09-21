import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entity/role.entity';
import { Repository } from 'typeorm';
import { RoleInput } from './dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async createRole(roleInput: RoleInput): Promise<Role> {
    const newRole = new Role();
    newRole.name = roleInput.name;
    newRole.description = roleInput.description;
    try {
      const role = await this.roleRepository.save(newRole);
      return role;
    } catch {
      throw new ConflictException('Role already exist!');
    }
  }

  async getRole(id: number): Promise<Role> {
    try {
      const role = await this.roleRepository.findOneOrFail({
        where: {
          id: id,
        },
      });
      return role;
    } catch {
      throw new NotFoundException('Role not found');
    }
  }

  async updateRole(roleId: number, updateRoleInput: RoleInput): Promise<Role> {
    const role = await this.roleRepository.findOneByOrFail({ id: roleId });

    if (role.id !== roleId) {
      throw new NotFoundException('Role not found');
    }

    role.name = updateRoleInput.name;
    if (updateRoleInput.description)
      role.description = updateRoleInput.description;

    return this.roleRepository.save(role);
  }

  async deleteRole(roleId: number) {
    try {
      await this.roleRepository.softDelete({ id: roleId });
    } catch {
      throw new ConflictException();
    }
    return true;
  }

  async isValidRole(roleName: string): Promise<boolean> {
    try {
      const role = await this.roleRepository.findOneByOrFail({
        name: roleName,
      });
      return !!role;
    } catch {
      throw new NotFoundException('Role not found');
    }
  }
}
