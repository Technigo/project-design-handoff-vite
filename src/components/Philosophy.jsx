// make horizontal scrollbar with cards with a title, image and description
// The Philosophy component will display the articles from the Copy file in a horizontal scrollable list of cards. Each card will have an image, title, and description.

import { articles } from './Copy';
import './Reviews.css';

export const Philosophy = () => {
  return (
    <>
<div className=' bg-yogawhite'>
        <div className="philo justify-center flex
        " style={{
          backgroundColor: '#F8F7F7',
       }}>
          {articles.map((article, index) => (
            <div className=" bg-yogawhite flex-col justify-center max-w-[194px] mx-2 text-16 md:max-w-[234px] md:mx-4 md:text-20 lg:text-25 lg:h-8 lg:max-w-[477px] " key={index}>
              <img  className="object-cover"
               src={article.image} alt={article.title} />
              <h3 className='font-semibold '>{article.title}</h3>
              <p className="font-inter text-darkblue mt- mt-6 text-wrap">{article.copy}</p>
              <p className='text-16 md:text-16 lg:text-18'>Read more &gt;</p>
            </div>
          ))}

      </div>
      </div>
    </>
  );
}

