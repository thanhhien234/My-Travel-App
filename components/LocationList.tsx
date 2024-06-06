import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
    locationList: any[];
};

const LocationList = ({ locationList}: Props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);    // wait for 0,3s to retrieve data
    }, [locationList]);
    return (
        <View>
            {loading ?
                <ActivityIndicator size='small' color='black' />
                :
                <FlatList
                    data={loading ? [] : locationList}
                    renderItem={({ item }) => {
                        return (
                            // wrap TouchableOpacity in Link -> detail page로 이동
                            <Link href={`/detail/${item.id}`} asChild>
                                <TouchableOpacity style={styles.touchableArea}>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                                    <View style={styles.locationInfo}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Ionicons name="location" size={22} color={"#ff7f36"} />
                                            <Text>{item.location}</Text>
                                        </View>
                                        <Text>{item.price}$</Text>
                                    </View>
                                </TouchableOpacity>
                            </Link>
                        );
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ padding: 10, marginTop: 10 }}
                />
            }
        </View>
    );
}
export default LocationList;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    touchableArea: {
        display: "flex",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    locationInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        width: 220,
    },
});