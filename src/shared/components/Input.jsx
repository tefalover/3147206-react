export default function Input({
    label,
    type = "text",
    ...props
}){
    //Cuerpo de la función -> Dentro de una funcion solo se puede devolver un div
    return(
        //  Contenedor del input que se exporta con label, cuerpo y feedback massage 
        <div className="w-[320px]">
            {/* Label */}
            <label 
                className="
                    block,
                    text-caption
                    mb-1
                    text-text-primary
                "> 
                
                {label}
            </label>

            {/* Contenedor del input */}
            <div>

                {/* Área interactiva invicible de un input 48px */}

                <div 
                    className="
                        absolute
                        inset-0
                    "
                    onMouseDown={(e) => {
                        e.preventDefault();
                        // Mueve el foco al siguiente elemento hermano del elemento actual.
                        // 'currentTarget' referencia el elemento que tiene el handler del evento.
                        //`nextSibling ` obtiene el siguiente nodo en el DOM (Puede ser un input o otro elemento)
                        //`focus() `  cambia el foco del usuario ese elemento)
                        e.currentTarget.nextSibling.focus();
                    }}
                    >

                </div>

                {/* Área visual del input */}

                <input
                    className="
                        relative
                        w-full
                        h-12
                        rounded-md
                        border
                        border-border
                        px-4
                        text-bese

                        focus:outline-none
                        focus:ring-2
                        focus:ring-focus-ring
                        focus:border-focus-border
                        "
                        {...props}
                        >
                    

                </input>


            </div>

            {/* Feedback massage */}
            <div>

            </div>
        </div>
    )
};