import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/sessionStatusType";
import { ScreenSpinner } from "@/ui/design-system/spinner/screnn-spinner";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}

export const Session = ({ children, sessionStatus }: Props) => {
    const { authUser, authUserIsLoading } = useAuth();
    const router = useRouter();
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

    const shouldRedirectToOnboarding = () => {
        return (
            !authUserIsLoading &&
            authUser &&
            !onboardingIsCompleted &&
            router.asPath !== "/onboarding"
        );
    };

    const shouldRedirectToMonEspace = () => {
        return (
            !authUserIsLoading &&
            authUser &&
            onboardingIsCompleted &&
            router.asPath !== "/mon-espace"
        );
    };

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }

    if (shouldRedirectToMonEspace()) {
        router.push("/mon-espace");
        return <ScreenSpinner />;
    }

    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>;
        } else {
            router.push("/mon-espace"); // ✅ espace supprimé
            return <ScreenSpinner />;
        }
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>;
        } else {
            router.push("/connexion"); // ✅ espace supprimé
            return <ScreenSpinner />;
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }

    return <ScreenSpinner />;
};
