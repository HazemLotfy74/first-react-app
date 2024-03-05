import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Portfolio></Portfolio>
      <About/>
      <Contact/>
      {/* <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes> */}
      <Footer/>
    </>
  );
}

export default App;
