import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

import Home from "./components/Home/Home.jsx";
import Stories from "./components/Stories/Stories.jsx";
import Features from "./components/Features/Features.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </>
  );
}

export default App;
