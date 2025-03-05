import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CallAPIProps {
    inputText: string; // Expected format: "MM/DD"
}

export default function CallAPI({ inputText }: CallAPIProps) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!inputText) return;

            // Sets Loading and Error values for start of the fetch
            setLoading(true);
            setError(null);

            // API fetch using URL passed in by date_page.tsx, and the apiOptions set below
            const url = `https://numbersapi.p.rapidapi.com/${inputText}/date`;
            const apiOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '129b06e546mshfa7f18a41310122p1c9777jsnf1abb959b6df', // Ensure to replace this with your actual API key
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
                }
            };

            try {
                // Calls the API Asyncronously using the URL and apiOptions
                const response = await fetch(url, apiOptions);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                
                // Gets the response from the API
                const result = await response.text();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [inputText]);

    return (
        <View style={styles.container}>
            {loading ? <Text style={styles.output}>Loading...</Text> : error ? <Text style={styles.output}>Error: {error}</Text> : <Text style={styles.output}>{data}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        height: 100,
    },
    output: {
        fontSize: 20,
        textAlign: 'center',
        height: 200,
    }
});
