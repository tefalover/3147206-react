// frontend/src/features/auth/services/authService.js
// Consumir API login 

const API_URL = "http://localhost:4000/api/auth";

export async function login(userData ) {
    const response = await fetch (`${API_URL}/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userEmail: userData.userEmail,
            userPassword: userData.userPassword,
        }),

    });
    if (!response.ok){
        const error = await response.json();
  
        throw new Error(error.error || "Error login");
    }
    return response.json();
}
