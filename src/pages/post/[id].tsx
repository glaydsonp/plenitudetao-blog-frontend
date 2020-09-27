/* eslint-disable function-paren-newline */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { IWpPost } from '../../data/interfaces/IWpPost.interface';

const WP_ENDPOINT = 'http://plenitudetao.com/blog-api/wp-json/wp/v2';

const fetcher = (url) => fetch(url).then((res) => res.json());

interface IProps {
  post: IWpPost;
}

const Post: React.FC<IProps> = ({ post }) => (
  <>
    {!post && <div>Carregando...</div>}
    {post && (
      <>
        <Head>
          <title>{post.title.rendered}</title>
          {post.yoast_head}
        </Head>
        <div style={{ overflowX: 'hidden' }}>
          <img
            src={
              post._embedded['wp:featuredmedia'][0].media_details.sizes.full
                .source_url
            }
            alt="Featured"
            style={{
              width: '100vw'
            }}
          />
          <p>Titulo: {post.title.rendered}</p>
          <p>Autor: {post._embedded.author[0].name}</p>
          <p>Data de Criação: {post.date}</p>
          <div>
            Texto
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
          <div>
            Tags
            <div>
              {post._embedded['wp:term'].map((tags) =>
                tags.map((tag) => <p key={tag.id}>{tag.name}</p>)
              )}
            </div>
          </div>
          {/* OBJETO DE POST <pre>{JSON.stringify(post, null, 2)}</pre> */}
        </div>
      </>
    )}
  </>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetcher(`${WP_ENDPOINT}/posts/${params.id}?_embed`);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { id: '33' } },
    { params: { id: '66' } },
    { params: { id: '69' } },
    { params: { id: '27' } }
  ],
  fallback: true
});

export default Post;
