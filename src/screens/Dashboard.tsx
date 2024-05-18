import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  const navigation = useNavigation();
 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      <View style={styles.metricsContainerOne}>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>2,2 mil</Text>
          <Text style={styles.metricLabel}>Adoção</Text>
          <Text style={styles.metricChange}>+55%</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>215,0</Text>
          <Text style={styles.metricLabel}>Retenção</Text>
          <Text style={styles.metricChange}>-12%</Text>
        </View>
      </View>

      <View style={styles.metricsContainerTwo}>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>1,6 mil</Text>
          <Text style={styles.metricLabel}>Engajamento</Text>
          <Text style={styles.metricChange}>+15%</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricValue}>4,8</Text>
          <Text style={styles.metricLabel}>Taxa de Sucesso</Text>
          <Text style={styles.metricChange}>+55%</Text>
        </View>
      </View>

      <View style={styles.gaugeContainer}>
        <Text style={styles.gaugeLabel}>Felicidade do Cliente</Text>
        <Text style={styles.gaugeValue}>72,0</Text>
      </View>

      <View style={styles.insightsContainer}>
        <Text style={styles.insightsTitle}>Insights gerados:</Text>
        <Text style={styles.insightItem}>✓ A adoção do produto teve um aumento significativo de 55% em comparação ao período anterior. Isso sugere uma maior aceitação e interesse dos usuários no produto.</Text>
        <Text style={styles.insightItem}>✓ Houve uma queda de 12% na taxa de retenção dos usuários em relação ao período anterior. Isso pode indicar problemas de satisfação do cliente ou necessidade de melhorias na experiência do usuário.</Text>
        <Text style={styles.insightItem}>✓ O engajamento dos usuários aumentou em 15%, o que é um sinal positivo de que estão interagindo mais com o produto. Isso pode resultar em maior fidelização e satisfação do cliente.</Text>
        <Text style={styles.insightItem}>✓ A taxa de sucesso teve um aumento significativo de 55%, o que indica que os usuários estão alcançando seus objetivos ao usar o produto. Isso pode ser atribuído a melhorias na usabilidade ou funcionalidades adicionais.</Text>
        <Text style={styles.insightItem}>✓ A felicidade do cliente está em um nível saudável de 72,0. Isso sugere que os usuários estão satisfeitos com a experiência geral do produto, mas ainda há espaço para melhorias para alcançar uma pontuação ainda mais alta.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center', 
  },
  metricsContainerOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  metricsContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  metricBox: {
    width: '45%',
    backgroundColor: '#542e91',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  metricLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  metricChange: {
    fontSize: 14,
    color: '#fff',
  },
  gaugeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gaugeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  gaugeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gaugeValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#542e91',
  },
  insightsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  insightsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  insightItem: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
});
