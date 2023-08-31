import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import EntryListItem from './EntryListItem';
import { getEntries } from '../../Services/Entries';

export default function EntryList() {
    const [entries, setEntries] = useState([]);

    useEffect(function () {
        async function loadEntries() {
            const data = await getEntries();

            setEntries(data);
        }

        loadEntries();

    }, []);

    return (
        <View>
            <Text style={styles.title}>Ultimos Lançamentos</Text>
            <FlatList
                data={entries}
                renderItem={({ item }) => <Text>{item.description} - ${item.amount}</Text>}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});