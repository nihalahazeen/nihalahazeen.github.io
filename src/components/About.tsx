import { MapPin, Mail, Award, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className='py-20 bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          About Me
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              I'm a{' '}
              <strong className='text-purple-600'>
                Backend Software Engineer
              </strong>{' '}
              passionate about building scalable, high-performance systems. With
              expertise in{' '}
              <strong>Golang, Python, Node.js - Javascript & TypeScript</strong>
              , I architect microservices that power real-time applications and
              handle millions of requests.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              Currently pursuing my <strong>Master's in AI</strong> at
              Universität zu Lübeck, I bridge the gap between robust backend
              engineering and intelligent systems. I've built event-driven
              architectures with RabbitMQ, optimized database queries, and
              containerized applications for cloud deployment.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              When I'm not coding, I mentor junior engineers, contribute to
              open-source, and explore
              <strong> ML/AI integration</strong> in backend systems.
            </p>
            <div className='flex items-center space-x-2 text-gray-600 dark:text-gray-400'>
              <Coffee className='w-5 h-5' />
              <span>Fun fact: I debug faster with coffee ☕</span>
            </div>
          </div>

          <div className='bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 p-6 rounded-2xl space-y-4'>
            <div className='flex items-center space-x-3'>
              <MapPin className='w-5 h-5 text-purple-600' />
              <span>Dubai, UAE</span>
            </div>
            {/* <div className='flex items-center space-x-3'>
              <Phone className='w-5 h-5 text-purple-600' />
              <span>+971 50 5562868</span>
            </div> */}
            <div className='flex items-center space-x-3'>
              <Mail className='w-5 h-5 text-purple-600' />
              <span>nihalahazeen@gmail.com</span>
            </div>
            <div className='flex items-center space-x-3'>
              <Award className='w-5 h-5 text-purple-600' />
              <span>MSc AI (Pursuing) - Universität zu Lübeck</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
