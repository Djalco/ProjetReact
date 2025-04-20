
import { ForgetFormFielsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
       
           const {
               handleSubmit,
               control,
               formState: { errors },
               register,
               setError,
               reset,
           } = useForm<ForgetFormFielsType>();
       
           const onSubmit: SubmitHandler<ForgetFormFielsType> = async (formData) => {
               setIsLoading(true);
               console.log('formData', formData)
           }
    return(
    <>
        <ForgetPasswordView
                form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }} />
    </>)
}