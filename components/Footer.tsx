import styles from 'styles/Footer.module.scss'
import { FaCode, FaCodeBranch, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright &copy; Zach Shattuck 2022</p>
      <ul className={styles.socials}>
        <li><a href="https://github.com/zachshattuck"><FaGithub /></a></li>
        <li><a href="https://linkedin.com/in/zacharydshattuck"><FaLinkedin /></a></li>
        {/* <li><a href="#"><FaCode /> Developer Mode</a></li> */}
      </ul>
    </footer>
  )
}

export default Footer