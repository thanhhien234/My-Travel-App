import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import categories from "../data/categories";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../constants/Colors";

type Props = {
    onCategoryChange: (category: string) => void;

}
const CategoryButtons = ({onCategoryChange} : Props) => {
    const itemRef = useRef<TouchableOpacity[]>([]);  // useRef를 사용하여 TouchableOpacity 배열을 만들어서 각각의 요소에 접근할 수 있다.
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectCategory = (index: number) => {
        setActiveIndex(index);
        // console.log(categories[index].name);
        onCategoryChange(categories[index].name);
    };

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        ref={el => itemRef.current[index] = el as TouchableOpacity}
                        onPress={() => handleSelectCategory(index)}
                        style={[
                            styles.categoryBtn,
                            activeIndex === index && { backgroundColor: Colors.primaryColor},  // activeIndex면 색상을 바꾼다.
                        ]}
                    >
                        <Text style={activeIndex === index && { color: Colors.white }}>
                            {category.name}
                        </Text>
                        <MaterialCommunityIcons name={category.iconName as any} size={24} color= {activeIndex === index ? Colors.white : Colors.black} />
                        {/* any는 어떤 타입이든 다른 타입에 할당할 수 있다 */}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default CategoryButtons;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 10,
    },
    categoryBtn: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        shadowColor: "#333",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderRadius: 10,
        gap: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 15,
    },
    activeCategoryBtn: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        shadowColor: "#333",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderRadius: 10,
        gap: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 15,
    },
    categoryBtnText: {
        fontSize: 14,
        color: "#000",
    }
});

