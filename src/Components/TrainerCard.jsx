

export const TrainerCard = ({ trainer }) => {
  return (
    <div className="flex flex-col">
      <button type="button" className="heart">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="heart">
            <path 
              id="Icon" 
              d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
              stroke="#545F71" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      <img src={trainer.image} alt={trainer.name} />
      <p>{trainer.name.toUpperCase()}</p>
    </div>
  )
}
