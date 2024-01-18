import styles from './P2.module.css'

export const P2 = ({ text, style }) => {
    return (
        <p className={styles.p2} style={style}>{text}</p>
    )
}

export default P2