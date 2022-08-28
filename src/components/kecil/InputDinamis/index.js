import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function InputDinamis({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onEndEditing,
  onPressIn,
  textContentType,
  autoCapitalize,
  keyboardType,
  autoCorrect,
  returnKeyType,
  autoComplete,
  onSubmitEditing,
  ref,
  label,
  color,
  width,
  height,
  backgroundColor,
  borderRadius,
}) {
  return (
    <View style={styles.container(width)}>
      <Text style={styles.textLabel(color)}>{label}</Text>
      <View
        style={styles.wrappTextInput(
          width,
          height,
          backgroundColor,
          borderRadius,
        )}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={color ? color : '#121212'}
          style={styles.textInput(color)}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onPressIn={onPressIn}
          textContentType={textContentType}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          returnKeyType={returnKeyType}
          autoComplete={autoComplete}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: width => ({
    justifyContent: 'center',
    width: width ? width : '100%',
  }),
  wrappTextInput: (width, height, backgroundColor, borderRadius) => ({
    width: '100%',
    height: height ? height : 40,
    backgroundColor: backgroundColor ? backgroundColor : 'rgba(255,255,255,1)',
    borderRadius: borderRadius ? borderRadius : 0,
  }),
  textLabel: color => ({
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    color: color ? color : '#121212',
    paddingBottom: 5,
  }),
  textInput: color => ({
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    color: color ? color : '#121212',
    paddingHorizontal: 20,
  }),
});
