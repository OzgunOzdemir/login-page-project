import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

const LoginForm = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.signInText}>Sign In</Text>
      <Input
        value={text}
        onChangeText={item => setText(item)}
        returnKeyType={'next'}
        autoCapitalize="none"
        placeholder="Username"
        secureTextEntry={false}
      />

      <Input
        value={password}
        onChangeText={item => setPassword(item)}
        returnKeyType={'go'}
        secureTextEntry={true}
        placeholder="Password"
      />

      <MyButton
        text={'Sign In Now'}
        bgColor={'#0065e0'}
        textColor={'#f1f1f1'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default LoginForm;
