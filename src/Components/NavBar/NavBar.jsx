import {FaFileDownload} from 'react-icons/fa'
import styles from './NavBar.module.css';
import Typical  from 'react-typical';
import { Link, NavLink } from 'react-router-dom';
import DropDown from './Dropdown/DropDown';

export default function NavBar (){
  return (
    <header className={styles.container} >
      <DropDown/>
      <div className={styles.header}>
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
              <li><NavLink href="about">Sobre mim</NavLink></li>
              <li><Link to="experience">Experiência</Link></li>
              <li><Link to="/projects">Projetos</Link></li>
              <li><Link to="contact">Contato</Link></li>
            </ul>
          </nav>
          <div className={styles.resume}><a href="https://drive.google.com/file/d/1UdpOMR3mgrgSsa6XkZnIV5d4soZLn77j/view?usp=share_link" target='__blank'> <FaFileDownload/> CV</a></div>
        </div>
      </div>
    </header>
  );
}