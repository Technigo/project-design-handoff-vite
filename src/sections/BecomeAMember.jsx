import { ButtonStyled } from "../components/ButtonStyled"
import memberPic from "/become-a-member.png"
import "./become-a-member.css"

export const BecomeAMember = () => {
    return (
        <div className="grid-parent">
            <div className="become-member section">
                <img src={memberPic} />
                <h2>We make families healthier and happier!</h2>
                <p className="member-text">Welcome to the worlds most including fitness center! We are proud of our wide and varied training offer, so that you have access to what you need to feel mastery, progress and can take care of your physical and mental health. We give you all the tools you need to reach your goals, while your kids can play and develop.</p>
                <p className="member-text punchline">Everyone is welcome at FamilyFitness!</p>
                <ButtonStyled text="Become a member" />
            </div>
        </div>
    )
}