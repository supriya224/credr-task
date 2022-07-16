
import { FC } from 'react';
import { IHeading } from '../../../Interfaces/heading.interface';
import styles from './SubHeading.module.scss';
const SubHeading:FC<IHeading>= () => {
  return (
    <h4 className={`${styles.subHeading} ${styles.mb1}`}>Contrary to popular belief, Lorem Ipsum </h4>
  )
}

export default SubHeading