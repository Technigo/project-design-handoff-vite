export const InfoCard = ({ data }) => {
    return (
        <div className="text-center place-content-stretch absolute p-4 grid grid-cols-1 md:pt-20 grid-cols-1 lg:grid-cols-2 gap-10 border-solid border-2 border-sky-500">

            <div className="text-white pl-0 p-0 pt-0 lg: p-4 pt-0">
                <div className="sm:grid grid-cols-1 pb-1 md:grid grid-cols-2 pb-20 lg:grid-cols-1 border-solid border-2 border-sky-500">

                    <div>
                        <h1 className="text-4xl md:text-6xl lg:pt-0">{data[0].title1}</h1>
                        <p className="pt-3 ml-0 mr-0 text-lg md:ml-20  mr-20 lg:pt-10 ml-36 mr-36">{data[0].content1}</p>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:pt-10">{data[0].title2}</h1>
                        <p className="pt-3 ml-0 mr-0 text-lg md:ml-20  mr-20 lg:pt-10 ml-36 mr-36">{data[0].content2}</p>
                    </div>
                </div>
                <h1 className="text-4xl pt-1 md:text-6xl lg:pt-10">{data[0].title3}</h1>
                <p className="pt-3 ml-0 mr-0 mb-0 text-lg md:ml-20  mr-20 lg:pt-10 ml-36 mr-36">{data[0].content3}</p>
            </div>
            <div className="flex flex-col justify-center items-center text-white mt-4 ">
                <div className="lg:border-b-4 border-white pb-10">
                    <h1 className="text-4xl pt-0 md:text-6xl lg:pt-10">{data[1].title}</h1>
                </div>
                <button className="bg-white text-black w-44 border-solid border-2 border-black p-2 mt-0 md:mb-4 mt-4 ml-20 mr-20 lg:mt-10 ml-36 mr-36">{data[1].buttonText}</button>
            </div>
        </div>
    );
};


