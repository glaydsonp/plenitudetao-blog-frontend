/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';
import { IWpPost } from '../data/interfaces/IWpPost.interface';

export const getInitialProps = async (): Promise<{
  postsFromServer: IWpPost[];
}> => {
  const res = await axios('/posts?_embed');
  const json = res.data as IWpPost[];
  return { postsFromServer: json };
};

interface IProps {
  postsFromServer: IWpPost[];
}

const Home: React.FC<IProps> = ({ postsFromServer }) => {
  const { data } = useSWR('/posts?_embed', { initialData: postsFromServer });
  const pageTitle = 'Meu título de página';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* TO-DO: Componente de Loading igual do github */}
      {!data && <div>Loading</div>}
      {data && (
        <main>
          {data.map((post) => (
            <div key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>{post.title.rendered}</a>
              </Link>
            </div>
          ))}

          {/*
           * DADOS DOS POSTS
           * <pre>{JSON.stringify(data, null, 2)}</pre>
           *
           */}
        </main>
      )}
    </>
  );
};

export default Home;
