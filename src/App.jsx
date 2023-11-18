import "./App.css";

import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualifications from "./components/qualifications/Qualifications";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
