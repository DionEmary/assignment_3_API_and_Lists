import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
    const [monthValue, setMonthValue] = useState<string>("");
    const [dayValue, setDayValue] = useState<string>("");
    const [combinedInputText, setCombinedInputText] = useState<string>("");

    const handleMonthChange = (text: string) => {
        setMonthValue(text);
    };

    const handleDayChange = (text: string) => {
        setDayValue(text);
    };

    useEffect(() => {
        // This makes sure that the entered values are valid, Needs an update to make sure that the days are valid for the month

        if(1 <= parseInt(monthValue) && parseInt(monthValue) <= 12 ) {
            if(1 <= parseInt(dayValue) && parseInt(dayValue) <= 31) {
                setCombinedInputText(`${monthValue}/${dayValue}`);
            }
        }
    });

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