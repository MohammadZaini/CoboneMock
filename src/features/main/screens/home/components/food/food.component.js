import { React } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const Food = () => {

    const cardData = [{
        image: require('../../../../../../../assets/Cobone2.jpg'),
        title: "FLASH SALE1! 90-Minute",
        price: "AED 35",
        backColor: '#1A4D2E'
    },

    {
        image: require('../../../../../../../assets/Cobone3.jpg'),
        title: "FLASH SALE2! overnight Safari",
        price: "AED 89",
        backColor: '#ED9455'
    },

    {
        image: require('../../../../../../../assets/Cobone1.jpg'),
        title: "FLASH SALE3! Dubai Doliphinarium Shows",
        price: "AED 45",
        backColor: '#AF8260'
    }]


    return (
        <View style={styles.mainView}>
            <FlatList
                data={cardData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const foodItem = item

                    return (
                        <View >

                            <Image source={foodItem.image} style={styles.image} />

                            <View style={[styles.bottomView, { backgroundColor: foodItem.backColor }]}>

                                <Text style={styles.titleText}>{foodItem.title}</Text>
                                <Text style={styles.priceText}>{foodItem.price}</Text>

                            </View>
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default Food

const styles = StyleSheet.create({
    mainView: {
        marginLeft: 20,
    },
    bottomView: {
        position: 'absolute',
        height: 80,
        width: 150,
        top: '50%',
        padding: 10,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    titleText: {
        flex: 1,
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})