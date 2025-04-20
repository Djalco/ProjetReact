import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HigthLigthView = () =>{
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400">
                    <Image
                        fill
                        src="/assets/svg/logo.svg"
                        alt="Illustraion de gateau..."
                    />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography
                        variant="h3"
                        component="h2"

                    >
                        De Novice a developpeur en un clein d`oeil
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Progresse Rapidement</ListPoint>
                        <ListPoint>inspires-toi</ListPoint>
                        <ListPoint>Gagne de l`assurance</ListPoint>
                    </div>
                    <div className="relative">
                        <Button baseUrl="/#" icon={{icon: RiArrowRightLine}} >
                            Let`s Go
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10 bg-gray-400">
                    <Image
                        fill
                        src="/assets/svg/logo.svg"
                        alt="Illustraion d`une toupi..."
                    />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography
                        variant="h3"
                        component="h2"

                    >
                        Booste ta carriere de developpeur
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Partages tes projets, obtiens des feedbacks</ListPoint>
                        <ListPoint>Connectes-toi, elargis ton reseau pro!!</ListPoint>
                        <ListPoint>Reste insprire, motive avec notre communaute</ListPoint>
                    </div>
                    <div className="relative">
                        <Button 
                            baseUrl="/#" 
                            icon={{ icon: RiArrowRightLine }} 
                            variant="secondary" >
                            Demarrer
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

interface Props{
    children: React.ReactNode;
}
const ListPoint = ({children}:Props) =>{
    return (
        <div className="flex items-center gap-2">
            <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
            <Typography
                variant="body-lg"
                component="span"

            >
                {children}
            </Typography>
        </div>
    )
}