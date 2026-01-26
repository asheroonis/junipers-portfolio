import styles from './styles/navbar-styles.module.css';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return <div className={styles.nav}>
        <ul>
            <li>
                <Link to="/" className={styles.textLink}>
                    <div className={styles.navItem}>HOME</div>
                </Link>
            </li>
            <li>
                <Link to="/About" className={styles.textLink}>
                    <div className={styles.navItem}>ABOUT</div>
                </Link>
            </li>
            <li>
                <Link to="/Works" className={styles.textLink}>
                    <div className={styles.navItem}>WORKS</div>
                </Link>
            </li>
            <li>
                <Link to="/Contact" className={styles.textLink}>
                    <div className={styles.navItem}>CONTACT</div>
                </Link>
            </li>
        </ul>
    </div>
}