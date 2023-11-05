import { useTranslation } from 'react-i18next';
import { ClassesWrapper } from '../components/StyledComponents';

export const Classes = () => {
  const { t } = useTranslation();

  return (
    <ClassesWrapper>
      {t('classes')}
    </ClassesWrapper>
  );
};

