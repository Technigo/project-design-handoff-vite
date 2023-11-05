import { useTranslation } from 'react-i18next';
import { BookWrapper } from '../components/StyledComponents';

export const Book = () => {
  const { t } = useTranslation();
  
  return (
    <BookWrapper>
      {t('book')}
    </BookWrapper>
  );
}