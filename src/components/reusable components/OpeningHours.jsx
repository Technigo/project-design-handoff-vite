import { InfoPageHeadings } from "./InfoPageHeadings"

export const OpeningHours = () => {

    const firstHeading = "OPENING HOURS"
    const secondHeading = "SUBWAY/TRAIN"
    const thirdHeading = "CAR"

    return (
        <div className="bg-white flex flex-col items-start justify-center p-4 mx-8 my-8">
            <InfoPageHeadings InfoPageHeading={firstHeading} />
            <div className="text-xs text-grey text-sourcesans3 font-normal">
                <p>The studios openings hours are in accordance with the timetable.</p>
                <br />
                <p>Mail will be answered within 24 h.</p>
                <p>Hagagatan 16 113 48 Stockholm</p>
                <br />
                <p>073-7624047</p>
                <br />
                <p>info@nordicpoleacademy.com</p>
                <br />
            </div>
            <InfoPageHeadings InfoPageHeading={secondHeading} />
            <p className="text-xs text-grey text-sourcesans3 font-normal">Odenplan</p>
            <br />
            <InfoPageHeadings InfoPageHeading={thirdHeading} />
            <p className="text-xs text-grey text-sourcesans3 font-normal">Parking spaces are limited.</p>

        </div>
    )
}
