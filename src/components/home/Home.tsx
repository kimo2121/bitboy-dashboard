import { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Topbar from "../topbar/Topbar";
import "./home.scss";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({
    query: "screen and (max-width: 768px) and (orientation:portrait)",
  });
  const isLandOrMobile = useMediaQuery({
    query: "screen and (max-height: 768px) and (orientation:landscape)",
  });
  useEffect(() => {
    if (isTabletOrMobile) {
    }

    if (isLandOrMobile) {
    }
    if (!isLandOrMobile && !isTabletOrMobile) {
      setMenuOpen(false);
    }
  }, [isTabletOrMobile, isLandOrMobile, setMenuOpen]);
  return (
    <div className="home" id="home">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="homeContent">
        <img
          className="BgImg"
          src="assets/eyes-portrait-person-girl-18495.jpg"
          alt=""
        />

        <div className="wrapper">
          <div className="text">
            <p>A Decentralized Community Social Token</p>
            <p>Earn passive income in BITBOY for being a token holder.</p>
            <p>Buy BITBOY - White Paper clickable underneath.</p>
          </div>

          {/* <div className="socialLinks">
                        <a href="https://solana.com/" className="joinLink"><img src="assets/e002839c-fd37-4133-9f3c-db0c281af924.png" alt="" />SOLANA</a>
                        <a href="https://babycake.app/" className="joinLink"><img src="assets/babycake_logo.png" alt="" />BABYCAKE</a>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
