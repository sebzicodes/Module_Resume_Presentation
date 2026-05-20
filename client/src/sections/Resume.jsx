import styles from '../styles/modules/Resume.module.css'

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.header}>
        <h2>Resume</h2>
        <div className={styles.actions}>
          <a href="/resume.pdf" download className={styles.btn}>Download PDF</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Open in new tab
          </a>
        </div>
      </div>
      <iframe
        src="/resume.pdf"
        className={styles.viewer}
        title="Resume PDF"
      />
    </section>
  )
}
