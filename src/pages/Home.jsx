import HeaderPhoto from "../assets/header-photo.png";

const Home = () => {
    return (
        <>
            <div className="bg-cover px-4 py-16" style={{ backgroundImage: `url(${HeaderPhoto})` }}>
                <h1 className="font-bold text-white-n text-2xl w-32 mb-4">Master the Pilates fundamentals</h1>
                <h2 className="semi-bold text-white-n text-lg drop-shadow-2xl mb-4">Sculpt, sweat and flow it out on the mat with the help of 100+ online classes. Available whenever you want.</h2>
                <button className="text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline" >JOIN THE MOVEMENT</button>
            </div>
        </>
    )
}

export default Home;