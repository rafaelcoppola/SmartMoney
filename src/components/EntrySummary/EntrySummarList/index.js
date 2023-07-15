import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function EntrySummaryList() {
    return (
        <View>
            <Text style={styles.title}>Categorias</Text>
            <FlatList
                data={[
                    { key: "Alimentação: $200" },
                    { key: "Combustivel: $12" },
                    { key: "Aluguel: $120" },
                    { key: "Lazer: $250" },
                    { key: "Outros: $1200" },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
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