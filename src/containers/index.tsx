import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Experience from 'containers/Experience'
import ProjectContainer from 'containers/Projects'
import Home from 'containers/Home'
import MobileContainer from 'containers/Mobile'

const App = () => {
  const location = useLocation()

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

  if (isMobile) return <MobileContainer />

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
