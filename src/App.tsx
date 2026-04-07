import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='dark:bg-gray-900'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className='py-6 text-center text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
        <p>© 2026 Nihala Hazeen. Built with TypeScript, React & Tailwind</p>
        <p className='text-sm mt-1'>Backend Engineer | AI Enthusiast</p>
      </footer>
    </div>
  );
}

export default App;
