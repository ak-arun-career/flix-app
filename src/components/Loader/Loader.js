/**
 * @summary Loader component
 * @description This component returns a loading indicator to be used throughout the app
 */

import styles from './Loader.module.css';

const Loader = () => {
    return (
        <section className={styles.placeholder}>
            <div className={styles.logoBig}></div>
            <h1 className={styles.title}>fLIX</h1>
        </section>
    )
}

export default Loader;