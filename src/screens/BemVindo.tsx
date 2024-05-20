import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '~/navigation';

type BemVindoNavigationProp = StackNavigationProp<RootStackParamList, "BemVindo">

export default function BemVindo() {
  const navigation = useNavigation<BemVindoNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('Dashboard', { userData: {} });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Bem vindo à CIDA</Text>
        <Text style={styles.subtitle}>A CIDA é uma poderosa ferramenta de inteligência artificial projetada para desvendar insights valiosos a partir de dados empresariais não estruturados. Simplificando o processo de análise de dados, a CIDA transforma documentos internos em insights acionáveis, ajudando as empresas a tomar decisões informadas e impulsionar o crescimento</Text>  
      </View>
      <View style={styles.section}>
        <Image source={require('../../assets/images/DashboardIcon.png')} style={styles.image}/>
        <Text style={styles.titleSection}>Dashboard Principal{'\n'} 
            <Text style={styles.subtitleSection}>Visualize insights essenciais da empresa em um único lugar. Gráficos e métricas que facilitam a compreensão do desempenho geral.</Text>
        </Text>
      </View>
      <View style={styles.section}>
        <Image source={require('../../assets/images/UploadIcon.png')} style={styles.image}/>
        <Text style={styles.titleSection}>Upload de documentos{'\n'} 
            <Text style={styles.subtitleSection}>Carregue facilmente arquivos PDF, Excel ou outros formatos para análise. Arraste e solte seus documentos ou selecione manualmente em seu dispositivo.</Text>
        </Text>
      </View>
      <View style={styles.section}>
        <Image source={require('../../assets/images/DashboardIcon.png')} style={styles.image}/>
        <Text style={styles.titleSection}>Geração de Insights{'\n'} 
            <Text style={styles.subtitleSection}>Explore insights valiosos extraídos dos seus dados. Gráficos e tabelas claras que revelam tendências, padrões e sugestões de ação.</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  headerContent: {
    marginBottom: 5, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 17,
    color: '#38434D',
    paddingTop: 10,
    textAlign: 'justify',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingEnd: 50,
    paddingBottom: 15,
  },
  image: {
    width: 55,
    height: 51,
    marginRight: 10, 
  },
  titleSection: {
    fontSize: 18,
    textAlign: 'justify',
  },
  subtitleSection: {
    fontSize: 16,
  },
  buttonContainer: {
    width: 355,
    height: 48,
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: '#000',
    width: '100%',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
});
