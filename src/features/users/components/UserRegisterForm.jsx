import { useState, useEffect } from "react";
import { getDocumentTypes } from "../services/selectServices.js";

import {Input, Button, DeleteCounter, DeleteEffect, DeleteCounter2, Select} from "@/shared"
// import DeleteEffect from "../../../shared/components/DeleteEffect"|

export default function UserRegisterForm(){ 

        const [documentTypes, setDocumentTypes] = useState([])

        useEffect(() => {
            getDocumentTypes().then(setDocumentTypes);
        },[]);
    
        //  Handle
        const handleNameChange = (e) =>{
            console.log("Nombre", e.target.value)
        }
        const  handleEmailBlur= (e) =>{
            console.log("Email: ", e.target.value)
        }


    return(
        <div>
            <h1 className="text-gray-950 text-2xl mb-6">
                Registro de usuarios
            </h1>
            
            <form className="grid grid-cols-1 items-center gap-6">
                {/* Input */}
                <div className="grid grid-cols-2 gap-6 my-0  mx-auto">
                    
                    <Input 
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        type="tel"
                        onChange = {handleNameChange}
                        
                    />
                    <Input 
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        type="tel"
                    />
                    <Input 
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        type="tel"
                    />
                    <Input 
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        type="tel"
                    />
            
                    <Input 
                        label="Telefono"
                        placeholder="Ingrese su telefono"
                        type="tel"
                    />
                    <Input 
                        label="Correo"
                        placeholder="Ingrese su correo"
                        type="email"
                        onBlur={handleEmailBlur}
                    />
                    <Input 
                        label="Contraseña"
                        placeholder="Ingrese su contraseña"
                        type="password"
                    />
                    <Input 
                        label="edad"
                        placeholder="Ingrese su edad"
                        type="number"
                    />
                    <Select 
                        label="Tipo de documento"
                        name="documentType"
                        options={documentTypes}
                    />

                    {/*  Action */}

                    <div className="flex items-end justify-end gap-12">

                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="primary"
                            size="sm"
                        >
                            Guardar
                        </Button>

                        
                    </div>
                </div>

            </form>
            {/* <DeleteCounter /> */}
            {/* <DeleteEffect /> */}
            <DeleteCounter2 />

        </div>
            


    )
}
              