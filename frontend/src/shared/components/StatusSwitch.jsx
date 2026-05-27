// Hooks de React para manejar estado y efectos
import { useState, useEffect } from "react";

// Iconos usados dentro del switch
import { Check, X } from "lucide-react";

//  Componente reutilizable para representat un switch de estado (activo/inactivo)
export default function StatusSwitch({
    checked = false,   // Valor inicial del switch (controlado desde el padre)
    onChange,          // Callback que se ejecuta cuendi cambia el estado
    disabled = false,  //Permite deshabilitar lla interacción
    size = "md",      //Tmaño del switch (sm, md, lg)
    className
}){
    // Estado interno del componete
    //  Se inicia con el valor recibido desde la prop "checked"
    const [isActive, setIsActive] = useState(checked);

    // Effecto que sincronisa el estado interno con el valor recibido desde la prop "checked"

    useEffect(() => {
        setIsActive(checked);
    }, [checked])

    // Función que mane el cambio del switch
    const handleToggle = () => {

        // Si el switch está deshabilitado no permite interaccion
        if (disabled) return;

        // Calcula el nuevo estado (invierte el valor actual)
        const newValue = !isActive;

        // Actualiza el estado interno 
        setIsActive(newValue)

        // Si existe un callback onChange, se ejecuta
        // enviendo el nuevo valor al componente padre
        if (onChange) {
            onChange(newValue);
        }
    };
        
        const sizes = {
            sm:"h-5 w-9",
            md: "h-6 w-11",
            lg: "h-7 w-14"
        }

        // Clases de tamaño del "knob" (el círculo que se mueve)
        const knobSizes = {
            sm: "h-4 w-4",
            md: "h-5 w-5",
            lg: "h-6 w-6",
        };


        return(

            //  Botón que funciona como switch
            <button
                onClick={handleToggle} //Evento que cambia el estado
                disabled={disabled}    //Permite deshabilitar el botón
                className={`

                    // Posición base del switch 
                    relative items-center

                    // forma redondea el contenedpr 
                    rounded-full transition-colors

                    // tamaño dinámico según la prop "size
                    ${sizes[size]}

                    // Color dependiendo del estado
                    ${isActive ? "bg-green-500" : "bg-gray-300"}

                    // Estilo cuando está deshabilitado
                    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}

                    ${className}
                    
                `}
            >
                {/* // Knob del switch (el círculo que se mueve de izquierda a derecha) */}
                <span
                     className={`
                        absolute left-0.5 flex items-center justify-center

                        // Forma del knob 
                        rounded-full bg-white shadow

                        // Animación sw  movimiento 
                        transition-transform

                        // Tamño dinammico del  knod
                        ${knobSizes[size]}

                        // Posicion de pendiendo del estado
                        ${isActive ? "translate-x-full" : "translate-x-0"}
                        
                        `}
                 >
                    {/* Icono que cambia dependiendo del estafo
                        -Activo
                        -Inactivo
                     */}
                    {isActive ? (
                    <Check size={12} className="text-green-600"/>
                    ) : (
                        <X size={12} className="text-gray-500"/>    
                    )}
                 </span>

            </button>

            
        )
    }
