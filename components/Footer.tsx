import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Built in {new Date().getFullYear()} by Makolani.
    </footer>
  )
}

export default Footer
