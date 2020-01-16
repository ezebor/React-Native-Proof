import React from 'react'

import {
    Text
} from 'react-native';

const SuggestionCardItem = props => {
    return (
        <Text>{props.item.title}</Text>
    )
}

export default SuggestionCardItem;