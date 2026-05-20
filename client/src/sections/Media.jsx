import styles from '../styles/modules/Media.module.css'

const WIDGETS = [
  { id: 'yt-placeholder', type: 'youtube', src: '', label: 'YouTube — add embed URL' },
  { id: 'sp-placeholder', type: 'spotify', src: '', label: 'Spotify — add embed URL' },
]

export default function Media() {
  return (
    <section id="media" className={styles.media}>
      <h2>Media</h2>
      <div className={styles.grid}>
        {WIDGETS.map(w => (
          <div key={w.id} className={styles.widget}>
            {w.src
              ? <iframe src={w.src} title={w.label} className={styles.embed} allowFullScreen />
              : <div className={styles.placeholder}>{w.label}</div>
            }
          </div>
        ))}
      </div>
    </section>
  )
}
