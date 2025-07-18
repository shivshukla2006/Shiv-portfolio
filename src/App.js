import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Timeline/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
