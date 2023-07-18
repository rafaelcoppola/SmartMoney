import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function EntrySummaryList({ entriesCategories }) {
    return (
        <View>
            <Text style={styles.title}>Categorias</Text>
            <FlatList
                data={entriesCategories}
                renderItem={({ item }) => <Text>{item.description} - ${item.amount}</Text>}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});