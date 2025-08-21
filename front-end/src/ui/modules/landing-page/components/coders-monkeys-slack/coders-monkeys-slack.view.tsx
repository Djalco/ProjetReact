import { LinkType } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CodersMokeysSlackView =() =>{
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-2-2xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small" />
                    <Typography
                        variant="caption2"
                        component="span"
                        weight="medium"
                    >
                        Coders monkeys
                    </Typography>
                </div>
                <Typography variant="h2" component="h2">
                    Rejoins nous sur le Slack des singes codeurs
                </Typography>
                <Typography 
                    variant="body-lg" 
                    component="p" 
                    theme="gray" 
                    className="max-w-lg">
                    Rejoins nous et obtiens de l`aide, des conseils et 
                    pourquoi pas des nouveaux potes!! {""}
                </Typography>
                <Button baseUrl="/#" linkType={LinkType.EXTERNAL}>
                    Rejoindre le groupe d`aide
                </Button>
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image
                    fill
                    src={"/assets/svg/fuse.svg"}
                    alt="Groupe Slack Coders Monkeys"
                />
            </div>

        </Container>
    )

}