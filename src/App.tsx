import { useState } from "react";
import companyLogo from "./assets/Ichop.jpeg";
import CardComponent from "./components/card.tsx";
import CarouselComp from "./components/carousel.tsx";

import "./App.css";
import "./components/carousel.css";

function App() {
  // menu bar

  return (
    <>
      <div>
        <a href="http://localhost:5173/">
          <img src={companyLogo} />
        </a>
      </div>
      <h1>Ichop</h1>
      {/* <CardComponent /> */}
      <CarouselComp />
    </>
  );
}

export default App;
