import PorfolioCardWrapper from "./portfoliopage/PortfolioCardWrapper";
import PortfolioHeader from "./portfoliopage/PortfolioHeader";

export default function Portfolio() {
  return (
    <div className="p-20">
      <PortfolioHeader />
      <PorfolioCardWrapper />
    </div>
  );
}
