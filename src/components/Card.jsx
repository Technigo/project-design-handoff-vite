import PropTypes from 'prop-types';
import { Discover } from './Discover';

import cardArray from '../CardArray';

export const Card = () => {
  return (
    <>
      <section className='flex flex-col items-center'>
        <div className="h-[195px] w-4/5 px-[11px] pb-[24px] pt-[64px] text-center font-futura text-xl font-bold">
          <h2>OUR RETREATS</h2>
          <p className="h-[70px] text-center font-avenir text-base font-medium text-[#444446]">
            For sun-seekers and dreamers who appreciate barefoot-luxury and slow
            living.
          </p>
        </div>
        <div className="grid auto-rows-max gap-y-16 py-6">
          {cardArray.map((item) => (
            <div key={item.id} className=" flex flex-col gap-6 mx-auto">
              <div className="h-60 w-60">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className="font-futura text-lg font-medium">{item.title}</h3>
              <p className="w-60">{item.paragraph}</p>
              <div>{item.button}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

Card.propTypes = {
  cardArray: PropTypes.array,
};
