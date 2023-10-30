import { Header } from "../Sections/Header";
import { Workout } from "../Sections/Workout";
import { WorkoutPlans } from "../Sections/WorkoutPlans";
import { Membership } from "../Sections/Membership";
import { Review } from "../Sections/Review";
import { Trainers } from "../Sections/Trainers";
import { Footer } from "../Sections/Footer";

export const Home = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <Workout />
        <WorkoutPlans />
        <Membership />
        <Review />
        <Trainers />
        <Footer />
    </div>
  )
}
