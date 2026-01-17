import { SessionStatusTypes } from "@/types/sessionStatusType";
import { BreadCrums } from "../breadcrumbs/breadcrums"
import { Container } from "../container/container";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { CallToActionSideBar } from "../call-to-action-sideBar/call-to-action-sideBar";
import { CallToActionSideGroup } from "../call-to-action-sideBar/call-to-action-sideGroup";

interface Props {
  children?: React.ReactNode;
  isDisplayBreadCrums?: boolean;
  withSideBar?: boolean;
  sessionStatus?: SessionStatusTypes;
}

export const Layout = ({
  children,
  isDisplayBreadCrums = true,
  withSideBar,
  sessionStatus,
}: Props) => {
  let view: React.ReactElement = <></>;

  if (withSideBar) {
    view = (
      <Container className="flex-1 mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <UserAccountNavigation />
            <CallToActionSideBar />
            <CallToActionSideGroup />
          </div>
          <div className="col-span-9">
            {children}
          </div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Fil d’Ariane */}
        {isDisplayBreadCrums && <BreadCrums />}

        {/* Contenu principal */}
        <main className="flex-1">
          {view}
        </main>

        {/* Footer collé en bas */}
        <Footer />
      </div>
    </Session>
  );
};
