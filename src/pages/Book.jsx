import { useTranslation } from 'react-i18next';
import { BookWrapper, BookHeader } from '../components/StyledComponents';

export const Book = () => {
  const { t } = useTranslation();
  
  return (
    <BookWrapper>
      <BookHeader>{t('book')}</BookHeader>
    </BookWrapper>
  );
}