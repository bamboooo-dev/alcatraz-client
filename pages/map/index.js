import Image from 'next/image';
import Head from 'next/head';

import Grid from '@material-ui/core/Grid';

import styles from '../../styles/Map.module.scss';

import Header from '../../components/header';
import { LinkIcons, WalkIconLink } from '../../components/linkIcons';

export default function Map() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <LinkIcons uniqueIconLink={WalkIconLink()} />
        <Grid container justify="center" alignItems="center" className={styles.iconBox}>
          <Image
            src="/mitarashi.png"
            width={50}
            height={50}
          />
        </Grid>
      </main>
    </div>
  )
}
