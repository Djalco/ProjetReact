import { BaseComponentProps } from "@/types/ondoarding-step-list";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggles";


export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
    
    const { authUser, reloadAuthUserData } = useAuth();
    const { Value:isLoading ,toggle } = useToggle();

    const handleCloseOnboarding = async () => {
        toggle();
        const complet = {
            onboardingIsCompleted: true
        }
        const { error } = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            complet
        );
        if (error) {
            toggle();
            toast.error(error.message);
            return;
        }    
        reloadAuthUserData() 
        toggle();
    };

    return (
        <>
            <div className="relatve h-screen pb-[91px]">
                <div className="h-full overflow-auto">
                    <Container className="h-full">
                        <div className="relative z-10 flex items-center h-full py-10 ">
                            <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                                <div className="flex justify-center">
                                    <Logo size="large" />
                                </div>
                                <Typography variant="h1" component="h1" className="text-center">
                                    Felicitation !!!
                                </Typography>
                                <Typography variant="body-base" component="p" theme="gray" className="text-center">
                                    Tu fais maintenant partie de la tribu des singes codeurs!
                                    Nous sommes ravis de t`acceuillir parmis nous. Tu vas
                                    pouvoir te lancer dans l`aventure, partager tes projets
                                    les plus fous et rencontrer des developpeurs aussi passionnes
                                    que toi. Alors prepares-toi a te secouer les branches et a te faire
                                    gripmper au sommet de l`arbre du developpement web!!!
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </div>

                <OnboardingFooter
                    next={handleCloseOnboarding}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </div>

        </>
    )

}