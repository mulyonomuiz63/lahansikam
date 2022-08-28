import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ButtonDinamis, Footer, Icons, InputDinamis} from '../../components';
import {Logo_LS} from '../../assets';

export default function Login() {
  const [keyboardStatus, setKeyboardStatus] = useState('hide');

  useEffect(() => {
    const showFooter = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardStatus('show');
    });
    const hideFooter = Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardStatus('hide');
    });

    return () => {
      showFooter.remove();
      hideFooter.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrappContain}>
        <View />
        <View style={styles.wrappCard}>
          <Image source={Logo_LS} resizeMode="contain" style={styles.logoLS} />
          <InputDinamis borderRadius={20} width="70%" placeholder="Email" />
          <InputDinamis borderRadius={20} width="70%" placeholder="Password" />

          <ButtonDinamis
            onPress={() => alert('tes')}
            borderRadius={20}
            width="70%"
            label="MASUK"
            backgroundColor="#121212"
            color="rgba(255,255,255,1)"
            paddingTop={20}
          />
          <View style={styles.wrapperIcons}>
            <TouchableOpacity style={styles.wrapperIconTextLeft}>
              <Icons
                color="rgba(255,255,255,1)"
                name="SimpleLineIcons"
                nameIcons="key"
              />
              <Text style={styles.textIcon}>Lupa Sandi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperIconTextRight}>
              <Icons
                color="rgba(255,255,255,1)"
                name="SimpleLineIcons"
                nameIcons="paper-clip"
              />
              <Text style={styles.textIcon}>Daftar Baru</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer showFooter={keyboardStatus} />
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
  wrappCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLS: {
    width: '40%',
    height: '30%',
  },

  wrapperIcons: {
    width: '70%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  wrapperIconTextLeft: {
    flexDirection: 'row',
    width: '50%',
  },
  wrapperIconTextRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '50%',
  },
  textIcon: {
    paddingLeft: 5,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    color: 'rgba(255,255,255,1)',
  },
});
