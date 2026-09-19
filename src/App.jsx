import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Parcours from "./sections/Parcours";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode
      ? "dark-mode"
      : "light-mode";
  }, [darkMode]);

  return (
    <div className="app">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Parcours />
      </main>
      <Contact />

    </div>
  );
}

export default App;