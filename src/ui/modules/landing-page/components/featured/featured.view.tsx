import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface{
    imagePath:string;
    imageAlt: string;
    title : string;
    description: string;
}

const featuresData : FeaturesListInterface[] =[
    {
        imagePath : "/assets/svg/dossier.svg",
        imageAlt:"Illustration",
        title : "Ressoures",
        description :"Consulte et partage des ressources pour les devs",
    },
    {
        imagePath: "/assets/svg/mann.svg",
        imageAlt: "Illustration",
        title: "Entrainement",
        description: "Entraines-toi a devenir meilleur et trouve de l'inspiration",
    },
    {
        imagePath: "/assets/svg/app.svg",
        imageAlt: "Illustration",
        title: "Visibilite",
        description: "Expose tes projets et cree toi des opportunites",
    },
    {
        imagePath: "/assets/svg/bous.svg",
        imageAlt: "Illustration",
        title: "Relations",
        description: "Connectes-toi avec des devs web et booste ta carriere",
    },
]


export const FeaturedView =()=>{
    const featuredList = featuresData.map((features) => (
        <div 
            key={uuidv4()}
            className="flex flex-col items-center justify-center bg-white rounded p-7"
        >
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image
                    fill
                    src={features.imagePath}
                    alt={features.imageAlt}
                    className="object-scale-down blur-2xl"
                />
                <Image
                    fill
                    src={features.imagePath}
                    alt={features.imageAlt}
                    className="object-scale-down"
                />
            </div>
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {features.title}
            </Typography>
            <Typography variant="body-base" component="h3" theme="gray" className="text-center">
                {features.description}
            </Typography>
        </div>
    ))

    return(
        <div className="bg-gray-300 h-300 ">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 gap-5 col-span-7"  >
                    {featuredList}
                </div>
                <div className=" flex flex-col justify-between col-span-5 gap-18" >
                    <div>
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            className="mb-5">
                            L`endroit de plus cool pour devenir developpeur
                        </Typography>
                        <Typography 
                            variant="body-lg" 
                            theme="gray" 
                            component="p" 
                            className="mb-8">
                            Du partage, des connexions et des formations notre app gere tout ca pour toi. 
                            Rejoins la communaute et grimpe en grade. Let`s Go!!!! {" "} 
                        </Typography>
                        <Button variant="secondary" baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="rigth"> Commencer</Button>
                    </div>
                    <div>
                        <Typography
                            variant="caption3"
                            theme="gray"
                            component="div"
                            className="mb-4">
                            Nos reseaux sociaux
                        </Typography>
                        <SocialNetworksButtons/>
                    </div>
                </div>
            </Container>
        </div>
    )
}