import { useState } from "react";
import ConnectModal from "../connectModal/ConnectModal";
import "./topbar.scss";

type MenuType = {
  menuOpen?: boolean;
  setMenuOpen(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [selectNav, setSelectNav] = useState("whitePaper");

  const handleClick = (value: string) => {
    setSelectNav(value);
  };

  return (
    <div className="topbar">
      <div className="logo">
        <a href="/">
          <span>BITB</span>
          <img src="assets/logo.png" alt="" />
          <span>Y</span>
        </a>
      </div>
      <div className="navList">
        <ul>
          <li
            onClick={() => {
              handleClick("whitePaper");
            }}
          >
            <a
              href="/whitePaper"
              style={{
                color:
                  selectNav === "whitePaper" ? "#fff" : "rgb(220, 220, 220)",
              }}
            >
              White Paper
            </a>
            <div
              className="underLine"
              style={{
                backgroundImage:
                  selectNav === "whitePaper"
                    ? `linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`
                    : `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
              }}
            ></div>
          </li>
          <li
            onClick={() => {
              handleClick("tokenomics");
            }}
          >
            <a
              href="#tokenomics"
              style={{
                color:
                  selectNav === "tokenomics" ? "#fff" : "rgb(220, 220, 220)",
              }}
            >
              Tokenomics
            </a>
            <div
              className="underLine"
              style={{
                backgroundImage:
                  selectNav === "tokenomics"
                    ? `linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`
                    : `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
              }}
            ></div>
          </li>
          <li
            onClick={() => {
              handleClick("team");
            }}
          >
            <a
              href="#team"
              style={{
                color: selectNav === "team" ? "#fff" : "rgb(220, 220, 220)",
              }}
            >
              Team
            </a>
            <div
              className="underLine"
              style={{
                backgroundImage:
                  selectNav === "team"
                    ? `linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`
                    : `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) )`,
              }}
            ></div>
          </li>
          <li
            onClick={() => {
              handleClick("socials");
            }}
          >
            <a
              href="#socials"
              style={{
                color: selectNav === "socials" ? "#fff" : "rgb(220, 220, 220)",
              }}
            >
              Socials
            </a>
            <div
              className="underLine"
              style={{
                backgroundImage:
                  selectNav === "socials"
                    ? `linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`
                    : `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
              }}
            ></div>
          </li>
          <li
            onClick={() => {
              handleClick("faq");
            }}
          >
            <a
              href="#faq"
              style={{
                color: selectNav === "faq" ? "#fff" : "rgb(220, 220, 220)",
              }}
            >
              FAQ's
            </a>
            <div
              className="underLine"
              style={{
                backgroundImage:
                  selectNav === "faq"
                    ? `linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`
                    : `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
              }}
            ></div>
          </li>
          {/* <li onClick={()=>{handleClick('faq')}}>
                        <a href="#mint" style={{color : selectNav === 'faq' ? '#fff': 'rgb(220, 220, 220)'}}>F.A.X (Buy BITBOY)</a>
                        <div className="underLine" style={{backgroundImage: selectNav === 'faq' ?`linear-gradient( 180deg, #ffffff 20%, #fafafa 30%, #0a0a0a 100%)`:`linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`}}></div>
                    </li> */}
        </ul>
      </div>
      <div className="social-Links">
        <a target="_blank" href="https://bitboycrypto.com/">
          Buy BITBOY
        </a>
      </div>
      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <ConnectModal
        showConnectModal={showConnectModal}
        setShowConnectModal={setShowConnectModal}
      />
    </div>
  );
}
