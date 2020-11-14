import Head from 'next/head';

import styles from '../../styles/Map.module.scss';

import Header from '../../components/header';
import { LinkIcons, WalkIconLink } from '../../components/linkIcons';
import SimpleTabs from '../../components/simpleTabs';

export default function Notifications() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SimpleTabs />
        <LinkIcons uniqueIconLink={WalkIconLink()} />
      </main>
    </div>
  )
}
