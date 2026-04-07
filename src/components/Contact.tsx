import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          Let's Build Something Great
        </h2>

        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-8'>
            {/* <p className='text-gray-600 dark:text-gray-400 text-lg'>
              Open for backend engineering roles, AI integration projects, or
              technical discussions.
            </p> */}
          </div>

          <div className='bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-8 space-y-6'>
            <a
              href='mailto:nihalahazeen@gmail.com'
              className='flex items-center justify-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all group'
            >
              <Mail className='w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform' />
              <span className='text-lg text-gray-800 dark:text-gray-200'>
                nihalahazeen@gmail.com
              </span>
              <Send className='w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors' />
            </a>

            {/* <div className='flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl'>
              <Phone className='w-5 h-5 text-purple-600' />
              <span className='text-gray-700 dark:text-gray-300'>
                +971 50 5562868
              </span>
            </div> */}

            <div className='flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl'>
              <MapPin className='w-5 h-5 text-purple-600' />
              <span className='text-gray-700 dark:text-gray-300'>
                Dubai, UAE
              </span>
            </div>
          </div>

          <div className='flex justify-center space-x-6 mt-8'>
            <a
              href='https://github.com/nihalahazeen'
              target='_blank'
              className='p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all hover:scale-110'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com/in/nihalahazeen'
              target='_blank'
              className='p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all hover:scale-110'
            >
              <Linkedin className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
