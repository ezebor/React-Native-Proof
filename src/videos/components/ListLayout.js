import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const SuggestionsListLayout = props => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title} >{props.title}</Text>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        marginStart: 8
    }
})

export default SuggestionsListLayout;