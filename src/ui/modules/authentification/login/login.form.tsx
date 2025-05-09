import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}
export const LoginForm = ({ form }: Props) => {
    const {onSubmit, errors, isLoading, register, handleSubmit } = form;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4 text-gray">
            <Input
                isLoading={isLoading}
                placeholder="Alexia@gmail.com"
                type="email"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner!!!!"
                id="email"
            />
            <Input
                isLoading={isLoading}
                placeholder="mot de passe "
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner!!!!"
                id="password"
            />
            <Button isLoading={isLoading} type="submit" fullWith>Connexion</Button>
        </form>

    )
}