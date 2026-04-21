/**
 * Componente button
 *
 * Boton reutilizable con variables visuales y tamaños controlados, área interactiva mpinima de 48px
 * */
import { Children } from "react";

 

export default function Button({
    variant = "primary",//Define el estilo visual
    size = "md",        //Define tamaño visual
    type = "button",    //Tipos de botón (button, submit, reset)
    children,           //Conteniso interno del botón(texto, ícono)
    ...props            //Propiedades adicionales(onClick, disable, etc)
}){

    const variants = {
        primary: "bg text-brand border text-h1",
        secondary: "bg-background border border-border text-text-inverse hover:bg-surface-muted",
    };
    const sizes = {
        sm:`
            h-9 px-3
            before:absolute before:content['']
            before:-inset-y-[6px] before:-inset-x-[0px]
        `,
        md:`
            h-10 px-4
            before:absolute before:content['']
            before:-inset-y-[5px] before:-inset-x-[0px]
        `
    }

    return(

        <button 
            className= {`
                relative
                inline-flex items-center justify-center
                rounded-md
                transition-colors
                ${variants[variant]}
                ${sizes[size]}
                ${type}
                `}
                
                {...props}
                >
                
                {children}


        </button>
    )
}