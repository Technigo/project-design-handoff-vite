export const Stats = () => {
  const statContent = [
    {
      number: "2650",
      heading: "Trees Planted",
      text: "A tree will be planted in your name if you choose to stay with us for 5 days or longer",
    },
    {
      number: "+3200",
      heading: "Happy Retreaters",
      text: "Guests who have reported a major difference in the quality of day-to-day life before and after their stay",
    },
    {
      number: "+2K",
      heading: "Kg of Annual Food Grown",
      text: "From your labour to your table! You are welcome to participate in planting and harvesting with us",
    },
  ];

  return (
    <>
      {statContent.map((stat, index) => (
        <div key={index}>
          <h1>{stat.number}</h1>
          <h2>{stat.heading}</h2>
          <p>{stat.text}</p>
        </div>
      ))}
    </>
  );
};
