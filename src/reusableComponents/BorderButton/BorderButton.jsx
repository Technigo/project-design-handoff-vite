import styles from './BorderButton.module.css'

export const BorderButton = ({ buttonText, style }) => {
    return (
        <button className={styles.borderButton} style={style}>{buttonText}</button>
    )
}

export default BorderButton