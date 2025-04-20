import { LoginFormFielsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"

export const LoginContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
        const {
            handleSubmit,
            control,
            formState: { errors },
            register,
            setError,
            reset,
        } = useForm<LoginFormFielsType>();
    
        const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
            setIsLoading(true);
            console.log('formData', formData)
        }
    return(
    <>
        <LoginView 
                form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }} />
    </>
    )
}