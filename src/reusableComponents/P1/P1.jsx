import styles from './P1.module.css'

export const P1 = ({ text, style }) => {
    return (
        <p className={styles.p1} style={style}>{text}</p>
    )
}

export default P1