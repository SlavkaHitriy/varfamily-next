'use client';
import styles from 'src/components/Header/Header.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import logoBlack from '@/assets/img/svg/logo-black.svg';
import burgerMenu from '@/assets/img/svg/burger-menu.svg';
import closeMenu from '@/assets/img/svg/close-menu.svg';
import { useState } from 'react';
import { Menu } from '@/components/Menu/Menu';

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setIsOpenMenu((prevState) => !prevState);
    };

    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.headerInner)}>
                <Link className={styles.logo} href='/'>
                    <img src={logoBlack.src} alt={'logo'} />
                </Link>

                <button
                    className={classNames(styles.headerMenu, {
                        [styles.headerMenuActive]: isOpenMenu,
                    })}
                    type='button'
                    onClick={handleToggleMenu}
                >
                    <img
                        className={styles.menuIcon}
                        src={isOpenMenu ? closeMenu.src : burgerMenu.src}
                        alt='close menu icon'
                    />
                </button>
            </div>
            <Menu isOpenMenu={isOpenMenu} />
        </header>
    );
};
