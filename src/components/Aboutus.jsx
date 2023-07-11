import quotes from "../assets/quotes.svg";
import people1 from "../assets/people01.png";
import people2 from "../assets/people02.png";
import people3 from "../assets/people03.png";
import binance from "../assets/binance.png";
import dropbox from "../assets/dropbox.png";
import coinbase from "../assets/coinbase.png";
import airbnb from "../assets/airbnb.png";

export default function Aboutus() {
  return (
    <section className="section aboutus-section">
      <div className="aboutus-section-header">
        <h2>what people are saying about us</h2>
        <p className="aboutus-section-header-p">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="card-list">
        <div className="card">
          <img className="quote" src={quotes} alt="" />
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.{" "}
          </p>
          <div className="card-creator">
            <img className="people" src={people1} alt="" />
            <div>
              <h3>Herman Jensen</h3>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="quote" src={quotes} alt="" />
          <p>
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="card-creator">
            <img className="people" src={people2} alt="" />
            <div>
              <h3>Steve Mark</h3>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="quote" src={quotes} alt="" />
          <p>
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="card-creator">
            <img className="people" src={people3} alt="" />
            <div>
              <h3>Kenn Gallagher</h3>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsers">
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
      <div className="box">
        <div className="box-content">
          <h2>Let’s try our service now!</h2>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
}
