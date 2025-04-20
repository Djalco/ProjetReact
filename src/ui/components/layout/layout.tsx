import { BreadCrums } from "../breadcrumbs/breadcrums"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"

interface Props {
    children?: React.ReactNode;
    isDisplayBreadCrums?: boolean;
}

export const Layout = ({ children, isDisplayBreadCrums = true }: Props) => {

    return (
        <>
            <Navigation />
            {isDisplayBreadCrums && <BreadCrums />}
            {children}
            <Footer />
        </>
    )
}