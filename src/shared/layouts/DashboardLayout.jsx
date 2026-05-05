import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/bg-1.jpg";
import { CreateUserPage } from "@/features/users";
import { CloudBackup } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Navbar } from "@/shared"
import { LoginForm } from "@/features/auth";

export default function DashboardLayout() {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo con imagen */}
            <div className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            <IconButton>

                <CloudBackup
                    onClick={() => navigate(-1)}
                ></CloudBackup>
            </IconButton>

            <Navbar />
                {/* Contenido dinamico de las paginas */}
            <main>
 
                <Outlet />

            </main>

        </div>
    )
}

// Layout: diferentes diseños como plantillas que utilizamos en nuestro proyecto, los hijos del layout son los mismos autlos