import companyLogo from "./assets/Ichop.jpeg";
import CarouselComp from "./components/carousel.tsx";
import MenuBar from "./components/menuBar.tsx";

import "./App.css";
import "./components/carousel.css";

function App() {
  // menu bar

  return (
    <>
      <MenuBar />
      <div className="page">
        <a href="http://localhost:5173/">
          <img src={companyLogo} />
        </a>
        <h1>Ichop</h1>
        <CarouselComp />
      </div>
    </>
  );
}

export default App;
