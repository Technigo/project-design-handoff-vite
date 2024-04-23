import PropTypes from 'prop-types';
import { Discover } from './Discover';

import cardArray from '../CardArray';

export const Card = () => {
  return (
    <>
      <section>
        <div className="h-[195px] w-[360px] px-[11px] pb-[24px] pt-[64px] text-center font-futura text-xl font-bold">
          <h2>OUR RETREATS</h2>
          <p className="h-[70px] w-[338px] font-avenir text-base font-medium text-[#444446]">
            For sun-seekers and dreamers who appreciate barefoot-luxury and slow
            living.
          </p>
        </div>
        <div className="grid">
          {cardArray.map((item) => (
            <div
              key={item.id}
              className="flex max-h-[538px] w-[360px] flex-col gap-6 px-[60px] py-6"
            >
              <div className="h-60 w-60">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className="font-futura text-lg font-medium">{item.title}</h3>
              <p>{item.paragraph}</p>
              <button>{item.button}</button>
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
