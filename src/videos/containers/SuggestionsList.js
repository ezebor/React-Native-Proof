import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionsListLayout';
import SuggestionCardItem from '../components/SuggestionCardItem';
import EmptySuggestionsList from '../components/EmptySuggestionsList';
import VerticalSeparator from '../components/VerticalSeparator';

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
            },
            {
                title: 'xabaaaaaan',
                key: '2'
            },
            {
                title: 'puta',
                key: '3'
            }
        ]

        return (
            <Layout title = "Recomendamos">
                <FlatList 
                    data = {list}
                    renderItem = {({item}) => <SuggestionCardItem item={item} />}
                    ListEmptyComponent = {() => <EmptySuggestionsList title="No hay sugerencias" />}
                    ItemSeparatorComponent = {() => <VerticalSeparator />}
                />
            </Layout>
        );
    }
}

export default SuggestionsList;