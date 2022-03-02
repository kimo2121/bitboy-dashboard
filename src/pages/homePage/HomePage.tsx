import BuyBITBOY from "../../components/BuyBITBOY/BuyBITBOY";
import Community from "../../components/coummunity/Community";
import CustomizedAccordions from "../../components/FAQ copy/FAQ";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Lottery from "../../components/lottery/Lottery";
import Socials from "../../components/socials/Socials";
import Team from "../../components/team/Team";
import Tokenomics from "../../components/tokenomics/Tokenomics";
import UniswapPankcake from "../../components/uniswapPankcake/UniswapPankcake";
import Welcome from "../../components/welcome/Welcome";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <Home />
      <UniswapPankcake />
      {/* <Lottery/> */}
      <Welcome />
      <div className="divider"></div>
      <BuyBITBOY />
      <Community />
      <Tokenomics />
      <Team />
      <CustomizedAccordions />
      {/* <Faq /> */}
      <Socials />
      <Footer />
    </div>
  );
}
