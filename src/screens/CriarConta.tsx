import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput,TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../navigation';


type CriarContaSreenRouteProp = RouteProp<RootStackParamList, 'CriarConta'>;

export default function CriarConta() {
  const router = useRoute<CriarContaSreenRouteProp>();
  const navigation = useNavigation();


  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  
  const handleCriarConta = () => {
    if (!empresa || !email || !cnpj || !senha || !confirmarSenha) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!/^\d{14}$/.test(cnpj)) {
      Alert.alert('O CNPJ deve conter exatamente 14 números.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('As senhas não correspondem. Por favor, verifique.');
      return;
    }

    Alert.alert('Conta criada com Sucesso!');
    navigation.navigate('BemVindo');
  };

  

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
          onChangeText={setEmpresa}
        />
        <Text style = {styles.inputTittle}>E-mail:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu E-mail..."
          onChangeText={setEmail}
        />
        <Text style = {styles.inputTittle}>CNPJ:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu CNPJ..."
          onChangeText={setCnpj}
        />
        <Text style = {styles.inputTittle}>Senha:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Digite sua senha..."
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Text style = {styles.inputTittle}>Confirme sua senha:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Digite sua senha..."
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createAccountButton}  onPress={handleCriarConta}>
          <Text style={styles.createAccountButtonText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer} >
        <Text style={styles.signInText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar', { name: 'Entrar' })}>
          <Text style={styles.signInText}> Entrar</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
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
  signInContainer: {
    flexDirection: 'row',
    
    
  },
  signInText: {
    color: '#000',
    fontSize: 16,
    paddingTop: 5,
    textAlign: 'center'
  },
  
});
