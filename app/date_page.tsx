import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
    const [monthValue, setMonthValue] = useState("");
    const [dayValue, setDayValue] = useState("");
    const [combinedInputText, setCombinedInputText] = useState("");

    const isValidDate = (month: number, day: number) => {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
    };

    useEffect(() => {
        const month = parseInt(monthValue);
        const day = parseInt(dayValue);

        if (!isNaN(month) && !isNaN(day) && isValidDate(month, day)) {
            setCombinedInputText(`${month}/${day}`);
        } else {
            setCombinedInputText("");
        }
    }, [monthValue, dayValue]);

    return (
        <View style={styles.container}>
            {combinedInputText ? <CallAPI inputText={combinedInputText} /> : null}
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter a Month value"
                keyboardType="numeric"
                onChangeText={setMonthValue}
                value={monthValue}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter a Day value"
                keyboardType="numeric"
                onChangeText={setDayValue}
                value={dayValue}
            /> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
});
