import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { getTestData } from '../lib/tests'

import Header from '../components/header';
import { LinkIcons, MapIconLink } from '../components/linkIcons';

// 疎通確認のコード
// export async function getStaticProps() {
//   const message = await getTestData()
//   return {
//     props: {
//       message
//     }
//   }
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <LinkIcons uniqueIconLink={MapIconLink()} />
        <div className={styles.iconBox}>
          <Image
            src="/mitarashi.png"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
      </main>
    </div>
  )
}
