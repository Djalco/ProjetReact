import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CallToActionSideGroup = ()=>{
return (
    <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-secondary-300 ">
        <Typography
            variant="lead"
            theme="black"
            weight="medium"
            className="text-center"
        >
            Rejoins le groupe
        </Typography>
        <div className="flex justify-center">
            <Button
                variant="accent"
                baseUrl="https://google.com"
                linkType="external"
                
            >
                Rejoindre
            </Button>
        </div>
        <Image
            width={183}
            height={183}
            src="/assets/svg/dossier.svg"
            alt="Serveur Slack"
            className="absolute -bottom-10 transform -translate-x-1/2 left-1/2"
        />
    </div>
)
}