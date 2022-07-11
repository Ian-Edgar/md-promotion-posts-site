import * as React from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import { BsRecordCircle } from 'react-icons/bs';
import classes from './HeroSection.module.css';

interface HeroSectionProps {
  imageName: string;
  title: string;
  excerpt: string;
  slug: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageName,
  title,
  excerpt,
  slug,
}) => {
  const route = `/posts/post/${slug}`;
  return (
    <div className={`${classes.boxFlex} ${classes.boxFlexBottomLeft}`}>
      <Image
        className={classes.boxImg}
        src={`/images/${imageName}`}
        alt={excerpt}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
      />
      <div className={classes.boxCaption}>
        <h5>{title}</h5>
        <p>{excerpt}</p>
        <div>
          <Link href={route}>
            <a>
              <BsRecordCircle size='24px' color='white' />
              <span>Read More</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
