/**
 * @summary Movie Preview component
 * @description This component returns the detailed description of a movie when the
 * 'Movie' tile is expanded
 */

import styles from './MoviePreview.module.css';

const MoviePreview = ({plot, genre, director}) => {
    return (
        <div className={styles.summaryContent}>
            <article>
                <label className={styles.blueLabel}>Plot</label>
                <p className={styles.plot}>{plot}</p>
            </article>
            <article>
                <label className={styles.blueLabel}>Genre</label>
                <p className={styles.genre}>{genre}</p>
            </article>
            <article>
                <label className={styles.blueLabel}>Director</label>
                <p className={styles.director}>{director}</p>
            </article>
        </div>
    );
}

export default MoviePreview;