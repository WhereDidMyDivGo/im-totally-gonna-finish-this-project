import "./FeatureBlock.css";

function FeatureBlock({ feature }) {
  return (
    <div className="feature-block">
      <img src={feature.img} />

      <div>
        <h1>{feature.title}</h1>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default FeatureBlock;
