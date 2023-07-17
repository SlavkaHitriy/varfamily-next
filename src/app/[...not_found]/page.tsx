import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={'container'}>
                <h1>Not Found This Page :(</h1>
            </div>
        </div>
    );
};

export default NotFound;
