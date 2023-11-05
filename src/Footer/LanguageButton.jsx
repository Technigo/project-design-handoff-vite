export const LanguageButton = ({ toggleLanguage }) => {
    return (
        <div>
            <button className="p-2 mt-4 lg:mt-7 hover:shadow-yellow-box bg-white text-black" onClick={toggleLanguage}>En/Sv</button>
        </div>
    );
};
