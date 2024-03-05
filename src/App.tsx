import "./App.css";

import HowWeWorkPage from "./components/home/howwework/HowWeWorkPage";
import FeaturePage from "./components/home/features/FeaturePage";
import Pricing from "./components/pricing/Pricing";
import DesignCase from "./components/designcasestudies/DesignCase";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="w-screen ">
      <HowWeWorkPage />
      <FeaturePage />
      <Pricing />
      <DesignCase />
      <Blog />
      <Portfolio />
    </div>
  );
}

export default App;
