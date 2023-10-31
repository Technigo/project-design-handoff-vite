export const InfoCard = ({ data }) => {
    return (
        <div className="absolute p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
            <div className="text-white p-4 pt-10 pr-36">
                <h1 className="pt-10 text-6xl">{data[0].title1}</h1>
                <p className="pt-10">{data[0].content1}</p>
                <h1 className="pt-10 text-6xl">{data[0].title2}</h1>
                <p className="pt-10">{data[0].content2}</p>
                <h1 className="pt-10 text-6xl">{data[0].title3}</h1>
                <p className="pt-10">{data[0].content3}</p>
            </div>
            <div className="flex flex-col justify-center items-center text-white pr-10 mt-4 ">
                <div className="border-b-4 border-white pb-10">
                    <h1 className="text-6xl">{data[1].title}</h1>
                </div>
                <button className="mt-20 bg-white text-black border-solid border-2 border-black p-2">{data[1].buttonText}</button>
            </div>
        </div>
    );
};


