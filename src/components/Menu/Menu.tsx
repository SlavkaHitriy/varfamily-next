import styles from './Menu.module.scss';
import classNames from 'classnames';
import arrowDown from '@/assets/img/svg/arrow-down.svg';
import arrowTop from '@/assets/img/svg/arrow-top.svg';
import telegram from '@/assets/img/svg/telegram.svg';
import facebook from '@/assets/img/svg/facebook.svg';
import instagram from '@/assets/img/svg/instagram.svg';
import kidsmenu from '@/assets/img/svg/Kidsmenu.svg';
import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const MENU_PADDING = 32;

interface MenuProps {
    isOpenMenu: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpenMenu }) => {
    const dropdownMenu = useRef<HTMLUListElement>(null);
    const [isOpenProjects, setIsOpenProjects] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpenProjects((prevState) => !prevState);
    };

    useEffect(() => {
        if (dropdownMenu.current) {
            dropdownMenu.current.style.height = isOpenProjects
                ? `${dropdownMenu.current.scrollHeight + MENU_PADDING}px`
                : '0';
        }
    }, [isOpenProjects]);

    return (
        <div
            className={classNames(styles.menu, {
                [styles.menuActive]: isOpenMenu,
            })}
        >
            <div className={styles.menuScroll}>
                <ul>
                    <li
                        className={classNames(
                            styles.menuItem,
                            styles.menuItemProjects,
                        )}
                    >
                        <div
                            className={classNames(styles.menuItemLink, {
                                [styles.menuItemLinkActive]: isOpenProjects,
                            })}
                            onClick={handleToggleDropdown}
                        >
                            проєкти
                        </div>
                        <img
                            className={styles.menuItemIcon}
                            src={isOpenProjects ? arrowTop.src : arrowDown.src}
                            alt='arrow down icon'
                        />
                        <ul
                            ref={dropdownMenu}
                            className={classNames(styles.dropdownMenu, {
                                [styles.dropdownMenuActive]: isOpenProjects,
                            })}
                        >
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>varburger</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>black sheep</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>ринкові</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>vardelivery</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>винні звички</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>родичі</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>moshe</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>rooftop</Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href='/project'>brooks</Link>
                            </li>
                        </ul>
                    </li>

                    <li className={styles.menuItem}>
                        <Link href='/about-us' className={styles.menuItemLink}>
                            про нас
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='/blog' className={styles.menuItemLink}>
                            блог
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='/career' className={styles.menuItemLink}>
                            Вакансії
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href='/contacts' className={styles.menuItemLink}>
                            контакти
                        </Link>
                    </li>
                </ul>
                <div className={styles.menuSocial}>
                    <Link href='/'>
                        <img
                            className={styles.menuSocialIcon}
                            src={telegram.src}
                            alt='telegram icon'
                        />
                    </Link>
                    <Link href='/'>
                        <img
                            className={styles.menuSocialIcon}
                            src={facebook.src}
                            alt='facebook icon'
                        />
                    </Link>
                    <Link href='/'>
                        <img
                            className={styles.menuSocialIcon}
                            src={instagram.src}
                            alt='instagram icon'
                        />
                    </Link>
                </div>
            </div>
            <Link href='/career' className={styles.menuButton}>
                приєднатися до команди
            </Link>
            <img
                className={styles.menuSvg}
                src={kidsmenu.src}
                alt='kids menu icon'
            />
        </div>
    );
};
