/**
    @summary Movie component
    @description This component returns a movie listing
*/

import MoviePreview from './MoviePreview/MoviePreview';
import styles from './Movie.module.css';

const Movie = ({details, click}) => {
    return (
        <details className={styles.tile}>
            <summary>
                <img className={styles.coverImage} src={details.Poster} alt='Poster' />
                <h4 className={styles.title}>{details.Title}</h4>
                <span className={`${styles.subheading} ${styles.rating}` }>
                    <span className={styles.blueLabel}> Popularity </span>
                    {details.imdbRating}
                </span>
                <span className={`${styles.subheading} ${styles.rated} `}>
                    <span className={styles.blueLabel}> Rated </span>
                    {details.Rated}
                </span>
                <span className={`${styles.subheading} ${styles.runtime}`}>
                    <span className={styles.blueLabel}> Runtime </span>
                    {details.Runtime}
                </span>

                <div className={styles.summaryChevron}>
                    <svg className={styles.up} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    <svg className={styles.down} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </summary>
            {/* More section */}
            <MoviePreview plot={details.Plot} genre={details.Genre} director={details.Director} />
        </details>
    );
};

export default Movie;