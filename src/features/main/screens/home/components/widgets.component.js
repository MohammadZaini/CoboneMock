import { React, useState, useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const Widgets = () => {

    return (
        <View style={styles.mainView}>
            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>New In</Text>
            </View>

            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>Auto</Text>
            </View>

            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>Best Sellers</Text>
            </View>

            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>Activities</Text>
            </View>

            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>Beauty</Text>
            </View>

            <View style={styles.widgetView}>
                <Image source={require('../../../../../../assets/burgerLogo.png')} style={styles.widgetImage} />
                <Text style={styles.widgetTitle}>Food</Text>
            </View>
        </View>
    )
}

export default Widgets

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 20,
        margin: 20,
        padding: 20,
        elevation: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    widgetView: {
        alignItems: 'center'
    },

    widgetImage: {
        width: 70,
        height: 70,
        borderRadius: 20,
        margin: 15,

    },
    widgetTitle: {
        fontWeight: 'bold'
    },


})