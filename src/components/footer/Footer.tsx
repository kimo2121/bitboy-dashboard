import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="logo">
          <a href="/">
            <span>BITB</span>
            <img src="assets/logo.png" alt="" />
            <span>Y</span>
          </a>
        </div>
        {/* <div className="socialLinks">
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-discord"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        
                    </div> */}
        <p>Copyright © 2021 BITBOY Token, All rights Reserved.</p>
      </div>
    </div>
  );
}
