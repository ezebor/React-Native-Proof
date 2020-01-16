import React from 'react'

import {
    Text,
    StyleSheet
} from 'react-native';

const SuggestionCardItem = props => {
    return (
        <Text style = {styles.card}>{props.item.title}</Text>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10
    }
})

export default SuggestionCardItem;