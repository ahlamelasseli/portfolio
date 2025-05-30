import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';
import './index.css';
import Herosection from './components/Herosection';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Herosection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
