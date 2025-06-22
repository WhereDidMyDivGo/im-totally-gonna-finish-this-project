import "./Stories.css";
import config from "./config.js";

import StoryBlock from "../StoryBlock/StoryBlock";

import arrow from "../../assets/shared/desktop/arrow.svg";

function Stories() {
  return (
    <>
      <div className="stories">
        <section className="s1">
          <div className="wrapper">
            <h2>LAST MONTH’S FEATURED STORY</h2>
            <div className="title">
              <h1>HAZY FULL MOON OF APPALACHIA</h1>

              <div>
                <p>March 2nd 2020</p>
                <p>by John Appleseed</p>
              </div>
            </div>
            <p className="description">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <button>
              <p>READ THE STORY</p>
              <img className="arrow" src={arrow} />
            </button>
            <span className="glow"></span>
          </div>
        </section>
        <section className="s2">
          <StoryBlock story={config.s2.story1} />
          <StoryBlock story={config.s2.story2} />
          <StoryBlock story={config.s2.story3} />
          <StoryBlock story={config.s2.story4} />
        </section>
        <section className="s3">
          <StoryBlock story={config.s3.story1} />
          <StoryBlock story={config.s3.story2} />
          <StoryBlock story={config.s3.story3} />
          <StoryBlock story={config.s3.story4} />
        </section>
        <section className="s4">
          <StoryBlock story={config.s4.story1} />
          <StoryBlock story={config.s4.story2} />
          <StoryBlock story={config.s4.story3} />
          <StoryBlock story={config.s4.story4} />
        </section>
        <section className="s5">
          <StoryBlock story={config.s5.story1} />
          <StoryBlock story={config.s5.story2} />
          <StoryBlock story={config.s5.story3} />
          <StoryBlock story={config.s5.story4} />
        </section>
      </div>
    </>
  );
}

export default Stories;
