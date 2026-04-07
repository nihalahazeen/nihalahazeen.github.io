import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Golang', 'Python', 'Node.js', 'TypeScript', 'AI/ML Systems'];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient'>
            Nihala Hazeen
          </h1>
          <p className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4'>
            Backend Software Engineer
          </p>
          <div className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8'>
            Specializing in{' '}
            <span className='text-purple-600 dark:text-purple-400 font-semibold'>
              {text}
            </span>
            <span className='animate-pulse'>|</span>
          </div>

          <div className='flex justify-center space-x-4 mb-12'>
            {/* <a
              href='#contact'
              className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105'
            >
              Hire Me
            </a> */}
            <a
              href='#experience'
              className='px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all'
            >
              View Resume
            </a>
          </div>

          <div className='flex justify-center space-x-6'>
            <a
              href='https://github.com/nihalahazeen'
              target='_blank'
              className='text-gray-600 hover:text-purple-600 transition-colors'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com/in/nihalahazeen'
              target='_blank'
              className='text-gray-600 hover:text-purple-600 transition-colors'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:nihalahazeen@gmail.com'
              className='text-gray-600 hover:text-purple-600 transition-colors'
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>
        </div>

        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-6 h-6 text-gray-400' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
