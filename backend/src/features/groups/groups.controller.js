// Recibe las peticiones http para realizar las acciones
import { getGroupPermissions } from "../../../../frontend/src/features/access/services/permissionService.js";
import { groupsService } from "./groups.service.js"; //Poner atención en poner .js para hallar las rutas , (especificar la extención que se esta utilizando)


export const groupsController = {
    async getAll(req, res) {
        try{
            const groups = await groupsService.getAll();

            res.json(groups);
        }catch (error) {
            console.log(error);

            res.status(500).json({
                error: "Error obtenido grupos",
            });
        }
    },

    // Permisos de grupo
    async getGroupPermissionsByGroupId(req, res) {
        try {
            // Consultamos en la base de datos
            // Number: clase propia de js
            const groupId = Number(req.params.groupId);

            const permissions = await groupsService.getGroupPermissionsByGroupId(groupId);

            res.json(permissions)
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Error obtenido permisos del grupo",
            });
        }
    },

    // Actualizar permisos de grupo
    async updatePermissions(req, res) {
        try {
            const groupId = Number(req.params.groupId);
            const { permissionIds } = req.body;

            await groupsService.updatePermissions(groupId, permissionIds)

            res.status(200).json({
                message: "Permisos actualizados correctamente",
            });
        }catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Error actualizando permisos del grupo",
            });
        }
    },
};
// Tercero