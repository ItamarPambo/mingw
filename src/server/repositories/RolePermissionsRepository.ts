import { RolePermissionModel } from "../entities/RolePermissions";
import { HttpExceptionErrors } from "../errors/httpExceptionsErrors";

export interface RolePermissionsRepositoryInterface {
    bringValidPermissions(
        role_id: string, 
        permitions: string[]

    ): Promise<Record<string, string[]> | HttpExceptionErrors>;

    save(
        {role_id, permissions} :RolePermissionModel
        
    ): Promise<void>;
};