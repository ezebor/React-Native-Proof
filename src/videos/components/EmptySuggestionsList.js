import React from 'react'

import {
    Text,
    StyleSheet
} from 'react-native';

const EmptySuggestionsList = props => {
    return (
        <Text style = {styles.title}>{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 15
    }
})

export default EmptySuggestionsList;