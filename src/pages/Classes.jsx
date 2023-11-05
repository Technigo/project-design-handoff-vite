import { useTranslation } from 'react-i18next';
import { ClassesHeader, ClassesWrapper } from '../components/StyledComponents';

export const Classes = () => {
  const { t } = useTranslation();

  return (
    <ClassesWrapper>
      <ClassesHeader>{t('classes')}</ClassesHeader>
    </ClassesWrapper>
  );
};

