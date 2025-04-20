import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreateUser } from "@/api/athentification";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggles";


export const RegisterContainer = () => {

    const {Value:isLoading, setValue: setIsLoading} = useToggle({})
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

    const handleCreateUserAuthentification = async ({ 
        email, 
        password,
         //how_did_hear 
    }: RegisterFormFielsType)=>{
        const{error} =await firebaseCreateUser(email,password)
        if(error){
            setIsLoading(false)
            toast.error(error.message)
            return;
        }
        toast.success("Bienvenu sur l`app des singes codeurs");
        setIsLoading(false);
        reset();
    }
    
    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setIsLoading(true);
        const { password}= formData;

        if (password.length <= 5) {
            setError("password",{
                type:"manuel",
                message:"Ton mot de passe doit avec min 6 caracteres",
            });
            return;
        }
        handleCreateUserAuthentification(formData)
    }
    return (
        <>
            <RegisterView
                form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }}
            />
        </>
    )
}