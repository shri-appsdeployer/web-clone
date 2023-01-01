import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
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
    </div>
  );
}

export default App;
