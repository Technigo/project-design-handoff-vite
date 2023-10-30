import headerImg from '../assets/header.svg';
import InstaStoryCircles from '../assets/InstaStoryCirckles.svg';

export const Header = () => {
    return (
        <div className="relative bg-header bg-cover h-screen" style={{ backgroundImage: `url(${headerImg})` }}>
            <img className="absolute top-10 right-0 mx-16" src={InstaStoryCircles} alt="Story Circles" />

            <div className="w-1/2 mx-16 pt-28">
                <h1 className="text-6xl text-left text-white">
                    <span className="inline-block">An elevated gym experience.</span>
                    <span className="text-amber-400 inline-block"> Everything in one place</span>
                </h1>

                <h2 className="text-base text-left text-white pt-9">Up to 67 percent of traditional gym memberships go completely unused.</h2>
                <h2 className="text-base text-left text-white pt-9">
                    Many gyms build their business model on the bet that most people will stay home. We don’t.
                </h2>
            </div>
        </div>
    );
};
