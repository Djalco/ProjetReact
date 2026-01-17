import { Typography } from "@/ui/design-system/typography/typography"
import { UserAccountForm } from "./user-account.form"
import { FormsType, UserProfileFormFieldsType } from "@/types/forms"

interface Props{
    form : FormsType<UserProfileFormFieldsType>
}

export const UserAccountView = ({form} : Props) =>{

  
    return(
        <div className="space-y-5">
        <Typography
            variant="h1"
            component="h1"
        >
            Mon Compte
        </Typography>
            <UserAccountForm 
                form = {form}
            />
        </div>
    )
}