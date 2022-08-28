import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Icons = ({
  fontSize,
  color,
  backgroundColor,
  opacity,
  name,
  nameIcons,
}) => {
  if (name == 'Ionicons') {
    return (
      <Ionicons
        style={styles.container(fontSize, color, backgroundColor, opacity)}
        name={nameIcons}
      />
    );
  }
  if (name == 'SimpleLineIcons') {
    return (
      <SimpleLineIcons
        style={styles.container(fontSize, color, backgroundColor, opacity)}
        name={nameIcons}
      />
    );
  }
};

export default Icons;

const styles = StyleSheet.create({
  container: (fontSize, color, backgroundColor, opacity) => ({
    backgroundColor: backgroundColor ? backgroundColor : 'transparent',
    color: color ? color : 'rgba(0,0,0,1)',
    fontSize: fontSize ? fontSize : 18,
    opacity: opacity ? opacity : 0.8,
  }),
});
