// Fuente de datos de usuarios  (mock o fuente centralizada)
import {users} from "../../data/users";

// Utiidad ara transformar datos en dataset de reporte
import { buildReportDataset } from "../utils/buildReportDataset";

// Servicios de exportacion 
import { generateExcelReport } from "./generateExcelReport";
import { generatePdfReport } from "./generatePdfReport";

// Caso de uso: orquestador de generación de reportes de usuarios
// Patron:Applicacion Sercive (coordina utilidades y servicios)
export function generateUserReport({
    format,        //"excel" | "pdf"
    selectedFields, // Campos seleccionados por el usuario
    scope,         // Alcance del reporte
    documentNumber // Filtro opcional
}) {
    // Construccion del dataset (desaoplado de la UI )
    const { headers, rows } = buildReportDataset({
        users,
        selectedFields,
        scope,
        documentNumber
    });

    //Validacion: evita generar archivos vacios
    if (!rows.length) {
        alert("No hay datos para generar el reporte.");
        return; // Corte de ejecucion
    }

    // GGeneracion de timestamp para nombreas unicos de archivo (YYYY-MM-DD)
    // toISOSting(): convierte una fecha a formato
    const timestamp = new Date().toISOString().slice(0,10)

    //Selección de estrategia de exportación según formato
    if (format === "excel"){
        generateExcelReport({
            headers,
            rows,
            fileName: `users-report-${timestamp}.xlsx` 
        });
    }

    if (format === "pdf") {
        generatePdfReport({
            headers,
            rows,
            fileName:  `users-report-${timestamp}.pdf`
        });
    }
}