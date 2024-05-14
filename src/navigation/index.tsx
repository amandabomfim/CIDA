import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';

import CriarConta from '../screens/CriarConta';
import PaginaInicial from '../screens/PaginaInicial';


export type RootStackParamList = {
  PaginaInicial: undefined;
  CriarConta: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial">
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={styles.backButton}>
                <Feather name="chevron-left" size={16} color="#007AFF" />
                <Text style={styles.backButtonText} onPress={navigation.goBack}>
                  Back
                </Text>
              </View>
            ),
          })}
        />
      
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
