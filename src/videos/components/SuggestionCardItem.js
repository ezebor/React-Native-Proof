import React from 'react'

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

const SuggestionCardItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image 
                    source={require('../../../assets/logo.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.channel}>{props.item.channel}</Text>
                <Text style={styles.views}>{props.item.views}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 140
    },
    leftContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1.3,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    channel: {
        backgroundColor: '#70b124',
        color: 'white',
        padding: 5,
        borderRadius: 8,
        overflow: 'hidden',
    },
    views: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#6b6b6b'
    }
})

export default SuggestionCardItem;