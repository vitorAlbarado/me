import styles from './About.module.css';
import aboutIcon from '../../assets/img/favicon.png';
export default function About(){
  return (
    <section className={styles.about}>
      <div className={styles.about__text}>
      <h3>Sobre mim</h3>
      <p>Fui Estagiário em TI, onde por um ano
        pude aprender como funciona esse
        setor, desde o suporte ao usuário à
        implementação de novos sistemas,
        promovido a Analista de Suporte Jr.
        atuei com implementação de
        infraestrutura de redes e servidores.
        Estudante de engenharia da
        computação e desenvolvimento Web
        com React + Typescript + SASS +
        BOOTSTRAP, com experiência em
        infraestrutura estou focado em ingressar
        em desenvolvimento.</p>
      </div>
      <img src={aboutIcon} alt="" />
    </section>
  );
}