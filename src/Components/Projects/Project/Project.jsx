import styles from './Project.module.css';

import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa';

export default function Project({src, description, title, github,site}){
  return(
    <section className={styles.projects}>
        <div className={styles.projects__img}>
          <a target="__blank" rel="noreferrer" href={site}> <img src={src} alt="Projeto Costs" /></a>
        </div>
        <div className={styles.projects__description}>
          <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.projects__description__link}>
              <a href={github} target="__blank" rel="noreferrer"><FaGithub/></a>
              <a href={site} target="__blank" rel="noreferrer"><FaExternalLinkAlt/></a>
            </div>
        </div>
      </section>
  );
}