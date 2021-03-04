import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Header />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;
