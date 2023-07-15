import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function EntryListItem() {
    return (
        <View>
            <Text style={styles.title}>Ultimos Lançamentos</Text>
            <FlatList
                data={[
                    { key: "Padaria Asa branca" },
                    { key: "Supermercado Fonseca" },
                    { key: "Posto" },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
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