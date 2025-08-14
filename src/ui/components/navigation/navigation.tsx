import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarLink } from "./account-avatar-link";

interface Props {
    siwe?: string;
}


export const Navigation = ({ }: Props) => {
    const { authUser } = useAuth();
    console.log("authuser", authUser)

    const authentificationSystem = (
        < div className="flex items-center gap-2" >
            <Button variant="accent" baseUrl="/connexion" size="small">
                Connexion
            </Button>
            <Button variant="secondary" baseUrl="/connexion/inscription" size="small">
                Rejoindre
            </Button>

        </ div>
    )
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col gap-2.5">
                            <div className="text-gray font-extrabold text-[24px]" >
                                Coders Monkeys
                            </div>
                            <Typography
                                variant="caption4"
                                component="span"
                                theme="gray"
                            >
                                trouver de l`inspiation & recois des feedbacks!
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography
                        variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/design-system">Design-System</ActiveLink>
                        <ActiveLink href=" ">Projets</ActiveLink>
                        <ActiveLink href=" ">Formations</ActiveLink>
                        <ActiveLink href=" ">Contacts</ActiveLink>
                    </Typography>
                    {!authUser ? authentificationSystem : <AccountAvatarLink/>}
                </div>

            </Container>
        </div>
    )
}