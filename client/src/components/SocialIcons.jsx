import { useModules } from '../context/ModuleContext'
import styles from '../styles/modules/SocialIcons.module.css'

const ICON_GLYPHS = {
  github:   'GH',
  linkedin: 'LI',
  twitter:  'TW',
  email:    '✉',
}

export default function SocialIcons() {
  const { socialIcons } = useModules()

  return (
    <>
      {socialIcons.filter(i => i.visible).map(icon => (
        <a
          key={icon.id}
          href={icon.url || '#'}
          className={styles.icon}
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            fontSize: `${icon.size * 0.45}px`,
          }}
          aria-label={icon.platform}
          target={icon.platform !== 'email' ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {ICON_GLYPHS[icon.platform] ?? icon.platform[0].toUpperCase()}
        </a>
      ))}
    </>
  )
}
