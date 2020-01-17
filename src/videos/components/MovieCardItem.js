import React from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native'

const MovieCardItem = props => {
    return (
        <Image
            source = {{
                uri: props.item.medium_cover_image
            }}
            style = {styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: 100,
        borderRadius: 10,
    }
})

export default MovieCardItem;