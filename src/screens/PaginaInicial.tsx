import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground } from 'react-native';

import { RootStackParamList } from '../navigation';

type PaginaInicialScreenNavigationProps = StackNavigationProp<RootStackParamList, 'PaginaInicial'>;

export default function PaginaInicial() {
  const navigation = useNavigation<PaginaInicialScreenNavigationProps>();

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../assets/PlanoDeFundo.jpeg')} style={styles.header}>
      <View style={styles.overlay} />
      <View style={styles.headerContent}>
        <Text style={styles.title}>CIDA</Text>
        <Text style={styles.tagline}>Consulting Insights With Deep Analysis</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Descubra o potencial oculto dos seus dados com a CIDA! Comece agora mesmo e leve sua empresa para o próximo nível.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.signInText}>Já tem uma conta? Entrar</Text>
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
  marginTop: 20, 
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
  paddingTop: 15,
},
subtitle: {
  fontSize: 16,
  marginBottom: 10,
  color: '#fff', 
},
});