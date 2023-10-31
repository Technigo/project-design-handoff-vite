import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <>
        <h1>Oh no!It seems like the page you are trying to access does not
        exist. </h1>
        <Link to= "/">Go Home</Link>
        </>
    );
};