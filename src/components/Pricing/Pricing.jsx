import "./Pricing.css";
import config from "./config.js";

import TeaserBlock from "../TeaserBlock/TeaserBlock";

import hero from "../../assets/pricing/desktop/hero.jpg";

function Pricing() {
  return (
    <div className="pricing">
      <section className="s1">
        <TeaserBlock teaser={config.teasers.teaser1} />
        <img src={hero} />
      </section>
      <section className="s2"></section>
      <section className="s3"></section>
      <section className="s4"></section>
    </div>
  );
}

export default Pricing;
