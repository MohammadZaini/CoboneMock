import React from "react";
import { ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { FlatGrid } from "react-native-super-grid";

const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
    { id: '11', title: 'Item 11' },
    { id: '12', title: 'Item 12' },
    // Add more items as needed
];

const NeedMoreDealOnActivities = () => {
    return (
        <ScrollView horizontal>
            <FlatGrid
                itemDimension={Dimensions.get('window').width / 3} // Width of each grid item
                data={data}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.title}</Text>
                )}
                style={styles.gridContainer}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row', // Ensure items are in a row
    },
    item: {
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 10,
        height: 100,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: 100,
        fontSize: 16,
        width: Dimensions.get('window').width / 3 - 10, // Adjust width of each item
    },
});

export default NeedMoreDealOnActivities;
