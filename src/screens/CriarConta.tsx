import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput,Button } from 'react-native';

import { RootStackParamList } from '../navigation';

type CriarContaSreenRouteProp = RouteProp<RootStackParamList, 'CriarConta'>;

export default function CriarConta() {
  const router = useRoute<CriarContaSreenRouteProp>();

  return (
    <View style={styles.container}>
    <View style={styles.headerContent}>
          <Text style={styles.title}>CIDA</Text>
          <Text style={styles.tagline}>Consulting Insights With Deep Analysis</Text>
        </View>
    <View style={styles.inputSection}>
      <Text>Empresa ou Startup:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite o nome da empresa ou Startup..."
      />
      <TextInput
        style={styles.inputField}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.inputField}
        placeholder="CNPJ"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Senha"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Confirme sua senha"
      />
    </View>
   
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  headerContent: {
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  tagline: {
    fontSize: 18,
    color: '#000',
  },
  inputSection: {
    paddingTop: 30
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonSection: {
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginText: {
    color: '#000',
  },
});
