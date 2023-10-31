import { VisitUsImage } from "./VisitUsImage";

export const VisitUs = () => {
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
                <div className="text-center">
                    <h1 className="text-6xl">Visit us</h1>
                </div>
                <div className="ml-32 p-24 grid grid-cols-2 md:grid-cols-2 gap-4">
                    <p>Stockholm <br />Tjärhovsgatan 4 <br /> 116 21, Stockholm</p>
                    <p>Gothenburg <br />Hisingsgatan 28 <br /> 417 03, Göteborg</p>
                    <p>Oslo <br />Rostockgata 66 0194 Oslo<br /> Norge</p>
                    <p>New York <br />52 Irving Pl, New York<br /> NY 10003, USA</p>
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
