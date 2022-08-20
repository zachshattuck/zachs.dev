import Footer from 'components/Footer'
import Header from 'components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>zachs.dev</title>
        <meta name="description" content="Web portfolio for Zach Shattuck." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className={styles.main}>
        <p>Navigation</p>
        <nav>
          <ul>
            <li><Link href="/gallery"><a>Gallery</a></Link></li>
          </ul>
        </nav>
        <p>My Apps:</p>
        <ul>
          <li><a href="https://sound.zachs.dev/">Soundlab</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export default Home
