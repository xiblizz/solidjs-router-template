import logo from '../assets/logo.svg'
import styles from './Home.module.css'

function Home() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img
          src={logo}
          class={styles.logo}
          alt='logo'
        />
        <p>
          Template by{' '}
          <a
            class={styles.link}
            href='https://xblizz.art'
            target='_blank'
            rel='noopener noreferrer'>
            xblizz
          </a>
        </p>
        <a
          class={styles.link}
          href='/hello-world'>
          Hello World!
        </a>
        <a
          class={styles.link}
          href='https://github.com/solidjs/solid'
          target='_blank'
          rel='noopener noreferrer'>
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default Home
