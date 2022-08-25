import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Footer} from '../../components/besar';

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(65,117,5,1)',
  },
});
