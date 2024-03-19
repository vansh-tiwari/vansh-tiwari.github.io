import { darkTheme } from './helper/themes'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/sections/Header'
import Skills from './components/sections/Skills'
import StarCanvas from './components/canvas/Stars'
import { AnimatePresence } from 'framer-motion'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ProjectDetails from './components/Dialog/ProjectDetails'
import Box from '@mui/material/Box'
import { useState } from 'react'

export const styles = {
  body: {
    backgroundColor: darkTheme.bg,
    width: '100%',
    overflowX: 'hidden',
    position: 'relative',
  },
  wrapper: {
    paddingBottom: '100px',
    background: `linear-gradient(45deg, ${darkTheme.primary + 99}  0%, ${
      darkTheme.bgDark + 99
    } 50%),
                  linear-gradient(-45deg, ${darkTheme.primary + 99} 50%, ${
      darkTheme.bgDark + 99
    } 100%)`,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%)',
    width: '100%',
  },
}

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null })
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={styles.body}>
        <StarCanvas />
        <AnimatePresence>
          <div>
            <Header />
            <Box sx={styles.wrapper}>
              <Skills />
              <Experience />
            </Box>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Box sx={styles.wrapper}>
              <Education />
              <Contact />
            </Box>
            <Footer />

            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </div>
        </AnimatePresence>
      </Box>
    </BrowserRouter>
  )
}

export default App
