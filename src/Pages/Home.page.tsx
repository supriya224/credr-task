import { LandingSection, ScootySection, Services } from '../Components';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div  className={styles.homePageContainer}>
        <section id="content" className={styles.landingSection} />
        <LandingSection />
        <ScootySection />
        <Services />
    </div>
  )
}

export default Home