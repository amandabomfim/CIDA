import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput,TouchableOpacity, Alert,  ScrollView } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../navigation';
import { Picker } from '@react-native-picker/picker';

type CriarContaSreenRouteProp = RouteProp<RootStackParamList, 'CriarConta'>;

export default function CriarConta() {
  const router = useRoute<CriarContaSreenRouteProp>();
  const navigation = useNavigation();
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [selectedTipoEmpresa, setSelectedTipoEmpresa] = useState('');
  
  const [clienteData, setClienteData] = useState({
    nome: "",
    segmento: "",
    tipo: selectedTipoEmpresa,
    desafios: "", 
    objetivos: "",
  });

  const [userData, setUserData] = useState({
    email: "",
    senha: "",
    identificacao:"",
    clienteId:"",
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  
  
  const handleCriarConta = async () =>  {
    
    const { email, senha, identificacao, clienteId } = userData;
    const { nome, segmento, tipo, desafios, objetivos  } = clienteData;

    // if (!clienteData.nome || !userData.email || !clienteData.tipo || !confirmarSenha) {
    //   setAlertMessage('Por favor, preencha todos os campos.');
    //   return;
    // }

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setAlertMessage("Email inválido.");
      return false;
    }

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+\-]).{8,16}$/;
    if (!senhaRegex.test(userData.senha)) {
      setAlertMessage("Formato de senha forte inválido.");
      return false;
    }

    if (userData.senha !== confirmarSenha) {
      setAlertMessage('As senhas não correspondem. Por favor, verifique.');
      return;
    }

    if (!selectedTipoEmpresa) {
      setAlertMessage('Por favor, selecione o tipo da empresa.');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, segmento, tipo, desafios, objetivos }),
      });

      if (response.ok) {
        const clienteResponse = await response.json(); // Aguarda a resolução da Promise e obtém o objeto retornado pela API
        console.log('Objeto retornado pela API:', clienteResponse);
        setUserData({ ...userData, clienteId: clienteResponse.id })

        try {
          const response = await fetch('http://10.0.2.2/usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha, identificacao, clienteId }),
          });
          console.log({ email, senha, identificacao, clienteId })

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
  };
 
  return (
    <ScrollView>
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
            onChangeText={(text) => setClienteData({ ...clienteData, nome: text })}
          />
          <Text style = {styles.inputTittle}>E-mail:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu E-mail..."
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
          <Text style = {styles.inputTittle}>Usuario:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o usuario..."
            onChangeText={(text) => setUserData({ ...userData, identificacao: text })}
          />
          <Text style = {styles.inputTittle}>Segmento:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o segmento..."
            onChangeText={(text) => setClienteData({ ...clienteData, segmento: text })}
          />
          <Text style={styles.inputTittle}>Tipo:</Text>
            <Picker
              selectedValue={selectedTipoEmpresa}
              onValueChange={(itemValue, itemIndex) => setSelectedTipoEmpresa(itemValue)}
              style={styles.inputField}
            >
              <Picker.Item label="Selecione o tipo da empresa..." value="" />
              <Picker.Item label="Microempresa" value="ME" />
              <Picker.Item label="Sociedade Limitada" value="LTDA" />
              <Picker.Item label="Sociedade Anônima" value="SA" />
              <Picker.Item label="Empresa Individual de Responsabilidade Limitada" value="EIRELI" />
              <Picker.Item label="Empresário Individual" value="EI" />
              <Picker.Item label="Empresa de Pequeno Porte" value="EPP" />
              <Picker.Item label="Microempreendedor Individual" value="MEI" />
            </Picker>

          <Text style = {styles.inputTittle}>Desafios:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite desafios..."
            onChangeText={(text) => setClienteData({ ...clienteData, desafios: text })}
          />
          <Text style = {styles.inputTittle}>Senha:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua senha..."
            value={userData.senha}
            onChangeText={(text) => setUserData({ ...userData, senha: text })}
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
        {alertMessage && ( // Renderização condicional do rótulo de alerta
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{alertMessage}</Text>
        )}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 1
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
    fontWeight: 'bold'
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
    paddingVertical: 14,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: '#000',
    fontSize: 16,
    paddingTop: 5,
    textAlign: 'center'
  },
 
});
