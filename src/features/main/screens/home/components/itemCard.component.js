import { React } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const ItemCard = ({ imageHeight, imageWidth, isUnmissableOffer }) => {

    const cardData = [{
        image: require('../../../../../../assets/Cobone2.jpg'),
        title: "FLASH SALE1! 90-Minute",
        newPrice: "AED 35",
        oldPrice: "170",
        discount: "79%"
    },

    {
        image: require('../../../../../../assets/Cobone3.jpg'),
        title: "FLASH SALE2! overnight Safari",
        newPrice: "AED 89",
        oldPrice: "170",
        discount: "79%"
    },

    {
        image: require('../../../../../../assets/Cobone1.jpg'),
        title: "FLASH SALE3! Dubai Doliphinarium Shows",
        newPrice: "AED 45",
        oldPrice: "170",
        discount: "79%"
    }]


    return (
        <View style={styles.mainView}>
            <FlatList
                data={cardData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const newInItem = item

                    return (
                        <>
                            <View style={styles.newInItemsView} >
                                <Image source={newInItem.image} style={[styles.image, { height: imageHeight, width: imageWidth }]} />
                                <Text style={styles.titleText}>{newInItem.title}</Text>
                                <Text style={styles.subTitleText}>{newInItem.subTitle}</Text>

                                <View style={styles.priceView}>
                                    <Text style={styles.newPriceText}>{newInItem.newPrice}</Text>
                                    {!isUnmissableOffer ? (
                                        <>
                                            <Text style={styles.oldPriceText}>{newInItem.oldPrice}</Text>
                                            <Text style={styles.discountText}>{newInItem.discount}</Text>
                                        </>
                                    ) : null}

                                </View>

                            </View>
                        </>
                    )
                }}
            />

        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    mainView: {
        marginLeft: 20,
    },
    newInItemsView: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    image: {
        width: 225,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    priceView: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    oldPriceText: {
        textDecorationLine: 'line-through'
    },
    newPriceText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    discountText: {
        backgroundColor: '#ECB176',
        borderRadius: 20,
        padding: 2,
        color: '#A67B5B'
    }
})