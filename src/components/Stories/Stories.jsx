import "./Stories.css";
import StoryBlock from "../StoryBlock/StoryBlock";

import arrow from "../../assets/shared/desktop/arrow.svg";

import imgS2Story2 from "../../assets/stories/desktop/mountains.jpg";
import imgS2Story1 from "../../assets/stories/desktop/cityscapes.jpg";
import imgS2Story3 from "../../assets/stories/desktop/18-days-voyage.jpg";
import imgS2Story4 from "../../assets/stories/desktop/architecturals.jpg";

import imgS3Story2 from "../../assets/stories/desktop/world-tour.jpg";
import imgS3Story1 from "../../assets/stories/desktop/unforeseen-corners.jpg";
import imgS3Story3 from "../../assets/stories/desktop/king-on-africa.jpg";
import imgS3Story4 from "../../assets/stories/desktop/trip-to-nowhere.jpg";

import imgS4Story2 from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import imgS4Story1 from "../../assets/stories/desktop/running-free.jpg";
import imgS4Story3 from "../../assets/stories/desktop/behind-the-waves.jpg";
import imgS4Story4 from "../../assets/stories/desktop/calm-waters.jpg";

import imgS5Story2 from "../../assets/stories/desktop/milky-way.jpg";
import imgS5Story1 from "../../assets/stories/desktop/dark-forest.jpg";
import imgS5Story3 from "../../assets/stories/desktop/somwarpet.jpg";
import imgS5Story4 from "../../assets/stories/desktop/land-of-dreams.jpg";

function Stories() {
  const config = {
    s2: {
      story1: {
        date: "April 16th 2020",
        title: "The Mountains",
        description: "by John Appleseed",
        img: imgS2Story1,
      },
      story2: {
        date: "April 14th 2020",
        title: "Sunset Cityscapes",
        description: "by Benjamin Cruz",
        img: imgS2Story2,
      },
      story3: {
        date: "April 11th 2020",
        title: "18 Days Voyage",
        description: "by Alexei Borodin",
        img: imgS2Story3,
      },
      story4: {
        date: "April 9th 2020",
        title: "Architecturals",
        description: "by Samantha Brooke",
        img: imgS2Story4,
      },
    },
    s3: {
      story1: {
        date: "April 7th 2020",
        title: "World Tour 2019",
        description: "by Timothy Wagner",
        img: imgS3Story1,
      },
      story2: {
        date: "April 3rd 2020",
        title: "Unforeseen Corners",
        description: "by William Malcolm",
        img: imgS3Story2,
      },
      story3: {
        date: "March 29th 2020",
        title: "King on Africa: Part II",
        description: "by Tim Hillenburg",
        img: imgS3Story3,
      },
      story4: {
        date: "March 21st 2020",
        title: "The Trip to Nowhere",
        description: "by Felicia Rourke",
        img: imgS3Story4,
      },
    },
    s4: {
      story1: {
        date: "March 19th 2020",
        title: "Rage of The Sea",
        description: "by Mohammed Abdul",
        img: imgS4Story1,
      },
      story2: {
        date: "March 16th 2020",
        title: "Running Free",
        description: "by Michelle",
        img: imgS4Story2,
      },
      story3: {
        date: "March 11th 2020",
        title: "Behind the Waves",
        description: "by Lamarr Wilson",
        img: imgS4Story3,
      },
      story4: {
        date: "March 9th 2020",
        title: "Calm Waters",
        description: "by Samantha Brooke",
        img: imgS4Story4,
      },
    },
    s5: {
      story1: {
        date: "March 5th 2020",
        title: "The Milky Way",
        description: "by Benjamin Cruz",
        img: imgS5Story1,
      },
      story2: {
        date: "March 4th 2020",
        title: "Night at The Dark Forest",
        description: "by  Mohammed Abdul",
        img: imgS5Story2,
      },
      story3: {
        date: "March 1st 2020",
        title: "Somwarpet’s Beauty",
        description: "by Michelle",
        img: imgS5Story3,
      },
      story4: {
        date: "February 25th 2020",
        title: "Land of Dreams",
        description: "by William Malcolm",
        img: imgS5Story4,
      },
    },
  };
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
