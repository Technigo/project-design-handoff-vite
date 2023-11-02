import { useTranslation } from 'react-i18next';

export const Translation = () => {
  const { t, i18n } = useTranslation();

  const textKeys = ["head1",
  "paragraph1",
  "head2",
  "paragraph2",
  "paragraph3",
  "paragraph4",
  "head3",
"head4:",
"paragraph5:",
"head5:",
"paragraph6:",
"paragraph7:",
"head6:",
"paragraph8:",
];
  const languages = ["en", "es", "sv"];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {textKeys.map((key, index) => (
        <div key={index}>
          <h1>{t(key)}</h1>
        </div>
      ))}
      <div>
        {languages.map((language, index) => (
          <button key={index} onClick={() => changeLanguage(language)}>
            {language}
          </button>
        ))}
      </div>
    </>
  );
};
