import { useState } from 'react';
import {BsList} from 'react-icons/bs';
import {FaFileDownload} from 'react-icons/fa';  
import styles from './DropDown.module.css';

export default function DropDown() {
  const [list, setList] = useState(false);
  return (
    <section className={styles.dropdowm}>
      <button className={styles.dropdown__button} onClick={()=>setList(!list)} onBlur={()=>setList(false)}><BsList/></button>
      {list && <nav className={styles.navbar}>
        <ul>
          <li><a href="about">Sobre mim</a></li>
          <li><a href="expirience">Experiência</a></li>
          <li><a to="/projects">Projetos</a></li>
          <li><a href="contact">Contato</a></li>
          <li><a href="../../public/assets/Vitor-Albarado-estagio.pdf" target="_blank" download>CV</a>  <FaFileDownload/></li>
        </ul>
      </nav>}
    </section>
  );
}