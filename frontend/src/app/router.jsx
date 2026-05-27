import { createBrowserRouter, Navigate } from "react-router-dom";
//calltoaction invita a la persona no registrada a hacer algo
import { AuthLayout, DashboardLayout }  from "@/shared/";
import { CreateUserPage } from "@/features/users";
import { LoginForm } from "@/features/auth";
import { ListUserPage } from "@/features/users";
import {HomePage} from "@/features/home";



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
            {index: true, element: <h1></h1>},
            {path: "/dashboard/auth", element: <LoginForm  />},
            {path: "/dashboard/userList", element: <ListUserPage  />},
            {path: "/dashboard/home",element: <HomePage/>},
            {path: "/dashboard/create-user",element: <CreateUserPage/>}
        ],
    }
]);

export default router;