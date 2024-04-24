import PropTypes from 'prop-types';

import cardArray from '../../CardArray';
import { DiscoverButton } from '../DiscoverButton';
import { GeneralButton } from '../GeneralButton';

export const Card = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="pb-[24px] pt-[64px] text-center font-futura text-xl font-bold md:text-2xl xl:text-4xl">
          <h2 className="pb-[20px] md:pb-[30px] xl:pb-[40px]">OUR RETREATS</h2>
          <p className="md:px-30 px-10 text-center font-avenir text-base font-medium text-[#444446] ">
            For sun-seekers and dreamers who appreciate barefoot-luxury and slow
            living.
          </p>
        </div>
        <div className="grid grid-rows-4 gap-y-16 py-6 md:grid-rows-2 md:grid-cols-2 md:gap-x-16 xl:grid-cols-4 xl:grid-rows-1 xl:py-20">
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
              <DiscoverButton />
            </div>
          ))}
        </div>
        <GeneralButton text="Book a retreat" customStyle="mt-20 mb-24 md:" />
      </section>
    </>
  );
};

Card.propTypes = {
  cardArray: PropTypes.array,
};
