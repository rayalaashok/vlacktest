import WhoWeArePage from "./whoweare/WhoWeArePage";
import ProcessPage from "./processfollow/ProcessPage";
import OurMissionPage from "./ourmission/OurMissionPage";
import BenefitsPage from "./benefits/BenefitsPage";
import TeamPage from "./team/TeamPage";
import OurDesignPage from "./ourdesign/OurDesignPage";

function Aboutus () {
    return (
        <>
        <OurDesignPage />
        <WhoWeArePage />
        <ProcessPage />
        <OurMissionPage />
        <BenefitsPage />
        <TeamPage />
        </>
    )
}
export default Aboutus;