import React from 'react';
import { Routes } from './src/navigation/Routes';
import { GlobalStore } from './src/share/useStore/global_store';
import Index from './src';
import { LanguageContextProvider } from './src/languages/language_context';

export default function App() {
  return (
    <LanguageContextProvider />
  );
}

