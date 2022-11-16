import styles from './Projects.module.css';
import costs from '../../assets/img/costs.png';
import tbtt from '../../assets/img/tbtt.png';
import Project from './Project/Project';


export default function Projects(){
  return (
    <section className={styles.main}>
        <h2>Projetos</h2>
        <Project 
          src={costs} 
          title="Costs" 
          description="Sistema para controle de budget, defina projetos, seus custos e 
          serviços e tenha controle de quanto e onde foi gasto o budget do projeto."
          github="https://github.com/vitorAlbarado/costs"

        />
        <Project 
          src={tbtt} 
          title="TBTT" 
          description="Sistema para controle de empréstimos de livros, cadastre as 
          informações dos livros, controle os livros emprestados armazenando as informações de empréstimos realizados."
          github="https://github.com/vitorAlbarado/TBTT"

        />
    </section>
  );
}