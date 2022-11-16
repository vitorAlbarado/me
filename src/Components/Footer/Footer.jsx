import styles from './Footer.module.css';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <p>Made by Vitor inspired by <a href="https://twitter.com/Bauddhik_Geek">Nitesh Thapliyal</a> & <a href="https://twitter.com/nasyx_rakeeb">Nasyx Rakeeb</a></p>
    </footer>
  );
}