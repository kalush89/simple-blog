import styles from '@/styles/Header.module.css';

const Header = () => {
    return(
        <header>
            <div className={styles.logo}><a href='/'>simple blog</a></div>
            <nav>
                <ul className={styles.nav__links}>
                    <li><a href='#'>about</a></li>
                    <li><a href='#'>contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;