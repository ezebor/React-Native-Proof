import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionsListLayout';
import SuggestionCardItem from '../components/SuggestionCardItem';
import EmptySuggestionsList from '../components/EmptySuggestionsList';

class SuggestionsList extends Component{
    render() {
        const list = [
            {
                title: 'xika',
                key: '0'
            },
            {
                title: 'morbos',
                key: '1'
            }
        ]
        return (
            <Layout title = "Categorías">
                <FlatList 
                    data = {list}
                    renderItem = {({item}) => <SuggestionCardItem item={item} />}
                    horizontal = {true}
                    ListEmptyComponent = {() => <EmptySuggestionsList title="No hay sugerencias" />}
                />
            </Layout>
        );
    }
}

export default SuggestionsList;