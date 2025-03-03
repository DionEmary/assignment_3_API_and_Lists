import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
    const [monthValue, setMonthValue] = useState("");
    const [dayValue, setDayValue] = useState("");

    const handleMonthChange = (text: string) => {
        setMonthValue(text);
    };

    const handleDayChange = (text: string) => {
        setDayValue(text);
    };

    const combinedInputText = `${monthValue}/${dayValue}`;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a Month value"
                onChangeText={handleMonthChange}
                value={monthValue}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter a Day value"
                onChangeText={handleDayChange}
                value={dayValue}
            />
            <CallAPI inputText={combinedInputText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    list: {
        marginTop: 30,
    },
    items: {
        fontSize: 20,
    }
});