export default function Checkbox({
    id,                 //Identificador unico (Necesario para accesibilidad)
    name,               //Nombre del campo (Util para formulario)Comunicarse con el back
    label,              //Texto visible asociado al checkbox
    checked = false,    //Estado controlado del checbox
    onChange,           //Función qye maneja el cambio de estado
    disabled = false,    //Indica si el checkbox esta habilitado
    className = "",     //Clases adicionales para perzonalización
    
}){
    return(
        <label
            htmlFor={id}
            className={`
                flex items-center gap-2 
                text-sm
                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {/* {Input del checkbox} */}
            <input 
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                className="w-5 h-5"
            />
            {/*  Texto del checkbox */}
            <span>{label}</span>
        </label>
    );
}

// ID Los label no aceptan clases, nunca para styles, solo para logica
// Las CLASES solo para styles