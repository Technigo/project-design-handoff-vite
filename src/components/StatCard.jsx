export const StatCard = ({ stat }) => {
  return (
    <div className="font-normal tracking-tighter text-blueDeep">
      <p className="text-5xl font-medium md:text-largeNumber">{stat.number}</p>
      <p className="lg:text-font26 py-2 text-lg font-medium leading-6 md:text-2xl md:leading-8 lg:py-4">
        {stat.heading}
      </p>
      <p className="text-sm font-medium leading-6 md:text-lg md:leading-10 lg:text-xl">
        {stat.text}
      </p>
    </div>
  );
};
