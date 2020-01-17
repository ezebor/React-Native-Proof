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
                    source={{
                        uri: props.item.medium_cover_image
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.year}>{props.item.year}</Text>
                <Text style={styles.rating}>{props.item.rating}</Text>
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
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 3,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    image: {
        backgroundColor: 'blue',
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        color: 'white',
        padding: 5,
        borderRadius: 8,
        overflow: 'hidden',
    },
    rating: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#6b6b6b'
    }
})

export default SuggestionCardItem;