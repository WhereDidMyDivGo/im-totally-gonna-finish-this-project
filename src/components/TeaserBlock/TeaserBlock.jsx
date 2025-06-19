import "./TeaserBlock.css";
import arrow from "../../assets/shared/desktop/arrow.svg";

function TeaserBlock({ section }) {
  return (
    <div className={`teaser-block ${section.theme}`}>
      <div className="text">
        <h1>{section.title}</h1>
        <h2>{section.description}</h2>
        <button>
          <p>{section.buttonText}</p>
          <img className="arrow" src={arrow} />
        </button>
      </div>
    </div>
  );
}

export default TeaserBlock;
