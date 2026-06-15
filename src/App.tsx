import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectCards from './components/ProjectCards';
import Projects from './components/Projects';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <ProjectCards />
      <Projects />
      <Guestbook />
      <Footer />
    </div>
  );
}

export default App;