import DesignAboutProject from "./designcasecomp/DesignAbout";
import DesignCaseCard from "./designcasecomp/DesignCaseCard";
import DesignCaseCard2 from "./designcasecomp/DesignCaseCard2";
import DesignCaseHeader from "./designcasecomp/DesignCaseHeader";
import DesignHowWeDo from "./designcasecomp/DesignHowWeDo";
import DesignKeywords from "./designcasecomp/DesignKeywords";
import DesignTogether from "./designcasecomp/DesignTogether";
export default function DesignCaseComp() {
  return (
    <div className="p-32 overflow-x-hidden">
      <DesignCaseHeader />
      <DesignCaseCard />
      <DesignAboutProject />
      <DesignCaseCard2 />
      <DesignHowWeDo />
      <DesignKeywords />
      <DesignTogether />
    </div>
  );
}
