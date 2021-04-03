import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import styles from './index.module.css';

export default function WorksPage() {
  return (
    <PageWrapper>
      <Head>
        <title>works</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>works</h1>
      </main>
    </PageWrapper>
  );
}
