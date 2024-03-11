import Footer from "./footer/Footer";
import PricingCardWrapper from "./Pricingcard/PricingCardWrapper";
import Faq from "./faq/Faq";
import NavBar from "./navbar/NavBar";

export default function Pricing() {
  return (
    <div>
      <NavBar />
      <PricingCardWrapper />
      <Faq />
      <Footer />
    </div>
  );
}
