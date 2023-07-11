import "./style/_App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <FirstSection />
      <Section2 />
      <Section3 />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
