import styles from './Banner.module.css';
import foto from '../../assets/img/profile-pic2.png';
import {FaGithub, FaLinkedin, FaHackerrank} from 'react-icons/fa'

export default function Banner(){
  return (
    <section className={styles.banner}>
      <div className={styles.banner__text}>
        <h2>Vivendo tecnologia e aprendendo diariamente</h2>
        <p>Explorando novas tecnologias e construindo coisas, sempre buscando aprender mais com os outros e ensinar quando possível.</p>
      </div>
      <img src={foto} alt="Vitor albarado foto de perfil" />
      <div className={styles.contact}>
        <a href="https://github.com/vitorAlbarado" rel="noreferrer" target="_blank">
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/vitor-albarado-0b669ab1" rel="noreferrer" target="_blank">
          <FaLinkedin/> 
        </a>
        <a href="a" rel ="noreferrer" target="_blank">
          <FaHackerrank/>
        </a>
      </div>
    </section>
  );
}