import { Button } from "@/ui/design-system/button/button"
import clsx from "clsx"

interface Props {
    next?: () => void
    prev?: () => void
    isFirstStep?: () => boolean
    isFinalStep?: () => boolean
    isLoading?: boolean
}
export const OnboardingFooter = ({
    next,
    prev,
    isFirstStep,
    isFinalStep,
    isLoading
}: Props) => {
    let actionButtonTitle: string
    if (isFirstStep && isFirstStep()) {
        actionButtonTitle = "Demarrer"
    } else if (isFinalStep && isFinalStep()) {
        actionButtonTitle = "Terminer"
    } else {
        actionButtonTitle = "Continuer"
    }
    return (
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
            <div
                className={clsx(
                    "flex", // ← pour activer justify-*
                    prev && !next && "justify-start",
                    !prev && next && "justify-end",
                    prev && next && "justify-between"
                )}
            >
                {prev && (
                    <Button
                        disabled={isLoading}
                        variant={!isLoading ? "outline" : "disable"}
                        action={prev}
                    >
                        Retour
                    </Button>
                )}
                {next && (
                    <Button
                        isLoading={isLoading}
                        action={next}
                    >
                        {actionButtonTitle}
                    </Button>
                )}
            </div>
        </div>

)
}