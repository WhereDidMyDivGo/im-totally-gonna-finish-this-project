import "./StoryBlock.css";
import "../../styles/animations.css";

import arrow from "../../assets/shared/desktop/arrow.svg";

function StoryBlock({ story }) {
  return (
    <div className="story-block">
      <h1>{story.title}</h1>
      <h2>{story.description}</h2>
      <span></span>
      <button>
        <p>READ STORY</p>
        <img className="arrow" src={arrow} />
      </button>
    </div>
  );
}

export default StoryBlock;
