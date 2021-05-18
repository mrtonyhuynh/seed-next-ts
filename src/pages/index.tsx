import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// [ Static Generation] This function gets called at build time
// export async function getStaticProps() {
//   const title = 'Hello World'
//   return {
//     props: {
//       title,
//     },
//   }
// }

export async function getServerSideProps() {
  // Pass data to the page via props
  console.log('<< Run >>')
  return {
    props: {
      title: "Kamezoko",
    },
  };
}

export default function Home({ title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}