import { Heading } from '../..';
import styles from './Scooty.module.scss';

const ScootySection = () => {
  return (
    <section className={styles.sectionScooty} id="scooty-section">
    <div className={styles.scootyLeftSection}>
        <Heading text='Lorem ipsum dolor sit' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit excepturi doloremque facere officia voluptatibus aut adipisci possimus, delectus velit. Inventore quae eligendi iusto maxime facilis doloremque necessitatibus magni vero fuga beatae dolorem, cum laborum obcaecati sunt dolores recusandae culpa?</p>
        <br/>
        <br/>
        <Heading text="Lorem ipsum dolor sit amet." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit excepturi doloremque facere officia voluptatibus aut adipisci possimus, delectus velit. Inventore quae eligendi iusto maxime facilis doloremque necessitatibus magni vero fuga beatae dolorem, cum laborum obcaecati sunt dolores recusandae culpa?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit excepturi doloremque facere officia voluptatibus aut adipisci possimus, delectus velit. Inventore quae eligendi iusto maxime facilis doloremque necessitatibus magni vero fuga beatae dolorem, cum laborum obcaecati sunt dolores recusandae culpa?</p>
    </div>
    <div className={styles.scootyRightSection}>
        <img width="100%" src="https://www.drivespark.com/img/2017/07/top-10-selling-scooters-june-india1-20-1500544786.jpg" alt="Placeholder" className="scooty-img" />
    </div>
    

</section>
  )
}

export default ScootySection