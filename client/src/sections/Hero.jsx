import GradientBlur from '../components/GradientBlur'
import SocialIcons from '../components/SocialIcons'
import styles from '../styles/modules/Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <GradientBlur />
      <div className={styles.content}>
        <div className={styles.initials}>GD</div>
        <h1 className={styles.name}>Gabriel Davis</h1>
        <p className={styles.title}>Your Title Here</p>
      </div>
      <SocialIcons />
    </section>
  )
}
