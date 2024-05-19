import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
  Dashboard: { userData: { email: string; password: string } };
  Upload: undefined;
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
            // headerLeft: () => (
            //   <View style={styles.backButton}>
            //     <Feather name="chevron-left" size={16} color="#007AFF" />
            //     <Text style={styles.backButtonText} onPress={navigation.goBack}>
            //       Back
            //     </Text>
            //   </View>
            // ),
          })}
        />
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }}/> 
        <Stack.Screen name="Entrar" component={Entrar} options={{headerTitle: () => null}}/> 
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: false }}/> 
        <Stack.Screen name="Upload" component={Upload}  options={{headerTitle: () => null}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  backButtonText: {
    color: '#007AFF',
    marginLeft: 4,
  },
});
