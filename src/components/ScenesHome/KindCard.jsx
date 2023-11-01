import kindness from "../../data/reviewdata.json";
import "./KindWords.css"

export const KindCard = () => {
  return (
    <>
    {kindness.map((review) => {
                return (
                    <div className="kind-card" key={review.id}>
                        <img className="kind-image" src={review.imageUrl} alt={review.name} />
                        <p>"{review.text}"</p>
                    </div>
                );
            })}
    </>
  )
}
