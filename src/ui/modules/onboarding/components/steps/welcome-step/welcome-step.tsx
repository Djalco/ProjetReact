
import { BaseComponentProps } from "@/types/ondoarding-step-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"

export const WelcomeStep = ({ next,isFirstStep,isFinalStep }: BaseComponentProps) => {
    return (
        <div className="relative h-screen" >
            Welcome Step
            <OnboardingFooter 
                next={next}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </div>
    )
}