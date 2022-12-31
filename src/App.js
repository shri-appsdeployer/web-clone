import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/OurTeam/Team";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Services/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
