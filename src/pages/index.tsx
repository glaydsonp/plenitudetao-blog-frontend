import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  const pageTitle = 'Meu título de página';
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
