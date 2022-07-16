
import { PrimaryButton, PrimaryInput } from '../..';
import styles from './RightLandingSection.module.scss';
const RightLandingSection = () => {
  return (
    <div className={styles.rightSection}>
    <form>
        <h1 className={styles.formTitle}>Personal Details</h1>
        <div className={styles.formControlContainer}>
            <PrimaryInput />
          </div>
          <div className={styles.formControlContainer}>
            <PrimaryInput />
        </div>
            
            <div className={styles.formControlContainer}>
                <select  >
                    <option selected value="0" disabled >Select city</option>
                    <option value="2">No Wrapper</option>
                    <option value="3">No JS</option>
                    <option value="4">Nice!</option>
                    <option value="1">Pure CSS Select</option>
                  </select>
            </div>
            <PrimaryButton className={styles.formControlContainer} />
            {/* <button type="button" className={` ${styles.formControlContainer} ${styles.btn}  ${styles.btnSecondary}`}>Submit</button> */}
    </form>
</div>
  )
}

export default RightLandingSection