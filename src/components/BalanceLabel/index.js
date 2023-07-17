import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BalanceLabel() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>R$2.64,00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
    },
    value: {
        fontSize: 18
    }
});