import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

export default function Menu(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Feather name="user" size={50} color="#fff" />
          <Text style={styles.profileName}>Nome Empresa</Text>
        </View>
        <DrawerItem
          label="Dashboard"
          onPress={() => props.navigation.navigate('Dashboard')}
          labelStyle={styles.drawerLabel}
          icon={() => <Feather name="home" size={20} color="#fff" />}
        />
        <DrawerItem
          label="Upload"
          onPress={() => props.navigation.navigate('Upload')}
          labelStyle={styles.drawerLabel}
          icon={() => <Feather name="upload" size={20} color="#fff" />}
        />
        <View style={styles.signOutContainer}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.signOutButton}>
              <Feather name="log-out" size={20} color="#fff" />
              <Text style={styles.signOutText}>SAIR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
  },
  drawerLabel: {
    color: '#fff',
    marginLeft: -16,
  },
  signOutContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
});
