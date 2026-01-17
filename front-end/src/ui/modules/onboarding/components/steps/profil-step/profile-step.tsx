
import { BaseComponentProps } from "@/types/ondoarding-step-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Typography } from "@/ui/design-system/typography/typography"
import { OnboardingTabs } from "../../tabs/onboarding-taps"
import { LayoutOnboarding } from "@/ui/components/layout/layoutOnboarding"
import { ProfileStepForm } from "./profil-step-form"
import { SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFielsTypes } from "@/types/forms"
import { useToggle } from "@/hooks/use-toggles"
import { firestoreUpdateDocument } from "@/api/firestore"
import { useAuth } from "@/context/AuthUserContext"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { updateUserIdentification } from "@/api/athentification"


export const ProfileStep = ({
    next,
    prev,
    isFirstStep,
    stepList,
    isFinalStep,
    getCurrentStep
}: BaseComponentProps) => {

    const { Value: isLoading, setValue: setLaoding } = useToggle()

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue
    } = useForm<OnboardingProfileFormFielsTypes>()

    const { authUser } = useAuth()
    console.log("authUser", authUser.uid)
    const { displayName, expertise, biography } = authUser.userDocument
    useEffect(() => {
        const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
            "displayName", "expertise", "biography"
        ];
        for (const field of fieldsToUpdate) {
            setValue(field, authUser.userDocument[field])
        }

    }, [])

    const handleUpdateUserDocument = async (
        formData: OnboardingProfileFormFielsTypes
    ) => {

        const { error } = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            formData
        )
        if (error) {
            setLaoding(false)
            toast.error(error.message)
        }

        setLaoding(false)
        reset()
        next()
    }


    const onSubmit: SubmitHandler<OnboardingProfileFormFielsTypes> = async (formData) => {
        setLaoding(true)

        if (
            displayName !== formData.displayName ||
            expertise !== formData.expertise ||
            biography !== formData.biography
        ) {

            if (
                displayName !== formData.displayName ||
                authUser.displayName !== formData.displayName
            ) {
                const data = {
                    displayName: formData.displayName
                }
                //use function form back-end
                const { error } = await updateUserIdentification(
                    authUser.uid,
                    data
                )

                if (error) {
                    setLaoding(false)
                    toast.error(error.message)
                    return
                }
            }
            handleUpdateUserDocument(formData)
        }
        next()
        console.log('formData', formData)

    }

    return (
        <>
            <LayoutOnboarding>
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs
                            tabs={stepList}
                            getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1">
                            Presentes-toi!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Dis-nous tout sur toi! remplis notre formulaire de presentation
                            pour quon puisse mieux te connaitre. On veut savoir qui tu es,
                            ce que tu fais et comment tas atteri ici. Plus on en saura sur toi,
                            mieux on pourra personnaliser ton experience sur notre plateforme.
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="flex justify-end w-full">
                        <ProfileStepForm
                            form={{
                                errors,
                                control,
                                register,
                                handleSubmit,
                                onSubmit,
                                isLoading,
                            }}
                        />
                    </div>
                </div>

                <OnboardingFooter
                    prev={prev}
                    next={handleSubmit(onSubmit)}
                    isFirstStep={isFirstStep}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </LayoutOnboarding>
        </>
    )
}
