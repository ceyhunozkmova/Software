import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Giriş işlemini gerçekleştir
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş</Text>
      <TextInput style={styles.TextInput}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.TextInput}
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Giriş" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  TextInput: {
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 5,
  }
});

export default LoginScreen;
