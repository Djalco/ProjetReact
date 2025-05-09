import { LinkTypes } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface AppLinks {
    label:string;
    baseUrl:string;
    type:LinkTypes; 
    icon?: IconType;
}

export interface FooterLinks{
    label:string;
    links:AppLinks[]
}