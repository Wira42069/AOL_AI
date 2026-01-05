import styles from './inputBox.module.css'

const InputBox = ({ children, onSubmit, loading }) => {
        
    return (
    <div className={styles.box}>
        <div className={styles.content}>
            {children}
        </div>

        {loading ? (
            <div className={styles.spinner}></div>
        ) : (
            <button className={styles.submit} onClick={onSubmit}>
                Submit
            </button>
        )}
    </div>
    )
}

export default InputBox