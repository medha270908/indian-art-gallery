import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function renderPage() {
    if (currentPage === "gallery") return <Gallery />;
    if (currentPage === "about") return <About />;
    if (currentPage === "contact") return <Contact />;
    return <Home setPage={setCurrentPage} />;
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
