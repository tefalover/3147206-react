import { createBrowserRouter, Navigate } from "react-router-dom";
//calltoaction invita a la persona no registrada a hacer algo
import { AuthLayout, DashboardLayout }  from "@/shared/";
import { CreateUserPage } from "@/features/users";
import { LoginForm } from "@/features/auth";

const router = createBrowserRouter([
    {   
        path: "/",
        //Por defecto me lleva al auth
        element: <Navigate to="/dashboard" replace/>,
    },
    {   
        path: "/auth",
        element: <AuthLayout/>,
        children: [{ index: true}],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        // Nested Routes
        children: [
            {index: true, element: <CreateUserPage />},
            {path: "/dashboard/auth", element: <LoginForm  />},
            {path: "usuarios",element: <h1>Usuarios</h1>},
            {path: "productos",element: <h1>Productos</h1>}
        ],
    }
]);

export default router;