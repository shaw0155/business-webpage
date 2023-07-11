import robotImg from "../assets/robot.png";
import discountImg from "../assets/Discount.svg";
import arrowup from "../assets/arrow-up.svg";

export default function Header() {
  return (
    <div className="hero-section">
      <div className="header">
        <div className="header-left">
          <div className="discount">
            <img src={discountImg} alt="" />
            <p>
              <span>20%</span> Discount for <span>1mounth</span> acount
            </p>
          </div>
          <h1>
            the next <span>generation</span> payment method
          </h1>
          <p className="header-content">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit our needs.
            <br />
            We examin annual precentage rates, annual fees.
          </p>
          <a href="#a" className="header-link">
            <div className="header-link-container">
              <p>get</p>
              <img src={arrowup} alt="" />
              <br />
              <p>started</p>
            </div>
          </a>
        </div>
        <div className="header-right">
          <img src={robotImg} alt="robot " />
        </div>
      </div>
      <div className="header-bottom">
        <div className="count">
          <h2>3800+</h2>
          <h3>user active</h3>
        </div>
        <div className="count">
          <h2>230+</h2>
          <h3>trusted comapany</h3>
        </div>
        <div className="count">
          <h2>$230M+</h2>
          <h3>Transaction</h3>
        </div>
      </div>
    </div>
  );
}
