import "./Pricing.css";
import config from "./config.js";

import Beta from "../Beta/Beta";
import TeaserBlock from "../TeaserBlock/TeaserBlock";

import hero from "../../assets/pricing/desktop/hero.jpg";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    const switchBtn = document.querySelector(".switch");

    const monthly = document.querySelector(".monthly");
    const yearly = document.querySelector(".yearly");
    const cost = document.querySelectorAll(".cost");
    const per = document.querySelectorAll(".per");

    switchBtn.addEventListener("click", () => {
      const isYearly = switchBtn.classList.toggle("yearly");

      monthly.classList.toggle("selected-toggle");
      yearly.classList.toggle("selected-toggle");

      cost.forEach((el) => {
        const base = parseFloat(el.dataset.base || el.textContent.replace("$", ""));
        const price = isYearly ? base * 10 : base;
        el.textContent = `$${price.toFixed(2)}`;
        el.dataset.base = base;
      });

      per.forEach((p) => {
        p.textContent = isYearly ? "per year" : "per month";
      });
    });
  });

  return (
    <div className="pricing">
      <section className="s1">
        <TeaserBlock teaser={config.teasers.teaser1} />
        <img src={hero} />
      </section>
      <section className="s2">
        <div className="wrapper">
          <div className="toggle">
            <p className="monthly selected-toggle">Monthly</p>
            <button className="switch">
              <span className="ball"></span>
            </button>
            <p className="yearly">Yearly</p>
          </div>

          <div className="plans">
            <div className="basic plan light">
              <h1 className="title">Basic</h1>
              <p className="description">Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
              <h1 className="cost">$19.00</h1>
              <p className="per">per month</p>
              <button>
                <p>PICK PLAN</p>
              </button>
            </div>
            <div className="pro plan dark">
              <span className="rainbow-line"></span>
              <h1 className="title">Pro</h1>
              <p className="description">More advanced features available. Recommended for photography veterans and professionals.</p>
              <h1 className="cost">$39.00</h1>
              <p className="per">per month</p>
              <button>
                <p>PICK PLAN</p>
              </button>
            </div>
            <div className="business plan light">
              <h1 className="title">Business</h1>
              <p className="description">Additional features available such as more detailed metrics. Recommended for business owners.</p>
              <h1 className="cost">$99.00</h1>
              <p className="per">per month</p>
              <button>
                <p>PICK PLAN</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="s3">
        <h1>COMPARE</h1>
        <div className="table">
          <div className="row1 row">
            <p>THE FEATURES</p>
            <p>BASIC</p>
            <p>PRO</p>
            <p>BUSINESS</p>
          </div>
          <div className="row2 row">
            <p>UNLIMITED STORY POSTING</p>
            <p>✓</p>
            <p>✓</p>
            <p>✓</p>
          </div>
          <div className="row3 row">
            <p>UNLIMITED PHOTO UPLOAD</p>
            <p>✓</p>
            <p>✓</p>
            <p>✓</p>
          </div>
          <div className="row4 row">
            <p>EMBEDDING CUSTOM CONTENT</p>
            <p></p>
            <p>✓</p>
            <p>✓</p>
          </div>
          <div className="row5 row">
            <p>CUSTOMIZE METADATA</p>
            <p></p>
            <p>✓</p>
            <p>✓</p>
          </div>
          <div className="row6 row">
            <p>ADVANCED METRICS</p>
            <p></p>
            <p></p>
            <p>✓</p>
          </div>
          <div className="row7 row">
            <p>PHOTO DOWNLOADS</p>
            <p></p>
            <p></p>
            <p>✓</p>
          </div>
          <div className="row8 row">
            <p>SEARCH ENGINE INDEXING</p>
            <p></p>
            <p></p>
            <p>✓</p>
          </div>
          <div className="row9 row">
            <p>CUSTOM ANALYTICS</p>
            <p></p>
            <p></p>
            <p>✓</p>
          </div>
        </div>
      </section>

      <Beta />
    </div>
  );
}

export default Pricing;
