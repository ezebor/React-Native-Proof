import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

const ListSeparator = props => {
    return (
        <View style = {[
            styles.separator,
            {
                marginHorizontal: props.vertical ? 0 : 5,
                marginVertical: props.vertical ? 2 : 0
            }
        ]} />
    );
}

const styles = StyleSheet.create({
    separator: {
        borderColor: 'white'
    }
})

export default ListSeparator;