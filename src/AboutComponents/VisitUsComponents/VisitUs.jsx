import React from 'react';
import { VisitUsImage } from "./VisitUsImage";

export const VisitUs = () => {
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4 lg:text-lg text-left">
            <div className="flex flex-col justify-center">
                <div className="text-center pt-10">
                    <h1 className="text-6xl">Visit us</h1>
                </div>
                <div className="text-center pt-10 text-sm grid grid-cols-4 md:grid-cols-2 gap-4 text-left">
                    <p className="p-2 custom-font">Stockholm <br /><br />Tjärhovsgatan 4 <br />116 21,<br /> Stockholm</p>
                    <p className="p-2 custom-font">Gothenburg <br /><br />Thisingsgatan 28 <br />417 03<br /> Göteborg</p>
                    <p className="p-2 custom-font">Oslo <br /><br />Trostockgata 66 <br />0194 Oslo<br /> Norge</p>
                    <p className="p-2 custom-font">New York <br /><br />52 Irving Pl<br /> New York <br />NY 10003, USA</p>
                </div>
                <div className="text-center pt-10">
                    <h1 className="text-6xl pb-10">Contact Us</h1>
                    <p className="custom-font">Email: support@groundzero.com</p>
                    <p className="custom-font">Phone: +46 001 89 89 10</p>
                </div>
            </div>
            <VisitUsImage />
        </div>
    );
}
