import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";

export default function Section2() {
  return (
    <section className="section-2 section">
      <div className="left">
        <img src={bill} alt="" />
      </div>
      <div className="right">
        <h2> Easily control your billing & invoicing</h2>
        <p>
          Elit enim sed massa etiam, mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitir integer.
        </p>
        <div className="right-imgs">
          <img className="img" src={google} alt="" />
          <img className="img" src={apple} alt="" />
        </div>
      </div>
    </section>
  );
}
