import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Funny Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w100">
        <iframe
          src="https://schoolcheats.net/quizizz/"
          className="w100"
        ></iframe>
      </main>

      <style jsx>{`
        .w100 {
          width: 100vw;
          height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
