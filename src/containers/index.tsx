import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

import Experience from 'containers/Experience'
import ProjectContainer from 'containers/Projects'
import Home from 'containers/Home'

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0)
      }}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/experiences/:id" element={<Experience />} />
        <Route path="/projects/:id" element={<ProjectContainer />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
