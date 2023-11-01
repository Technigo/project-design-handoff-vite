import { InformationList } from "./FooterComponents/InformationList";
import { SubscribeNow } from "./FooterComponents/SubscribeNow";

export const Footer = () => {
    return (

        <div className="text-center bg-slate-500 justify-center items-center lg:flex items-start pt-12 border-b-2 border-black ">
            <div className="text-center flex flex-col lg:flex flex-col">
                <img className="mx-16 h-24" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Logo.svg?v=1698689188784" alt="Logo" />
                <SubscribeNow />

            </div>
            <InformationList />
        </div>

    );
}
