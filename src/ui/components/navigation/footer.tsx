/* eslint-disable react/jsx-key */

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkType } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";


export const Footer=()=>{

    const footerNavigationList = footerLinks.map((coloneLinks)=>(
        <FooterLink key={uuidv4()} data={coloneLinks}/>
    ));

    return (
        <div className=" bg-gray " >
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Formation Gratuite
                    </Typography>
                    <Typography
                        variant="caption1"
                        theme="gray"
                    >
                        Abonne toi a la chaine
                    </Typography>
                    <a href="/#" target="_blank">
                        <Image 
                            src="/assets/svg/logo.svg"
                            width={229}
                            height={216}
                            alt="Remote Monkey | Youtube"
                       />
                    </a>
                </div>
                <div className="flex gap-7">
                    {footerNavigationList}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-500" />
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray" >
                        Copyright @ 2025 | Propulsed By Alexia- Remotes Monkey SASU
                    </Typography>
                    <div className="">
                        <SocialNetworksButtons theme="gray"/>
                    </div>
                </div>
            </Container>
        </div>
        
    );
};

interface footerLinkProps{
    data: FooterLinks
}
const FooterLink = ({data}: footerLinkProps) => {

    const LinksList = data.links.map((link) => (
        <div key={uuidv4()}> 
            {link.type === LinkType.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkType.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">
                    {link.label}
                </a>
            )}
        </div>
        
    ));

    return(
        <div className="min-w[190px]">
            <Typography
                theme="white"
                variant="caption2"
                weight="medium" 
                className="pb-5"
            >
                {data.label}
            </Typography>
            <Typography 
                theme="gray"
                variant="caption3"
                className="space-y-4"
            >
                {LinksList}
            </Typography>
        </div>

    );
};