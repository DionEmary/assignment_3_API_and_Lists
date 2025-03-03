import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View>
            <Link style={styles.link} href="/date_page">
                Find Dates Trivia
            </Link>
        </View>
    );


}

    const styles = StyleSheet.create({
        container: {
            paddingTop: 100,
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        link: {
            fontSize: 20,
            color: 'blue',
            marginTop: 30,
            textDecorationLine: 'underline',
        }
    })