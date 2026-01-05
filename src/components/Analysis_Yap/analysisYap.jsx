import styles from './analysisYap.module.css'

const AnalysisYap = ({ risk_level, summary, recommendation }) => {
    // empty state
    if(!risk_level){
        return (
        <div className={`${styles.box} ${styles.empty}`}>
            <p>Submit patient data to see analysis.</p>
        </div>
        )
    }

    const riskClass =
        risk_level === 'low'
        ? styles.low
        : risk_level === 'medium'
        ? styles.medium
        : styles.high

    return(
        <div className={`${styles.box} ${riskClass}`}>
            <p className={styles.summary}>{summary}</p>
            <p className={styles.recommendation}>{recommendation}</p>

        </div>
    )

}

export default AnalysisYap