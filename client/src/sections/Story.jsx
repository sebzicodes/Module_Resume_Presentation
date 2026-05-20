import { useState } from 'react'
import styles from '../styles/modules/Story.module.css'

const MODES = ['Cover Letter', 'Personal Story']

export default function Story() {
  const [mode, setMode] = useState('Cover Letter')

  return (
    <section id="story" className={styles.story}>
      <div className={styles.tabs}>
        {MODES.map(m => (
          <button
            key={m}
            className={mode === m ? styles.activeTab : styles.tab}
            onClick={() => setMode(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {mode === 'Cover Letter' ? (
        <div className={styles.content}>
          <h2>Cover Letter</h2>
          <p>Add your cover letter content here.</p>
        </div>
      ) : (
        <div className={styles.content}>
          <h2>Personal Story</h2>
          <p>Add your personal story here.</p>
        </div>
      )}
    </section>
  )
}
