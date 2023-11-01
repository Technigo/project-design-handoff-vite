import { Headings } from "../Components/Headings";

export const Reviews = () => {
  const sectionId = 3;

  return (
    <div className="reviews">
      <Headings sectionId={sectionId} />
      <div className="individual-review">
        <p>I love seeing the tracker and my progress!</p>
        <p>Cole <i>Kansas City</i></p>
      </div>
      <div className="individual-review">
        <p>I am a sucker for free things so getting a free video every 5 days in a row I complete has been awesome! It motivates me to move my body :&#41;</p>
        <p>Hannah <i>Pennsylvania</i></p>
      </div>
    </div>
  )
}
