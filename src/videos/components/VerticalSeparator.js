import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

const VerticalSeparator = props => {
    return (
        <View style = {styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
        color: '#eaeaea',
        borderWidth: 0.5
    }
})

export default VerticalSeparator;