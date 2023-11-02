export const SubmitForm = () => {

    return (
        <form action="">
            <fieldset>
                <legend>
                    <div className="flex flex-col items-start justify-center bg-grey p-4 gap-2">
                        <label htmlFor="name">
                            <input type="text" name="name" id="name" pattern="(?=.*[a-zA-z]){3,}" placeholder="Name:" required />
                        </label>
                        <label htmlFor="email-add">
                            <input type="email" name="email-add" id="email-add" placeholder="Email:" required />
                        </label>
                        <label htmlFor="">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message:"></textarea>
                        </label>
                        <label htmlFor="submit">
                            <input type="submit" value="Send" id="submit" className="rounded-[10px] bg-rose shadow-lg shadow-black-25 text-grey text-xl font-raleway font-light px-[37px] py-[13px] gap-2.5" />
                        </label>
                    </div>

                </legend>
            </fieldset>
        </form>

    )
}
