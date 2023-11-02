import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      navList: [
        "Classes",
        "Yoga types",
        "Benefits of yoga",
        "Teachers",
        "About us",
      ],
      navClasses: "Classes",
      navYogaTypes: "Yoga types",
      navBenefits: "Benefits of yoga",
      navTeachers: "Teachers",
      navAbout: "About us",
      navSignUpBtn: "Sign up",
      navSignInBtn: "Sign in",
      letsGoBtn: "Let's go!",
      intro: "Let's dive in to the world of",
      introYoga: "Yoga",
      introSub:
        "At Wave Yoga Studio, we know and believe that yoga is for everyone  🤎",
      classes: "Our classes",
      classRange: `We have a wide range of yoga classes suitable for all levels. 

      Book a single class when you feel like it, or sign up for our Studio Membership and get a reduced price on all yoga classes and other benefits such as workshops, retreats and special events.`,
      bookClassBtn: "Book a class",
      signUpBtn: "Sign up",
      alreadyMember: "Already a member?",
      login: "Sign in",
      yogaTypeTitle: "Which type of yoga suits me?",
      yogaTypeSubtitle:
        "New to yoga? Or just curious about what different types of yoga we offer?",
      yogaTypeInfo:
        "We have collected information about all the different types of yoga we teach, from beginner to more intermediate and advanced levels.",
      yogaTypeBtn: "Find my yogatype",
      benefitsOfYogaTitle: "Benefits of yoga",
      benefitsOfYogaInfo:
        "Yoga is a wonderful form of exercise that suits everyone. Some of the many health benefits of practicing yoga includes:",
      benefitsOfYogaArray: [
        "Reduced stress and anxiety",
        "Increased strength and flexibility",
        "Lowering bloodpressure",
        "Mindfulness practice",
        "Helping your body's natural healing process",
      ],
      learnMoreAboutYogaBtn: "Learn more about yoga",
      ourTeachersTitle: "Our teachers",
      ourTeachersInfo:
        "All our teachers are certified yoga instructors and have long experience in teaching yoga to people with different levels of experience. You are always welcome to our studio, regardless of your previous experience with yoga.",
      meetOurTeachersBtn: "Meet our teachers",
      aboutUsTitle: "About us",
      aboutUsInfo: `Wave Yoga Studio was established in 2013, and we have since then made it our mission to help people towards healthier, happier lifes through yoga. 
      
          If you want to explore our studio and yoga classes, or have any questions or feedback, please reach out to us! 🤎`,
      contactBtn: "Contact Wave Yoga Studio",
      selectLanguage: "Select language",
      backToTop: "Back to top",
      aboutPageTitle: "About us",
      aboutPageSubInfo:
        "Wave Yoga Studio was established in 2013, and we have since then made it our mission to help people towards healthier, happier lifes through yoga 🤎 ",
      goodToKnow: "Good to know",
      openingHours: "Opening hours",
      openingHoursInfo:
        "We offer different yoga classes all day between 6.30am-7.30pm. Our studio and changing rooms are open from 6am-10pm.",
      bookAClass: "Book a class",
      bookAClassInfo:
        "You find all our classes and booking schedule on our Booking page",
      studioMembership: "Studio membership",
      studioMembershipInfo:
        "Sign up for our Studio membership and get a reduced price on all yoga classes and other benefits such as workshops, retreats and special events.",
      contactUs: "Contact us",
      contactUsInfo:
        "If you want to explore our studio or have any questions or feedback, please reach out to us! 🤎",
      formName: "Name *",
      formNamePlaceholder: "Your name...",
      formEmail: "Email",
      formEmailPlaceholder: "Your email address",
      formMessage: "Message",
      formMessagePlaceholder: "Write your message...",
      termsAndConditions: "I agree with the terms & conditions",
      sendBtn: "Send",
    },
  },
  se: {
    translation: {
      welcome: "Välkommen",
      navList: [
        "Pass",
        "Yogatyper",
        "Fördelar med yoga",
        "Instruktörer",
        "Om oss",
      ],
      navClasses: "Pass",
      navYogaTypes: "Yogatyper",
      navBenefits: "Fördelar med yoga",
      navTeachers: "Instruktörer",
      navAbout: "Om oss",
      navSignUpBtn: "Bli medlem",
      navSignInBtn: "Logga in",
      letsGoBtn: "Nu kör vi!",
      intro: "Låt oss dyka in i yogans värld",
      introSub: "På Wave Yoga Studio vet och tror vi att yoga är för alla 🤎",
      classes: "Våra pass",
      classRange: `Vi har ett brett utbud av yogapass som passar alla nivåer. 
    
      Boka ett enstaka pass när du känner för det, eller teckna vårt Studio Membership och få ett reducerat pris på alla yogaklasser och andra förmåner som workshops, retreats och specialevenemang.`,
      bookClassBtn: "Boka ett pass",
      signUpBtn: "Bli medlem",
      alreadyMember: "Redan medlem?",
      login: "Logga in",
      yogaTypeTitle: "Vilken typ av yoga passar mig?",
      yogaTypeSubtitle:
        "Nybörjare på yoga? Eller bara nyfiken på vilka olika typer av yoga vi erbjuder?",
      yogaTypeInfo:
        "Vi har samlat information om alla de olika typer av yoga som vi håller i, från nybörjare till mer avancerade och avancerade nivåer.",
      yogaTypeBtn: "Hitta min yogatyp",
      benefitsOfYogaTitle: "Fördelar med yoga",
      benefitsOfYogaInfo:
        "Yoga är en underbar träningsform som passar alla. Några av de många hälsofördelarna med att utöva yoga inkluderar:",
      benefitsOfYogaArray: [
        "Minskad stress och ångest",
        "Ökad styrka och flexibilitet",
        "Sänkning av blodtrycket",
        "Utövande av mindfulness",
        "Hjälper din kropps naturliga läkningsprocess",
      ],
      learnMoreAboutYogaBtn: "Läs mer om yoga",
      ourTeachersTitle: "Våra instruktörer",
      ourTeachersInfo:
        "Alla våra lärare är certifierade yogainstruktörer och har lång erfarenhet av att lära ut yoga till människor med olika nivåer av erfarenhet. Du är alltid välkommen till vår studio, oavsett din tidigare erfarenhet av yoga.",
      meetOurTeachersBtn: "Möt våra instruktörer",
      aboutUsTitle: "Om oss",
      aboutUsInfo: `Wave Yoga Studio grundades 2013 och vi har sedan dess gjort det till vårt uppdrag att hjälpa människor till ett hälsosammare och gladare liv genom yoga. 
          
      Om du vill utforska vår studio och yogapass, eller har några frågor eller feedback, vänligen kontakta oss! 🤎`,
      contactBtn: "Kontakta Wave Yoga Studio",
      selectLanguage: "Välj språk",
      backToTop: "Tillbaka till toppen",
      aboutPageTitle: "Om oss",
      aboutPageSubInfo:
        "Wave Yoga Studio grundades 2013 och vi har sedan dess gjort det till vårt uppdrag att hjälpa människor till ett hälsosammare och gladare liv genom yoga 🤎 ",
      goodToKnow: "Bra att veta",
      openingHours: "Öppettider",
      openingHoursInfo:
        "Vi erbjuder olika yogapass hela dagen mellan kl. 6.30-7.30. Vår studio och omklädningsrum är öppna från kl. 6.00-10.00.",
      bookAClass: "Boka ett pass",
      bookAClassInfo:
        "Du hittar alla våra klasser och bokningsschema på vår bokningssida",
      studioMembership: "Studiomedlemsskap",
      studioMembershipInfo:
        "Bli medlem hos oss och få ett reducerat pris på alla yogapass och andra förmåner som workshops, retreats och specialevenemang.",
      contactUs: "Kontakta oss",
      contactUsInfo:
        "Om du vill utforska vår studio eller har några frågor eller synpunkter är du välkommen att kontakta oss! 🤎",
      formName: "Namn *",
      formNamePlaceholder: "Ditt namn...",
      formEmail: "Email",
      formEmailPlaceholder: "Din emailadress",
      formMessage: "Meddelande",
      formMessagePlaceholder: "Skriv ditt meddelande...",
      termsAndConditions: "Jag godkänner villkoren",
      sendBtn: "Skicka",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
