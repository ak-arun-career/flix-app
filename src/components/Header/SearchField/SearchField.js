
/**
    @summary SearchField component
    @description This component returns an input field and a search icon.
    The search functionality is controlled from within the Home component.
*/
import styles from './SearchField.module.css';

const Searchfield = ({movieSearched}) => (
    <div className={styles.searchField}>
        <input className={styles.textField} type='text'
            placeholder='Search movie...' onChange={movieSearched} />
        <span className={styles.iconSearch}></span>
    </div>
);

export default Searchfield;