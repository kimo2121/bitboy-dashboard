import "./menu.scss";

import { AiOutlineClose } from "react-icons/ai";
type MenuType = {
  menuOpen: boolean;
  setMenuOpen(flag: boolean): void;
};

export default function Menu({ menuOpen, setMenuOpen }: MenuType) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <div className="close-icon" onClick={() => setMenuOpen(false)}>
        <AiOutlineClose color="white" className="closeIcon" />
      </div>
      <ul>
        <li
          onClick={() => setMenuOpen(false)}
          className={"menuItem1 " + (menuOpen && "active")}
        >
          <a href="/whitePaper">White Paper</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className={"menuItem2 " + (menuOpen && "active")}
        >
          <a href="#tokenomics">Tokenomics</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className={"menuItem3 " + (menuOpen && "active")}
        >
          <a href="#team">Team</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className={"menuItem5 " + (menuOpen && "active")}
        >
          <a href="#socials">Socials</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className={"menuItem6 " + (menuOpen && "active")}
        >
          <a href="#mint">(Buy BITBOY)</a>
        </li>
      </ul>
    </div>
  );
}
