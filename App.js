/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.welcome}>HALAAAAAAAAAA</Text>
      <Image 
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: 200,
    width: 100,
    color: 'white',
    backgroundColor: 'blue',
    justifyContent: 'flex-end'
  },
  logo: {
    marginTop: 0
  }
})

export default App;
