//Parent to Form.jsx, Hero.jsx. Mounted in App.jsx
//Mounted in App.jsx

import { Hero } from "./Hero.jsx"
import { Form } from "./Form.jsx"


export const MainCont = () => {
    return (
        <div>
            <p>This is the MainCont.jsx, more things might be mounted in me! Right now Hero and Form is mounted in me</p>
            <Hero />
            <Form />
        </div>
    )
}