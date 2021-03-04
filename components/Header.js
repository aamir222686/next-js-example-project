import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Aamir</span> Next.js
            </h1>
            <p className={headerStyles.description}>
                Keep Upto Date with Aamir
            </p>
        </div>
    )
}

export default Header;