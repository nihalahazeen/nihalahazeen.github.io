import { ExternalLink, Shield, Gem } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SHAHIN SIRA - Vehicle Tracking Platform',
      description:
        "Enterprise-grade fleet management system with real-time GPS tracking, geofencing, and compliance monitoring for Dubai's cargo vehicles.",
      tech: ['NodeJS', 'WebSocket', 'Redis', 'MongoDB', 'RabbitMQ', 'Docker'],
      features: [
        'Real-time tracking of shipments with WebSocket and messaging brocker',
        'REST API handling millions of daily requests with high uptime',
      ],
      //   link: 'https://shahindxb.ae/',
      icon: <Shield className='w-8 h-8' />,
    },
    {
      title: 'Tawash - Secure Delivery System',
      description:
        'High-security last-mile delivery platform for precious items (jewelry, cash) with end-to-end encryption and real-time tracking.',
      tech: ['NodeJS', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker'],
      features: [
        'Live tracking of deliveries with geospatial indexing and real-time updates',
        'Automated audit logging for all delivery events',
      ],
      //   link: 'https://tawash.ai/',
      icon: <Gem className='w-8 h-8' />,
    },
  ];

  return (
    <section id='projects' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          Production Systems I've Built
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105'
            >
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='text-purple-600'>{project.icon}</div>
                  {/* <a
                    href={project.link}
                    target='_blank'
                    className='text-gray-500 hover:text-purple-600'
                  > */}
                  {/* <ExternalLink className='w-5 h-5' /> */}
                  {/* </a> */}
                </div>
                <h3 className='text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  {project.description}
                </p>

                <div className='mb-4'>
                  <h4 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                    Key Technical Achievements:
                  </h4>
                  <ul className='space-y-1'>
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className='text-sm text-gray-600 dark:text-gray-400 flex items-start'
                      >
                        <span className='text-purple-600 mr-2'>▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-mono'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
