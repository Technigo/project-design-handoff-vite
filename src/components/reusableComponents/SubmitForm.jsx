import { useTranslation } from "react-i18next"

export const SubmitForm = () => {

    const { t } = useTranslation()
    return (
        <form action="">
            <fieldset>
                <legend>
                    <div className="flex flex-col items-start justify-center bg-grey p-4 gap-2">
                        <label htmlFor="name">
                            <input type="text" name="name" id="name" pattern="(?=.*[a-zA-z]){3,}" placeholder={t("newsPage.name")} required />
                        </label>
                        <label htmlFor="email-add">
                            <input type="email" name="email-add" id="email-add" placeholder={t("newsPage.email")} required />
                        </label>
                        <label htmlFor="">
                            <textarea name="" id="" cols="30" rows="10" placeholder={t("newsPage.message")}></textarea>
                        </label>
                        <label htmlFor="submit">
                            <input type="submit" value={t("newsPage.send")} id="submit" className="rounded-[10px] bg-rose shadow-lg shadow-black-25 text-grey text-xl font-raleway font-light px-[37px] py-[13px] gap-2.5" />
                        </label>
                    </div>

                </legend>
            </fieldset>
        </form>

    )
}
