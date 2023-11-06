import styles from './H1.module.css'

export const H1 = ({ heading, className }) => {
    return (
        <h1 className={styles.h1}>{heading}</h1>
    )
}

export default H1