import { React, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const SlideShow = () => {

    const imagePaths = [require('../../../../../../assets/Cobone1.jpg'), require('../../../../../../assets/Cobone2.jpg'), require('../../../../../../assets/Cobone3.jpg')]

    return (

        <View>
            <FlatList
                data={imagePaths}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={(image) => {

                    return (
                        <Image
                            source={image.item}
                            style={{ width: Dimensions.get('window').width - 20, height: 170, margin: 10, borderRadius: 20 }}
                        />
                    )
                }}
            />

        </View>
    )
}

export default SlideShow

const styles = StyleSheet.create({

})