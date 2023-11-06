import styles from './H2.module.css'

export const H2 = ({ heading, style }) => {
    return (
        <h2 className={styles.h2} style={style}>{heading}</h2>
    )
}

export default H2