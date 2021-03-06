import React from 'react';
import { Routes } from '../src/navigation/Routes';
import { GlobalStore } from '../src/share/useStore/global_store';

export default function Index() {
  return (
    <GlobalStore.Provider>
      <Routes />
    </GlobalStore.Provider>
  );
}

