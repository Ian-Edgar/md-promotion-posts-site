const fs = require('fs');
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

const groupBy = function (xs, key) {
  return Object.values(
    xs.reduce(
      (groups, item) => ({
        ...groups,
        [item[key]]: [...(groups[item[key]] || []), item],
      }),
      {}
    )
  );
};

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostsFromFiles() {
  const postFiles = fs.readdirSync(postsDirectory);
  return postFiles.map((postFile) => getPostData(postFile));
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent, {});

  const postData = {
    slug: postSlug,
    content,
    ...data,
  };

  return postData;
}

function getSortedPostsAndTags() {
  const allPosts = getPostsFromFiles();

  const sortedPosts = allPosts
    .sort((postA, postB) => postA.index - postB.index)
    .sort((postA, postB) => postA.row - postB.row);

  let postTags = [];
  sortedPosts.map(({ tags }) => {
    tags.map((tag) => postTags.push(tag));
  });

  const uniqueTags = postTags.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return { sortedPosts: sortedPosts, tags: uniqueTags };
}

export function getAllPosts() {
  const { sortedPosts, tags } = getSortedPostsAndTags();
  return {
    posts: groupBy(sortedPosts, 'row'),
    tags,
  };
}

export function getFilteredPosts(filter) {
  const { sortedPosts, tags } = getSortedPostsAndTags();
  const filteredPosts = sortedPosts.filter(
    (post) => post.tags.includes(filter) || filter === 'all'
  );
  return {
    posts: groupBy(filteredPosts, 'row'),
    tags,
  };
}
