import styles from './Footer.module.scss';
import Link from 'next/link';
import logoWhite from '@/assets/img/svg/logo-white.svg';
import telegram from '@/assets/img/svg/telegram.svg';
import facebook from '@/assets/img/svg/facebook.svg';
import instagram from '@/assets/img/svg/instagram.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLeft}>
                    <Link href='/'>
                        <img
                            src={logoWhite.src}
                            alt='logo-white'
                            className={styles.footerLogoImg}
                        />
                    </Link>
                    <p className={styles.footerLogoText}>
                        ми готові ділитися своїм досвідом, цінностями і
                        історіями
                    </p>

                    <div className={styles.footerSocial}>
                        <Link href='/'>
                            <img
                                src={telegram.src}
                                alt='telegram icon'
                                className={styles.footerSocialIcon}
                            />
                        </Link>
                        <Link href='/'>
                            <img
                                src={facebook.src}
                                alt='facebook icon'
                                className={styles.footerSocialIcon}
                            />
                        </Link>
                        <Link href='/'>
                            <img
                                src={instagram.src}
                                alt='instagram icon'
                                className={styles.footerSocialIcon}
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div>
                        <h3 className={styles.footerColumnTitle}>проєкти</h3>
                        <ul className={styles.footerProjectsList}>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    varburger
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    родичі
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    black sheep
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    moshe
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    ринкові
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    rooftop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    vardelivery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    brooks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/project'
                                    className={styles.footerLink}
                                >
                                    винні звички
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.footerColumnTitle}>компанія</h3>
                        <ul className={styles.footerLinksList}>
                            <li>
                                <Link
                                    href='/about-us'
                                    className={styles.footerLink}
                                >
                                    про нас
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/blog'
                                    className={styles.footerLink}
                                >
                                    блог
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/career'
                                    className={styles.footerLink}
                                >
                                    вакансії
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contacts'
                                    className={styles.footerLink}
                                >
                                    контакти
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className={styles.pageDivider} />

            <div className={styles.footerBottom}>
                <p className={styles.footerTermsCopy}>
                    varfamily &reg; {new Date().getFullYear()}
                </p>
                <div className={styles.footerTerms}>
                    <Link href='/terms' className={styles.footerTermsText}>
                        <p>Політика Конфіденційності</p>
                    </Link>
                    <Link href='/terms' className={styles.footerTermsText}>
                        <p>Угоди Користувача</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
