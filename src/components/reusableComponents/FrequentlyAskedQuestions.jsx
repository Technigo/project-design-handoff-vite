import { InfoPageHeadings } from "./InfoPageHeadings"
import { useTranslation } from "react-i18next";

export const FrequentlyAskedQuestions = () => {
    const { t } = useTranslation(); // Add useTranslation() function to access 't' function

    // questions is an array in the json files. This variable store the array from the json file with key word "questions" because of the option { returnObjects: true } .
    const questions = t("questions", { returnObjects: true }) // ! direct access to data did not work. Like t('question[0].question').

    /* const questions = [
        {
            questionId: 1,
            question: "Is poledance beginner friendly?",
            answer: "Yes! We have classes for all levels. You’ll be amazed what your body will be able to acomplish!"
        },
        {
            questionId: 2,
            question: "Do you have to be fit to start poledancing?",
            answer: "No! Our classes range from beginner friendly to elite. The classes are structured in a way that will give your muscles the best way to gradually prepare for what’s ahead. You will get stronger every week without even noticing, just by having fun!"
        },
        {
            questionId: 3,
            question: "How should I dress for poleclass?",
            answer: "It depends on which class you’re taking but in general you should dress in a way that you feel comfortable and can move freely. For the warm up you can have long sleeves but for the pole you need as much skincontact as possible with the pole to prevent sliding, we recommend a sports bra and shorts. If you prefer long sleeved pants we recommend sticky pole pants. We work out without shoes, except for exotic pole."
        },
        {
            questionId: 4,
            question: "How long heels do I need for exotic class?",
            answer: "It depends on what you feel comfortable with. If it’s your first time ever wearing heels we recommend starting with a low heel and working your way up."
        },
        {
            questionId: 5,
            question: "Can I retake a missed class?",
            answer: "You can retake a missed class within the course period if the class is not full. Please let us know beforehand so we can help you find the best solution."
        },
        {
            questionId: 6,
            question: "Will I have my own pole on class?",
            answer: "Yes, one pole per student."
        }
    ]
 */

    return (
        <div className="bg-white flex flex-col items-start justify-center p-4 mx-8 my-8">
            <h5>{t('FAQ')}</h5>
            <br />
            {questions.map((question) => (
                <div key={t(question.questionId)} >
                    <InfoPageHeadings InfoPageHeading={t(question.question)} />
                    <p className="text-xs text-grey text-sourcesans3 font-normal">
                        {t(question.answer)}
                    </p>
                    <br />
                </div>
            ))
            }
        </div >
    )
}

// How to mount t{("textToTranslate")} into jsx code?
// {questions.map((question) => (
//     <div key={question.questionId}>
//         <InfoPageHeadings InfoPageHeading={t("question.question")} />
//         <p className="text-xs text-grey text-sourcesans3 font-normal">
//             {t("question.answer")}
//         </p>
//         <br />
//     </div>
// ))}