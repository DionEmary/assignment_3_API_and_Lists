import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CallAPIProps {
    inputText: string; // Expected format: "MM/DD"
}

export default function CallAPI({ inputText }: CallAPIProps) {
    const [data, setData] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const apiOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '129b06e546mshfa7f18a41310122p1c9777jsnf1abb959b6df',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // Calls the API
            const url = `https://numbersapi.p.rapidapi.com/${inputText}/date`;

            // Sets Loading and Error values for start of the fetch
            setLoading(true);
            setError(null);

            // API fetch using URL passed in by date_page.tsx, and the apiOptions set above
            try {
                // Calls the API Asyncronously using the URL and apiOptions
                const response = await fetch(url, apiOptions);

                // Gets the response from the API
                const result = await response.text();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

            console.log(data);
        };

        if (inputText) {
            fetchData();
        }
    }, [inputText]);

    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error}</Text> : <Text>{data}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});