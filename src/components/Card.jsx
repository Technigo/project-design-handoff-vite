import PropTypes from 'prop-types';

import cardArray from '../CardArray';
import { Discover } from './Discover';
import { HoverableButton } from './HoverableButton';

export const Card = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="h-[195px] w-60 pb-[24px] pt-[64px] text-center font-futura text-xl font-bold">
          <h2>OUR RETREATS</h2>
          <p className="h-[70px] text-center font-avenir text-base font-medium text-[#444446]">
            For sun-seekers and dreamers who appreciate barefoot-luxury and slow
            living.
          </p>
        </div>
        <div className="grid grid-rows-4 gap-y-16 py-6">
          {cardArray.map((item) => (
            <div key={item.id} className=" mx-auto flex flex-col gap-6">
              <div>
                <img
                  className="h-60 w-60 object-cover"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <h3 className="font-futura text-lg font-medium">{item.title}</h3>
              <p className="w-60">{item.paragraph}</p>
              <div>{item.button}</div>
            </div>
          ))}
        </div>
        <HoverableButton text="Book a retreat" customStyle="mt-20 mb-24" />
      </section>
    </>
  );
};

Card.propTypes = {
  cardArray: PropTypes.array,
};
