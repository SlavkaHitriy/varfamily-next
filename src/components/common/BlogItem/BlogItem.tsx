import styles from './BlogItem.module.scss';
import Link from 'next/link';
import { Post } from '@/data/readPosts';

interface BlogItemInterface {
    post: Post;
}

const BlogItem = ({ post }: BlogItemInterface) => {
    return (
        <li className={styles.item}>
            <Link href={`/blog/${post.id}`} className={styles.itemLink}>
                <div className={styles.itemImageWrap}>
                    <img
                        className={styles.itemImage}
                        src={post.imageSrc}
                        alt={post.imageAlt}
                    />
                </div>
                <div className={styles.itemContent}>
                    <h2 className={styles.itemTitle}>{post.title}</h2>
                    <p className={styles.itemDate}>{post.date}</p>
                </div>
            </Link>
        </li>
    );
};

export default BlogItem;
