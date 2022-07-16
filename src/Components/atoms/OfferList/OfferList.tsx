import { FC } from 'react';
import styles from './OfferList.module.scss';

interface IOfferList{
    label: string;
}


const OfferList:FC<IOfferList> = ({label}) => {
  return (
    <div className={styles.offerList} >
    <label className={styles.formControl}>
        <input type="radio" name="radio" />
     {label}
    </label>
</div>
  )
}

export default OfferList