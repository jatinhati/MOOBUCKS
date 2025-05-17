import { motion } from 'framer-motion';
import { heroImages, storyImages, teamImages, getPlaceholderImage } from '../utils/placeholderImages';

const timelineEvents = [
  {
    year: '2005',
    title: 'The Beginning',
    description: 'MOOBUCKS was founded in a small corner shop in Seattle with a vision to create a coffee experience that brings people together.',
    image: getPlaceholderImage(storyImages.timeline1),
  },
  {
    year: '2010',
    title: 'Expanding Our Reach',
    description: 'After years of perfecting our craft, we opened our 50th store and established direct relationships with coffee farmers around the world.',
    image: getPlaceholderImage(storyImages.timeline2),
  },
  {
    year: '2015',
    title: 'Sustainability Commitment',
    description: 'We launched our sustainability initiative, committing to ethically sourced beans and environmentally friendly practices across all operations.',
    image: getPlaceholderImage(storyImages.timeline3),
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Adapting to changing times, we enhanced our digital presence with a new app for mobile ordering and a loyalty program.',
    image: getPlaceholderImage(storyImages.timeline4),
  },
  {
    year: '2025',
    title: 'Today & Beyond',
    description: 'Now with over 500 locations worldwide, we continue to innovate while staying true to our core values of quality, community, and sustainability.',
    image: getPlaceholderImage(storyImages.timeline5),
  },
];

const OurStoryPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getPlaceholderImage(heroImages.ourStory, 1920, 1080)}
            alt="Our Story" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From humble beginnings to a global coffee community, discover the journey that shaped MOOBUCKS.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At MOOBUCKS, our mission is to inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in the power of connection that coffee creates. Every cup we serve is crafted with care, using ethically sourced beans from farmers who share our commitment to quality and sustainability.
              </p>
              <p className="text-gray-700">
                Beyond brewing exceptional coffee, we strive to create warm, welcoming spaces where communities can gather, ideas can flourish, and relationships can grow.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.squarespace-cdn.com/content/v1/583656d9f7e0abfee6c932a5/1494257139378-VXFF8VE8FXQLXXXITU9W/image-asset.jpeg" 
                alt="Our Mission" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-moobucks-cream">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing our beans to serving our customers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-moobucks-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Quality</h3>
              <p className="text-gray-700 text-center">
                We source only the finest beans and maintain rigorous standards throughout our brewing process to deliver exceptional coffee every time.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-moobucks-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Community</h3>
              <p className="text-gray-700 text-center">
                We create spaces that foster connection and belonging, supporting local initiatives and building relationships with our customers.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-moobucks-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Sustainability</h3>
              <p className="text-gray-700 text-center">
                We're committed to ethical sourcing, environmental responsibility, and supporting the communities where our coffee is grown.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Our Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From our first cup to global expansion, explore the key moments that shaped MOOBUCKS.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-moobucks-green"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year marker */}
                <div className="absolute top-0 md:top-6 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-moobucks-gold flex items-center justify-center text-white font-bold z-10 md:right-0 md:mr-[-20px]">
                  {index % 2 === 1 && <div className="absolute md:left-0 md:ml-[-20px]"></div>}
                </div>
                
                <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className={`md:w-1/3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                    <div className={`md:w-2/3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="text-moobucks-gold font-bold text-2xl mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-moobucks-dark mb-2">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-moobucks-cream">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The passionate people behind MOOBUCKS who bring our vision to life every day.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="src\assets\images\placeholders\IMG-20240807-WA0007.jpg" 
                alt="Jatin Hati" 
                className="w-full h-64 object-cover hover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-moobucks-dark mb-1">Jatin Hati</h3>
                <p className="text-moobucks-green font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-700 mb-4">
                  With over 20 years in the coffee industry, Jatin founded MOOBUCKS with a vision to create exceptional coffee experiences that bring people together.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.5 15.5h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3zm2-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="src\assets\images\placeholders\475462307_1287389832549619_6284112010741439723_n.jpg" 
                alt="Soma Hati" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-moobucks-dark mb-1">Soma Hati</h3>
                <p className="text-moobucks-green font-medium mb-3">Head of Coffee</p>
                <p className="text-gray-700 mb-4">
                  A certified Q-grader with experience in farms across South America and Africa, Soma ensures every bean meets our quality standards.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.5 15.5h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3zm2-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://c4.wallpaperflare.com/wallpaper/56/531/603/photography-coffee-cup-depth-of-field-wallpaper-preview.jpg" 
                alt="Nandan Hati" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-moobucks-dark mb-1">Nandan Hati</h3>
                <p className="text-moobucks-green font-medium mb-3">Director of Sustainability</p>
                <p className="text-gray-700 mb-4">
                  Leading our environmental initiatives, Nandan works directly with coffee farmers to implement sustainable practices and fair trade partnerships.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-moobucks-green">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.5 15.5h-5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3zm2-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;