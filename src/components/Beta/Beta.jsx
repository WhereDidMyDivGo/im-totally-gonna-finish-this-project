import "./Beta.css";

import arrow from "../../assets/shared/desktop/arrow.svg";

function Beta() {
  return (
    <div className="beta">
      <h1>We’re in beta. Get your invite today!</h1>

      <button>
        <p>GET AN INVITE</p>
        <img className="arrow" src={arrow} />
      </button>
    </div>
  );
}

export default Beta;
