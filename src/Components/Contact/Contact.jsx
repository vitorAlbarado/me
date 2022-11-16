import contact from '../../assets/img/contact.png';
import styles from './Contact.module.css';
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";
export default function Contact(){
  return (
    <section className={styles.contact}>
      <div className={styles.contact__text}>
        <h2>Contato</h2>
        <p>Tem uma oportunidade para mim? entre em contato em um dos links abaixo</p>
        <div className={styles.contact__link}>
          <a href="https://github.com/vitorAlbarado" rel="noreferrer" target="_blank">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/vitor-albarado-0b669ab1" rel="noreferrer" target="_blank">
            <FaLinkedin/> 
          </a>
          <a href="https://wa.me/5592994583336" rel ="noreferrer" target="_blank">
            <FaWhatsapp/>
          </a>
          <a href="mailto:vitor.jardina@gmail.com" rel ="noreferrer" target="_blank">
            <AiOutlineMail/>
          </a>
        </div>
        <a href="mailto:vitor.jardina@gmail.com"><button>vitor.jardina@gmail.com</button></a>
      </div>
        <img src={contact} alt="Contact me" />
    </section>
  );
}