
import styles from './PrimaryInput.module.scss'
const PrimaryInput = () => {
  return (
    <div className={styles.inputContainer}>
     <input placeholder=" " type="text" className={styles.inputField} />
              <label className={styles.inputLabel} >Mobile no</label>
    </div>
  )
}

export default PrimaryInput