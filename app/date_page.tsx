import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesome } from "@expo/vector-icons"; // Used for drop down icon

export default function Lab5() {
    const [monthValue, setMonthValue] = useState("");
    const [dayValue, setDayValue] = useState("");
    const [combinedInputText, setCombinedInputText] = useState("");

    // Drop Down Menu Values
    const [open, setOpen] = useState<boolean>(false);
    const monthItems = [
        { label: "January", value: "1" },
        { label: "February", value: "2" },
        { label: "March", value: "3" },
        { label: "April", value: "4" },
        { label: "May", value: "5" },
        { label: "June", value: "6" },
        { label: "July", value: "7" },
        { label: "August", value: "8" },
        { label: "September", value: "9" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "December", value: "12" },
      ];

    // Checks if the date is valid
    const isValidDate = (month: number, day: number) => {
        const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Valid dates for each month, January to December (Left to Right) 
        // February accounts for leap years, so 29 days are valid

        return day >= 1 && day <= daysInMonth[month - 1];
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
                placeholder="Enter a Day value"
                keyboardType="numeric"
                onChangeText={setDayValue}
                value={dayValue}
            /> 
            <DropDownPicker
                open={open}
                value={monthValue}
                items={monthItems} // Using the static array
                setOpen={setOpen}
                setValue={setMonthValue}
                placeholder="Select a Month"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                ArrowDownIconComponent={() => (
                    <FontAwesome name="caret-down" size={20} color="gray" />
                )}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30,
        paddingHorizontal: 10,
        width: '80%',
        borderRadius: 7,
    },
    inputContainer: {
        alignItems: 'center',
        width: '100%',
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingHorizontal: 10,
        width: '80%',
    },
    dropdownContainer: {
        width: '80%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    },
});
