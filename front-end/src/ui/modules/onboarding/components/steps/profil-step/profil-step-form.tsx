import { FormsType, OnboardingProfileFormFielsTypes } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input"
import { Textarea } from "@/ui/design-system/forms/textarea"

interface Props {
    form: FormsType<OnboardingProfileFormFielsTypes>
}

export const ProfileStepForm = ({ form }: Props) => {
    const { register, errors, isLoading } = form
    return (
        <form className="w-full max-w-md space-y-4">
            <Input
                label= "Pseudo"
                isLoading={isLoading}
                placeholder="Djiks Alexia"
                type="text"
                register={register}
                errors={errors}
                errorMsg="tu dois renseigner un pseudo"
                id="displayName"
            />
            <Input
                label="Expertise"
                isLoading={isLoading}
                placeholder="Developpeur Front"
                type="text"
                register={register}
                errors={errors}
                errorMsg="tu dois renseigner ton expertise"
                id="expertise"
            />
            <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Qui es-tu? que fais-tu?"
                rows={5}
                register={register}
                errors={errors}
                errorMsg="tu dois renseigner ce champ"
                id="biography"
                require={false}
            />
        </form>
        )

}