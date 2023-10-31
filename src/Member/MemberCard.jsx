export const MemberCard = () => {
    return (
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
            <div>
                <h2 className="bg-white bg-opacity-50 text-3xl lg:text-6xl rounded-t-lg">Bronze</h2>
                <p className="h-64 bg-white rounded-b-lg">This is a lot of other text</p>
                <button className="bg-white border-solid border-2 border-black p-2">Read more</button>
            </div>

            <div>
                <h2 className="bg-white bg-opacity-50 text-3xl lg:text-6xl rounded-t-lg">Bronze</h2>
                <p className="h-64 bg-white rounded-b-lg">This is a lot of other text</p>
                <button className="bg-white border-solid border-2 border-black p-2">Read more</button>
            </div>

            <div>
                <h2 className="bg-white bg-opacity-50 text-3xl lg:text-6xl rounded-t-lg">Bronze</h2>
                <p className=" h-64 bg-white rounded-b-lg">This is a lot of other text</p>
                <button className="bg-white border-solid border-2 border-black p-2">Read more</button>
            </div>
        </div>
    );
};
