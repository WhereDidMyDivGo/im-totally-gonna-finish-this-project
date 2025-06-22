import "./Features.css";
import config from "./config";

import Beta from "../Beta/Beta";
import TeaserBlock from "../TeaserBlock/TeaserBlock";
import FeatureBlock from "../FeatureBlock/FeatureBlock";

import hero from "../../assets/features/desktop/hero.jpg";

function Features() {
  return (
    <div className="features">
      <section className="s1">
        <TeaserBlock teaser={config.teasers.teaser1} />
        <img src={hero} />
      </section>
      <section className="s2">
        <div className="wrapper">
          <FeatureBlock feature={config.features.feature1} />
          <FeatureBlock feature={config.features.feature2} />
          <FeatureBlock feature={config.features.feature3} />
        </div>
        <div className="wrapper">
          <FeatureBlock feature={config.features.feature1} />
          <FeatureBlock feature={config.features.feature2} />
          <FeatureBlock feature={config.features.feature3} />
        </div>
      </section>

      <Beta />
    </div>
  );
}

export default Features;
