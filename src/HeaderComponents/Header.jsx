

export const Header = () => {
    return (
        <div className="relative bg-header bg-cover h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805)` }}>

            <img className="h-11 top-4 mx-8 lg: lg:h-28 absolute top-10 right-0 mx-16" src="https://cdn.glitch.me/be758d61-a981-49f2-a7a6-72216e478708/Insta%20story%20cirkles.svg?v=1698689442566" alt="Story Circles" />

            <div className="mx-8 lg:w-1/2 mx-16 pt-28">
                <h1 className="text-4xl text-left text-white md:text-6xl">
                    <span className="">An elevated gym experience. Everything in  <span className="text-yellow-color inline-block">one place</span></span>

                </h1>

                <h2 className="text-base text-left text-white pt-9 md: text-lg lg:text-2xl">Up to 67 percent of traditional gym memberships go completely unused.</h2>
                <h2 className="text-base text-left text-white pt-9 md: text-lg lg:text-2xl">
                    Many gyms build their business model on the bet that most people will stay home. We don’t.
                </h2>
            </div>
        </div>
    );
};
