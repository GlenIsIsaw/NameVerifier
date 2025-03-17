import { useState } from "react";
import "./App.css";
import {
  Header,
  Home,
  About,
  Faq,
  NameChecker,
  Footer,
  WrongLink,
  Update,
  Akap,
  FirstDay,
  SecondDay,
  ThirdDay,
  FourthDay,
  FifthDay,
  SixthDay,
  SeventhDay,
} from "./javascript";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);
  return (
    <>
      <div>
        {" "}
        {isUnderMaintenance ? (
          <WrongLink />
        ) : (
          <div>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/NameChecker" element={<NameChecker />} />
              <Route path="/Akap" element={<Akap />} />
              <Route path="/FirstDay" element={<FirstDay />} />
              <Route path="/SecondDay" element={<SecondDay />} />
              <Route path="/ThirdDay" element={<ThirdDay />} />
              <Route path="/FourthDay" element={<FourthDay />} />
              <Route path="/FifthDay" element={<FifthDay />} />
              <Route path="/SixthDay" element={<SixthDay />} />
              <Route path="/SeventhDay" element={<SeventhDay />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
