import React from "react";
import "./Landing.css";

import inst from "../assets/images/filter/Group 42.png";
import loop from "../assets/images/filter/Group 41.png";
import add from "../assets/images/filter/Group 40.png";
import filt from "../assets/images/filter/Group 39.png";

import arrow from "../assets/images/filter/Group 46.png";
import bit from "../assets/images/filter/Cryptocurrency.png";
import eic from "../assets/images/filter/Cryptocurrency (1).png";
import wallet from "../assets/images/filter/Vector (2).png";
import explore from "../assets/images/filter/radix-icons_tokens.png";
import share from "../assets/images/filter/Group.png";
import handshake from "../assets/images/filter/Vector (1).png";

function Landing() {
  return (
    <div className="row container">
      <div className="col-md-2">
        <div className="sidebar">
          <div className="img p-1">
            <img src={explore} alt="" />
          </div>
          <span className="navtitle">Token Explore</span>
        </div>
      </div>

      <div className="col-md-10">
        <div className="chart">
          <p>chart section</p>
        </div>
        <div className="row fullcolor">
          <div className="col-md-4 pr-2">
            <div className="main">
              <div className="filter">
                <div className="menu">
                  <div className="row">
                    <div className="col-md-4 d-flex align-self-center justify-content-between">
                      <p className="nv">Swap</p>
                      <p className="active">Limit</p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end ">
                      {[inst, loop, add, filt].map((i) => (
                        <div className="img p-1">
                          <img src={i} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <small className="title">You Pay</small>
                <div className="coin d-flex">
                  <div className="left d-flex">
                    <div className="img">
                      <img src={bit} alt="" />
                    </div>
                    <p>ETH</p>
                  </div>
                  <div className="right ">
                    <small>-$2,591</small>
                    <p className="text-center">1</p>
                  </div>
                </div>
                <div className="arrowimg">
                  <img src={arrow} alt="" />
                </div>

                <small className="title">You Receive</small>
                <div className="coin d-flex">
                  <div className="left d-flex">
                    <div className="img">
                      <img src={eic} alt="" />
                    </div>
                    <p>ETH</p>
                  </div>
                  <div className="right ">
                    <small>-$2,591</small>
                    <p className="text-center">1</p>
                  </div>
                </div>

                <div className="buttonDiv d-flex">
                  <div className="img">
                    <img src={wallet} alt="" />
                  </div>
                  <p>Connect Wallet</p>
                </div>

                <div className="cost">
                  <p>1 ETH cost</p>
                  <p>
                    -$2,591<span> 2,584.7933702 DAI</span>
                  </p>
                </div>
                <div className="cost">
                  <p>1 DAI cost</p>
                  <p>
                    -$1<span> 0.0003869 ETH</span>
                  </p>
                </div>
                <div className="cost">
                  <p>Transaction cost</p>
                  <p>
                    -$12.82<span> 0.0049 </span>
                    <span className="purpelbtn">0% Refund</span>
                  </p>
                </div>
                <br />
                <div className="coin d-flex">
                  <div className="left d-flex">
                    <div className="img">
                      <img src={bit} alt="" />
                    </div>
                    <p>ETH</p>
                  </div>
                  <div className="right ">
                    <small>-$2,591</small>
                    <p className="text-center">1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row desc">
              <div className="col-md-3">
                <div className="img">
                  <img src={share} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <p>
                  Connect wallet to generate referral link How it works?
                  <span className="highlight"> Read more.</span>
                </p>
              </div>
            </div>
            <div className="row desc">
              <div className="col-md-3">
                <div className="img">
                  <img src={handshake} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <p>
                  Connect wallet to generate referral link How it works?{" "}
                  <span className="highlight">Read more.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p>Hannan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
