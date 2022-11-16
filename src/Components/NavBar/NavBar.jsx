import {FaFileDownload} from 'react-icons/fa'
import styles from './NavBar.module.css';
import Typical  from 'react-typical';
import { Link } from 'react-router-dom';

export default function NavBar (){
  return (
    <header className={styles.header}>
      <span className={styles.title}>{`<`}
        <Typical
          steps={['Vitor Albarado',10000,'',1000]}
          loop={Infinity}
          wrapper="p"
          />
          {`/>`}
        </span>
      <div className={styles.navbar}>
        <nav >
          <ul>
            <li><a href="about">Sobre mim</a></li>
            <li><a href="expirience">Experiência</a></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><a href="contact">Contato</a></li>
          </ul>
        </nav>
        <div className={styles.resume}><FaFileDownload/><a href="../../public/assets/Vitor-Albarado-estagio.pdf" target="_blank" download>CV</a></div>
      </div>
    </header>
  );
}