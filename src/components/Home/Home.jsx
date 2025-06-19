import "./Home.css";
import TeaserBlock from "../TeaserBlock/TeaserBlock";
import StoryBlock from "../StoryBlock/StoryBlock";
import FeatureBlock from "../FeatureBlock/FeatureBlock";

import img1 from "../../assets/home/desktop/create-and-share.jpg";
import img2 from "../../assets/home/desktop/beautiful-stories.jpg";
import img3 from "../../assets/home/desktop/designed-for-everyone.jpg";

import img4 from "../../assets/features/desktop/responsive.svg";
import img5 from "../../assets/features/desktop/no-limit.svg";
import img6 from "../../assets/features/desktop/embed.svg";

function Home() {
  const teasers = {
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
  };

  const stories = {
    story1: {
      title: "The Mountains",
      description: "by John Appleseed",
    },
    story2: {
      title: "Sunset Cityscapes",
      description: "by Benjamin Cruz",
    },
    story3: {
      title: "18 Days Voyage",
      description: "by Alexei Borodin",
    },
    story4: {
      title: "Architecturals",
      description: "by Samantha Brooke",
    },
  };

  const features = {
    feature1: {
      img: img4,
      title: "100% Responsive",
      description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    feature2: {
      img: img5,
      title: "No Photo Upload Limit",
      description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    feature3: {
      img: img6,
      title: "Available to Embed",
      description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
  };

  return (
    <>
      <div className="home">
        <section className="s1">
          <TeaserBlock section={teasers.teaser1} />
          <img src={img1} />
        </section>

        <section className="s2">
          <img src={img2} />
          <TeaserBlock section={teasers.teaser2} />
        </section>

        <section className="s3">
          <TeaserBlock section={teasers.teaser3} />
          <img src={img3} />
        </section>

        <section className="s4">
          {/* <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} /> */}

          <div className="story1">
            <StoryBlock story={stories.story1} />
            <span className="rainbow-line"></span>
          </div>
          <div className="story2">
            <StoryBlock story={stories.story2} />
            <span className="rainbow-line"></span>
          </div>
          <div className="story3">
            <StoryBlock story={stories.story3} />
            <span className="rainbow-line"></span>
          </div>
          <div className="story4">
            <StoryBlock story={stories.story4} />
            <span className="rainbow-line"></span>
          </div>
        </section>

        <section className="s5">
          <div className="wrapper">
            <FeatureBlock feature={features.feature1} />
            <FeatureBlock feature={features.feature2} />
            <FeatureBlock feature={features.feature3} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
