import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/bg-2.jpg";
import { CreateUserPage } from "@/features/users";
import { LoginForm } from "@/features/auth";

export default function AuthLayout() {
    return (
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo con imagen */}
            <div className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* outlet inyecta los elemntos hijos de las routes */}
            {/* <Outlet /> */}

            <main>
                < LoginForm />

                <Outlet />
            </main>
            
        </div>
    )
}