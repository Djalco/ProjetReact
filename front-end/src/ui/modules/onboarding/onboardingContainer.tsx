import { useState } from "react"
import { OnboardingView } from "./onboardingView"
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step"
import { OnboardingStepList } from "@/types/ondoarding-step-list"
import { ProfileStep } from "./components/steps/profil-step/profile-step"
import { AvartarStep } from "./components/steps/avatart/avatar-step"
import { FinalStep } from "./components/steps/final-step/final-step"

export const OnboardingContainer = () => {

    const [currentStep, setCurrentStep] = useState<number>(1)
    console.log ("currentstep", currentStep )
    const stepList : OnboardingStepList[]= [
        
        {
            id: 1,
            label: "Bienvenue",
            component: { step: WelcomeStep }
        },
        {
            id: 2,
            label: "Profile",
            component: { step: ProfileStep }
        },
        {
            id: 3,
            label: "Photo",
            component: { step: AvartarStep }
        },
        {
            id: 4,
            label: "Last ",
            component: { step: FinalStep }
        }
    ]

    const getCurrentStep = () => {
        return stepList.find((el) => el.id === currentStep)
    }

    const next = () => {
        if (currentStep < stepList.length) {
            setCurrentStep(currentStep + 1)
        }
    }
    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const isFirstStep = () => {
        if (currentStep === 1) {
            return true
        }
        return false
    }
    const isFinalStep = () => {
        if (currentStep === stepList.length) {
            return true
        }
        return false
    }
    return (
        <OnboardingView 
            getCurrentStep = {getCurrentStep}
            next = {next}
            prev = {prev}
            isFirstStep= {isFirstStep}
            isFinalStep={isFinalStep}
            stepList={stepList}
        />
    )
}