import "./Home.css";
import TeaserBlock from "../TeaserBlock/TeaserBlock";
import StoryBlock from "../StoryBlock/StoryBlock";
import FeatureBlock from "../FeatureBlock/FeatureBlock";

import imgTeaser1 from "../../assets/home/desktop/create-and-share.jpg";
import imgTeaser2 from "../../assets/home/desktop/beautiful-stories.jpg";
import imgTeaser3 from "../../assets/home/desktop/designed-for-everyone.jpg";

import imgFeature1 from "../../assets/features/desktop/responsive.svg";
import imgFeature2 from "../../assets/features/desktop/no-limit.svg";
import imgFeature3 from "../../assets/features/desktop/embed.svg";

import imgStory1 from "../../assets/stories/desktop/mountains.jpg";
import imgStory2 from "../../assets/stories/desktop/cityscapes.jpg";
import imgStory3 from "../../assets/stories/desktop/18-days-voyage.jpg";
import imgStory4 from "../../assets/stories/desktop/architecturals.jpg";

function Home() {
  const config = {
    teasers: {
      teaser1: {
        title: "Create and share your photo stories.",
        description: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        buttonText: "GET AN INVITE",
        theme: "dark",
      },
      teaser2: {
        title: "BEAUTIFUL STORIES EVERY TIME",
        description: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
        buttonText: "VIEW THE STORIES",
        theme: "light",
      },
      teaser3: {
        title: "DESIGNED FOR EVERYONE",
        description: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
        buttonText: "VIEW THE STORIES",
        theme: "light",
      },
    },
    stories: {
      story1: {
        title: "The Mountains",
        description: "by John Appleseed",
        img: imgStory1,
      },
      story2: {
        title: "Sunset Cityscapes",
        description: "by Benjamin Cruz",
        img: imgStory2,
      },
      story3: {
        title: "18 Days Voyage",
        description: "by Alexei Borodin",
        img: imgStory3,
      },
      story4: {
        title: "Architecturals",
        description: "by Samantha Brooke",
        img: imgStory4,
      },
    },
    features: {
      feature1: {
        img: imgFeature1,
        title: "100% Responsive",
        description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
      },
      feature2: {
        img: imgFeature2,
        title: "No Photo Upload Limit",
        description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
      },
      feature3: {
        img: imgFeature3,
        title: "Available to Embed",
        description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
      },
    },
  };

  return (
    <>
      <div className="home">
        <section className="s1">
          <TeaserBlock section={config.teasers.teaser1} />
          <img src={imgTeaser1} />
        </section>

        <section className="s2">
          <img src={imgTeaser2} />
          <TeaserBlock section={config.teasers.teaser2} />
        </section>

        <section className="s3">
          <TeaserBlock section={config.teasers.teaser3} />
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
