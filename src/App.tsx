import "./App.css";

import HowWeWorkPage from "./components/home/howwework/HowWeWorkPage";
import FeaturePage from "./components/home/features/FeaturePage";
import Pricing from "./components/pricing/Pricing";
import DesignCase from "./components/designcasestudies/DesignCase";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import Policy from "./components/policy/policy";
import ContactUs from "./components/contactus/ContactUs";

function App() {
  return (
    <div className="w-screen ">
      <HowWeWorkPage />
      <FeaturePage />
      <Pricing />
      <DesignCase />
      <Blog />
      <Portfolio />
      <ContactUs />
      <Policy />
    </div>
  );
}

export default App;
