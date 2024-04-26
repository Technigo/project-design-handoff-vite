import { articles } from './Copy';
import './Reviews.css';

export const Philosophy = () => {
  return (
    <>

        <div className=" wrapper relative text-darkblue bg-yogawhite flex lpy-7 mx-auto align-middle">
        <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll smooth'>
          {articles.map((article, index) => (
            <div className="relative align-top py-7 h-full inline-block mx-3 max-w-[194px] md:flex-col  md:px-5 md:max-w-[234px] lg:max-w-[417px]" key={index}>
              <img  className=" max-w-[194px] max-h-[137px] md:max-w-[234px] md:max-h-[167px] lg:max-w-[417px] lg:max-h-[310px]"
               src={article.image}
               alt={article.title}
               />
              <h3 className='font-semibold text-16 lg:text-30'>{article.title}</h3>
              <p className="font-inter mt- mt-6 text-wrap mb-[]">{article.copy}</p>
              <p className='text-16 md:text-16 lg:text-18'>Read more &gt;</p>
            </div>
          ))}
</div>
      </div>

    </>
  );
}

