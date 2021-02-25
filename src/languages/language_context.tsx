import React from 'react';
import Index from '..';
import en from './lang/en.json';
import viet from './lang/viet.json';
import { LanguageType } from './language_type';

export interface LanguageContextType extends LanguageType {
  changeLanguage: () => void
}

const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType);

const languageObj = {
  'en': en,
  'viet': viet
}

export const LanguageContextProvider: React.FC = ({ children }) => {
  const [selectedLanguage, setSeletedLanguage] = React.useState<string>('viet');

  const changeLanguage = React.useCallback(() => {
    setSeletedLanguage('viet')
  }, [selectedLanguage])

  const value = {
    ...languageObj[selectedLanguage as 'en' | 'viet'],
    changeLanguage
  }

  return (
    <LanguageContext.Provider value={value} >
      <Index />
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => React.useContext(LanguageContext);