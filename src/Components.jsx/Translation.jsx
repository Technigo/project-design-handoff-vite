import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //navbar
      about: "About",
      membership: "Membership",
      facilities: "Facilities",
      openinghours: "Opening Hours",
      signIn: "Sign In",

      //header
      title: "An elevated gym experience. Everything in one place",
      description:
        "Up to 67 percent of traditional gym memberships go completely unused.",
      description2:
        "Many gyms build their business model on the bet that most people will stay home. We don’t.",

      //grid
      gridButton: "Read More",
      gridTitle1: "Breakfast",
      gridText1:
        "Start your day with our breakfast buffet starting from 5:00 AM, including a juice bar and a Protein Bar for post-workout energy.",

      gridTitle2: "The Gym",
      gridText2:
        "Transform your fitness journey at our state-of-the-art gym, the newest machines, yoga area and an open snack bar.",

      gridTitle3: "Co-working",
      gridText3:
        "Elevate your productivity at our cutting-edge co-working space, an open space combined with private meeting areas, open fireplaces and much more.",

      gridTitle4: "Spa & Wellness",
      gridText4:
        "Discover tranquility at our spa and wellness area, unwind after a good workout, a long workday, or whenever life calls for it.",

      gridTitle5: "After hours",
      gridText5:
        "Join us for after-hours in our cocktail bar with DJ or live sessions. Open every Friday for everyone and Saturday’s for members only.",

      //Info
      infoTitle1: "$1.13 milioner",
      infoText1:
        "Amerikaner spenderar 1,13 miljoner dollar årligen på oanvända gymmedlemskap.",
      infoTitle2: "$1.9 billion",
      infoText2:
        "Australians are wasting $1.9 billion per year on unused gym memberships.",
      infoTitle3: "£4 billion",
      infoText3:
        "Britons waste more than £4 billion a year on unused gym memberships.",

      rightText: "So much money is being tossed away for nothing. We want to",
      rightTextYellow: "change it.",
      rightButton: "Read more about us",

      //Member
      memberTitle1: "Become a Member",

      //Footer
      subscribeNews: "Subscribe to our newsletter",
      thankYou: "Thank you for signing up!",
      subscribeButton: "Subscribe",

      information: "Information",
      aboutUs: "About Us",
      moreSearch: "More Search",
      blog: "Blog",
      testimonials: "Testimonials",
      events: "Events",

      helpfulLinks: "Helpful Links",
      services: "Services",
      support: "Support",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",

      services: "Our Services",
      brandsList: "Brands List",
      facilities: "Facilities",
      openingHours: "Opening hours",

      contactUs: "Contact Us",

      //About
      homeButton: "Home",

      aboutTitle: "What we do",
      aboutSubTitle: "BACKGROUND",
      aboutText:
        "Many gyms build their business model on the bet that most people will stay home. We don’t.",

      longAboutFirst:
        "Many business models that profit from unused gym memberships often rely on the concept of 'over-subscription.' These businesses understand that a significant portion of their members won't use the gym regularly or at all. They can offer lower prices or attractive signup deals “to get more people through the door.” Or not. This strategy allows them to generate more revenue than they would if everyone used the gym frequently. It's essentially a gamble on people's intentions and motivation.",
      longAboutSecond:
        "At GroundZero, we're breaking the mold of the 'unused gym membership' business model. We believe in delivering real value for your money. While wanting to offer you a place to workout, relax, socialize, and network. Besides The Gym, we offer Breakfast, Co-working, Spa/ Wellness, and After-hours access. And since we know life isn’t black and white, you can tailor your membership to your preferences. Access them all or mix and match. Our goal is to make sure your time with us is productive and enjoyable.",

      //Contact
      visitUs: "Visit Us",
      contactUs: "Contact Us",
    },
  },
  sv: {
    translation: {
      //navbar
      about: "Om",
      membership: "Medlemskap",
      facilities: "Faciliteter",
      openinghours: "Öppettider",
      signIn: "Logga in",

      //header
      title: "En förhöjd gymupplevelse. Allt på ett ställe",
      description:
        "Upp till 67% av traditionella gymmedlemskap används aldrig.",
      description2:
        "Många gym bygger sin affärsmodell på att de flesta människor kommer att stanna hemma. Det gör inte vi.",

      //grid
      gridButton: "Läs mer",
      gridTitle1: "Frukost",
      gridText1:
        "Börja din dag med vår frukostbuffé som börjar kl. 05:00, inklusive en juicebar och en proteindrinkbar för energi efter träningen.",

      gridTitle2: "Gymmet",
      gridText2:
        "Förändra din träningsresa i vårt toppmoderna gym med de senaste maskinerna, ett yogahörn och en öppen snacksbar.",

      gridTitle3: "Delade ytor",
      gridText3:
        "Höj din produktivitet i vårt toppmoderna samarbetskontor, en öppen yta kombinerad med privata mötesområden, öppna spisar och mycket mer.",

      gridTitle4: "Spa & Välmående",
      gridText4:
        "Höj din produktivitet på vår toppmoderna samarbetsplats, en öppen yta kombinerad med privata mötesområden, öppna spisar och mycket mer.",

      gridTitle5: "In på småtimmarna",
      gridText5:
        "Anslut dig till oss för kvällsnöjen i vår cocktailbar med DJ eller liveframträdanden. Öppet varje fredag för alla och på lördagar endast för medlemmar.",

      //Info
      infoTitle1: "$1.13 milioner",
      infoText1:
        "Amerikaner spenderar 1,13 miljoner dollar årligen på oanvända gymmedlemskap.",
      infoTitle2: "$1.9 billioner",
      infoText2:
        "Australier slösar bort 1,9 miljarder dollar per år på oanvända gymmedlemskap.",
      infoTitle3: "$1.13 milioner",
      infoText3:
        "Britter slösar mer än 4 miljarder pund per år på oanvända gymmedlemskap.",

      rightText: "Så mycket pengar slösas bort i onödan. Vi vill ändra",
      rightTextYellow: "på det.",
      rightButton: "Läs mer om oss",

      //Member
      memberTitle1: "Bli medlem",

      //Footer
      subscribeNews: "Prenumerera på vårt nyhetsbrev",
      thankYou: "Tack för att du prenumererar!",
      subscribeButton: "Prenumerera",

      information: "Information",
      aboutUs: "Om Oss",
      moreSearch: "Mer Sök",
      blog: "Blogg",
      testimonials: "Kundomdömen",
      events: "Evenemang",

      helpfulLinks: "Användbara Länkar",
      services: "Tjänster",
      support: "Support",
      terms: "Villkor & Bestämmelser",
      privacy: "Integritetspolicy",

      services: "Våra Tjänster",
      brandsList: "Varumärkeslista",
      facilities: "Faciliteter",
      openingHours: "Öppettider",

      contactUs: "Kontakta Oss",

      //About
      homeButton: "Hem",

      aboutTitle: "Vad vi gör",
      aboutSubTitle: "BAKGRUND",
      aboutText:
        "Många gym bygger sin affärsmodell på att de flesta människor kommer att stanna hemma. Det gör inte vi.",

      longAboutFirst:
        "Många affärsmodeller som tjänar pengar på oanvända gymmedlemskap förlitar sig ofta på konceptet 'överanmälan'. Dessa företag förstår att en betydande del av deras medlemmar inte kommer att använda gymmet regelbundet eller alls. De kan erbjuda lägre priser eller attraktiva registreringsavtal 'för att få fler människor genom dörren'. Eller inte. Denna strategi gör det möjligt för dem att generera mer intäkter än om alla använde gymmet regelbundet. Det är i grunden ett vad på människors avsikter och motivation.",
      longAboutSecond:
        "På GroundZero bryter vi mönstret för affärsmodellen med 'oanvända gymmedlemskap'. Vi tror på att leverera verkligt värde för dina pengar. Samtidigt som vi vill erbjuda dig en plats att träna, koppla av, socialisera och nätverka. Förutom gymmet erbjuder vi frukost, co-working, spa/wellness och tillträde efter stängning. Och eftersom vi vet att livet inte är svart eller vitt kan du anpassa ditt medlemskap efter dina preferenser. Få tillgång till dem alla eller kombinera dem som du vill. Vårt mål är att se till att din tid med oss är produktiv och njutbar.",

      //Contact
      visitUs: "Besök oss",
      contactUs: "Kontakta oss",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
