import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { screen } from "../../utils"

export function RestaurantsScreen(props) {
    const { navigation } = props;
    const goToAddRestaurant = () => {
        //navigation.navigate(screen.restaurant.addRestaurant);
        navigation.navigate(screen.account.tab, {screen:screen.account.account});
    }

    return (
        <View>
            <Text>
                Estamos en la screen Restaurants
            </Text>
            <Button title={"Crear restaurante"} onPress={goToAddRestaurant} />
        </View>
    );
}