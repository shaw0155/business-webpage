import card from "../assets/card.png";

export default function Section3() {
  return (
    <section className="section section-3">
      <div className="left">
        <h2>find a better card deal in few easy steps</h2>
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
        <img src={card} alt="" />
      </div>
    </section>
  );
}
