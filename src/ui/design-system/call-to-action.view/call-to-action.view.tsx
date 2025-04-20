import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkType } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () =>{
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        N`attend pas pour developper tes competences...
                    </Typography>
                    <div>
                        <Button 
                            variant="success" 
                            baseUrl="/#" 
                            linkType={LinkType.EXTERNAL}
                        >
                            Formation React.js Gratuite
                        </Button>
                    </div>
                </div>
                <div>
                    <Image 
                        width={800} 
                        height={800} 
                        src="/assets/svg/logo.svg" 
                        alt=""
                        className="absolute -bottom-[0px] right-[0px]"    
                    />
                </div>
            </Container>
        </div>
    )

}