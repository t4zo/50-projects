import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <Layout title='50 Projects'>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            50 small front end projects | <a href='https://github.com/t4zo/50-projects'>Github</a>
          </h1>

          <p className={styles.description}>Choose one project</p>

          <div className={styles.grid}>
            <a href='/expanding-cards' target='_blank' className={styles.card}>
              <h3>1. Expanding Cards &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/progress-steps' target='_blank' className={styles.card}>
              <h3>2. Progress Steps &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/rotating-navigation' target='_blank' className={styles.card}>
              <h3>3. Rotating Navigation &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/hidden-search-widget' target='_blank' className={styles.card}>
              <h3>4. Hidden Search Widget &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            {/* <a href='/expanding-cards' target='_blank' className={styles.card}>
              <h3>5. Expanding Cards &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/progress-steps' target='_blank' className={styles.card}>
              <h3>6. Progress Steps &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/rotating-navigation' target='_blank' className={styles.card}>
              <h3>7. Rotating Navigation &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a>

            <a href='/hidden-search-widget' target='_blank' className={styles.card}>
              <h3>8. Hidden Search Widget &rarr;</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </a> */}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            class={styles.card}
            href='https://github.com/t4zo'
            target='_blank'
            rel='noopener noreferrer'>
            Tácio de Souza Campos
          </a>
        </footer>
      </div>
    </Layout>
  );
}
