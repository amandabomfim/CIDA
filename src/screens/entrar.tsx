import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

import { RootStackParamList } from '../navigation';

type EntrarSreenRouteProp = RouteProp<RootStackParamList, 'Entrar'>;

export default function Entrar() {
  const router = useRoute<EntrarSreenRouteProp>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Showing Entrar for user {router.params.name}.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});