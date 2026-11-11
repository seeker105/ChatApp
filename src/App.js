import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import { AppProvider, AppContext } from './contexts/AppContext';
import { useContext } from 'react';
import AppContent from './components/AppContent';

export default function App() {

  return (
    <AppProvider>
        <AppContent />
    </AppProvider>
  );
}

