import { React, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const SlideShow = () => {

    const imagePaths = [require('../../../../../../assets/Cobone1.jpg'), require('../../../../../../assets/Cobone2.jpg'), require('../../../../../../assets/Cobone3.jpg')]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // Calculate the next index
            const nextIndex = (currentIndex + 1) % imagePaths.length;
            setCurrentIndex(nextIndex);
        }, 3000); // Change slide every 3 seconds (3000 ms)

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, [currentIndex]);

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

                initialScrollIndex={currentIndex}
                getItemLayout={(data, index) => ({
                    length: Dimensions.get('window').width,
                    offset: Dimensions.get('window').width * index,
                    index,
                })}

            />

        </View>
    )
}

export default SlideShow

const styles = StyleSheet.create({

})