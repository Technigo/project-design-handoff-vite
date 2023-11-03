//Mounted in App.jsx

import { Hero } from "./Hero.jsx"
import { Info1 } from "./Info1.jsx"
import { ConceptCard } from "./ConceptCard.jsx"
import { Info2 } from "./Info2.jsx"
import { FirstTimer } from "./FirstTimer.jsx"
import { Memberships } from "./Memberships.jsx"
//import { Form } from "./Form.jsx" Commented this out since there is no form in the design.



export const MainCont = () => {
    return (
        <div>
            <Hero />
            <Info1 />
            <ConceptCard />
            <Info2 />
            <FirstTimer />
            <Memberships />

        </div>
    )
}

//If a form was to be added:
//<Form />