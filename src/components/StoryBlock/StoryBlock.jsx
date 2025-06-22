import "./StoryBlock.css";
import "../../styles/animations.css";

import arrow from "../../assets/shared/desktop/arrow.svg";

function StoryBlock({ story }) {
  return (
    <>
      <div className="story-block">
        <img src={story.img} className="bg-image" />
        <h1>{story.title}</h1>
        <h2>{story.description}</h2>
        <span className="line"></span>
        <button>
          <p>READ STORY</p>
          <img className="arrow" src={arrow} />
        </button>
        <span className="rainbow-line"></span>
      </div>
    </>
  );
}

export default StoryBlock;
