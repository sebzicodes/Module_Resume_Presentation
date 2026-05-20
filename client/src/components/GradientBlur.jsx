import { useModules } from '../context/ModuleContext'
import styles from '../styles/modules/GradientBlur.module.css'

export default function GradientBlur() {
  const { gradientBlur } = useModules()
  const { visible, x, y, size, opacity } = gradientBlur

  if (!visible) return null

  return (
    <div
      className={styles.blur}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
      }}
    />
  )
}
