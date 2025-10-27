import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import naveenimg from '../../assets/naveen-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Naveen_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import aboutData from '../../JSON/about.json';

function About() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={naveenimg}
          className={styles.hero}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <motion.div
        className={styles.info}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1 variants={fadeUp}>{aboutData.name}</motion.h1>
        <motion.h2 variants={fadeUp}>{aboutData.title}</motion.h2>

        <motion.span variants={fadeUp}>
          {/* <a href={aboutData.socials.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a> */}
          <a href={aboutData.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </motion.span>

        <motion.p className={styles.description} variants={fadeUp}>
          {aboutData.description}
        </motion.p>

        <motion.a href={CV} download variants={fadeUp}>
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default About;
