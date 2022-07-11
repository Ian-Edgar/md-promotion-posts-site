import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HeroSection from '../components/image-box/HeroSection';
import HeroRow from '../components/image-box/HeroRow';
import ContactForm from '../components/contact/contact-form';
import EventsSearch from '../components/posts-search/EventsSearch';
import styles from '../styles/Home.module.css';
import { getAllPosts } from '../lib/post-util';
import { ReactNode } from 'react';

interface HeroRendererable {
  imageUrl: string;
  title: string;
  excerpt: string;
  row: number;
  index: number;
  slug: string;
}

const Home: NextPage = ({ posts, tags }: any) => {
  const router = useRouter();

  const onSearch = (tag: string) => {
    const fullPath = `posts/${tag}`;
    router.push(fullPath);
  };

  const renderHeroSections = (sections: HeroRendererable[]) =>
    sections.map((section): ReactNode => {
      return (
        <HeroSection
          title={section.title}
          imageName={section.imageUrl}
          excerpt={section.excerpt}
          slug={section.slug}
          key={`hero-post-${section.slug}`}
        />
      );
    });
  return (
    <div>
      <Head>
        <title>Dept POC</title>
        <meta name='description' content='A Dept poc with nextjs and react' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <>
          {posts.slice(0, 1).map((row: HeroRendererable[]): any => {
            return (
              <HeroRow key={`hero-row-${row[0]['row']}`}>
                {renderHeroSections(row)}
              </HeroRow>
            );
          })}
        </>
        <EventsSearch filterValue={'all'} tags={tags} onSearch={onSearch} />
        <>
          {posts.slice(1).map((row: HeroRendererable[]): any => {
            return (
              <HeroRow key={`hero-row-${row[0]['row']}`}>
                {renderHeroSections(row)}
              </HeroRow>
            );
          })}
        </>
        <ContactForm />
      </main>
    </div>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.posts,
      tags: allPosts.tags,
    },
  };
}

export default Home;
