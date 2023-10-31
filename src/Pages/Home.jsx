import { Header } from "../Sections/Header";
import { Workout } from "../Sections/Workout";
import { WorkoutPlans } from "../Sections/WorkoutPlans";
import { Membership } from "../Sections/Membership";
import { Reviews } from "../Sections/Reviews";
import { Trainers } from "../Sections/Trainers";
import { Footer } from "../Sections/Footer";

export const Home = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <Workout />
        <WorkoutPlans />
        <Membership />
        <Reviews />
        <Trainers />
        <Footer />
    </div>
  )
}
