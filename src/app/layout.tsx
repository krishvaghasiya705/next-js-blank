import Head from 'next/head';
import '../styles/globals.css';
import Header from './common/header';
import Footer from './common/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="This is a test application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
