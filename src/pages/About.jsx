import Pilates from "../assets/pilates.png";
import YogaMat from "../assets/yoga-mat.png";
import Send from "../assets/send.svg?react";
import { useTranslation } from "react-i18next";
import Input from "../components/input/input";

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4">
            <h1 className="text-3xl mb-4 w-full px-4 py-8">
                <span className="block font-bold mb-2">{t("aboutHeading1")}</span>
                <span className="block ml-32">{t("aboutHeading2")} <b>Nathalie</b></span>
            </h1>
            <section className="p-4 flex flex-col md:flex-row gap-8">
                <img className="w-full mb-8 md:order-2" src={Pilates} alt="Girl performing pilates" />
                <div className="flex items-center">
                    <div>
                        <h3 className="font-bold text-l mb-4">
                            {t("story")}
                        </h3>
                        <p className="mb-4">
                            {t("year")} <b>Nathalie</b> {t("embarked")} <b>Hundred Pilates</b>, {t("innovative")}
                        </p>

                        <p className="mb-4">{t("with")} <b>Hundred Pilates</b>, {t("aimed")}
                        </p>

                        <p>{t("today")} <b>Nathalie’s</b> {t("vision")}
                        </p>
                    </div>
                </div>
            </section>

            <div className="mb-8 w-32 h-32 bg-green-n rounded-full mx-auto"></div>

            <div className="grid grid-cols-4 gap-8 p-4">
                <div className="row-span-2 col-span-2 md:order-2 flex items-center lg:col-span-4 md:row-span-1">
                    <p>
                        <b>Hundred Pilates </b>{t("continues")}
                    </p>
                </div>
                <img
                    src={YogaMat}
                    className="w-full h-full object-contain col-span-2 row-span-2 md:order-1 lg:order-3 lg:row-span-1 lg:col-span-1"
                    alt="Rolling up a yoga mat"
                />
                <div className="font-bold col-span-4 md:order-3 lg:order-2 md:col-span-2 lg:col-span-4">
                    <p className="lg:text-xl">{t("collaborate")}</p>
                </div>
                <div className="bg-beige-n py-8 px-4 col-span-4 md:order-4 lg:col-span-3 rounded-tr-[40px] rounded-bl-[40px] flex items-center">
                    <div className="w-full">
                        <p className="text-blue-n font-bold mb-4">{t("contact")}</p>
                        <div className="flex gap-4">
                            <form className="w-3/4" action="">
                                <Input
                                    id="name"
                                    placeholder={t("name")}
                                    label={t("name")}
                                />
                                <Input
                                    id="email"
                                    placeholder={t("email")}
                                    label={t("email")}
                                />
                                <Input
                                    id="message"
                                    placeholder={t("message")}
                                    label={t("message")}
                                />
                            </form>
                            <Send className="cursor-pointer self-end text-blue-n hover:text-black transition-all ease-out duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;