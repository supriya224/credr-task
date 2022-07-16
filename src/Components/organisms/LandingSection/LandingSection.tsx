
import { LeftLandingSection, RightLandingSection } from '../..';
import styles from './LandingSection.module.scss';
const LandingSection = () => {
  return (
    <section id="LandingSection" className={styles.containerLanding}>
    <LeftLandingSection />
    <RightLandingSection />
</section>
  )
}

export default LandingSection