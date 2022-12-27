import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Frontend Development', description: 'Starting and Learning new designs everyday', imgUrl: images.about01},
  { title: 'Machine Learning', description: 'Software AND Hardware implementations of ML', imgUrl: images.about02},
  { title: 'Backend Development', description: 'Strong understanding in SDLC, Data Structures and OOP', imgUrl: images.about03}
]

const About = () => {
  return (
    <>
    <h2 className = "head-text app__about" ><span>Simplicity </span> is the soul of <span>efficiency</span></h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
        >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='about-p-text' style={{ marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About