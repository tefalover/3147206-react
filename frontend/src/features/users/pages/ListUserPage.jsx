import {DataTable} from "@/shared/"
import { userColumns } from "../table/usersColumns"
import { users } from "../data/users.js"
import { Button } from "../../../shared/index.js"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReportConfigModal from "../reports/components/ReportConfigModal.jsx";


export default function ListUserPage() {
  const navigate = useNavigate();

  // Estado para el boton
  const[isReportModalOpen, setIsReportModalOpen] = useState(false)
  return (
    <div className="p-6" >
        <div className="flex flex-1 justify-end gap-4 ">
            <Button
                variant="primary"
                size="md"
                onClick={() => setIsReportModalOpen(true)}
                >
                Reportar usuario
            </Button>
            <Button
                variant="primary"
                size="md"
                onClick={() => navigate("/dashboard/create-user")}
            >
                Crear usuarios
                
            </Button>
        </div>

        

      <h1 className="text-xl font-semibold mb-4">
        Usuarios
      </h1>


      <DataTable
        data={users}
        columns={userColumns}
      />
      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      ></ReportConfigModal>


    </div>
  )
}
