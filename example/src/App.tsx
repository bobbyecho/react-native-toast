import React from 'react';
import {ToastProvider} from 'react-native-toast';
import Home from './Home';

export default function App() {
  return (
    <>
      <ToastProvider />
      <Home />
    </>
  );
}
