import { InfoCard } from "./InfoCard";
import data from './InfoData.json';

export const Info = () => {
    return (
        <div className="flex">
            <div className="w-2/5 relative bg-header bg-cover h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20347.png?v=1698696459584)` }}></div>
            <div className="w-3/5 relative bg-header bg-cover h-screen border-l-4 border-white" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20348.png?v=1698696222472)` }}></div>

            <InfoCard data={data} />
        </div>
    );
}

