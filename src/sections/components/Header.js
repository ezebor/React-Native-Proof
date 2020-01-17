import React from 'react';

import {
    SafeAreaView,
    View,
    Image,
    Text,
    StyleSheet
  } from 'react-native';

const Header = props => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.children}>
                        {props.children}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    leftContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
    },
    icon: {
        resizeMode: "contain",
        height: '100%',
        width: 100
    }
})

export default Header;