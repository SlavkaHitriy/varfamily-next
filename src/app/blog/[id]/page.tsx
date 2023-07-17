import styles from './Blog.module.scss';
import { Metadata } from 'next';

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id;

    return {
        title: `Blog ${id}`,
    };
}

const Blog = ({ params }: Props) => {
    return (
        <div className={styles.blog}>
            <div className={'container'}>
                <h1>Blog {params.id}</h1>
            </div>
        </div>
    );
};

export default Blog;
