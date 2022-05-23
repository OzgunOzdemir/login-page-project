import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const Input = ({
  inputRef,
  placeholder,
  autoCapitalize,
  returnKeyType,
  secureTextEntry,
}) => {
  return (
    <View>
      <TextInput
        {...this.props}
        placeholder={placeholder}
        placeholderTextColor="#ddd"
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        ref={inputRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#f1f1f1',
    color: '#999',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Input;
