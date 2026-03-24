import Input from "../shared/components/Input.jsx"

export default function App(){
    return(
        <div className="min-h-screen bg-green-800 flex items-center        justify-center">
            <h1  className="text-white text-4x1 font-bold">
                Rico programar Tailwinds v4 funciona full
            </h1>

            <Input 
                label="Nombre"
                placeholder="Escribe tu nombre"
            />
        </div>
    )
};