import shield from "../assets/Shield.svg";
import star from "../assets/Star.svg";
import send from "../assets/Send.svg";

export default function FirstSection() {
  return (
    <section className="first-section section">
      <div className="left">
        <h2>you do the buisness we'll handle the money</h2>
        <p>
          with the right credit card, yiu can improve your financial life by
          building credit, earning rewards and saving money. but with hundreds
          od credit cards on the market.
        </p>
        <button className="btn-primary" type="button">
          get started
        </button>
      </div>
      <div className="right">
        <div className="card">
          <img src={star} alt="" />
          <div className="card-content">
            <h3>rewards</h3>
            <p>
              The best credit cards offer same tantalizing combination of
              promotioms and prizes
            </p>
          </div>
        </div>
        <div className="card">
          <img src={shield} alt="" />
          <div className="card-content">
            <h3>100% secured</h3>
            <p>
              we take proactive steps make sure your information and transaction
              are secure.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={send} alt="" />
          <div className="card-content">
            <h3>balance transfer</h3>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
