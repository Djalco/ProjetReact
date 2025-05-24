import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/athentification";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggles";
import { firestoreCreateDocument } from "@/api/firestore";




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

    const handleCreateUserDocument = async (
        collectionName:string, 
        docuementID:string, 
        document: object
    ) =>{
        const {error} = await firestoreCreateDocument (
            collectionName, 
            docuementID, 
            document
        )
        if (error){
            toast.error(error.message)
            setIsLoading(false);
            return;
        }
        toast.success("Bienvenu sur l`app des singes codeurs");
        setIsLoading(false);
        reset();
        sendEmailVerificationProcedure()
    }
    const handleCreateUserAuthentification = async ({ 
        email, 
        password,
        how_did_hear 
    }: RegisterFormFielsType)=>{
        const{error, data} =await firebaseCreateUser(email,password)
        if(error){
            setIsLoading(false)
            toast.error(error.message)
            return;
        }

        const userDocData = {
            email:email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: new Date(),

        }
        handleCreateUserDocument("users", data.uid, userDocData )
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