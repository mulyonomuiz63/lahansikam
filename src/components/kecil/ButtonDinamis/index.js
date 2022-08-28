import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ButtonDinamis({
  onPress,
  paddingTop,
  label,
  color,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
}) {
  return (
    <View style={styles.container(width, paddingTop)}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.wrappText(
          borderWidth,
          borderColor,
          height,
          backgroundColor,
          borderRadius,
        )}>
        <Text style={styles.textLabel(color)}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (width, paddingTop) => ({
    justifyContent: 'center',
    width: width ? width : '100%',
    paddingTop: paddingTop ? paddingTop : 10,
  }),
  wrappText: (
    borderWidth,
    borderColor,
    height,
    backgroundColor,
    borderRadius,
  ) => ({
    height: height ? height : 40,
    backgroundColor: backgroundColor ? backgroundColor : 'rgba(255,255,255,1)',
    borderRadius: borderRadius ? borderRadius : 0,
    borderWidth: borderWidth ? borderWidth : null,
    borderColor: borderColor ? borderColor : null,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textLabel: color => ({
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    color: color ? color : '#121212',
    fontWeight: 'bold',
  }),
});
