import { useState } from 'react'
import { useModules } from '../context/ModuleContext'
import styles from '../styles/modules/SiteNav.module.css'

export default function SiteNav() {
  const { scrollMode, showResume, showMedia, showCoverLetter } = useModules()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (scrollMode === 'scroll') {
    return (
      <nav className={styles.scrollNav}>
        <div className={styles.links}>
          <a href="#hero">Home</a>
          {showResume && <a href="#resume">Resume</a>}
          {showMedia && <a href="#media">Media</a>}
          {showCoverLetter && <a href="#story">Story</a>}
        </div>
        <a href="#story" className={styles.contactBtn}>Contact</a>
      </nav>
    )
  }

  return (
    <>
      <nav className={styles.multipageNav}>
        <button
          className={styles.bentoBtn}
          onClick={() => setDrawerOpen(o => !o)}
          aria-label="Open menu"
        >
          ⊞
        </button>
      </nav>
      {drawerOpen && (
        <div className={styles.drawer}>
          <button className={styles.closeBtn} onClick={() => setDrawerOpen(false)}>✕</button>
          <a href="/" onClick={() => setDrawerOpen(false)}>Home</a>
          {showResume && <a href="/resume" onClick={() => setDrawerOpen(false)}>Resume</a>}
          {showMedia && <a href="/media" onClick={() => setDrawerOpen(false)}>Media</a>}
          {showCoverLetter && <a href="/story" onClick={() => setDrawerOpen(false)}>Story</a>}
        </div>
      )}
    </>
  )
}
