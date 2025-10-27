import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.scss';
import { useTheme } from '../../common/ThemeContext';
import skillsData from '../../JSON/skillsData.json';

function Skills() {
  const { theme } = useTheme();

  const getCardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  });

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.timeline}>
        {skillsData.map((skill, index) => {
          const direction = index % 2 === 0 ? 'left' : 'right';
          const alignmentClass =
            direction === 'left' ? styles.cardLeft : styles.cardRight;

          return (
            <motion.div
              key={skill.name}
              className={`${styles.skillCard} ${alignmentClass}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={getCardVariants(direction)}
            >
              <img
                className={styles.skillImage}
                src={skill.image}
                alt={`${skill.name} logo`}
              />
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
