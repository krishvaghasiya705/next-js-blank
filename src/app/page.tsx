import Head from 'next/head';
import Home from '@/pages/homepage';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page Title</title>
      </Head>
      <Home />
    </>
  );
}
