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
        width: 200,
        height: 120,
        borderRadius: 10
    }
})

export default MovieCardItem;