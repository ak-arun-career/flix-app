/**
 * @summary NotFound component
 * @description This component returns a message when a search return no results
 */

import styles from './NotFound.module.css';

const NotFound = () => (
    <p className={styles.notFoundText}>
        Oops! This movie could not be found.
    </p>
);

export default NotFound;