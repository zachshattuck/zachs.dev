import styles from 'styles/Footer.module.scss'
import { FaCode, FaCodeBranch, FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        <li><a href="https://github.com/zachshattuck"><FaGithub /></a></li>
        <li><a href="https://linkedin.com/in/zacharydshattuck"><FaLinkedin /></a></li>
        <li><a href="https://instagram.com/zach.shattuck"><FaInstagram /></a></li>
      </ul>
      <ul className={styles.music}>
        <li><a href="https://open.spotify.com/artist/2jxSqakimmgmCRG2BZqGDx"><FaSpotify />Farewell Jasper</a></li>
        <li><a href="https://open.spotify.com/artist/1cShTV0x4FfASjryEGUvAB"><FaSpotify />Zach Shattuck</a></li>
      </ul>
      <p className={styles.copyright}>Copyright &copy; Zach Shattuck 2022</p>
    </footer>
  )
}

export default Footer