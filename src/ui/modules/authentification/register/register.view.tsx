import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/bos/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { FormsType } from "@/types/forms";
import { RegisterForm } from "./register.form";

interface Props {
    form: FormsType
}
export const RegisterView = ({ form }: Props) => {
    return (
        <>
            <Container className="grid grid-cols-2 gap-20 mb-32 ">
                <div className="flex items-center">
                    <div className="relative w-full h-[531px]">
                        <Image
                            fill
                            src="/assets/svg/fuse.svg"
                            alt="description de l'illustrat"
                            className="object-scale-down"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <Box padding_y="py-5">
                        <div className="flex items-center justify-between ">

                            <Typography variant="h5" component="h1">
                                Inscription
                            </Typography>

                            <div className=" flex items-center justify-between gap-5">
                                <Typography
                                    variant="caption4"
                                    component="h2"
                                    theme="gray">
                                    Tu as deja un compte?
                                </Typography>
                                <Typography
                                    variant="caption4"
                                    component="span"
                                    theme="primary">
                                    <Link href="/connexion"> Connexion</Link>
                                </Typography>
                            </div>
                        </div>
                        <RegisterForm form={form} />
                    </Box>
                </div>
            </Container>
        </>
    );
}