import { useNavigate } from "react-router-dom";

export const Navigate = () => {

    const navigate = useNavigate();

    const handleNewsClick = () => {
        navigate("/news");
    }

    const handleInfoClick = () => {
        navigate("/info");
    }

    return (
        <div>Navigate</div>
    )
}
