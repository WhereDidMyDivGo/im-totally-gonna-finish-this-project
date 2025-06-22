import "./TeaserBlock.css";
import arrow from "../../assets/shared/desktop/arrow.svg";

function TeaserBlock({ teaser }) {
  return (
    <div className={`teaser-block ${teaser.theme}`}>
      <div className="text">
        <h1>{teaser.title}</h1>
        <h2>{teaser.description}</h2>
        {teaser.buttonText && (
          <button>
            <p>{teaser.buttonText}</p>
            <img className="arrow" src={arrow} />
          </button>
        )}
      </div>
    </div>
  );
}

export default TeaserBlock;
