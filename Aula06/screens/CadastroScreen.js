import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erros, setErros] = useState({});

  const validar = () => {
    const e = {};
    if (!nome.trim()) e.nome = 'Digite seu nome completo';
    if (!email.includes('@')) e.email = 'Digite um e-mail válido';
    if (senha.length < 6) e.senha = 'A senha deve ter no mínimo 6 caracteres';
    if (senha !== confSenha) e.confSenha = 'As senhas devem ser iguais';
    if (!/^[0-9]+$/.test(telefone)) e.telefone = 'Telefone deve conter apenas números';
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleCadastro = () => {
    if (!validar()) return;
    // Ao finalizar, exibir os dados formatados em Welcome
    navigation.navigate('Welcome', { name: nome, email, telefone });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email ? <Text style={styles.erro}>{erros.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />
      {erros.confSenha ? <Text style={styles.erro}>{erros.confSenha}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros.telefone ? <Text style={styles.erro}>{erros.telefone}</Text> : null}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 10 }
});
