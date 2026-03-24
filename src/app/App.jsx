// import Input  from "../shared/components/Input";
import { CreateUserPage } from "@/features/users"

export default function App(){
    return(
        <div className=" min-h text-center grid grid-cols-1 gap-4  mt-5 ">
            <h1  className="text-white text-4x1 font-bold bg-fuchsia-800 p-6">
                Rico programar Tailwinds v4 funciona full
            </h1>

            <CreateUserPage/>

        </div>
    )
};