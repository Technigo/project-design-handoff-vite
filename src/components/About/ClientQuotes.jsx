import "./clientQuotes.css"
import { PText } from "../Typography/PText";


export const ClientQuotes = ({ clientQuote, clientName, className }) => {

    return (
        <div className={`client-quote ${className}`}>
            <PText
                className="paragraph-text"
                text={clientQuote}
            />
            <PText
                className="text-right paragraph-text"
                text={clientName}
            />
        </div>
    );
}
