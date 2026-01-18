import { useEffect } from 'react'

export default function CursorSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById('cursor-spotlight')
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(78, 59, 139, 0.26), transparent 80%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      id="cursor-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.2s ease',
      }}
    />
  )
}
