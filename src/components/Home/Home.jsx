import "./Home.css";
import config from "./config.js";

import TeaserBlock from "../TeaserBlock/TeaserBlock";
import StoryBlock from "../StoryBlock/StoryBlock";
import FeatureBlock from "../FeatureBlock/FeatureBlock";

import imgTeaser1 from "../../assets/home/desktop/create-and-share.jpg";
import imgTeaser2 from "../../assets/home/desktop/beautiful-stories.jpg";
import imgTeaser3 from "../../assets/home/desktop/designed-for-everyone.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <section className="s1">
          <TeaserBlock teaser={config.teasers.teaser1} />
          <img src={imgTeaser1} />
        </section>

        <section className="s2">
          <img src={imgTeaser2} />
          <TeaserBlock teaser={config.teasers.teaser2} />
        </section>

        <section className="s3">
          <TeaserBlock teaser={config.teasers.teaser3} />
          <img src={imgTeaser3} />
        </section>

        <section className="s4">
          <StoryBlock story={config.stories.story1} />
          <StoryBlock story={config.stories.story2} />
          <StoryBlock story={config.stories.story3} />
          <StoryBlock story={config.stories.story4} />
        </section>

        <section className="s5">
          <div className="wrapper">
            <FeatureBlock feature={config.features.feature1} />
            <FeatureBlock feature={config.features.feature2} />
            <FeatureBlock feature={config.features.feature3} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
