import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            Header: {
                link1: "About us",
                link2: "Play Parkour",
                link3: "Classes",
                link4: "Prices",
                link5: "Join Us"
               },
            Footer: {
                link1: "About us",
                link2: "Play Parkour",
                link3: "FAQ",
                link4: "Contact information"
              },

            PlayParkour: {
                heading: "Play Parkour",
                description: "Treat your life as an adventure - all your life",
                buttonText: "Play Parkour"
            },

            HowToPlay: {
                heading: "How to Play Parkour?",
                point1: "Play with friends",
                point2: "Play with your children",
                point3: "Play with class coach"
            },
            Carousel: {
                quote1: {
                  alt: "quotation on yellow background",
                  text: "I get to play with grandma - Nestor 7 years"
                },
                quote2: {
                  alt: "quotation on purple background",
                  text: "I feel like a child again - Martha 68 years"
                },
                quote3: {
                  alt: "quotation on green background",
                  text: "It is social and it improves the balance and you get better at falling without hurting yourself - Sven 72 years"
                },
                quote4: {
                  alt: "quotation on blue background",
                  text: "Getting the kids from school and daycare are now an adventure and exercise for all of us, not a stressful moment - David 35 years (Allan's dad)"
                },
                quote5: {
                  alt: "quotation on purple background",
                  text: "I get to know my neighbours and my neighbourhood - Alice 75 years"
                },
                quote6: {
                  alt: "quotation on yellow background",
                  text: "Because it's fun and makes me stronger - Bella 35 years"
                },
                quote7: {
                  alt: "quotation on green background",
                  text: "I get to discover my neighbourhood in a new way - Ella 45 years"
                }
              },

            WhyPlay: {
                heading: "Why play parkour?",
                quote1: "I get to play with grandma - Nestor 7 years",
                quote2: "I get to know my neighbours and my neighbourhood - Alice 75 years",
                quote3: "I get to discover my neighbourhood in a new way - Ella 45 years"
            },

            AboutUs: {
                heading: "About us",
                description: "It started with grandma and Nestor, 9 years old, being bored on their way home from school. Then came AuntieParkour, and today Play Parkour offers parkour Programs and classes for all ages.",
                buttonText: "About Play Parkour"
            },

            VisionAndGoal: {
                heading: "Our vision & Goal",
                description: "Our Vision & Goal - Our vision is to create a world where everyone has the opportunity to experience the joy of parkour. We believe that parkour is more than just a sport; it’s a way of life. Our goal is to inspire people to push their limits, overcome obstacles, and achieve their full potential through the practice of parkour."
            },

            OurStory: {
                heading: "Our Story",
                description: "Our story - It started with grandma and 9-year-old Nestor being bored on their way home from school, then came Aunt Parkour, and today Play Parkour offers parkour programs and classes for all ages. The instructors are experienced and help students develop their strength, agility, balance, and coordination. We also have an online platform where students can learn parkour at their own pace and in the comfort of their own home."
            },

            Contact: {
                heading: "Treat life as an adventure",
                description: "Thank you for your interest in Play Parkour. We welcome any questions, feedback, or inquiries you may have. Please fill out the form below, and we’ll get back to you as soon as possible."
            }
        }
    },
    sv: {
        translation: {
            Header: {
               link1: "Om oss",
               link2: "Spela Parkour",
               link3: "Klasser",
               link4: "Priser",
               link5: "Bli medlem"
            },
            Footer: {
                link1: "Om oss",
                link2: "Spela Parkour",
                link3: "Vanliga frågor",
                link4: "Kontaktinformation"
              },

            PlayParkour: {
                heading: "Spela Parkour",
                description: "Behandla ditt liv som ett äventyr - hela ditt liv",
                buttonText: "Spela Parkour"
            },

            HowToPlay: {
                heading: "Hur man spelar Parkour?",
                point1: "Spela med vänner",
                point2: "Spela med dina barn",
                point3: "Spela med träningscoach"
            },
            
                Carousel: {
                  quote1: {
                    alt: "citat på gul bakgrund",
                    text: "Jag får leka med mormor - Nestor 7 år"
                  },
                  quote2: {
                    alt: "citat på lila bakgrund",
                    text: "Jag känner mig som ett barn igen - Martha 68 år"
                  },
                  quote3: {
                    alt: "citat på grön bakgrund",
                    text: "Det är socialt och det förbättrar balansen och man blir bättre på att falla utan att skada sig - Sven 72 år"
                  },
                  quote4: {
                    alt: "citat på blå bakgrund",
                    text: "Att hämta barnen från skola och dagvård är nu ett äventyr och träning för oss alla, inte ett stressmoment - David 35 år (Allans pappa)"
                  },
                  quote5: {
                    alt: "citat på lila bakgrund",
                    text: "Jag lär känna mina grannar och mitt grannskap - Alice 75 år"
                  },
                  quote6: {
                    alt: "citat på gul bakgrund",
                    text: "För att det är roligt och gör mig starkare - Bella 35 år"
                  },
                  quote7: {
                    alt: "citat på grön bakgrund",
                    text: "Jag får upptäcka mitt grannskap på ett nytt sätt - Ella 45 år"
                  }
                },

            WhyPlay: {
                heading: "Varför spela parkour?",
                quote1: "Jag får leka med mormor - Nestor 7 år",
                quote2: "Jag lär känna mina grannar och mitt grannskap - Alice 75 år",
                quote3: "Jag får upptäcka mitt grannskap på ett nytt sätt - Ella 45 år"
            },

            AboutUs: {
                heading: "Om oss",
                description: "Det började med mormor och Nestor, 9 år gammal, som var uttråkade på väg hem från skolan. Sedan kom Tant Parkour, och idag erbjuder Play Parkour parkour-program och lektioner för alla åldrar.",
                buttonText: "Om Play Parkour"
            },

            VisionAndGoal: {
                heading: "Våran vision & mål",
                description: "Vår Vision & Mål - Vår vision är att skapa en värld där alla har möjlighet att uppleva glädjen med parkour. Vi tror att parkour är mer än bara en sport; det är ett sätt att leva. Vårt mål är att inspirera människor att pusha sina gränser, övervinna hinder och uppnå sin fulla potential genom att praktisera parkour."
            },

            OurStory: {
                heading: "Våran Historia",
                description: "Vår historia - Det började med mormor och 9-åriga Nestor som var uttråkade på vägen hem från skolan, sedan kom Faster Parkour, och idag erbjuder Play Parkour parkourprogram och kurser för alla åldrar. Instruktörerna är erfarna och hjälper eleverna att utveckla sin styrka, smidighet, balans och koordination. Vi har också en onlineplattform där eleverna kan lära sig parkour i sin egen takt och i bekvämligheten av sitt eget hem."
            },

            Contact: {
                heading: "Behandla livet som ett äventyr",
                description: "Tack för ditt intresse för Play Parkour. Vi välkomnar alla frågor, feedback eller förfrågningar du kan ha. Vänligen fyll i formuläret nedan, så återkommer vi till dig så snart som möjligt."
            }
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
    escapeValue: false
    }
  })

export default i18n;

    