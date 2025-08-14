import { useAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/avatar/avatar"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarLink = () => {
    const { authUser } = useAuth()

    const { photoURL, displayName } = authUser
    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src= {photoURL} alt={displayName? displayName : "avater du user"} size="large" />
            <div className="max-w-[160px]">
                <Typography
                    variant="caption2"
                    weight="medium"
                    className="truncate">
                    {displayName ? displayName: "Bienvenue"}
                </Typography>
                <Typography
                    variant="caption2"
                    weight="medium"
                    theme="gray">
                    Mon Compte
                </Typography>
            </div>
        </Link>
    )
}