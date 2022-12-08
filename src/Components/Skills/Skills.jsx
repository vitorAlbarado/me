import {FaReact, FaSass, FaGitAlt,FaGithub, FaJsSquare,FaBootstrap} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si'
import styles from './Skills.module.css';
export default function Skills(){
  return(
    <section className={styles.skills}>
      <h2>Hard Skills</h2>
      <div className={styles.skills__icons}>
        <label><FaReact/> </label>
        <label><FaJsSquare/></label>
        <label><SiTypescript/></label>
        <label><FaGitAlt/></label>
        <label><FaGithub/></label>
        <label><FaSass/></label>
        <label><FaBootstrap/></label>
      </div>
    </section>
  );
}