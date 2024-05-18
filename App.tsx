import 'react-native-gesture-handler';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import RootStack from './src/navigation';

export default function App() {
  
  const [ fontsLoader ] = useFonts({Poppins_400Regular})

  if (!fontsLoader){
    <AppLoading/>
  }
  return <RootStack />;
}
