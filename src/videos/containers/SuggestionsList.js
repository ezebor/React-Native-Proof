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
                title: 'Harry Potter y la Piedra Filosofal',
                channel: 'PlatziLab',
                views: '230K vistas',
                key: '0'
            },
            {
                title: 'Harry Potter y la Cámara Secreta',
                channel: 'PlatziLab',
                views: '230K vistas',
                key: '1'
            },
            {
                title: 'Harry Potter y el Prisionero de Askaban',
                channel: 'PlatziLab',
                views: '230K vistas',
                key: '2'
            },
            {
                title: 'Harry Potter y el Caliz de Fuego',
                channel: 'PlatziLab',
                views: '230K vistas',
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