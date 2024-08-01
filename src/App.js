import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {useRef} from "react";

function App() {
    const projRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null)
  return (
      <div className={"centering"}>
          <About projectRef={projRef} resumeRef={resumeRef} contactRef={contactRef}/>
          <Projects projectRef={projRef}/>
          <Resume resumeRef={resumeRef}/>
          <Contact contactRef={contactRef}/>
      </div>
  );
}

export default App;
