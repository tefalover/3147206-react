import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { IconButton, StatusSwitch, Dropdown, DropdownContent, DropdownItem, DropdownTrigger, SearchField} from "@/shared";
import  logo  from "@/assets/images/logo-1.png";
import { useState } from "react"

export default function Navbar(){
    // Componente de busqueda
    const [search, setSearch] = useState("");

    const handleSearch = (value) => {
        console.log("Buscar:",value)
    };

    const handleClear = () => {
        console.log("Campo limpiado")
    }

    // Estado que controla el Switch
    const [isActive, setIsActive ] = useState(true);

    // Manejador del estado del Switch
    const handleStatusChange = (value) => {
        setIsActive(value);

        // Aqui generalmende va el llamdo a una api
        console.log("Nuevo estado", value) 
        
    }
 
    return(
        <nav className="w-full bg-transparent border-b-2">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* El logo de marca */}
                    <div className=" hidden sm:block items-center">
                        <Link to={"/dashboard/home"} className="text-h1 font-heading ">
                        <img src={logo} alt="Logo" className="h-12"/>
                        </Link>
                    </div>

                    <StatusSwitch
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                        className="hidden sm:inline-flex"
                    />
                    {/* Links de navegacion */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/auth"} className="hover:text-text-primary transition">Inicio</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Cursos</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Multimedia</Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">Contacto</Link>
                        </li>
                    </ul>
                        {/* Seccion de la derecha: busqueda + usuario */}
                  
                            {/* Input del buscador*/}
                            {/* <input
                                type="text"
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:right-2 focus:ring-text-primary"
                            /> */}
                            <SearchField
                                value={search}
                                onChange={setSearch}
                                onSubmit={handleSearch}
                                onClear={handleClear}
                                placeholder="Buscar productos..."
                                size="md"
                                variant="outlined"
                                className="w-76"
                            ></SearchField>
                        </div>
                       
                        <div className="p-10">
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton arialLabel="Menu de usuario">
                                        <User />
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="/dashboard/auth" className="block w-full">
                                            Cerrar sesion
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                            Panel de control
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard/userList" className="block w-full">
                                            Gestión usuarios
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem
                                        onClick={() => {
                                            console.log("Cerrar sesión");
                                        }}
                                    >
                                        Cerrar sesión
                                    </DropdownItem>
    
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </div>
        </nav>
    )
}