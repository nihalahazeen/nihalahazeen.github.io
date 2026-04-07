import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Emcode Technologies',
      location: 'Dubai, UAE',
      period: 'Oct 2022 - Present',
      responsibilities: [
        'Architect and maintain high-throughput microservices in Go, Python, and Node.js serving real-time vehicle tracking data',
        'Design event-driven systems using RabbitMQ for async processing, reducing inter-service coupling',
        'Implement Elasticsearch clusters for low-latency search across 10M+ records',
        'Build and optimize RESTful APIs handling thousands of requests per second',
        'Containerize applications with Docker and orchestrate deployment workflows',
        'Drive engineering best practices',
      ],
      tech: [
        'Go',
        'Python',
        'Node.js',
        'RabbitMQ',
        'Elasticsearch',
        'Docker',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'D and B Properties',
      location: 'Dubai, UAE',
      period: 'Feb 2022 - Oct 2022',
      responsibilities: [
        'Developed Python-Flask microservices with clean architecture patterns',
        'Designed and optimized database schemas in PostgreSQL achieving faster query performance',
        'Containerized applications using Docker and deployed on Azure cloud infrastructure',
        'Collaborated with cross-functional teams to deliver features on aggressive timelines',
        'Implemented comprehensive logging and monitoring solutions',
      ],
      tech: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'Azure', 'Git'],
    },
    {
      title: 'Python Software Engineer',
      company: 'Edstem Technologies',
      location: 'Kerala, India',
      period: 'Jan 2021 - Feb 2022',
      responsibilities: [
        'Built RESTful APIs with Flask handling millions of daily requests',
        'Implemented TDD practices achieving high code coverage',
        'Managed PostgreSQL and MongoDB databases for data-intensive applications',
        'Mentored new team members on Python best practices and agile methodology',
        'Deployed applications on AWS EC2 with S3 for static assets',
      ],
      tech: [
        'Python',
        'Flask',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Git',
        'Pytest',
      ],
    },
  ];

  return (
    <section id='experience' className='py-20 bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          Engineering Journey
        </h2>

        <div className='space-y-8'>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className='bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all'
            >
              <div className='flex flex-wrap justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
                    {exp.title}
                  </h3>
                  <div className='flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-1'>
                    <Briefcase className='w-4 h-4' />
                    <span>{exp.company}</span>
                    <MapPin className='w-4 h-4 ml-2' />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className='flex items-center space-x-1 text-purple-600'>
                  <Calendar className='w-4 h-4' />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className='space-y-2 mb-4'>
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className='text-gray-700 dark:text-gray-300 flex items-start'
                  >
                    <span className='text-purple-600 mr-2'>•</span>
                    {resp}
                  </li>
                ))}
              </ul>

              <div className='flex flex-wrap gap-2'>
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs font-mono'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
