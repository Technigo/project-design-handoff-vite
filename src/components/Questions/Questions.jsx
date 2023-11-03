import styles from './Questions.module.css'

export const Questions = () => {
    return (
        <div className={styles.mainContainer}>
            <img src='src/assets/gotQuestions.svg' alt="Got questions?" />
            <div className={styles.textContainer}>
            <h1>Got questions?</h1>
            <p className={styles.p1}>
                What is the best way to get started with climbing?
            </p>
            <p className={styles.p2}>
                We know that stepping outside your comfort zone is scary and you might have a lot of questions about the world of climbing.
            </p>
            <p className={styles.p2}>
                We have collected some of the most common beginner questions in our FAQ.
            </p>
            <button className={styles.faqButton}>READ OUR FAQ</button>
            </div>
        </div>
    )
}

export default Questions