import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Footer} from '../../components';
import {Logo_LS} from '../../assets';

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrappContain}>
        <View />
        <View style={styles.wrappLogo}>
          <Image source={Logo_LS} resizeMode="contain" style={styles.logoLS} />
          <ActivityIndicator color="rgba(255,255,255,1)" />
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(65,117,5,1)',
  },
  wrappContain: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrappLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLS: {
    width: '40%',
    height: '50%',
  },
});
