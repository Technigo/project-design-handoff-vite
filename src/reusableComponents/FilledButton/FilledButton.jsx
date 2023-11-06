import styles from './FilledButton.module.css'

export const FilledButton = ({ buttonText, style }) => {
    return (
        <button className={styles.filledButton} style={style}>{buttonText}</button>
    )
}

export default FilledButton