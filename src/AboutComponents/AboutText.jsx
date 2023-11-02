export const AboutText = () => {
    return (
        <div className="text-yellow-color grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="m-8 text-center flex flex-col">
                <h1 className="hidden lg:block text-6xl">What we do</h1>
                <h2 className="pt-5">BACKGROUND</h2>
                <p className="text-lg custom-font pt-20">Many gyms build their business model on<br /> the bet that most people will stay home. <br />We don’t.</p>
            </div>
            <div className="flex flex-col justify-center pb-10">
                <div className="text-sm ml-3 pl-2 lg:text-lg m-20 pl-10 border-l-4 border-yellow-color">
                    <p className="pt-10"> Many business models that profit from unused gym memberships often rely on the concept of 'over-subscription.'
                        These businesses understand that a significant portion of their members won't use the gym regularly or at all. They can offer lower prices or attractive signup deals “to get more people through the door.” Or not.

                        This strategy allows them to generate more revenue than they would if everyone used the gym frequently.
                        It's essentially a gamble on people's intentions and motivation.
                    </p>

                    <p className="pb-10">At GroundZero, we're breaking the mold of the 'unused gym membership' business model. We believe in delivering real value for your money. While wanting to offer you a place to workout, relax, socialize, and network.

                        Besides The Gym, we offer Breakfast, Co-working, Spa/ Wellness, and After-hours access. And since we know life isn’t black and white, you can tailor your membership to your preferences. Access them all or mix and match. Our goal is to make sure your time with us is productive and enjoyable.
                    </p>
                </div>
            </div>
        </div>
    );
}
