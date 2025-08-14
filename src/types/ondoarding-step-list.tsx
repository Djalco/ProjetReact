
export interface BaseComponentProps{
    next: () => void
    prev: () => void
    isFirstStep: () => boolean
    isFinalStep: () => boolean
    stepList: OnboardingStepList[]
    getCurrentStep: ()=> OnboardingStepList | undefined
}
export interface OnboardingStepList {
    id:number
    label : string
    component : {
        step: React.ComponentType <BaseComponentProps>
    }
}