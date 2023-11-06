import styles from './AboutUsHome.module.css'
import chalkyLogo from "../../assets/chalkyLogo.svg"
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'

export const AboutUsHome = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                    <img src={chalkyLogo} alt="Chalky logo" />
                    <div className={styles.infoContainer}>
                        <H1 heading="We just love to climb together" />
                        <P2 
                            text="Welcome to Stockholm's most beginner-friendly indoor climbing hall, 
                            where adventure knows no bounds, and the thrill of conquering new heights 
                            awaits climbers of all levels!" />
                        <P2
                            text="Our state-of-the-art facility is designed with beginners in mind, 
                            providing a safe and welcoming environment for everyone to discover the 
                            exhilaration of indoor climbing. Whether you're a curious first-timer or 
                            a seasoned climber seeking new challenges, our dedicated team of experts 
                            is here to guide you every grip of the way." />
                        <P2
                            text="With a diverse range of climbing walls and routes, we offer 
                            something for everyone, from gentle inclines to daring overhangs. 
                            You'll find a supportive community of fellow climbers who share your 
                            passion and are ready to encourage your progress." />
                        <H2 heading="Visit us anytime during our opening hours:" />
                        <P1 text="Mon-Fri 7:30-22:00" />
                        <P1 text="Sat-Sun 10:00-20:00" />
                    </div>
            </div>
        </>
    )
}

export default AboutUsHome