import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const ItemCardV2 = ({ backgroundColor }) => {

    const activities = [{
        image: require('../../../../../../assets/Cobone2.jpg'),
        activityName: 'Dubai Crocodile Park Ticket',
        price: "AED 89"
    }]

    return (

        <View style={[styles.mainView, { backgroundColor: backgroundColor }]}>
            <FlatList
                data={activities}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const activity = item
                    return (

                        <View style={styles.activitiesView}>
                            <View>
                                <Image source={activity.image} style={styles.image} />
                            </View>

                            <View style={styles.activityPriceNameView}>
                                <Text style={styles.activityNameText}>{activity.activityName}</Text>
                                <Text style={styles.activityPriceText}>{activity.price}</Text>
                            </View>

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ItemCardV2


const styles = StyleSheet.create({
    mainView: {
        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: 'rgb(173, 216, 230)',
        width: Dimensions.get('window').width - 100,
    },
    activitiesView: {
        flexDirection: 'row',
    },
    image: {
        width: 120,
        height: 100,
        marginRight: 25
    },
    activityPriceNameView: {
        padding: 5
    },
    activityNameText: {
        flex: 1,
        width: '70%'
    },
    activityPriceText: {
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
        fontSize: 18
    }
})