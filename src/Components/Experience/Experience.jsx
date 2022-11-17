import styles from './Experience.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export default function Experience() {
  const [link, setLink] = useState('analista');
  return (
    <section className={styles.experience}>
      <h2>Experiência</h2>
      <section className={styles.wrapper}>
        <div className={styles.wrapper__btn}>
          <NavLink  
          to='analista' 
          className={classNames({
            [styles.wrapper__btn__link]:true,
            [styles.active]: link === 'analista' ? true:false 
          })}
          onClick={()=>setLink('analista')}
          >
            Semp Tcl
          </NavLink>

          <NavLink  
          to='estagio' 
          className={classNames({
            [styles.wrapper__btn__link]:true,
            [styles.active]: link === 'estagio' ? true:false 
          })}
          onClick={()=>setLink('estagio')}
          >
            Semp Tcl
          </NavLink>

          <NavLink  
          to='1' 
          className={classNames({
            [styles.wrapper__btn__link]:true,
            [styles.active]: link === '1' ? true:false 
          })}
          onClick={()=>setLink('1')}
          >
            
          </NavLink>

          <NavLink  
          to='2' 
          className={classNames({
            [styles.wrapper__btn__link]:true,
            [styles.active]: link === '3' ? true:false 
          })}
          onClick={()=>setLink('3')}
          >
            
          </NavLink>
          
        </div>

        {link === 'analista' ? <div className={styles.wrapper__works}>
          <h3>Analista de suporte Jr. <strong> @Semp Tcl</strong></h3>
          <p>06/2021 at 07/2022</p>
          <div className={styles.wrapper__works__list}>
            <ol>
              <li>Suporte ao usuário</li>
              <li>Implementação de infraestrutura de redes, cabeamento estruturado e configuração de serviços active directory</li>
              <li>Suporte em sistemas ERP e EMS</li>
              <li>Reporte de bugs e correções no sistema de Shoop Floor</li>
            </ol>
          </div>
        </div>:<div></div>}
        {link === 'estagio' ? <div className={styles.wrapper__works}>
          <h3>Estagiário de TI <strong> @Semp Tcl</strong></h3>
          <p>08/2020 at 06/2021</p>
          <div className={styles.wrapper__works__list}>
            <ol>
              <li>Suporte ao usuário</li>
              <li>Manutenção e suporte em informática</li>
              <li>Help Desk</li>
            </ol>
          </div>
        </div>:<div></div>}
      </section>
    </section>
  );
}