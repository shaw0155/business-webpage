import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="section">
        <div className="logo-container">
          <img src={logo} alt="" />
          <p>A new way to make the payment easy, realiable and secure</p>
        </div>
        <div>
          <h4>Usefull Links</h4>
          <p>content</p>
          <p>create</p>
          <p>explore</p>
          <p>terms and services</p>
        </div>
        <div>
          <h4>community</h4>
          <p>help center</p>
          <p>suggestion</p>
          <p>blog</p>
          <p>news letter</p>
        </div>
        <div>
          <h4>partener</h4>
          <p>our parteners</p>
          <p>become a partner</p>
        </div>
      </footer>
      <hr />
      <p className="copyright">
        Copyright &copy; 2023 SHAW . all Rights Reserved
      </p>
    </>
  );
}
