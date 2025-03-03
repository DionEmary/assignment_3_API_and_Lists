import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CallAPIProps {
    inputText: string;
}

export default function CallAPI({ inputText }: CallAPIProps) {
    const [data, setData] = useState({ text: '', year: 0, number: 0, found: false, type: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://numbersapi.p.rapidapi.com/${inputText}/date`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '129b06e546mshfa7f18a41310122p1c9777jsnf1abb959b6df',
                        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                setData(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (inputText) {
            fetchData();
        }
    }, [inputText]);

    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error}</Text> : <Text>{data.text}</Text>}
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