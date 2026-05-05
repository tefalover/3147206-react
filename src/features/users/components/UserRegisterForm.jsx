import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/shared"
import { getDocumentTypes } from "@/features/users/services/selectService";
import { useEffect, useState } from "react";
import { userShema } from "../schemas/userSchema";
import { Link, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu } from "lucide-react";

export default function UserRegisterForm(){
    const navigate = useNavigate();
    //useState para saber cuando cambia de estado algo, su valor por ejemplo
    const [ documentTypes, setDocumentTypes] =useState([]);
    const [ formData, setFormData] = useState({
        userName:"",
        userEmail:"",
        userPhone:"",
        userDocumentType:"",
        userDocumentNumber:"",
        userPassword:"",

        //(Flags booleanos)
        isStaff: false, //es administrador?
        isActive: true, //está activo?
        isSuperUser: false, //es un superAdmin?

    });
    const [errors, setErrors ] = useState({});

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
}, []);
    // ==================================================
    //              Handle Genérico
    // ==================================================
    /*
        Función que se ejecuta cada vez que cambia el valor de un input del formulario, para que haga el re-render
    */
   const handleChange = (e) => {
    // Se obtiene el nombre del campo y su valor
    const {name, value, type, checked } = e.target; //target es lo que viene cuando se escribe

    setFormData((prev) => ({
        //Se copian todos los valores anteriores del estado
        ...prev,

        //Se actualiza unicamente lo que cambió
        [name]: type === "checkbox" ? checked :  value,
    }));
   };
    // ==================================================
    //              Handle Submit
    // ==================================================
    /*
        Función que se ejecuta cuando se envía el formulario
    */

    const handleSubmit = (e) => {

        e.preventDefault();

        //Se valida el objeto formData usando el esquema definido con Zod
        // safeParse devuelve un objeto indicando si la validacion fue exitosa o no
        const result = userShema.safeParse(formData);

        //Si la validacion falla
        if (!result.success){
            const fieldErrors ={};

            //Zod devuelve los errores en un arreglo llamado issues
            //se recorren para asociar cada error a su campo correspondiente
            result.error.issues.forEach((issue) =>{
                const field = issue.path[0]

                //Se guarda el mensaje de error en el objeto fieldErrors
                fieldErrors[field] = issue.message;
            });
            //Se actualiza el estado de errores para mostrarlos en el formulario
            setErrors(fieldErrors);
            //Se detiene la ejecucion porque el formulario tiene errores
            return;
        }
        //Si la validacion es exitosa se limpian los errores anteriores
        setErrors({});
        //result.data contiene los datos ya validados por Zod
        console.log("Usuario valido:", result.data);
    }

    return(
        <div>
            <h1 className="text-text-primary text-2xl mb-6 text-center pt-12">
                Registro de usuario
            </h1>
            <form className="grid grid-cols-1 items-center gap-6 "
            onSubmit={handleSubmit}
            >
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-6 my-0 mx-auto border p-6 rounded-[6px]">
                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        value={formData.userName}
                        onChange={handleChange}
                        error={errors.userName}
                    />
                    <Input
                        label="Correo"
                        name="userEmail"
                        type="email"
                        placeholder="Ingrese su correo"
                        value={formData.userEmail}
                        onChange={handleChange}
                        error={errors.userEmail}
                    />
                    <Input
                        label="Telefono"
                        name="userPhone"
                        type="tel"
                        placeholder="Ingrese su telefono"
                        value={formData.userPhone}
                        onChange={handleChange}
                        error={errors.userPhone}

                    />
                    <Select
                        label="Tipo de documento"
                        name="userDocumentType"
                        options={documentTypes}
                        value={formData.userDocumentType}
                        onChange={handleChange}
                        error={errors.userDocumentType}
                    />
                    <Input
                        label="Número de documento"
                        name="userDocumenNumber"
                        placeholder="Ingrese su numero de documento"
                        value={formData.userDocumentNumber}
                        onChange={handleChange}
                        error={errors.userDocumentNumber}
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.userPassword}
                        onChange={handleChange}
                        error={errors.userPassword}
                    />
           
                    <Checkbox
                        id="isStaff"
                        name="isStaff"
                        label="Es staff"
                        checked={formData.isStaff}
                        onChange={handleChange}
                    />

                    <Checkbox
                        id="isActive"
                        name="isActive"
                        label="Está activo?"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />
                    <Checkbox
                        id="isSuperUser"
                        name="isSuperUser"
                        label="Es un super administrador?"
                        checked={formData.isSuperUser}
                        onChange={handleChange}
                    />
                    {/* Acciones */}
                    <div className="flex items-end justify-end gap-12">
                        <Button
                            variant="secondary"
                            size="sm"
                            // el navigate -1 lleva a un layout anterior
                            onClick={() => navigate (-1)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                        >
                            Guardar
                        </Button>

                    {/* Icon button */}
                    {/* el link debe de ser el mismo del de rutas */}
                        <Link to="/dashboard">
                        <IconButton 
                            variant ="ghost"
                        >
                            <SquareArrowRightEnter />
                        </IconButton>
                    </Link>
                    </div>
                </div>
                
                
            </form>
            
        </div>
    )
};