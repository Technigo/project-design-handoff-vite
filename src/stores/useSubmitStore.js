import { create } from "zustand";


const useSubmitStore = create((set) => ({
    answers: [],
    toto: "testing value for zustand",

    submitForm: (Name, email, message) => {

        console.log(Name);
        console.log(email);
        console.log(message);
        set((state) => ({
            answers: [
                ...state.answers,
                {
                    Name,
                    email,
                    message
                },
            ],
        }));

    }



}));

export default useSubmitStore;