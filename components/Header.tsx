import { useCallback, useEffect, useRef, useState } from 'react'
import styles from 'styles/Header.module.scss'

const subtitles = [
  "software developer",
  "forgets about projects he started",
  "do it wrong until you know better",
  "what's a decorator again?"
]

const Header = () => {
  const contentRef = useRef<HTMLElement>(null)
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(async () => {
      if (!contentRef.current) return
      let currentIndex = subtitleIndex
      let nextIndex = currentIndex < subtitles.length - 1 ? currentIndex + 1 : 0
      setSubtitleIndex(nextIndex)

      let currentSubtitle = subtitles[currentIndex]
      let nextSubtitle = subtitles[nextIndex]
      for (let i = 0; i < currentSubtitle.length; i++) {
        contentRef.current.textContent = currentSubtitle.substring(0, currentSubtitle.length - i)
        await new Promise(res => { setTimeout(res, 20); });
      }

      for (let i = 0; i < nextSubtitle.length; i++) {
        contentRef.current.textContent = nextSubtitle.substring(0, i + 1)
        await new Promise(res => { setTimeout(res, 20); });
      }
    }, 5000)
  }, [subtitleIndex, setSubtitleIndex])
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Zach Shattuck</h1>
      <h2 className={styles.subtitle}><code ref={contentRef} className={styles.terminal}>software developer</code></h2>
    </header>
  )
}

export default Header