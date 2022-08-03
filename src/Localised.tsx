import { useTranslation } from 'next-i18next';
import { Heading } from '@chakra-ui/react';

const Localised: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Heading as="h3">Localised component</Heading>
      <p>{t('common:componentTest')}</p>
    </>
  );
};

export default Localised;
