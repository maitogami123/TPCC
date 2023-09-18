import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entity/role.entity';
import { RoleInput } from './dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards';

@Resolver()
export class RolesResolver {
  constructor(private roleService: RolesService) {}

  @UseGuards(AuthGuard())
  @Mutation((returns) => Role)
  createRole(@Args('RoleInput') roleInput: RoleInput): Promise<Role> {
    return this.roleService.createRole({
      name: roleInput.name.toLocaleUpperCase(),
      description: roleInput.description,
    });
  }

  @Query((returns) => Role)
  getRole(@Args('roleId') roleId: number): Promise<Role> {
    return this.roleService.getRole(roleId);
  }

  @Mutation((returns) => Role)
  updateRole(
    @Args('roleId') roleId: number,
    @Args('updateRoleInput') updateRoleInput: RoleInput,
  ): Promise<Role> {
    return this.roleService.updateRole(roleId, updateRoleInput);
  }

  @Mutation((returns) => Boolean)
  deleteRole(@Args('roleId') roleId: number): Promise<boolean> {
    return this.roleService.deleteRole(roleId);
  }
}
