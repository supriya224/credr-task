import { FC } from 'react'
import { IHeading } from '../../../Interfaces/heading.interface'
import styles from './Heading.module.scss'

const Heading:FC<IHeading> = ({text}) => {
  return (
    <h1 className={`${styles.heading}  ${styles.mb1}`}>{text}</h1>
  )
}

export default Heading