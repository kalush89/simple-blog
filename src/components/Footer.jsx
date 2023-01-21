import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return(
        <footer>
             <p className="by">Made with <span className={styles.hope}>hope</span> and <a href="#" target="_blank">NextJS</a></p>
            <div className="cr">&copy; Copyright 2023 Simple Blog</div>
        </footer>
    )
}

export default Footer;