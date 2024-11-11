import React from 'react'
import { motion } from "framer-motion";
import { Highlight } from './ui/heroHighligt'

function Profile() {
  return (
    <div>
      {/* <HeroHighlight> */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="md:px-4 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto pt-10 md:pt-0 lg:pt-0"
        >
          A seasoned{" "}
          <Highlight className="text-black dark:text-white">
            Fullstack Web Developer
          </Highlight>{" "}
          with 3 years of experience, proficient in frontend development using React.js and Next.js. Adept at building interactive user interfaces. On the backend, I have a strong grasp of Node.js for constructing efficient and scalable APIs. Experienced in managing MySQL and MongoDB databases for data storage and management. Proficient in utilizing various modern web development tools and technologies. Possessing a strong ability to work both independently and collaboratively within a team. Well-versed in Agile and DevOps methodologies.
        </motion.h1>
      {/* </HeroHighlight> */}
    </div>
  )
}

export default Profile