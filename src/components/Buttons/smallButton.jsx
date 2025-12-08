import React from 'react'
import styles from './button.module.css'

const smallButton = ({ children, onClick }) => {
    return (
        // Use the class name defined in Button.module.css
    <button className={styles.smallButt} onClick={onClick}>
        {children}
    </button>
    )
}

export default smallButton