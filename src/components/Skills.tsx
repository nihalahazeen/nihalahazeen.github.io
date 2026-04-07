import {
  Code2,
  Database,
  Cloud,
  MessageSquare,
  Brain,
  Server,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code2 className='w-6 h-6' />,
      skills: [
        'Go',
        'Python',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Echo Framework',
        'Flask',
      ],
    },
    {
      title: 'Databases & Storage',
      icon: <Database className='w-6 h-6' />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Elasticsearch', 'Redis'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className='w-6 h-6' />,
      skills: [
        'Docker',
        'Kubernetes',
        'AWS (EC2, S3, Cognito)',
        'Azure',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'Messaging & Real-time',
      icon: <MessageSquare className='w-6 h-6' />,
      skills: ['RabbitMQ', 'Apache Kafka', 'Socket.IO', 'gRPC'],
    },
    {
      title: 'AI/ML Integration',
      icon: <Brain className='w-6 h-6' />,
      skills: [
        'LLM Integration',
        'RAG Systems',
        'TensorFlow',
        'PyTorch',
        'OpenAI API',
      ],
    },
    {
      title: 'Backend Architecture',
      icon: <Server className='w-6 h-6' />,
      skills: [
        'Microservices',
        'Event-Driven',
        'RESTful APIs',
        'GraphQL',
        'System Design',
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
          Technical Arsenal
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105'
            >
              <div className='flex items-center space-x-2 mb-4'>
                <div className='text-purple-600'>{category.icon}</div>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                  {category.title}
                </h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm'
                  >
                    {skill}
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

export default Skills;
