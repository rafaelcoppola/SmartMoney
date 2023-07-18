import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function EntryListItem({entries}) {
    
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