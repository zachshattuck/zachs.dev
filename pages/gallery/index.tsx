import Footer from 'components/Footer'
import GalleryImageDialog from 'components/GalleryImageDialog'
import Header from 'components/Header'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from "styles/Gallery.module.scss"

const gallerySubtitles = [
  "work i've done",
  "mockups, screenshots, etc.",
  "click on an item to see more info"
]

const Gallery: NextPage = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [src, setSrc] = useState("")
  const [description, setDescription] = useState("")
  const showDialog = (src: string, description: string) => {
    setSrc(src)
    setDescription(description)
    setDialogIsOpen(true)
  }
  const closeDialog = () => {
    setDialogIsOpen(false)
    setSrc("")
    setDescription("")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>zachs.dev &mdash; Gallery</title>
	<meta name="description" content="Gallery of web design and other work by Zach Shattuck." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header subtitles={gallerySubtitles} />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>UI</h2>
          <div className={styles.imageGrid}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/ui/oshcut-order-calendar-1.png"
                alt="Calendar-based order list view for OSHCut Laser (Orem, Utah)."
                onClick={() => showDialog("/gallery-images/ui/oshcut-order-calendar-1.png", "Calendar-based order list view for OSHCut Laser (Orem, Utah).")}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/ui/oshcut-po-system.png"
                alt="Purchase order management system for OSHCut Laser (Orem, Utah)."
                onClick={() => showDialog("/gallery-images/ui/oshcut-po-system.png", "Purchase order management system for OSHCut Laser (Orem, Utah).")}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/ui/oshcut-dev-model-data.png"
                alt="Developer statistics popup for OSHCut Laser (Orem, Utah)."
                onClick={() => showDialog("/gallery-images/ui/oshcut-dev-model-data.png", "Developer statistics popup for OSHCut Laser (Orem, Utah).")}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/ui/oshcut-chat-client.png"
                alt="Chat client mockup for OSHCut Laser (Orem, Utah)."
                onClick={() => showDialog("/gallery-images/ui/oshcut-chat-client.png", "Chat client mockup for OSHCut Laser (Orem, Utah).")}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/ui/oshcut-markdown-note-creator.png"
                alt="Fully-featured Markdown note creation dialog for OSHCut Laser (Orem, Utah)."
                onClick={() => showDialog("/gallery-images/ui/oshcut-markdown-note-creator.png", "Fully-featured Markdown note creation dialog for OSHCut Laser (Orem, Utah).")}
              />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Design</h2>
          <div className={styles.imageGrid}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/design/fj-devil.png"
                alt="&lquot;Devil&rquot; design for Farewell Jasper."
                onClick={() => showDialog("/gallery-images/design/fj-devil.png", "\"Devil\" design for Farewell Jasper.")}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                src="/gallery-images/design/fj-spotify-cover.png"
                alt="Spotify artist cover image I designed."
                onClick={() => showDialog("/gallery-images/design/fj-spotify-cover.png", "Spotify artist cover image I designed.")}
              />
            </div>
          </div>
        </section>
      </main>
      {dialogIsOpen && <GalleryImageDialog src={src} description={description} onClose={closeDialog} />}
      <Footer />
    </div>
  )
}

export default Gallery
