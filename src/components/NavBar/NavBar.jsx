import styles from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <p>Memberships</p>
            <p>About Us</p>
            <p>Programs</p>
            <p>FAQ</p>
        </div>
    )
}

export default NavBar