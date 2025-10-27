import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../design-system/spinner/spinner";

interface Props{
    size?: "small"|"medium"|"large" | "extra-large"
    src: string;
    alt:string;
    isLoading? :boolean
}

export const Avatar =({size="medium" ,src,alt, isLoading}: Props)=>{
    let sizeAvatar: string;

    switch (size) {
        case "small":
            sizeAvatar = " w-[24px] h-[24px] ";
            break;
        case "medium"://default
            sizeAvatar = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeAvatar = "w-[50px] h-[50px]";
            break;
        case "extra-large":
            sizeAvatar = "w-[130px] h-[130px]";
            break;
        
    }
    return(
        <div className={clsx(sizeAvatar, 
            isLoading && "flex items-center justify-center",
        "bg-gray-300 rounded-full relative overflow-hidden" )}>
            <div className={clsx(
                isLoading ? "opacity-40" : "opacity-0",
                "absolute z-10 w-full h-full bg-white animate"
            )} 
            />
            <Image 
                src={src ? src : "/assets/svg/logo.svg"}
                alt= {alt}
                fill
                className= {clsx(
                    isLoading && "blur-[2px]",
                    "rounded-full object-covert object-left-center"
                )} 
            />
            {isLoading && <Spinner className= "relative z-20"/>}
        </div>

    );
} 