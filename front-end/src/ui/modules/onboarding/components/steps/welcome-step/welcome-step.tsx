
import { BaseComponentProps } from "@/types/ondoarding-step-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboarding-taps"
import { LayoutOnboarding } from "@/ui/components/layout/layoutOnboarding"

export const WelcomeStep = ({ next, isFirstStep, stepList, isFinalStep, getCurrentStep }: BaseComponentProps) => {
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
                            Bienvenue sur lappli des singes Codeurs!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Viens trainer avec des developpeurs aussi fous
                            que toi, montre tes projets persos et recois des
                            feedbacks constructifs (ou fais-toi carrement
                            desccendre). Pret a cree des trucs incroyables?
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
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </>
    )
}