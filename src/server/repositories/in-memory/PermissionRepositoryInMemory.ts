import {
  findPermissionFunctionsReturnsTypes,
  PermissionRepositoryInterface,
} from "../PermissionRepository";
import { PermissionModel } from "../../entities/Permission";
import { prisma } from "../../../client/client";

export class PermissionRepositoryInMemory
  implements PermissionRepositoryInterface
{
  async findByIds(ids: string[]): Promise<string[] | null> {
    const validIds: string[] = [];

    ids.forEach(async id => {

      const permission = await prisma.permission.findUnique({ where: {id} });

      permission ? validIds.push(permission.id):"";
    });

    return validIds;
  };

  async findByName(name: string): Promise<findPermissionFunctionsReturnsTypes> {
    return await prisma.permission.findUnique({
      where: { name },
    });
  };

  async save({ name }: PermissionModel): Promise<void> {
    await prisma.permission.create({
      data: { name },
    });
  };
}
