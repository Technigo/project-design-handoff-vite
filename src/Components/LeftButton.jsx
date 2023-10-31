import { Link } from "react-router-dom";

export const LeftButton = () => {
    return (
        <Link to="/" className="left-icon">
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="chevron-left">
                    <path 
                        id="Icon" 
                        d="M15 19L8 12L15 5" 
                        stroke="#545F71" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </Link>
    )
}
