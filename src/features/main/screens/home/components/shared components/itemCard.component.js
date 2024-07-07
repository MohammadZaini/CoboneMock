import { React } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const ItemCard = ({ imageHeight, imageWidth, isUnmissableOffer, isFeaturedDealsOnFood }) => {

    const cardData = [{
        image: require('../../../../../../../assets/Cobone2.jpg'),
        title: "FLASH SALE1! 90-Minute",
        newPrice: "AED 35",
        oldPrice: "170",
        discount: "79%",
        review: '3.7 ★',
        numberOfReviews: '52 reviews'
    },

    {
        image: require('../../../../../../../assets/Cobone3.jpg'),
        title: "FLASH SALE2! overnight Safari",
        newPrice: "AED 89",
        oldPrice: "170",
        discount: "79%",
        review: '4.2 ★',
        numberOfReviews: '47 reviews'
    },

    {
        image: require('../../../../../../../assets/Cobone1.jpg'),
        title: "FLASH SALE3! Dubai Doliphinarium Shows",
        newPrice: "AED 45",
        oldPrice: "170",
        discount: "79%",
        review: '4.9 ★',
        numberOfReviews: '15 reviews'
    }]


    return (
        <View style={styles.mainView}>
            <FlatList
                data={cardData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const cardItem = item

                    return (
                        <>
                            <View style={styles.newInItemsView} >
                                <Image source={cardItem.image} style={[styles.image, { height: imageHeight, width: imageWidth }]} />

                                {isFeaturedDealsOnFood ?
                                    <>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={styles.titleText}>{cardItem.title}</Text>
                                            <Text style={styles.reviewText} >{cardItem.review}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={{ flex: 1 }}>{cardItem.subTitle}</Text>
                                            <Text style={styles.numberOfReviewsText}>{cardItem.numberOfReviews}</Text>
                                        </View>
                                    </>
                                    : <Text style={styles.titleText}>{cardItem.title}</Text>}

                                <Text>{cardItem.subTitle}</Text>

                                <View style={styles.priceView}>
                                    <Text style={styles.newPriceText}>{cardItem.newPrice}</Text>
                                    {!isUnmissableOffer ? (
                                        <>
                                            <Text style={styles.oldPriceText}>{cardItem.oldPrice}</Text>
                                            <Text style={styles.discountText}>{cardItem.discount}</Text>
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
    },
    titleText: {
        flex: 1
    },
    reviewText: {
        backgroundColor: '#A67B5B',
        padding: 2,
        alignSelf: 'flex-end',
        borderRadius: 5,
        marginRight: 10
    },
    numberOfReviewsText: {
        color: 'grey',
        marginRight: 10
    }
})