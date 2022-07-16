import styles from './Servicess.module.scss';


const Service =({index}:{index: number})=>{
    return <div className={styles.service}>
    <div className={styles.cicularIndex}>{index}</div>
    <p className={styles.serviceHeading} > Molestias quia dicta totam voluptas odit aliquid laudantium repellendus ?</p>
</div>   
}

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services-section" >
    <div className={styles.serviceInnerSection}>

    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, error?</h4>
    <div className={styles.services}>
    <Service index={1} />
    <Service index={2}  />
    <Service index={3} />
    <Service index={4} />
    <Service index={5} />
    <Service index={6} />

</div>
</div>

</section>
  )
}

export default Services