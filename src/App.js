/**
 * @summary Main component
 */

import movies from './data/movies';
import Home from './components/Home/Home';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
      <Home showCase={movies.data}/>
    </div>
  );
}

export default App;
