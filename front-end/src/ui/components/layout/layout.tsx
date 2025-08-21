import { SessionStatusTypes } from "@/types/sessionStatusType";
import { BreadCrums } from "../breadcrumbs/breadcrums"
import { Container } from "../container/container";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";

interface Props {
    children?: React.ReactNode;
    isDisplayBreadCrums?: boolean;
    withSideBar?:boolean
    sessionStatus?: SessionStatusTypes
}

export const Layout = ({ children, isDisplayBreadCrums = true, withSideBar,sessionStatus }: Props) => {

    let view: React.ReactElement= <></>;

    if (withSideBar){
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3 h-96 ">
                        <UserAccountNavigation/>
                    </div>
                    <div className="col-span-9 h-96 ">
                        {children}
                    </div>
                </div>
            </Container>
        )
    }else {
        view= <>{children}</>
    }
    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation />
            {isDisplayBreadCrums && <BreadCrums />}
            {view}
            <Footer />
        </Session>
    )
}