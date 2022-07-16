import { Heading, OfferList, SubHeading } from '../..'
import styles from './LeftLandingSection.module.scss'



const LeftLandingSection = () => {
  return (
    <div className={styles.leftSection}>
        <Heading  text='Where does it come from?' />
        <SubHeading text='Contrary to popular belief, Lorem Ipsum ' />
        <section className={`${styles.offer}  ${styles.mt3}`}>
            <div className={styles.offerHeading}>What we offer</div>
           <OfferList label=" Lorem, ipsum dolor sit amet" />
           <OfferList label=" Lorem, ipsum dolor sit amet" />
            <OfferList label=" Lorem, ipsum dolor sit amet" /> 
            <OfferList label=" Lorem, ipsum dolor sit amet" />
            <OfferList label=" Lorem, ipsum dolor sit dummy text" />
        </section>
    </div>
  )
}

export default LeftLandingSection