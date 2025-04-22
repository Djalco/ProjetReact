import { ForgetFormFielsType } from "@/types/forms";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";
import { useToggle } from "@/hooks/use-toggles";
import { sendEmailToResetPassword } from "@/api/athentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
    const router = useRouter();
    const { Value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
    } = useForm<ForgetFormFielsType>();

    const handleResetPassword = async ({ 
        email 
    }: ForgetFormFielsType) => {
        const { error } = await sendEmailToResetPassword(email);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success(`un e-mail ete envoye a l'adresse ${email}`);
        setIsLoading(false);
        reset();
        router.push("/connexion");
    }
    const onSubmit: SubmitHandler<ForgetFormFielsType> = async (formData) => {
        setIsLoading(true);
        handleResetPassword(formData);
    }
    return (
        <ForgetPasswordView
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }} />
    )
}