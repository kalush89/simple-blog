import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return(
        <footer>
             <p className="mw">Made with <span className={styles.hope}>hope</span> and <a href="https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs" target="_blank">Next.js</a></p>
            <div className="cr">&copy; Copyright 2023 Simple Blog</div>
        </footer>
    )
}

export default Footer;