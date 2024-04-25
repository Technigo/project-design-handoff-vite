// make horizontal scrollbar with cards with a title, image and description
// The Philosophy component will display the articles from the Copy file in a horizontal scrollable list of cards. Each card will have an image, title, and description.

import { articles } from './Copy';

export const Philosophy = () => {
  return (
    <>

        <div className="h-auto bg-yogawhite justify-center flex whitespace-nowrap
        ">
          {articles.map((article, index) => (
            <div className=" bg-yogawhite flex-col justify-center sm:w-mv m-3 text-16 md:w-tv md:m-8 md:text-20 lg:w-56 lg:text-25 lg:h-8 " key={index}>
              <img  className=" h-mobh w-mobw object-cover
                sm:h-tabh sm:w-tabw
               md:h-tabh md:w-tabw lg:h-deskh lg:w-deskw"
               src={article.image} alt={article.title} />
              <h1 className='font-semibold '>{article.title}</h1>
              <p className="font-inter text-darkblue h-mobh w-mobw text-wrap">{article.copy}</p>
              <p className='text-16 md:text-16 lg:text-18'>Read more &gt;</p>
            </div>
          ))}

      </div>
    </>
  );
}

