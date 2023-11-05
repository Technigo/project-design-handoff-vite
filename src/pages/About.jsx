import Pilates from "../assets/pilates.png";
import YogaMat from "../assets/yoga-mat.png";
import Send from "../assets/send.svg?react";

const About = () => {
    return (
        <div className="p-4 max-w-[800px] mx-auto">
            <h1 className="text-3xl mb-4 w-full px-4">
                <span className="block font-bold mb-2">First things first</span>
                <span className="block ml-32">The founder: <b>Nathalie</b></span>
            </h1>
            <section className="p-4 flex flex-col md:flex-row gap-8">
                <img className="w-full mb-8 md:order-2" src={Pilates} alt="Girl performing pilates" />
                <div className="flex items-center">
                    <div>
                        <h3 className="font-bold text-l mb-4">
                            The story
                        </h3>
                        <p className="mb-4">
                            In 2020, <b>Nathalie</b> embarked on a new journey, founding <b>Hundred Pilates</b>, an innovative online app that would bring the essence of Pilates to the digital age.
                        </p>

                        <p className="mb-4">With <b>Hundred Pilates</b>, she aimed to break down the barriers of time and place, making Pilates accessible to anyone, anywhere.
                        </p>

                        <p>Today, it’s not just an app; it's a movement. <b>Nathalie’s</b> vision and dedication to wellness has helped countless individuals find balance, strength, and serenity in the chaos of modern life.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mb-8 w-32 h-32 bg-green-n rounded-full mx-auto"></div>

            <div className="grid grid-cols-4 gap-8 p-4 lg:max-w-[800px] lg:mx-auto">
                <div className="row-span-2 col-span-2 md:order-2 flex items-center lg:col-span-4 md:row-span-1">
                    <p>
                        <b>Hundred Pilates </b>continues to evolve, introducing new features and collaborations, but its core essence remains the same – a friend, mentor, and guide in your wellness journey.
                    </p>
                </div>
                <img
                    src={YogaMat}
                    className="w-full h-full object-contain col-span-2 row-span-2 md:order-1 lg:order-3 lg:row-span-1 lg:col-span-1"
                    alt="Rolling up a yoga mat"
                />
                <div className="font-bold col-span-4 md:order-3 lg:order-2 md:col-span-2 lg:col-span-4">
                    <p className="lg:text-xl">Do you want to collaborate with us or have any queries regarding our movement? Send your questions our way.</p>
                </div>
                <div className="bg-beige-n py-8 px-4 col-span-4 md:order-4 lg:col-span-3 rounded-tr-[40px] rounded-bl-[40px] flex items-center">
                    <div className="w-full">
                        <p className="text-blue-n font-bold mb-4">CONTACT US</p>
                        <div className="flex gap-4">
                            <form className="w-3/4" action="">
                                <label htmlFor="name" className="block pl-4 mb-2 text-blue-n">NAME</label>
                                <input id="name" className="mb-2 py-2 px-4 rounded-full border-2 border-blue-n bg-transparent w-full text-blue-n" placeholder="NAME" />

                                <label htmlFor="email" className="block pl-4 mb-2 text-blue-n">E-MAIL</label>
                                <input id="email" className="mb-2 py-2 px-4 rounded-full border-2 border-blue-n bg-transparent w-full text-blue-n" placeholder="E-MAIL" />

                                <label htmlFor="message" className="block pl-4 mb-2 text-blue-n">MESSAGE</label>
                                <input id="message" className="mb-2 py-2 px-4 rounded-full border-2 border-blue-n bg-transparent w-full text-blue-n" placeholder="MESSAGE" />
                            </form>
                            <Send className="cursor-pointer self-end text-blue-n hover:text-black transition-all ease-out duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;