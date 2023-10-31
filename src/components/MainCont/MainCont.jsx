//Mounted in App.jsx

import { Hero } from "./Hero.jsx"
import { Info1 } from "./Info1.jsx"
import { ConceptCard } from "./ConceptCard.jsx"
import { Info2 } from "./Info2.jsx"
import { FirstTimer } from "./FirstTimer.jsx"
import { Memberships } from "./Memberships.jsx"
import { Form } from "./Form.jsx"



export const MainCont = () => {
    return (
        <div>
            <Hero />
            <Info1 />
            <ConceptCard />
            <Info2 />
            <FirstTimer />
            <Memberships />
            <Form />
        </div>
    )
}