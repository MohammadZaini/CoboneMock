import { React } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const NewIn = () => {

    const newInData = [{
        image: require('../../../../../../assets/Cobone2.jpg'),
        title: "FLASH SALE1! 90-Minute",
        subTitle: "Ticket",
        price: "AED 35",
        oldPrice: "170",
        discount: "79%"
    },

    {
        image: require('../../../../../../assets/Cobone3.jpg'),
        title: "FLASH SALE2! overnight Safari",
        subTitle: "Ticket2",
        price: "AED 89",
        oldPrice: "170",
        discount: "79%"
    },

    {
        image: require('../../../../../../assets/Cobone1.jpg'),
        title: "FLASH SALE3! Dubai Doliphinarium Shows",
        subTitle: "Ticket3",
        price: "AED 45",
        oldPrice: "170",
        discount: "79%"
    }]


    return (
        <View style={styles.mainView}>
            <FlatList
                data={newInData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const newInItem = item
                    return (
                        <>
                            <View style={styles.newInItemsView} >
                                <Image source={newInItem.image} style={styles.image} />
                                <Text style={styles.titleText}>{newInItem.title}</Text>
                                <Text style={styles.subTitleText}>{newInItem.subTitle}</Text>


                                <View style={styles.priceView}>
                                    <Text style={styles.newPriceText}>{newInItem.price}</Text>
                                    <Text style={styles.oldPriceText}>{newInItem.oldPrice}</Text>
                                    <Text style={styles.discountText}>{newInItem.discount}</Text>
                                </View>

                            </View>
                        </>
                    )
                }}
            />

        </View>
    )
}

export default NewIn

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
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10
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
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 2,
    }
})