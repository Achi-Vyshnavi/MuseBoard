import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MuseBoard</title>
      </Head>
      <section>
        <h1>Welcome to MuseBoard!</h1>
        <p>AI-driven design-to-code platform for modern developers and designers.</p>
      </section>
    </Layout>
  );
}
