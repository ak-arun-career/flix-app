/**
 * @summary Home component
 * @description This component is the main container component of the fLIX web app
 */

import {useState} from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';
import styles from './Home.module.css';

const Home = ({ showCase }) => {

    const [showLoading, setShowLoading] = useState(false);
    const sourceData = showCase;
    const [filtered, setFiltered] = useState({subset: showCase});
    let searchTimeout = null;

    const onSearch = (event) => {
        let keyword = (event.target.value).toLowerCase();
        clearTimeout(searchTimeout);

        //Setting a searchTimeout of 1 second
        searchTimeout = setTimeout(() => {
            //show loading indicator
            setShowLoading(true);
            //Filter the results
            let searchResult = sourceData.filter( movie => movie.Title.toLowerCase().indexOf(keyword) !== -1 );
            //Hide loading indicator
            setTimeout(() => {
                setShowLoading(false);
                setFiltered({...filtered, subset:searchResult});
            }, 1000);
        }, 1000);
    };

    let movieList =
        filtered.subset.map((movie, index) => (
            <Movie
                details={movie}
                key={`${movie.imdbID}_${index}`}
            />
        )
    );

    return (
        <div className={styles.container}>
            { showLoading && <Loader /> }
            {/* Logo and Search bar */}
            <Header search={(e) => onSearch(e) }/>
            {/*Main content*/}
            <main className={styles.movieList}>
               { movieList.length > 0 ?
                    movieList : 
                    <NotFound /> }
            </main>
        </div>
    );
};

export default Home;