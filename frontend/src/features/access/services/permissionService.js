const API_URL = "http://localhost:4000/api/groups";
const PERMISSIONS_API_URL = "http://localhost:4000/api/permissions"

export async function getGroupPermissions(groupId) {
    const response = await fetch(`${API_URL}/${groupId}/permissions`);

    if (!response.ok){
        throw new Error("Error obtenido permisos");
    }

    return response.json();
}

export async function getAllPermissions() {
    const response = await fetch(PERMISSIONS_API_URL);

    if (!response.ok) {
        throw new Error("Error obtenido catalogo de permisos")
    }

    return response.json();
}