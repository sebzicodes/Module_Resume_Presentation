import { Routes, Route } from 'react-router-dom'
import { useModules } from './context/ModuleContext'
import SiteNav from './navs/SiteNav'
import ModuleNav from './navs/ModuleNav'
import Hero from './sections/Hero'
import Resume from './sections/Resume'
import Media from './sections/Media'
import Story from './sections/Story'
import ResumePage from './pages/ResumePage'
import MediaPage from './pages/MediaPage'
import StoryPage from './pages/StoryPage'

function ScrollLayout() {
  const { showResume, showMedia, showCoverLetter } = useModules()
  return (
    <>
      <Hero />
      {showResume && <Resume />}
      {showMedia && <Media />}
      {showCoverLetter && <Story />}
    </>
  )
}

export default function App() {
  const { scrollMode } = useModules()

  return (
    <>
      <SiteNav />
      <ModuleNav />
      {scrollMode === 'scroll' ? (
        <ScrollLayout />
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
      )}
    </>
  )
}
