import { useTranslation } from 'next-i18next';

const Localised: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>Localised component</h3>
      <p>{t('common:componentTest')}</p>
    </>
  );
};

export default Localised;
