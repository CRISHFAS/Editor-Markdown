import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaGithub } from 'react-icons/fa';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Editor Markdown Online</title>
        <meta name="description" content="Editor de Markdown en línea con vista previa en tiempo real" />
        <meta name="author" content="Cristian Martin Farias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al Editor Markdown
        </h1>

        <p className={styles.description}>
          Comienza editando{' '}
          <button
            className="rounded-full bg-blue-600 text-white hover:bg-violet-600 p-2"
            onClick={() => router.push('/editor')}
          >
            Iniciar Edición
          </button>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>
              Este proyecto está impulsado por una comunidad abierta que comparte ideas, mejoras y nuevas funciones cada día.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              Observa los cambios de tu texto al instante mientras escribes, con una vista previa fluida y totalmente sincronizada.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              Escribe y formatea sin esfuerzo usando un editor moderno, interactivo y adaptable a todos tus proyectos creativos.
            </p>
          </div>

          <div className={styles.card}>
            <p>Experimenta con tu Markdown, prueba y edita al instante con total libertad, directamente en tu navegador sin instalaciones.</p>
          </div>


        </div>
      </main>

      <footer className="w-full bg-gray-800 dark:bg-gray-900 py-4 px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0">
        <span className="text-purple-400 font-semibold text-center md:text-left">
          Desarrollado por Cristian Martin Farias
        </span>
        <a
          href="https://github.com/CRISHFAS/Editor-Markdown"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-200 hover:text-purple-400 transition-colors duration-200"
        >
          <FaGithub size={24} />
          Código en GitHub
        </a>
      </footer>



    </div>
  )
}

export default Home
