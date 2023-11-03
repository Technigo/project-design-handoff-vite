import { useTranslation } from "react-i18next";

export const Translate = () => {
    //REMEMBER: to translate, every text, heading, writing in our whole page needs to be manually put INSIDE the json file to reference it!!


    //define via destructured variablel 2 methods from the useTranslation
    const { t, i18n } = useTranslation()

    //function to change the language
    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
    };

    const englishFunc = () => changeLanguageFunc("en");
    const swedishFunc = () => changeLanguageFunc("sv");

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-4">
                <button onClick={englishFunc}><img src="icons/english.png" alt="english language icon" /></button>
                <button onClick={swedishFunc}><img src="icons/swedish.png" alt="swedish language icon" /></button>
            </div>
        </>
    )
}
