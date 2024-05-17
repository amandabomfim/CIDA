import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

type PaginaInicialScreenNavigationProps = StackNavigationProp<RootStackParamList, 'PaginaInicial'>;

export default function PaginaInicial() {
  const navigation = useNavigation<PaginaInicialScreenNavigationProps>();
  const [ fontsLoader ] = useFonts({Poppins_400Regular})

  if (!fontsLoader){
    <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/PlanoDeFundo.jpeg')} style={styles.header}>
        <View style={styles.overlay} />
        <View style={styles.headerContent}>
          <Text style={styles.title}>CIDA</Text>
          <Text style={styles.tagline}>Consulting Insights With Deep Analysis</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>Descubra o potencial oculto dos seus dados com a CIDA! Comece agora mesmo e leve sua empresa para o próximo nível.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.createAccountButton}  onPress={() => navigation.navigate('CriarConta', { name: 'CriarConta' })}>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 180,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    fontFamily:'Poppins_400Regular',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    padding: 20,
  },
  buttonContainer: {
    width: 343,
    height: 60,
    marginTop: 50,
  },
  createAccountButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
  },
  createAccountButtonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
  },
  signInContainer: {
    flexDirection: 'row',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 5,
  },
  mainTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
    fontFamily:'Poppins_400Regular',
  },
});
