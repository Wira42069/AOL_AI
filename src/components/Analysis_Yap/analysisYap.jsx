import React from 'react'
import styles from './analysisYap.module.css'

const analysisYap = ({ children }) => {
    return (
        // Use the class name defined in Button.module.css
    <button className={styles.primary}>
        {children}
    </button>
    )
}

export default analysisYap