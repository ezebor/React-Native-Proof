import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/ListLayout';
import SuggestionCardItem from '../components/SuggestionCardItem';
import EmptySuggestionsList from '../components/EmptySuggestionsList';
import ListSeparator from '../components/ListSeparator';
import api from '../../../utils/Api'

class SuggestionsList extends Component{
    state = {
        suggestionsList: []
    };

    async componentDidMount() {
        const suggestions = await api.getSuggestions(10);
        this.setState({
            suggestionsList: suggestions
        })
        console.log(suggestions);
    }

    render() {
        return (
            <Layout title = "Recomendamos">
                <FlatList 
                    data = {this.state.suggestionsList}
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item}) => <SuggestionCardItem item={item} />}
                    ListEmptyComponent = {() => <EmptySuggestionsList title="No hay sugerencias" />}
                    ItemSeparatorComponent = {() => <ListSeparator vertical = {true}/>}
                />
            </Layout>
        );
    }
}

export default SuggestionsList;