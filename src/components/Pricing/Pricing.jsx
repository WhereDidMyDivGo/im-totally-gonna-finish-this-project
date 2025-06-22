import "./Pricing.css";
import config from "./config.js";

import Beta from "../Beta/Beta";
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

      <Beta />
    </div>
  );
}

export default Pricing;
