/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList'
import MoviesList from './src/videos/containers/MoviesList';
import Video from 'react-native-video';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header>
        <Button title="Ayuda"></Button>
      </Header>
      <View style = {styles.moviesList}>
        <MoviesList />
      </View>
      <View style = {styles.suggestionsList}>
        <SuggestionsList />
      </View>
    </Home>
  );
};

const styles = StyleSheet.create({
  moviesList: {
    flex: 1,
    overflow: "hidden"
  },
  suggestionsList: {
    flex: 3,
    overflow: "hidden"
  }
})

export default App;
