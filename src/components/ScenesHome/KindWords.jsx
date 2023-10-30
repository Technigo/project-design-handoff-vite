import React from "react";

import kindness from "../../data/reviewdata.json";

export const KindWords = () => {
    return (
        <section className="kindwords-section">
            <h2>What our clients say</h2>
            <h3>Some kind words</h3>
            {kindness.map((review) => {
                return (
                    <div className="kind-card" key={review.id}>
                        <img src={review.imageUrl} alt={review.name} />
                        <p>{review.text}</p>
                    </div>
                );
            })}
        </section>
    );
};
