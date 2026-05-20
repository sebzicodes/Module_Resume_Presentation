import { createContext, useContext, useState } from 'react'

const defaultState = {
  scrollMode: 'scroll',
  showResume: true,
  showMedia: true,
  showCoverLetter: true,
  gradientBlur: { visible: true, x: 50, y: 30, size: 700, opacity: 0.55 },
  socialIcons: [
    { id: 'github',   platform: 'github',   url: '',        visible: true, x: 78, y: 82, size: 28 },
    { id: 'linkedin', platform: 'linkedin', url: '',        visible: true, x: 83, y: 82, size: 28 },
    { id: 'email',    platform: 'email',    url: 'mailto:', visible: true, x: 88, y: 82, size: 28 },
  ],
}

const ModuleContext = createContext(null)

export function ModuleProvider({ children }) {
  const [state, setState] = useState(defaultState)

  function update(patch) {
    setState(prev => ({ ...prev, ...patch }))
  }

  function updateBlur(patch) {
    setState(prev => ({
      ...prev,
      gradientBlur: { ...prev.gradientBlur, ...patch },
    }))
  }

  function updateIcon(id, patch) {
    setState(prev => ({
      ...prev,
      socialIcons: prev.socialIcons.map(icon =>
        icon.id === id ? { ...icon, ...patch } : icon
      ),
    }))
  }

  return (
    <ModuleContext.Provider value={{ ...state, update, updateBlur, updateIcon }}>
      {children}
    </ModuleContext.Provider>
  )
}

export function useModules() {
  return useContext(ModuleContext)
}
