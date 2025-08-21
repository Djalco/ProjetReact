import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import React from "react";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props{
    size?: "small"|"medium"|"large";
    variant?: "accent" | "secondary" | "outline" | "ico" | "disable" | "success" | "danger";
    icon ?: IconProps;
    iconTheme?: "accent"|"secondary"|"gray";
    iconPosition?:"left"|"rigth";
    disable?:boolean;
    isLoading?:boolean;
    children?:React.ReactNode;
    baseUrl?:string;
    linkType?:LinkTypes;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    action?:Function;
    fullWith?:boolean;
    type?: "button"|"submit";
}

export const Button = ({
    size="medium",
    variant="accent",
    icon,
    iconTheme="accent",
    iconPosition="rigth",
    disable,
    isLoading,
    children,
    baseUrl,
    linkType="internal",
    type = "button",
    fullWith=false,
    action=()=>{},

}: Props) =>{

    let variantStyle:string="", 
        sizestyle:string="",
        icosize: number =0;
    switch (variant) {
        case "accent"://default
            variantStyle="bg-primary hover:bg-primary-400 text-white rounded"
            break;
        case "secondary":
            variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded"
            break;
        case "outline":
            variantStyle = "bg-white hover:bg-gray-400/50 text-gray border border-gray-500 text-gray-900 rounded"
            break;
        case "disable":
            variantStyle = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-no-allowed"
            break;
        case "success":
            variantStyle = "bg-secondary hover:bg-secondary-400 text-white rounded"
            break;
        case "danger":
            variantStyle = "bg-alert-danger hover:bg-alert-danger-78 text-white rounded"
            break;
        case "ico":
            if(iconTheme==="accent"){
                variantStyle = "bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            if (iconTheme === "secondary") {
                variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
           }
            if (iconTheme === "gray") {
                variantStyle = "bg-gray-800 hover:bg-gray-700  text-white rounded-full"
            }
            break;
    }
    switch (size) {
        case "small":
            sizestyle=`text-caption3 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" :"px-[14px] py-[12px]"
            } ` 
            icosize=18;
            break;
        case "medium": //default
            sizestyle = `text-caption2 font-medium  ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" :"px-[18px] py-[15px]"
            }`
            icosize=20;
            break;
        case "large":
            sizestyle = `text-caption1 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" :"px-[22px] py-[18px]"
            } `
            icosize=24;
            break;
        
    }

    const handleClick=()=>{
        if (action){
            action()
        }
    }
    const buttonContent = (
        <>
            {isLoading && (

                <div className="absolute inset-0 flex items-center justify-center">

                    {
                        variant === "accent" || variant === "ico" ? (<Spinner size="small" variant="white" />) : (<Spinner size="small" />)
                    }
                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>

                {icon && variant === "ico" ?
                    <icon.icon size={icosize} />
                    : (
                        <div className={clsx(icon && "flex item-center gap-1")}>
                            {icon && iconPosition === "left" && (
                                <icon.icon size={icosize} />
                            )}
                            {children}
                            {icon && iconPosition === "rigth" && (
                                <icon.icon size={icosize} />
                            )}
                        </div>
                    )}
            </div>
        </>
    )
    const buttonElement = (

        <button
            type={type}
            className={clsx(
                variantStyle,
                icosize,
                sizestyle,
                fullWith && "w-full",
                isLoading && "cursor-wait",
                "relative animate")}
            onClick={handleClick}
            disabled={disable || isLoading ? true : false}
        >
            {buttonContent}
        </button>

    );

    if (baseUrl){
        if (linkType === LinkType.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            )
        }else {
            return <Link href={baseUrl}> {buttonElement}</Link>
        }
    }

    return buttonElement
};