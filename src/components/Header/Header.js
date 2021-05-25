/**
 * @summary Header component
 * @description This component returns the header of the web app
 */

import Searchfield from './SearchField/SearchField';
import styles from './Header.module.css';

const Header = ({search}) => {
    return(
        <header className={styles.header}>
            <button className={styles.logo} alt='Logo'></button>
            <Searchfield movieSearched={search} />
        </header>
    );
};

export default Header;