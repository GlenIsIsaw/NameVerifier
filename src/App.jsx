import { useState } from "react";
import "./App.css";
import { Header, Home, About, Faq, NameChecker, Footer, WrongLink } from "./javascript";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(true);
  return (

    <>
    <div>  {isUnderMaintenance  ? ( <WrongLink /> ) : (
      <div>
     
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/NameChecker" element={<NameChecker />} />
        </Routes>
        <Footer />

      </div>
    )}
      </div>
    </>
  );
}

export default App;
