import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native';

import api from '../../../utils/Api'
import Layout from '../components/ListLayout'
import MovieCardItem from '../components/MovieCardItem'
import ListSeparator from '../components/ListSeparator';

class MoviesList extends Component{
    state = {
        moviesList: []
    };

    async componentDidMount(){
        const movies = await api.getMovies();
        this.setState({
            moviesList: movies
        })
    }

    render(){
        return (
            <ImageBackground 
                source = {require('../../../assets/background.png')}
                style = {styles.container}
                >
                <Layout title='Películas'>
                    <FlatList
                        data = {this.state.moviesList}
                        keyExtractor = {(item) => item.id}
                        renderItem = {({item}) => <MovieCardItem item = {item}/>}
                        horizontal = {true}
                        ItemSeparatorComponent = {() => <ListSeparator />}
                    />
                </Layout>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MoviesList;