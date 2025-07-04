import { useTranslation } from 'react-i18next';

const useLocalization = () => {
  const { t, i18n } = useTranslation();

  return {
    t,
    isRTL: i18n.dir() === 'rtl',
    currentLanguage: i18n.language,
    changeLanguage: i18n.changeLanguage,
    toggleLanguage: () => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
  };
};

export default useLocalization;