import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator, useWindowDimensions } from "react-native";
import React, {useState} from "react";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import locationList from "../../data/locationList.json";
import { Ionicons } from "@expo/vector-icons";

const Detail = () => {
    const {id} = useLocalSearchParams();
    const foundLocation = locationList.find((item) => item.id === id);
    const screenWidth = useWindowDimensions().width;
    const navigation = useNavigation();

    return (
        <>
            <Stack.Screen
                options ={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{backgroundColor:"white",borderRadius:10,padding:6}}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {}}>
                            <View style={{backgroundColor:"white",borderRadius:10,padding:6}}>
                                <Ionicons name="bookmark-outline" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    )
                
            }}/>
                <View>
                    <Image source={{ uri: foundLocation?.image }} style={[styles.img, { width: screenWidth }]} />
                    <View style={styles.locationInfo}>
                        <Text style={{fontSize:24}}>{foundLocation?.name}</Text>
                        <View style={{flexDirection:"row", marginTop:10}}>
                            <Ionicons name="location" size={25} color={"#ff7f36"} />
                            <Text style={{fontSize:18, fontWeight:"bold"}}>{foundLocation?.location}</Text>
                        </View>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>{foundLocation?.price}$</Text>
                        <Text style={{fontSize:14}}>{foundLocation?.description}</Text>
                    </View>
                    
                </View>
        </>
    );
}
Detail.options = {
    headerShown: false
};
export default Detail;
const styles = StyleSheet.create({
    img : {
        height: 300
    },
    locationInfo: {
        padding: 15
    }
});