export const StatCard = ({ stat }) => {
  return (
    <div className="font-mont tracking-tighter text-blue">
      <p className="md:text-font56 text-5xl font-medium">{stat.number}</p>
      <p className="lg:text-font26 py-2 text-lg font-medium leading-6 md:text-2xl md:leading-8 lg:py-4">
        {stat.heading}
      </p>
      <p className="text-sm font-medium leading-6 text-blueDeep md:text-lg md:leading-10 lg:text-xl">
        {stat.text}
      </p>
    </div>
  );
};
