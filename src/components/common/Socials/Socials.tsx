import styles from './Socials.module.scss';
import Link from 'next/link';
import telegram from '@/assets/img/svg/telegram.svg';
import facebook from '@/assets/img/svg/facebook.svg';
import instagram from '@/assets/img/svg/instagram.svg';

const Socials = () => {
    return (
        <div className={styles.socials}>
            <Link href='/' className={styles.socialsLink}>
                <img
                    src={telegram.src}
                    alt='telegram icon'
                    className={styles.socialsIcon}
                />
            </Link>
            <Link href='/' className={styles.socialsLink}>
                <img
                    src={facebook.src}
                    alt='facebook icon'
                    className={styles.socialsIcon}
                />
            </Link>
            <Link href='/' className={styles.socialsLink}>
                <img
                    src={instagram.src}
                    alt='instagram icon'
                    className={styles.socialsIcon}
                />
            </Link>
        </div>
    );
};

export default Socials;
