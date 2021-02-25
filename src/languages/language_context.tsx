import React from 'react';
import * as RNLocalize from "react-native-localize";
import Index from '..';
import en from './lang/en.json';
import viet from './lang/viet.json';

type LanguageContextType = {
  welcome: string,
  signIn: string,
  notNow: string,
  changeLanguage: () => void
}

const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType);

const languageObj = {
  'en': en,
  'viet': viet
}

export const LanguageContextProvider: React.FC = ({ children }) => {
  const [selectedLanguage, setSeletedLanguage] = React.useState('en');

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