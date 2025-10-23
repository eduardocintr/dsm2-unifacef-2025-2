import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen({ route }) {
  const params = route?.params || {};
  const name = params.name || params.nome || 'Usuário';
  const email = params.email;
  const telefone = params.telefone;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo, {name}!</Text>
      {email ? <Text style={styles.item}>E-mail: {email}</Text> : null}
      {telefone ? <Text style={styles.item}>Telefone: {telefone}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginTop: 6 }
});
