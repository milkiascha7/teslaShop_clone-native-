import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import React from 'react'


import cars from './cars'
import CarItem from '../Caritem/Caritem'



const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },

})