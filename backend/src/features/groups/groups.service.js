import { getGroupPermissions } from "../../../../frontend/src/features/access/services/permissionService.js";
import { groupsRepository } from "./groups.repository.js"; //Poner atención en poner .js para hallar las rutas

export const groupsService = {
    async getAll() {
        return await groupsRepository.getAll();
    },

    async getGroupPermissionsByGroupId(groupId){
        return await groupsRepository.getPermissionsByGroupId(groupId);
    },

    async updatePermissions(groupId, permissionIds) {
        return await groupsRepository.updatePermissions(groupId, permissionIds);
    },
};
// segundo