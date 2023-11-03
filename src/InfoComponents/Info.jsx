import { InfoCard } from "./InfoCard";
import data from './InfoData.json';

export const Info = () => {
    const isIPhone = window.innerWidth < 1024; // Define iPhone screen size range

    return (
        <div className="flex">
            <div className="w-full h-screen bg-header bg-cover md:w-5/5 lg:w-2/5" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20347.png?v=1698696459584)` }}></div>

            {/* Conditionally render the right image only if it's not an iPad */}
            {isIPhone ? null : (
                <div className="w-3/5 relative bg-header bg-cover h-screen border-l-4 border-white lg:w-3/5" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20348.png?v=1698696222472)` }}></div>
            )}

            <InfoCard data={data} />

        </div>
    );
}

