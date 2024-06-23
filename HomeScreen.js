import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, ImageBackground, TextInput } from 'react-native';
import Button from './Button';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleLoginPress = () => {
    console.log('Login button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegisterPress = () => {
    console.log('Register button pressed');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../../assets/images.jpeg')} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('../../assets/Logo.jpg')} />
            <Text style={styles.appName}>Pastry</Text>
          </View>
          {isRegister ? (
            <View style={styles.content}>
              <Text style={styles.title}>Welcome to Pastry</Text>
              <Text style={styles.subtitle}>Create an account to get started</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                inputMode="email"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
              />
              <Button title="Register" onPress={handleRegisterPress} />
              <Pressable style={styles.toggleButton} onPress={toggleRegister}>
                <Text style={styles.toggleButtonText}>Already have an account? Login</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.content}>
              <Text style={styles.title}>Welcome to Pastry</Text>
              <Text style={styles.subtitle}>Please login to continue</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                inputMode="email"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <Button title="Login" onPress={handleLoginPress} />
              <Pressable style={styles.toggleButton} onPress={toggleRegister}>
                <Text style={styles.toggleButtonText}>Don’t have an account? Register</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the background
    width: '100%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
  },
  toggleButton: {
    marginTop: 20,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});




