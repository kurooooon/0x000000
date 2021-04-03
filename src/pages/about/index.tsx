import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import styles from './index.module.css';

export default function AboutPage() {
  return (
    <PageWrapper>
      <Head>
        <title>about</title>
      </Head>

      <main className={styles.main}>
        <h1>about</h1>
      </main>
    </PageWrapper>
  );
}
