import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from 'styles/Header.module.scss'

const defaultSubtitles = [
  "software developer",
  "musician",
  "forgets about projects he starts",
  "do it wrong until you know better",
]
const charInterval = 20
const subtitleChangeInterval = 5000
const maxSubtitleLength = subtitleChangeInterval / charInterval
for (let subtitle of defaultSubtitles) {
  if (subtitle.length > maxSubtitleLength)
    throw new Error(`'${subtitle}' is too long.`)
}

type HeaderProps = {
  subtitles?: string[]
}
export const Header = ({ subtitles = defaultSubtitles }: HeaderProps) => {
  /** Current path, to display on the mock-terminal.
   * In server-rendering, `document` is undefined. It is, however, available in lifecycle events. That is why it is done this way.
   */
  let [pathname, setPathname] = useState("")
  useEffect(() => {
    setPathname(document.location.pathname === "/" ? "" : document.location.pathname)
  }, [setPathname])
  /** Ref to the mock terminal. */
  const terminalRef = useRef<HTMLElement>(null)
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(async () => {
      if (!terminalRef.current) return

      let currentIndex = subtitleIndex
      let nextIndex = currentIndex < subtitles.length - 1 ? currentIndex + 1 : 0

      let currentSubtitle = subtitles[currentIndex]
      let nextSubtitle = subtitles[nextIndex]

      //Don't bother doing the animation if the tab is not focused
      if (document.visibilityState === 'hidden') {
        terminalRef.current.textContent = nextSubtitle
        setSubtitleIndex(nextIndex)
        return
      }

      //Mock backspace
      for (let i = 0; i < currentSubtitle.length; i++) {
        terminalRef.current.textContent = currentSubtitle.substring(0, currentSubtitle.length - i)
        await new Promise(res => setTimeout(res, charInterval));
      }

      //Mock typing
      for (let i = 0; i < nextSubtitle.length; i++) {
        terminalRef.current.textContent = nextSubtitle.substring(0, i + 1)
        await new Promise(res => setTimeout(res, charInterval));
      }

      setSubtitleIndex(nextIndex)
    }, subtitleChangeInterval)
  }, [subtitleIndex, setSubtitleIndex, subtitles])
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Zach Shattuck</h1>
      <h2 className={styles.subtitle}>
        <code className={styles.terminal}>
          <span className={styles.terminalDirectory}>:~{pathname}$ </span>
          <span ref={terminalRef} className={styles.subtitle}>
            {subtitles[subtitleIndex]}
          </span>
        </code>
      </h2>
      {!!pathname && <Link href="/">Home</Link>}
    </header>
  )
}

export default Header