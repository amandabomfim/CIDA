import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { RootStackParamList } from '../navigation';

type EntrarScreenRouteProp = RouteProp<RootStackParamList, 'Entrar'>;

export default function Entrar() {
  const router = useRoute<EntrarScreenRouteProp>();
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    email: "",
    senha: "",
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null); // Estado para a mensagem de alerta

  const handleLogin = async () => {
    const { email, senha } = userData;

    if (!email || !senha) {
      setAlertMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setAlertMessage("Email inválido.");
      return false;
    }

    try {
      const response = await fetch('http://10.0.2.2/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        navigation.replace('Dashboard', { userData });
      } else if (response.status === 401) {
        setAlertMessage('Email ou senha inválidos');
      } else if (response.status === 500) {
        setAlertMessage('Erro no servidor. Tente novamente mais tarde.');
      } else {
        let errorMessage = 'Erro inesperado ao fazer login';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          const errorText = await response.text();
          if (errorText) {
            errorMessage = errorText;
          }
        }
        console.log(errorMessage);
        setAlertMessage(errorMessage);
      }
    } catch (error) {
      setAlertMessage('Erro ao fazer login');
    }
    // navigation.replace('Dashboard', { userData });
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>CIDA</Text>
          <Text style={styles.tagline}>Consulting Insights With Deep Analysis</Text>
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.inputTittle}>E-mail:</Text>
          <TextInput
            style={styles.inputField} // Complete the style property assignment
            placeholder="Digite seu e-mail..."
            value={userData.email}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
          <Text style={styles.inputTittle}>Senha:</Text>
          <TextInput
            style={styles.inputField} // Complete the style property assignment
            placeholder="Digite sua senha..."
            value={userData.senha}
            onChangeText={(text) => setUserData({ ...userData, senha: text })}
            secureTextEntry={true}
          />
        </View>
        {alertMessage && ( // Renderização condicional do rótulo de alerta
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{alertMessage}</Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleLogin}>
            <Text style={styles.createAccountButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createContainer}>
          <Text style={styles.createText}>Não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CriarConta', { name: 'CriarConta' })}>
            <Text style={styles.createTextTouchable}> Criar Conta</Text>
          </TouchableOpacity>
        </View>
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
  headerContent: {
    marginTop: 64,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 18,
    color: '#000',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  inputSection: {
    // backgroundColor:'blue',
    paddingTop: 15,
    marginTop: 100,
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
    borderRadius: 25,
  },
  createContainer: {
    flexDirection: 'row',
  },
  createText: {
    color: '#000',
    fontSize: 16,
    paddingTop: 5,
    textAlign: 'center'
  },
  createTextTouchable: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
});
