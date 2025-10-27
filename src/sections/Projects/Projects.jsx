import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.scss';
import projects from '../../JSON/projectsData.json';
import { useTheme } from '../../common/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Projects() {
   const { theme, toggleTheme } = useTheme();
  return (
    <section id="projects" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeUp}
      >
        Projects
      </motion.h1>

      <motion.div
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {projects.map((project) => {
          const words = project.description.split(' ');

          return (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div className={styles.textSection}>
                <motion.h3  className={styles.title} variants={fadeUp}>{project.title}</motion.h3>

                <motion.p className={styles.description} variants={fadeUp}>
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ display: 'inline-block', marginRight: '4px' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  className={styles.imageSection}
                >
                  <img
                  src={require(`../../assets/${ theme === 'light' ?project.image:project.blackimage}`)}
                  alt={project.title}
                />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Projects;
