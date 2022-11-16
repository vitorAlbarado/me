import { BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";


function Home() {
  return (
    <BrowserRouter>
      <main>
        <NavBar/>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </BrowserRouter>
  );
}

export default Home;
