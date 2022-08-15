import { useCallback, useEffect, useRef, useState } from 'react'
import styles from 'styles/Header.module.scss'

const subtitles = [
  "software developer",
  "musician",
  "forgets about projects he starts",
  "do it wrong until you know better",
]
const charInterval = 20
const subtitleChangeInterval = 5000
const maxSubtitleLength = subtitleChangeInterval / charInterval
for (let subtitle of subtitles) {
  if (subtitle.length > maxSubtitleLength)
    throw new Error(`'${subtitle}' is too long.`)
}

export const Header = () => {
  const contentRef = useRef<HTMLElement>(null)
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(async () => {
      if (!contentRef.current) return

      let currentIndex = subtitleIndex
      let nextIndex = currentIndex < subtitles.length - 1 ? currentIndex + 1 : 0

      let currentSubtitle = subtitles[currentIndex]
      let nextSubtitle = subtitles[nextIndex]

      //Don't bother doing the animation if the tab is not focused
      if (document.visibilityState === 'hidden') {
        contentRef.current.textContent = nextSubtitle
        setSubtitleIndex(nextIndex)
        return
      }

      //Mock backspace
      for (let i = 0; i < currentSubtitle.length; i++) {
        contentRef.current.textContent = currentSubtitle.substring(0, currentSubtitle.length - i)
        await new Promise(res => setTimeout(res, charInterval));
      }

      //Mock typing
      for (let i = 0; i < nextSubtitle.length; i++) {
        contentRef.current.textContent = nextSubtitle.substring(0, i + 1)
        await new Promise(res => setTimeout(res, charInterval));
      }

      setSubtitleIndex(nextIndex)
    }, subtitleChangeInterval)
  }, [subtitleIndex, setSubtitleIndex])
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Zach Shattuck</h1>
      <h2 className={styles.subtitle}><code ref={contentRef} className={styles.terminal}>software developer</code></h2>
    </header>
  )
}

export default Header