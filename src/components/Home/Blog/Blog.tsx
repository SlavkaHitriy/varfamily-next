import styles from './Blog.module.scss';
import social1 from '@/assets/img/svg/spotify.svg';
import social2 from '@/assets/img/svg/soundcloud.svg';
import social3 from '@/assets/img/svg/youtube.svg';
import social4 from '@/assets/img/svg/podcast.svg';
import Link from 'next/link';
import { readPosts } from '@/data/readPosts';
import { listenPosts } from '@/data/listenPosts';
import BlogItem from '@/components/common/BlogItem/BlogItem';

const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className='container'>
                <h2 className={styles.blogHeadline}>блог</h2>
                <div className={styles.blogContent}>
                    <div>
                        <h3 className={styles.blogSubtitle}>почитати</h3>
                        <ul className={styles.blogCards}>
                            {readPosts.map((post) => (
                                <BlogItem post={post} key={post.title} />
                            ))}
                        </ul>
                    </div>
                    <aside className={styles.blogSidebar}>
                        <h3 className={styles.blogSubtitle}>послухати</h3>
                        <ul className={styles.blogListenCards}>
                            {listenPosts.map((post) => (
                                <li
                                    className={styles.listenItem}
                                    key={post.title}
                                >
                                    <Link
                                        href={post.link}
                                        className={styles.listenItemLink}
                                    >
                                        <img
                                            className={styles.listenItemImage}
                                            src={post.imageSrc}
                                            alt={post.imageAlt}
                                        />
                                        <div
                                            className={styles.listenItemContent}
                                        >
                                            <h2
                                                className={
                                                    styles.listenItemTitle
                                                }
                                            >
                                                {post.title}
                                            </h2>
                                            <div
                                                className={
                                                    styles.listenItemSocials
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.listenItemSocialsLink
                                                    }
                                                >
                                                    <img
                                                        src={social1.src}
                                                        alt='spotify icon'
                                                        className={
                                                            styles.listenItemSocialsIcon
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.listenItemSocialsLink
                                                    }
                                                >
                                                    <img
                                                        src={social2.src}
                                                        alt='soundcloud icon'
                                                        className={
                                                            styles.listenItemSocialsIcon
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.listenItemSocialsLink
                                                    }
                                                >
                                                    <img
                                                        src={social3.src}
                                                        alt='youtube icon'
                                                        className={
                                                            styles.listenItemSocialsIcon
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.listenItemSocialsLink
                                                    }
                                                >
                                                    <img
                                                        src={social4.src}
                                                        alt='podcast icon'
                                                        className={
                                                            styles.listenItemSocialsIcon
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <p
                                                className={
                                                    styles.listenItemDate
                                                }
                                            >
                                                {post.date}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <div className={styles.blogWrapper}>
                    <Link href='/blog' className={styles.blogBtn}>
                        більше
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
