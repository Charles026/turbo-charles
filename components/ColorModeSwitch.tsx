'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from '@/components/ColorModeSwitch.module.css'


const ColorModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select className={styles.selectContainer} value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">🖥 System</option>
      <option value="dark">🌙 Dark</option>
      <option value="light">💡 Light</option>
    </select>
  )
}

export default ColorModeSwitch