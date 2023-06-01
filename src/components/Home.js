//Css
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.containerPai}>
      <section className={styles.txt}>
      <span>ENTÃO, VOCÊ QUER VIAJAR PARA</span>
      <h1>SPACE</h1>
      <p> Convenhamos; Se você quiser ir para o espaço, você pode muito bem genuinamente ir para o espaço sideral e não pairar meio que no limite dele. Bem, sente-se e relaxe porque nós lhe daremos uma experiência verdadeiramente fora deste mundo!</p>
      </section>

      <section className={styles.explore}>
        <span>explore</span>
      </section>
    </div>
  )
}

export default Home