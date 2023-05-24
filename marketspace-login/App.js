import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Card style={styles.card}>
        <AssetExample style={styles.foto}/>
        <Text style={styles.text1}> marketspace </Text>
        <Text style={styles.text2}> Seu espaço de compra e venda </Text>
        <Text style={styles.text3}> Acesse sua conta </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        </Card>
        <Text style={styles.text4}> Ainda não tem acesso? </Text>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Criar uma conta</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  foto:{
    marginTop: 600,
  },
  card:{
    marginTop: -325,
    width: 450,
    alignItems:'center',
    borderRadius: 60,
    backgroundColor: '#edecee',
  },
  text1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    color: '#232124',
  },
  text2: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    color: '#88858a',
  },
  text3: {
    marginTop: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    color: '#625f64',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 350,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#647ac6',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text4: {
    marginTop: 50,
  },
    button2: {
    backgroundColor: '#d9d8da',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 70,
  },
  buttonText2: {
    color: '#474349',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
