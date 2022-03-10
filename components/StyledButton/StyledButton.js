import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const StyledButton = ({ type, content, onPress }) => {


    const backgroundColor = type === 'primary' ? 'black' : 'white'
    const textColor = type === 'primary' ? 'white' : 'black'


    return (
        <View style={styles.container}>

            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>

        </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',

    },
    text: {},

})