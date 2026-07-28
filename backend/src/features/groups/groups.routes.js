import { Router} from "express";
import { groupsController } from "./groups.controller.js"; //Poner atención en poner .js para hallar las rutas


const router = Router();

router.get("/", groupsController.getAll);

router.get("/:groupId/permissions", groupsController.getGroupPermissionsByGroupId);
router.put("/:groupId/permissions", groupsController.updatePermissions);

export default router;

// Despues de este va el app, y luego la base de datos
