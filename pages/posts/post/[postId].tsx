import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../../components/posts/post-content';
import { getPostData, getPostsFiles } from '../../../lib/post-util';

const PostDetail: NextPage = ({ post }: any) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context: any) {
  const { params } = context;
  const { postId } = params;

  const postData = getPostData(postId);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const posts = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: posts.map((post) => ({ params: { postId: post } })),
    fallback: false,
  };
}

export default PostDetail;
