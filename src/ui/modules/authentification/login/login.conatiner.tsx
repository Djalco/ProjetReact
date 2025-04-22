import { LoginFormFielsType } from "@/types/forms";
import { useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"

import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/config/firebase-config"
import { useToggle } from "@/hooks/use-toggles";
import { firebaseSignInUser } from "@/api/athentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
    const router = useRouter()
    const {Value:isLoading, setValue: setIsLoading} = useToggle({})
    
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log("user",user)
                // ...
            } else {
                // User is signed out
                // ...
                console.log("pas connectee")
            }
        });
    }, [])
        const {
            handleSubmit,
            control,
            formState: { errors },
            register,
            setError,
            reset,
        } = useForm<LoginFormFielsType>();

    const handleSignInUser = async({ 
        email, 
        password 
    }: LoginFormFielsType) =>{
        const { error } = await firebaseSignInUser(email,password)
        if(error){
            setIsLoading(false);
            toast.error(error.message)
            return
        }
        toast.success("Bienvenue sur Coders Monkeys")
        setIsLoading(false)
        reset();
       router.push("/mon-espace");

    }

        const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
            setIsLoading(true);
            const {password} = formData;
            if(password.length<=5){
                setError("password", {
                    type:"manuel",
                    message:"Mot de passe doit avoir min 6 caracteres"
                })
                setIsLoading(false)
                return
            }
            handleSignInUser(formData)
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