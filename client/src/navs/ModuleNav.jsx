import { useState } from 'react'
import { useModules } from '../context/ModuleContext'
import styles from '../styles/modules/ModuleNav.module.css'

export default function ModuleNav() {
  const {
    scrollMode, showResume, showMedia, showCoverLetter,
    gradientBlur, update, updateBlur,
  } = useModules()
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <button className={styles.toggle} onClick={() => setOpen(o => !o)}>
        {open ? '✕' : '⚙'}
      </button>

      {open && (
        <div className={styles.panel}>
          <h3 className={styles.heading}>Module Controls</h3>

          <section className={styles.group}>
            <label className={styles.label}>Scroll Mode</label>
            <div className={styles.row}>
              <button
                className={scrollMode === 'scroll' ? styles.active : styles.btn}
                onClick={() => update({ scrollMode: 'scroll' })}
              >Scroll</button>
              <button
                className={scrollMode === 'multipage' ? styles.active : styles.btn}
                onClick={() => update({ scrollMode: 'multipage' })}
              >Multipage</button>
            </div>
          </section>

          <section className={styles.group}>
            <label className={styles.label}>Sections</label>
            <label className={styles.check}>
              <input type="checkbox" checked={showResume} onChange={e => update({ showResume: e.target.checked })} />
              Resume
            </label>
            <label className={styles.check}>
              <input type="checkbox" checked={showMedia} onChange={e => update({ showMedia: e.target.checked })} />
              Media
            </label>
            <label className={styles.check}>
              <input type="checkbox" checked={showCoverLetter} onChange={e => update({ showCoverLetter: e.target.checked })} />
              Story / Cover Letter
            </label>
          </section>

          <section className={styles.group}>
            <label className={styles.label}>Gradient Blur</label>
            <label className={styles.check}>
              <input type="checkbox" checked={gradientBlur.visible} onChange={e => updateBlur({ visible: e.target.checked })} />
              Visible
            </label>
            <label className={styles.sliderLabel}>Opacity
              <input type="range" min="0" max="1" step="0.05" value={gradientBlur.opacity}
                onChange={e => updateBlur({ opacity: parseFloat(e.target.value) })} />
            </label>
            <label className={styles.sliderLabel}>Size
              <input type="range" min="200" max="1400" step="50" value={gradientBlur.size}
                onChange={e => updateBlur({ size: parseInt(e.target.value) })} />
            </label>
            <label className={styles.sliderLabel}>X %
              <input type="range" min="0" max="100" value={gradientBlur.x}
                onChange={e => updateBlur({ x: parseInt(e.target.value) })} />
            </label>
            <label className={styles.sliderLabel}>Y %
              <input type="range" min="0" max="100" value={gradientBlur.y}
                onChange={e => updateBlur({ y: parseInt(e.target.value) })} />
            </label>
          </section>
        </div>
      )}
    </div>
  )
}
