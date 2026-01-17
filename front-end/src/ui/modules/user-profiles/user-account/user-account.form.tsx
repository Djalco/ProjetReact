import { FormsType, UserProfileFormFieldsType } from "@/types/forms"
//import { UploadAvartar } from "@/ui/components/upload-avatar/upload-avatar"
import { Button } from "@/ui/design-system/button/button"
import { Input } from "@/ui/design-system/forms/input"
import { Textarea } from "@/ui/design-system/forms/textarea"
import { Typography } from "@/ui/design-system/typography/typography"

interface Props {
    form: FormsType<UserProfileFormFieldsType>
}

export const UserAccountForm = ({ form }: Props) => {
    const { onSubmit, errors, isLoading, register, handleSubmit } = form;
    return (

        <form onSubmit={handleSubmit(onSubmit)} className=" w-full space-y-4">


            <div className="flex items-center justify-between py-5">
                <div>
                    {/*<UploadAvartar/>*/}
                </div>
                <div className="flex items-end gap-1">
                    <Typography
                    variant="h1"
                    component="div"
                    >
                        857
                    </Typography>
                    <Typography
                        variant="caption4"
                        component="div"
                        theme="gray-600"
                        className="mb-3"
                    >
                        Abonnes
                    </Typography>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Nom D'utilisateur"
                        isLoading={isLoading}
                        placeholder="Djiki Alexia"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigne 1 pseudo"
                        id="displayName"

                    />
                    <Input
                        label="Expertise"
                        isLoading={isLoading}
                        placeholder="Dev Front"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigne ton expertise"
                        id="expertise"
                    />
                </div>
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Linkedin"
                        isLoading={isLoading}
                        placeholder="votre Lien Linkedin"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigne ton profile linkedin"
                        id="linkedin"
                        require={false}
                    />
                    <Input
                        label="Github"
                        isLoading={isLoading}
                        placeholder="votre Lien GitHub"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigne ton profile git"
                        id="github"
                        require={false}
                    />
                </div>
            </div>

            <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Indique ta bio..."
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigne ta bio..."
                id="biograpgy"
                require={false} />
            <div className="flex jutify-end">
                <Button isLoading={isLoading} type="submit" >
                    Enregistrer
                </Button>
            </div>
        </form>
    )
}