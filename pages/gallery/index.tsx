import Header from 'components/Header'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from "styles/Gallery.module.scss"

const gallerySubtitles = [
  "work i've done",
  "mockups, screenshots, etc.",
  "click on an item to see more info"
]

const Gallery: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zach S. &mdash; Gallery</title>
      </Head>
      <Header subtitles={gallerySubtitles} />
      <main>

      </main>
    </div>
  )
}

export default Gallery