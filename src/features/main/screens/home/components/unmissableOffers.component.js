import { React } from "react";
import { View, Dimensions } from "react-native";
import ItemCard from "./shared components/itemCard.component";

const UnmissableOffers = () => {
    return (
        <ItemCard
            imageHeight={140}
            imageWidth={Dimensions.get('window').width - 90}
            isUnmissableOffer={true}
        />
    )
}

export default UnmissableOffers
