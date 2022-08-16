import styles from 'styles/Footer.module.scss'
import { FaCode, FaCodeBranch, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Zach Shattuck 2022</p>
      <ul className={styles.links}>
        <li><a href="https://github.com/zachshattuck/zachs.dev"><FaGithub /> View on GitHub</a></li>
        {/* <li><a href="#"><FaCode /> Developer Mode</a></li> */}
      </ul>
    </footer>
  )
}

export default Footer