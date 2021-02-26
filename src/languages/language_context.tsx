import React from 'react';
import Index from '..';
import en from './lang/en.json';
import viet from './lang/viet.json';
import { LanguageType } from './language_type';

export interface LanguageContextType extends LanguageType {
  changeLanguage: () => void;
  selectedLanguage: string;
}

const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType);

const languageObj = {
  'en': en,
  'viet': viet
}

export const LanguageContextProvider: React.FC = ({ children }) => {
  const [selectedLanguage, setSeletedLanguage] = React.useState<string>('en');

  const changeLanguage = React.useCallback(() => {
    selectedLanguage === 'en' ? setSeletedLanguage('viet') : setSeletedLanguage('en')
  }, [selectedLanguage])

  const value = {
    ...languageObj[selectedLanguage as 'en' | 'viet'],
    selectedLanguage,
    changeLanguage,
  }

  return (
    <LanguageContext.Provider value={value} >
      <Index />
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => React.useContext(LanguageContext);