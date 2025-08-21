import { BaseComponentProps } from "@/types/ondoarding-step-list"

export const OnboardingView = ({ getCurrentStep,
    next,
    prev,
    isFirstStep,
    isFinalStep,
    stepList
}: BaseComponentProps) => {
    if (getCurrentStep()?.component) {
        const Component = getCurrentStep()?.component.step
        return (
            <div>
                {
                    Component && (
                        <Component
                            getCurrentStep={getCurrentStep}
                            next={next}
                            prev={prev}
                            isFirstStep={isFirstStep}
                            isFinalStep={isFinalStep}
                            stepList={stepList}
                        />
                    )
                }
            </div>
        )
    }

    return null

}