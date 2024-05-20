import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CriarConta from '../screens/CriarConta';
import PaginaInicial from '../screens/PaginaInicial';
import BemVindo from '../screens/BemVindo'; 
import Entrar from '../screens/entrar';
import Dashboard from '../screens/Dashboard';
import Upload from '../screens/Upload'



export type RootStackParamList = {
  PaginaInicial: undefined;
  CriarConta: { name: string };
  BemVindo: { name: string };
  Entrar: { name: string };
  Dashboard: { userData: any };
  Upload: {userData: any };
};

const Stack = createStackNavigator<RootStackParamList>();


export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial">
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{ headerShown: false }}/>
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={({ navigation }) => ({
            headerTitle: () => null,
          })}
        />
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }}/> 
        <Stack.Screen name="Entrar" component={Entrar} /> 
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} /> 
        <Stack.Screen name="Upload" component={Upload} options={({ navigation }) => ({ headerLeft: () => {navigation.goBack}  })} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
