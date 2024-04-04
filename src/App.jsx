import { useState } from "react";
import "./App.css";
import { Header, Home, About, Faq, Check, Footer } from "./javascript";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Check" element={<Check />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
