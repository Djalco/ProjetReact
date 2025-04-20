import { CallToActionView } from "@/ui/design-system/call-to-action.view/call-to-action.view"
import { CodersMokeysSlackView } from "./coders-monkeys-slack/coders-monkeys-slack.view"
import { CurrentCourseCtaView } from "./current-course-cta/current-course-cta.view"
import { FeaturedView } from "./featured/featured.view"
import { HeroTopView } from "./hero-Top/hero-top.view"
import { HigthLigthView } from "./higthlight-list/higth-ligth.view"

export const LandingPageView = ()=>{
    return (
        <>
        <HeroTopView/>
        <FeaturedView/>
        <CodersMokeysSlackView/>
        <CurrentCourseCtaView/>
        <HigthLigthView/>
        <CallToActionView/>
        </>
    )
}