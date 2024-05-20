import React, { useState, useCallback } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Card, IconButton, Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import * as DocumentPicker from 'expo-document-picker'
import { RootStackParamList } from '../navigation'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { BackHandler } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { serverUrl } from 'utils/serverUrl'

type UploadScreenRouteProp = RouteProp<RootStackParamList, 'Upload'>
type UploadScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Upload'>

export default function Upload() {
    const router = useRoute<UploadScreenRouteProp>()
    const { userData } = router.params
    const [url, setUrl] = useState('')
    const navigation = useNavigation<UploadScreenNavigationProp>()

    const [arquivoName, setArquivoName] = useState('')
    const [palavra, setPalavra] = useState('')
    const [alertMessage, setAlertMessage] = useState<string | null>(null)
    const [document, setDocument] = useState<{
        uri: string
        name: string
        mimeType: string
    } | null>(null)

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                navigation.replace('Dashboard', { userData })
                return true // Indica que o evento foi tratado
            }

            BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [navigation])
    )

    const handleSend = async () => {
        console.log('Dentro do handleSend')
        if (!palavra) {
            setAlertMessage('Adicione palavras chaves.')
            return
        }

        if (!document) {
            setAlertMessage('Por favor, selecione um documento.')
            return
        }

        try {
            const id = userData.clienteId
            // const id = userData?.clienteId;  // Verifique se o clienteId está definido
            console.log(id)

            if (id == undefined) {
                setAlertMessage('Cliente ID não encontrado.')
                return
            }
            const formData = new FormData()
            formData.append('arquivo', {
                uri: document.uri,
                name: document.name,
                type: document.mimeType,
            
            } as any)
            formData.append('palavra', palavra)
            const response = await fetch(`${serverUrl}/cliente/${id}/arquivo/upload`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            if (response.ok) {
                navigation.replace('Dashboard', { userData })
            } else {
                const errorMessage = await response.text()
                console.log(errorMessage)
            }
        } catch (error) {
            setAlertMessage('Erro ao fazer upload do arquivo 1')
            console.log(error)
        }
    }

    const handleFileUpload = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: '*/*' })
            console.log('Document:', result)

            if (!result.canceled) {
                const selectedFile = result.assets[0]
                setArquivoName(`Documento: ${selectedFile.name}`)
                setDocument({
                    uri: selectedFile.uri,
                    name: selectedFile.name,
                    mimeType: selectedFile.mimeType || 'application/text',
                })
            } else {
                setAlertMessage('Nenhum documento selecionado.')
            }
        } catch (error) {
            console.log('Erro ao escolher arquivo:', error)
            setAlertMessage('Erro ao escolher arquivo 2.')
        }
    }

    const handleUrlUpload = async () => {
        try {
            if (!url) {
                console.log('Por favor, insira uma URL válida.')
                return
            }
            console.log('Arquivo enviado com sucesso!')
        } catch (error) {
            console.log('Erro ao fazer upload do arquivo:', error)
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {alertMessage && ( // Renderização condicional do rótulo de alerta
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>{alertMessage}</Text>
                )}

                <Text style={styles.title}>Upload</Text>
                <View style={styles.uploadSection}>
                    <Text style={styles.uploadTitle}>Upload de documentos</Text>
                    <Text style={styles.uploadsubtitle}>Adicione aqui o seu documento</Text>
                    <Card style={styles.uploadCard}>
                        <TouchableOpacity style={styles.uploadBox} onPress={handleFileUpload}>
                            <IconButton icon="cloud-upload" size={40} />
                            <Text>
                                Arraste o seu arquivo ou{' '}
                                <Text style={styles.chooseText}>Escolha</Text>
                            </Text>
                        </TouchableOpacity>
                    </Card>
                </View>
                {arquivoName && ( // Renderização condicional do rótulo de alerta
                    <Text style={{ color: '#200F3B', fontWeight: 'bold' }}>{arquivoName}</Text>
                )}

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

                <View>
                    <Text style={styles.inputPalavraTitle}>Palavra chave:</Text>
                    <TextInput
                        style={styles.inputPalavraField}
                        placeholder="Digite a palavra..."
                        value={palavra}
                        onChangeText={setPalavra}
                    />
                </View>

                <View style={styles.flexEnd}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => {
                            setAlertMessage(' ')
                            handleSend()
                        }}>
                        <LinearGradient colors={['#330DE9', '#200F3B']} style={styles.gradient}>
                            <Text style={styles.submitButtonText}>Enviar documentos</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
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
        paddingTop: 12,
        textAlign: 'center',
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
    inputPalavraTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    inputPalavraField: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
    },
})
