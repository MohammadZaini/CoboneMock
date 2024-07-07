import { React, useState, useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const UnmissableOffers = () => {

    const offersData = [{
        image: require('../../../../../../assets/Cobone2.jpg'),
        title: "FLASH SALE1! Wild Wadi Waterpark",
        subTitle: "Ticket",
        price: "AED 209"
    },

    {
        image: require('../../../../../../assets/Cobone3.jpg'),
        title: "FLASH SALE2! Wild Wadi Waterpark",
        subTitle: "Ticket2",
        price: "AED 209"
    },

    {
        image: require('../../../../../../assets/Cobone1.jpg'),
        title: "FLASH SALE3! Wild Wadi Waterpark",
        subTitle: "Ticket3",
        price: "AED 209"
    }]

    return (
        <View>
            <FlatList
                data={offersData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const offer = item
                    return (
                        <View style={styles.offerItemsView} >
                            <Image source={offer.image} style={styles.image} />
                            <Text style={styles.titleText}>{offer.title}</Text>
                            <Text style={styles.subTitleText}>{offer.subTitle}</Text>
                            <Text style={styles.priceText}>{offer.price}</Text>
                        </View>
                    )

                }}
            />


        </View>
    )
}

export default UnmissableOffers

const styles = StyleSheet.create({
    offerItemsView: {
        borderRadius: 20,
        margin: 10,
        padding: 5,
        width: Dimensions.get('window').width - 80,
    },
    image: {
        width: Dimensions.get('window').width - 90,
        height: 140,
        borderRadius: 20,
        marginBottom: 10
    },
    titleText: {
        fontSize: 15,
        marginBottom: 5,
    },
    subTitleText: {
        fontSize: 14,
        marginBottom: 5
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})