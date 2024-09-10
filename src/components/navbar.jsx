import styles from './styles/navbar-styles.module.css';
import logo from '../juniper_logo_full_white.svg'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return <div className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Juniper's Works Logo"/>
        <ul>
            <li>
                <Link to="/" className={styles.textLink}>
                    <div className={styles.navItem}>Home</div>
                </Link>
            </li>
            <li>
                <Link to="/Works" className={styles.textLink}>
                    <div className={styles.navItem}>My Works</div>
                </Link>
            </li>
            <li>
                <Link to="/Projects" className={styles.textLink}>
                    <div className={styles.navItem}>Other Projects</div>
                </Link>
            </li>
            <li>
                <Link to="/Contact" className={styles.textLink}>
                    <div className={styles.navItem}>Contact</div>
                </Link>
            </li>
        </ul>
        {/* <a href="./App.js">Home</a> */}
        {/* <a href="../Works.js">My Works</a> */}
        {/* <a href="./App.js">Other Projects</a> */}
        {/* <a href="./App.js">Contact</a> */}
    </div>
}