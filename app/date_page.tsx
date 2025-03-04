import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
    const [monthValue, setMonthValue] = useState("");
    const [dayValue, setDayValue] = useState("");
    const [combinedInputText, setCombinedInputText] = useState("");

    const isValidDate = (month: number, day: number) => {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Leap year check (not necessary for this API, but good practice)
        const currentYear = new Date().getFullYear();
        if (month === 2 && (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0))) {
            daysInMonth[1] = 29;
        }

        return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
    };

    useEffect(() => {
        // This makes sure that the entered values are valid, Needs an update to make sure that the days are valid for the month
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
            {combinedInputText ? <CallAPI inputText={combinedInputText} /> : null}
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
});
