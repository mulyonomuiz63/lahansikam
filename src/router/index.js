import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomNavigator} from '../components/besar';
import {Home, Login, Setting, Splash} from '../pages';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Icons = ({label, name}) => {
  if (label === 'Panah') {
    return <Ionicons style={styles.Ionicons} name={name} />;
  }
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const HeaderNavigation = title => {
  return ({navigation}) => ({
    title: title,
    headerTitleAlign: 'center',
    headerTitleStyle: {fontSize: 14},
    headerStyle: {
      backgroundColor: 'rgba(217,217,217,1)',
    },

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Beranda');
        }}>
        <View style={styles.IconHeader}>
          <Icons label="Panah" name="grid" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.IconHeader}>
          <Icons label="Panah" name="chevron-back-sharp" />
        </View>
      </TouchableOpacity>
    ),
  });
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
const styles = StyleSheet.create({
  IconHeader: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(67, 169, 221, 1)',
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  Ionicons: {
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    opacity: 0.8,
  },
});
