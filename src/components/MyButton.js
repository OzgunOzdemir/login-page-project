import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: props.bgColor, color: props.textColor},
      ]}>
      <Text style={{color: props.textColor}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
});

export default MyButton;
