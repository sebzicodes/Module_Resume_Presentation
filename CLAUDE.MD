# Resume Site — Claude Context

## Project Overview
A modular personal resume website built with React (Vite) + Node.js/Express.
Every section except the Hero is toggleable. Visual features like gradient blur
and social icons are repositionable and resizable at runtime via a Module Control Nav.

## Tech Stack
- Frontend: React, Vite, React Router, CSS Modules
- Backend: Node.js, Express
- Styling: global.css + per-component CSS modules

## Folder Structure
client/src/
  context/ModuleContext.jsx   ← single source of truth for all toggle states
  navs/ModuleNav.jsx          ← control panel for toggling features
  navs/SiteNav.jsx            ← page navigation (behavior changes based on scrollMode)
  sections/                   ← Hero, Resume, Media, Story
  components/                 ← reusable pieces (social icons, blur overlay, etc.)
  pages/                      ← used when scrollMode is 'multipage'
  styles/                     ← global.css + modules/

server/
  index.js                    ← Express entry point
  routes/                     ← API endpoints
  middleware/                 ← CORS, auth, logging
  modules-registry.js         ← feature flag defaults

## Module System
All toggleable state lives in ModuleContext.jsx. The shape is:

{
  scrollMode: 'scroll' | 'multipage',
  showResume: true,
  showMedia: true,
  showCoverLetter: true,
  gradientBlur: { visible: true, x, y, size, opacity },
  socialIcons: [
    { id, platform, url, visible, x, y, size }
  ]
}

To add a new toggleable section:
1. Add its key to ModuleContext with a default value
2. Create the section component in src/sections/
3. Add a toggle control in ModuleNav.jsx
4. Register it in server/modules-registry.js

## Nav Behavior
The SiteNav changes based on scrollMode:
- scroll mode: jump-link buttons across the top (desktop), single Contact button (mobile)
- multipage mode: bento icon that opens a drawer from the right

The nav only shows links for sections that are currently toggled ON.

## Sections
- Hero: always visible. Full-viewport background image, name/title, initials,
  social icons, gradient blur overlay.
- Resume: embedded PDF viewer (public/resume.pdf), download + view buttons.
- Media: grid of embeddable widgets (YouTube, Spotify, etc.)
- Story: switchable between Cover Letter and Personal Story mode.

## PDF Resume
Stored at client/public/resume.pdf.
Viewer uses an <iframe>. Download uses a plain <a download> link. No library needed.

## Key Conventions
- Always read this file at the start of a session before making changes
- All feature state flows through ModuleContext — never store toggle state locally
- Social icons and blur overlay read position/size from context, not hardcoded CSS
- New modules must be registered in both ModuleContext and modules-registry.js