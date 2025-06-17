import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar'
import {Hero} from './components/hero/hero'
import { About } from './components/about/about'
import { Skills } from './components/skills/skills'
import { Projects } from './components/projects/projects'
import { Experience } from './components/experience/experience'
import { Contact } from './components/contact/contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      </div>
  )
}

export default App
