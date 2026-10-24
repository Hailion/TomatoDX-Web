import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    name: "Haileamlak Gashaw",
    role: "App Development",
    bio: "Creating intuitive and user-friendly mobile experiences",
    image: "assets/team/haileamlak.jpg",
    socials: {
      github: "https://github.com/Hailion",
      linkedin: "https://www.linkedin.com/in/haileamlak-gashaw-970912359?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk%2F0YiIzOR0ydS2CtHZ3bFw%3D%3D/",
      mail: "mailto:haileamlakgashaw@gmail.com"
    }
  },
  {
    name: "Admassu Ejigu",
    role: "Plant Pathology",
    bio: "Ensuring accurate disease identification and treatment recommendations",
    image: "assets/team/admassu.jpg",
    socials: {
      mail: "#contact",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Habtamu Mulusew",
    role: "Machine Learning",
    bio: "Developing and training advanced computer vision models",
    image: "assets/team/habtamu.jpg",
    // No socials for this member
    socials: {
      mail: "#contact",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Kemal Seid",
    role: "Machine Learning",
    bio: "Developing and training advanced computer vision models",
    image: "assets/team/kemal.jpg",
    socials: {
      mail: "#contact",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Derara Waktola",
    role: "Data Analysis",
    bio: "Analyzing and interpreting data to provide insights and recommendations",
    image: "assets/team/derara.jpg",
    socials: {
      mail: "#contact",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="team" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--color-dark)' }}>Meet the Team</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>

          {/* Main Carousel Area */}
          <div style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                <div style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  border: '4px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                  {teamMembers[currentIndex].name}
                </h3>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                  {teamMembers[currentIndex].role}
                </p>
                <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                  {teamMembers[currentIndex].bio}
                </p>

                {/* Social Links */}
                {teamMembers[currentIndex].socials && (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', opacity: 0.7, color: 'var(--color-text-main)' }}>
                    {teamMembers[currentIndex].socials.linkedin && (
                      <a href={teamMembers[currentIndex].socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <Linkedin size={20} cursor="pointer" />
                      </a>
                    )}
                    {teamMembers[currentIndex].socials.github && (
                      <a href={teamMembers[currentIndex].socials.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <Github size={20} cursor="pointer" />
                      </a>
                    )}
                    {teamMembers[currentIndex].socials.mail && (
                      <a href={teamMembers[currentIndex].socials.mail} style={{ color: 'inherit' }}>
                        <Mail size={20} cursor="pointer" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              padding: '0.75rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              zIndex: 10
            }}
          >
            <ChevronLeft size={24} color="var(--color-dark)" />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              padding: '0.75rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              zIndex: 10
            }}
          >
            <ChevronRight size={24} color="var(--color-dark)" />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'background-color 0.3s ease',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
