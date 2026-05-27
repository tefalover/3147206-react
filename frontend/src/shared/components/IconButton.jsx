import React from "react";
import clsx from "clsx";

/**
 * IconButton
 * -Area visual (hot area): tamño de boton
 * -Area visible: tamaño del  ucono (Controlado por wrapper y el propio icono)
 */

// forwardRef da acceso al padre
export const IconButton = React.forwardRef(function IconButton(
    {
        children,
        onClick,
        disabled = false,
        clasName = "",
        variant = "default",

        // Tamaños
        hitSize = 48, // px (área táctil)
        iconSize = 24, // px (ícono visible)

        // Accesibilidad (A los usuarios con discacidades)
        ariaLabel,

        // Estados
        isActive = false,

        ...props

    },
    ref
){
    const baseStyles = `
    online-flex items-center justify-center
    rounded-full
    transition-color duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disable:pointer-events-none`;

    const variants = {
        default: `
            text-neutral-700
            hover:bg-neutral-200
            focus-visible:ring-neutral-400
        `,
        ghost:`
            text-neutral-600
            hover:bg-neutral-100
            focus-visible:ring-neutral-300
        `,
        primary: `
            text-white bg-blue-600
            hover:bg-blue-700 
            focus-visible:ring-blue-500
        `        
    };
    return (
        <button
            ref={ref}
            type="button"
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            className={clsx(baseStyles,variants[variant], clasName,{
                "bg-neutral-300": isActive
            })}
            style={{
                width: `${hitSize}px`,
                height: `${hitSize}px`,
           }}
           {...props}
        >
            <span 
                style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                }}
                className="flex items-center justify-center"
            >
                {children}
            </span>

        </button>
    )
})