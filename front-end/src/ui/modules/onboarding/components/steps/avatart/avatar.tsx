import { LayoutOnboarding } from "@/ui/components/layout/layoutOnboarding"
import { OnboardingTabs } from "../../tabs/onboarding-taps"
import { BaseComponentProps } from "@/types/ondoarding-step-list"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { OnboardingFooter } from "../../footer/onboarding-footer"

export const AvartarStep = ({ stepList, getCurrentStep, next,
    prev,
    isFirstStep,
    isFinalStep, }: BaseComponentProps) => {
    return (
        <>
            <LayoutOnboarding>
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs
                            tabs={stepList}
                            getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1">
                            Presentes-toi!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Dis-nous tout sur toi! remplis notre formulaire de presentation
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="w-full">
                        <Image
                            src="/assets/svg/fuse.svg"
                            alt="Illustration fuse"
                            width={811}
                            height={596}
                        />
                    </div>
                </div>

            </LayoutOnboarding>
            <OnboardingFooter
                next={next}
                prev={prev}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </>
        
    )
}