import { useState, useEffect } from 'react';
import { Menu, X, Code2, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Contact',
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <Code2 className='w-6 h-6 text-purple-600' />
            <span className='font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              NH
            </span>
            <Brain className='w-5 h-5 text-blue-500' />
          </div>

          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium'
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4'>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
