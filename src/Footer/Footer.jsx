import { InformationList } from "./InformationList";
import { SubscribeNow } from "./SubscribeNow";

export const Footer = () => {
    return (

        <div className="text-white bg-footer-color p-10 lg:flex pt-12">
            <div className="flex flex-col lg:flex flex-col">
                <img className="h-24 invert" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Logo.svg?v=1698689188784" alt="Logo" />

                <SubscribeNow />
            </div>
            <InformationList />
        </div>

    );
}
