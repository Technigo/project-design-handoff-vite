import { motion } from "framer-motion"
import { AboutUs } from "../sections/AboutUs"
import { WhoWhatWhy } from "../sections/WhoWhatWhy"
import { Numbers } from "../sections/Numbers"
import { SellingPoints } from "../sections/SellingPoints"
import { ContactUs } from "../sections/ContactUs"

export const AboutPage = () => {
    return (
        <>
            <motion.main
                className="main__container"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ delay: 0.25, duration: 0.5 }}
            >
                <AboutUs />
                <WhoWhatWhy />
                <Numbers />
                <SellingPoints />
                <ContactUs />
            </motion.main>
        </>
    )
}