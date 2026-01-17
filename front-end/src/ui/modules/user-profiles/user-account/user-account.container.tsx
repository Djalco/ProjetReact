import { UserAccountView } from "./user-account.view"
import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hooks/use-toggles"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserProfileFormFieldsType } from "@/types/forms"


export const UserAccountContainer = () => {
    const { authUser } = useAuth()
    const { Value: isLoading, setValue: setIsLoading } = useToggle()

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        //setValue,
        //setError
    } = useForm<UserProfileFormFieldsType>()

    const handleUpdateUserDocument = async (formData: UserProfileFormFieldsType
    ) => {
        setIsLoading(true)
        console.log("auther :" , authUser)
        console.log(formData)
        setIsLoading(false)
    }
    const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (formData) => {
        handleUpdateUserDocument(formData)
        return
    }

    return (
        <div className="flex justify-center pt-20 pb-40">
            <UserAccountView
                form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading
                }}
            />
        </div>
    )
}