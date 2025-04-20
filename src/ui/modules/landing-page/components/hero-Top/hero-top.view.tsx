import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = ()=> {
    return(
        <Container className="relative pt-40  overflow-hidden pb-52 justify-between" >
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="mx-w-lg">
                    Rejoins les singes Codeurs
                </Typography>
                <Typography
                    variant="body-lg"
                    component="p"
                    theme="gray"
                    className="mx-w-xl"
                >
                    Rejoins Notre tribu de singes codeurs, 
                    partage tes projets les plus fous et fais 
                    toi de nouveau amis developpeurs
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl=""> Commencer</Button>
                    <Button baseUrl="" variant="secondary">
                        En savoir plus {""}
                    </Button>
                </div>
            </div>
            <Image
                src="/assets/svg/fusee.svg"
                alt="Illustration d'une Marque "
                width={600}
                height={600}
                className="absolute top-0 right-0 z-0"
            />
        </Container>
    )
}