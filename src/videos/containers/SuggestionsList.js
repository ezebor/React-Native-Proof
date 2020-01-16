import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionsListLayout'

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
                    renderItem = {({item}) => <Text>{item.title}</Text>}
                    horizontal = {true}
                />
            </Layout>
        );
    }
}

export default SuggestionsList;