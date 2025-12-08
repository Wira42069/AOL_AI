import React from 'react'
import styles from './button.module.css'

const bigButton = ({ children, onClick }) => {
    return (
        // Use the class name defined in Button.module.css
    <button className={styles.bigButt} onClick={onClick}>
        {children}
    </button>
    )
}

export default bigButton