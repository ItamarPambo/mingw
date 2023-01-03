import {
  findPermissionFunctionsReturnsTypes,
  PermissionRepositoryInterface,
} from "../PermissionRepository";
import { PermissionModel } from "../../entities/Permission";
import { prisma } from "../../../client/client";

export class SqlitePermitionRepository implements PermissionRepositoryInterface {
  async findByName(name: string): Promise<findPermissionFunctionsReturnsTypes> {
    return await prisma.permition.findUnique({
      where: { name },
    });
  }

  async save({ name }: PermissionModel): Promise<void> {
    await prisma.role.create({
      data: { name },
    });
  }
}
