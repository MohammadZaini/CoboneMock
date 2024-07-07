import { React, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SlideShow from "./components/slideshow.component";
import UnmissableOffers from "./components/unmissableOffers.component";
import Widgets from "./components/widgets.component";
import NewIn from "./components/newIn.component";
import Activities from "./components/activity/activities.component";
import FeaturedDealOnActivities from "./components/activity/featuredDealsOnActivities.component";
import FeaturedDealOnAuto from "./components/featuredDealsOnAuto.component";
import NeedMoreDealOnActivities from "./components/activity/needMoreDealsOnActivities.component";
import Beauty from "./components/beauty/beauty.component";
import FeaturedDealOnBeauty from "./components/beauty/FeaturedDealsOnBeauty.component";
import BestSellers from "./components/bestSellers.component";

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        // Set header options when the component mounts
        navigation.setOptions({
            headerRight: () => renderRightHeaderComponent(),
            headerLeft: () => renderLeftHeaderComponent(),
            headerTitle: ""
        });
    }, [navigation]);

    const renderLeftHeaderComponent = () => (
        <>
            <View style={styles.headerView}>
                <FontAwesome6 name="location-dot" size={24} color="black" style={styles.leftIcon} />
                <TouchableOpacity onPress={() => { navigation.navigate('Details') }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Dubai ▼</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* <TextInput style={{ flex: 1 }} /> */}
            </View>
        </>
    );

    const renderRightHeaderComponent = () => (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {/* Handle right icon press */ }} style={styles.headerView}>
                <Octicons name="bell-fill" size={24} color="black" style={styles.rightIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* Handle right icon press */ }} style={styles.headerView}>
                <FontAwesome5 name="shopping-cart" size={24} color="black" style={styles.rightIcon} />
            </TouchableOpacity>
        </View>
    );

    return (

        <ScrollView>
            <SlideShow />
            <Text style={styles.headerTitle}>Unmissable Offers</Text>

            <UnmissableOffers />

            <Widgets />

            <Text style={styles.headerTitle}>New In</Text>
            <NewIn />

            <Text style={styles.headerTitle}>Activities</Text>
            <Activities />

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Featured deals on Activities</Text>
                <Text style={styles.viewAllText}>View all ▶</Text>
            </View>
            <FeaturedDealOnActivities />

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Featured deals on Auto</Text>
                <Text style={styles.viewAllText}>View all ▶</Text>
            </View>
            <FeaturedDealOnAuto />


            {/* <NeedMoreDealOnActivities /> */}
            <Text style={styles.headerTitle}>Beauty</Text>
            <Beauty />

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Featured deals on Beauty</Text>
                <Text style={styles.viewAllText}>View all ▶</Text>
            </View>
            <FeaturedDealOnBeauty />


            <Text style={styles.headerTitle}>Need more deals On Beauty</Text>


            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Best Sellers</Text>
                <Text style={styles.viewAllText}>View all ▶</Text>
            </View>
            <BestSellers />

        </ScrollView>
    )
}

export default HomeScreen



const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftIcon: {
        marginLeft: 10
    },
    rightIcon: {
        marginRight: 10
    },
    rightIcon: {
        marginRight: 10
    },
    headerTitle: {
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewAllText: {
        marginRight: 10,
        color: '#405D72'
    }
})
