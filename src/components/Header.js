import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import MobileLogo from "../assets/images/logo/mobile-logo.png";
import Logo from "../assets/images/logo/logo.png";
import Wallet from "../assets/images/logo/wallet.png";
import i1 from "../assets/images/logo/i1.png";
import i2 from "../assets/images/logo/i2.png";
import i3 from "../assets/images/logo/i3.png";
import i4 from "../assets/images/logo/i4.png";
import i5 from "../assets/images/logo/i5.png";
import i6 from "../assets/images/logo/i6.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero_section">
      <div className="mobile_menu_section">
        <div className="mobile_menu_header">
          <div className="mobile_logo">
            <img src={MobileLogo} alt="logo" />
          </div>
          <div
            className="bars"
            style={{ cursor: "pointer" }}
            onClick={() => setToggle(!toggle)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mobile_nenu ${toggle && "open"}`}>
          <div className="hero_top_left">
            <div className="menu">
              <ul>
                <li>
                  <a href="">nft mINT</a>
                </li>
                <li>
                  <a href="">Staking</a>
                </li>
                <li>
                  <a href="">DAPP</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_top_right">
            <div className="walletbtn">
              <a href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src={Wallet}
                  alt="walletlogo"
                />
                <span>Connet to the wallet</span>
              </a>
            </div>
            <div className="ico_list">
              <ul>
                <li>
                  <a href="">
                    <img src={i1} alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={i2} alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={i3} alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={i4} alt="logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero_main">
          <div className="hero_top">
            <div className="hero_top_left">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <a href="">nft mINT</a>
                  </li>
                  <li>
                    <a href="">Staking</a>
                  </li>
                  <li>
                    <a href="">DAPP</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero_top_right">
              <div className="walletbtn">
                <a href="#">
                  <img src={Wallet} alt="walletlogo" />
                  <span>Connet to the wallet</span>
                </a>
              </div>
              <div className="ico_list">
                <ul>
                  <li>
                    <a href="">
                      <img src={i1} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={i2} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={i3} alt="logo" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={i4} alt="logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
