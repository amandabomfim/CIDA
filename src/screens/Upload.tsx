import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

export default function Upload() {
  const [url, setUrl] = useState('');
  const navigation = useNavigation();

  const handleFileUpload = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      console.log('Document:', document);
      
    } catch (error) {
      console.log('Erro ao escolher arquivo:', error);
    }
  };

  const handleUrlUpload = async () => {
    try {
      if (!url) {
        console.log('Por favor, insira uma URL válida.');
        return;
      }
      console.log('Arquivo enviado com sucesso!');
    } catch (error) {
      console.log('Erro ao fazer upload do arquivo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload</Text>
      <View style={styles.uploadSection}>
        <Text style={styles.uploadTitle}>Upload de documentos</Text>
        <Text style={styles.uploadsubtitle}>Adicione aqui o seu documento</Text>
        <Card style={styles.uploadCard}>
          <TouchableOpacity style={styles.uploadBox} onPress={handleFileUpload}>
            <IconButton icon="cloud-upload" size={40} />
            <Text>Arraste o seu arquivo ou <Text style={styles.chooseText}>Escolha</Text></Text>
          </TouchableOpacity>
        </Card>
      </View>

      <Text style={styles.orText}>OU</Text>

      <View style={styles.urlSection}>
        <TextInput
          style={styles.urlInput}
          placeholder="https://sharefile.xyz/file.jpg"
          value={url}
          onChangeText={setUrl}
        />
        <Button onPress={handleUrlUpload}>Upload</Button>
      </View>

      <View style={styles.flexEnd}>
        <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Enviar documentos')}>
          <LinearGradient
            colors={['#330DE9', '#200F3B']}
            style={styles.gradient}
          >
            <Text style={styles.submitButtonText} onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })}>Enviar documentos</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 120,
    textAlign: 'center'
  },
  uploadSection: {
    marginTop: 30,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadsubtitle: {
    fontSize: 16,
    color: '#38434D',
    textAlign: 'justify',
    marginBottom: 20,
  },
  uploadCard: {
    width: '100%',
    padding: 16,
  },
  uploadBox: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  chooseText: {
    color: '#007bff',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  urlSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  urlInput: {
    flex: 1,
    borderWidth: 1,
    color: '#000',
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  flexEnd: {
    alignItems: 'center',
  },
  submitButton: {
    width: '90%',
    marginTop: 50,
    marginBottom: 30,
  },
  gradient: {
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
