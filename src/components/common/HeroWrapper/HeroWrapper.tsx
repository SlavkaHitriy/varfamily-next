import styles from './HeroWrapper.module.scss';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface HeroWrapperProps extends PropsWithChildren {
    className?: string;
}

const HeroWrapper = ({ children, className }: HeroWrapperProps) => {
    return (
        <section
            className={classNames(
                styles.heroWrapper,
                className && {
                    [className]: className,
                },
            )}
        >
            <div className='container'>{children}</div>
        </section>
    );
};

export default HeroWrapper;
