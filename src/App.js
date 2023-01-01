import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/OurTeam/Team";
import Sayclient from "./components/saysclient/Sayclient";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Services/>
      <About/>
      <Team/>
      <Sayclient/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
