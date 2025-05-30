// import Footer from './layout/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';
import './index.css';
import Herosection from './components/Herosection';
import Footer from './layout/Footer';
import Nav from './layout/Header';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Nav/>
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
