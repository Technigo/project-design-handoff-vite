export const StatCard = ({ stat }) => {
  return (
    <div className="text-blueDeep font-normal tracking-tighter">
      <p className="text-5xl font-medium">{stat.number}</p>
      <p className="py-2 text-lg font-medium leading-6">{stat.heading}</p>
      <p className="text-sm leading-6 font-medium">{stat.text}</p>
    </div>
  );
};
