import { Button } from "./Button"

export const HowSec = () => {
  return (
    <div className="how">
       <h1>HOW TO GET STARTED</h1>
        <div className="card">
           <img src="/image 1.png" alt="img" />
           <div className="back">
           <h3>CONTACT US</h3>
           <span></span>
           </div>
           
           <p>We want to hear from you! Reach out to ask about our schedule, prices, and if CrossFit is a good fit for you.</p>
           <Button label={"BOOK  A CONSULTATION"} size="big" />

        </div>

        <div className="card">
           <img src="/Pain Image Block.png" alt="img" />
           <div className="back">
            <h3>LEARN THE BASICS</h3>
            <span></span>

           </div>
           
           <p>We will safely start your CrossFit journey with four 1:1 introductory sessions. No matter how fit you are, all workouts can be adjusted to your level.</p>
        

        </div>

        <div className="card">
           <img src="/Pain Image Block (1).png" alt="img" />
           <div className="back">
           <h3>TRY A CLASS</h3>
           <span></span>

           </div>
           
           <p>In a typical one-hour CrossFit class, athletes complete modified versions of the same workout together, and the coach will guide you through step-by-step.</p>
       

        </div>
       

    </div>
  )
}
