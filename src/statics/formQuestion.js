export const formQuestion = [
  {
    id: 1,
    content: {
      en: {
        question: "Please Provide your name",
        placeholder: "Name Please",
        button: "Next",
        message: null,
      },
      es: {
        question: "Introduzca su nombre",
        placeholder: "Nombre porfavor",
        button: "Siguiente",
        message: null,
      },
      sv: {
        question: "Vänligen ange ditt namn",
        placeholder: "Namn, tack",
        button: "Nästa",
        message: null,
      },
    },

    type: "input",
    name: "name",
    animation: "bounceIn",
  },
  {
    id: 2,
    content: {
      en: {
        question: "We want your email.",
        placeholder: "Gather Emails? Prawns!",
        button: "prawns!",
        message: "We will exchange this info with spammers for Prawns!",
      },
      es: {
        question: "Queremos su email!",
        placeholder: "Emails? Gambas!",
        button: "Gambas!",
        message: "Daremos esta informacion a spammers a cambio de gambas! ",
      },
      sv: {
        question: "Vi vill ha din e-postadress",
        placeholder: "Samla in e-post? Räkor!",
        button: "Räkor!",
        message: "Vi kommer att byta denna information med spammare mot räkor!",
      },
    },

    type: "input",
    name: "email",
    animation: "fadeIn",
  },
  {
    id: 3,
    content: {
      en: {
        question: "Write your Meowssage",
        placeholder: "If we could read we might just read this between naps and meal times",
        button: "prawns!",
        message: null,
      },
      es: {
        question: "Escriba su Miaussage",
        placeholder: "Su pudieramos leer lo leeriamos entre descansos y comidas",
        button: "Gambas!",
        message: null,
      },
      sv: {
        question: "Skriv ditt Meowssage",
        placeholder:
          "Om vi kunde läsa skulle vi kanske läsa det här mellan tupplurarna och måltiderna",
        button: "prawns!",
        message: null,
      },
    },
    type: "text",
    name: "text",
    animation: "fadeOut",
  },
  {
    id: 4,
    content: {
      en: {
        question: "So long and thanks for all the fish.",
        placeholder: null,
        button: "thank you",
        message: null,
      },
      es: {
        question: "Hasta pronto y gracias por el pescado.",
        placeholder: null,
        button: "Gracias",
        message: null,
      },
      sv: {
        question: "Hej då och tack för all fisk",
        placeholder: null,
        button: "Tack så mycket",
        message: null,
      },
    },
    type: "submit",
    name: null,
    animation: "bounceOut",
  },
];
