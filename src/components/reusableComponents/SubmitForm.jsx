import { useTranslation } from "react-i18next"
import useSubmitStore from "../../stores/useSubmitStore"

export const SubmitForm = () => {
    const submitForm = useSubmitStore((state) => state.submitForm);

    const { t } = useTranslation()

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const valueName = formData.get("name")
        // const valueEmail = formData.get("email-add")
        // const valueMessage = formData.get("message")
        console.log("Something")
        submitForm(e.target.name.value, e.target.emailAdd.value, e.target.message.value)
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <fieldset>
                <legend>
                    <div className="flex flex-col items-start justify-center bg-grey p-4 gap-2">
                        <div className="min-w-max">
                            <label htmlFor="name">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    pattern="([a-zA-Z]){3,}"
                                    placeholder={t("newsPage.name")}
                                    required />
                            </label>
                        </div>

                        <label htmlFor="emailAdd">
                            <input
                                type="email"
                                name="emailAdd"
                                id="emailAdd"
                                placeholder={t("newsPage.email")}
                                required />
                        </label>
                        <label htmlFor="message">
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder={t("newsPage.message")}></textarea>
                        </label>
                        <label htmlFor="submit">
                            <button
                                type="submit"
                                value={t("newsPage.send")}
                                id="submit"
                                className="rounded-[10px] bg-rose disabled:opacity-70 shadow-lg shadow-black-25 text-grey text-xl font-raleway font-light px-[37px] py-[13px] gap-2.5"
                            //onSubmit={handleSubmitForm}
                            >{t("newsPage.send")} </button>
                        </label>
                    </div>

                </legend>
            </fieldset>
        </form >

    )
}
