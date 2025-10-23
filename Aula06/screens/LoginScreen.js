import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleLogin = () => {
    let ok = true;
    if (!email.includes('@')) {
      setErroEmail('Digite um e-mail válido');
      ok = false;
    } else {
      setErroEmail('');
    }
    if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres');
      ok = false;
    } else {
      setErroSenha('');
    }
    if (!ok) return;
    navigation.navigate('Welcome', { name: email.split('@')[0] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 10 },
  link: { marginTop: 15, alignItems: 'center' },
  linkText: { color: '#0077cc' }
});
