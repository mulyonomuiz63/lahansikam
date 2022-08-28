import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AFPI, OJK} from '../../../assets';

export default function Footer({showFooter}) {
  if (showFooter == 'show') {
    return null;
  }
  return (
    <View style={styles.wrappFooter}>
      <View style={styles.wrappImage}>
        <Image source={OJK} resizeMode="contain" style={styles.imageOjk} />
      </View>
      <View style={styles.wrappImage}>
        <Image source={AFPI} resizeMode="contain" style={styles.imageAfpi} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrappFooter: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: '#E6E6E6',
  },
  wrappImage: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
  },
  imageAfpi: {
    width: '80%',
    height: '100%',
  },
  imageOjk: {
    width: '100%',
    height: '100%',
  },
});
