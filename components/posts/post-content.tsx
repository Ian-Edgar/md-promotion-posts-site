import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

interface Post {
  post: { imageUrl: string; title: string; content: string };
}

const PostContent: React.FC<Post> = ({ post }) => {
  const { title, imageUrl, content } = post;
  const imagePath = `/images/${imageUrl}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <div className={classes.articleContent}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;
