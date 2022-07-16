import styles from './PrimaryButton.module.scss';
const PrimaryButton = ({className}:any) => {
  return (
    <button type="button" className={` ${className} ${styles.btn}  ${styles.btnSecondary}`}>Submit</button>
  )
}

export default PrimaryButton