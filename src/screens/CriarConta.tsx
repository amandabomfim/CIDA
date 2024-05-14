import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';

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
      <Text style = {styles.inputTittle}>Empresa ou Startup:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite o nome da empresa ou Startup..."
      />
      <Text style = {styles.inputTittle}>E-mail:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite seu E-mail..."
      />
      <Text style = {styles.inputTittle}>CNPJ:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite seu CNPJ..."
      />
      <Text style = {styles.inputTittle}>Senha:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite sua senha..."
      />
      <Text style = {styles.inputTittle}>Confirme sua senha:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Digite sua senha..."
      />
    </View>
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Já tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signInText}>Entrar</Text>
            </TouchableOpacity>
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
    paddingTop: 15,
  },
  inputTittle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  inputField: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  buttonContainer: {
    width: 355,
    height: 48,
    marginTop: 10,
  },
  createAccountButton: {
    backgroundColor: '#000',
    width: '100%', 
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
  },
  signInText: {
    color: '#000',
    fontSize: 16,
    textAlign:'center',
    paddingTop:10,
  },
  
});
