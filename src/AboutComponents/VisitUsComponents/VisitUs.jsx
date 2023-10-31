import { VisitUsImage } from "./VisitUsImage";

export const VisitUs = () => {
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
                <div className="text-center">
                    <h1 className="text-6xl">Visit us</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p>Stockholm Tjärhovsgatan 4, 116 21, Stockholm</p>
                    <p>Gothenburg Hisingsgatan 28, 417 03, Göteborg</p>
                    <p>Oslo Rostockgata 66, 0194 Oslo, Norge</p>
                    <p>New York 52 Irving Pl, New York, NY 10003, USA</p>
                </div>
                <div className="text-center">
                    <h1 className="text-6xl">Contact Us</h1>
                    <p>Email: support@groundzero.com</p>
                    <p>Phone: +46 001 89 89 10</p>
                </div>
            </div>
            <VisitUsImage />
        </div>
    );
}
