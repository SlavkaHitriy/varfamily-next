import blog1 from '@/assets/img/blog/blog-img1.jpg';
import blog2 from '@/assets/img/blog/blog-img2.jpg';

export interface Post {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    date: string;
}

export const readPosts: Post[] = [
    {
        id: 1,
        imageSrc: blog1.src,
        imageAlt: 'Image with cafe design',
        title: 'Як Varfamily працює з сервісом',
        date: '22 квітня 2023',
    },
    {
        id: 2,
        imageSrc: blog2.src,
        imageAlt: 'Image with health food',
        title: 'Найкращі кулінарні фестивалі: Де знайти незабутні смакові враження',
        date: '22 квітня 2023',
    },
];
