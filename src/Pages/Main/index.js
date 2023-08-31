import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BalancePanel from "../../components/BalancePanel";
import EntrySummary from "../../components/EntrySummary";
import EntryList from "../../components/EntryList";

const Main = ({ navigation }) => {
    const currentBalance = 2064.35;

    const entriesCategories = [
        {
            key: "1",
            description: "Alimentação:",
            amount: 200
        },
        {
            key: "2",
            description: "Combustivel:",
            amount: 12
        },
        {
            key: "3",
            description: "Aluguel:",
            amount: 120
        },
        {
            key: "4",
            description: "Lazer:",
            amount: 250
        },
        {
            key: "5",
            description: "Outros:",
            amount: 120
        },
    ];

    const entries = [
        {
            key: '1',
            description: "Padaria Asa branca",
            amount: 10
        },
        {
            key: '2',
            description: "Supermercado Fonseca",
            amount: 190
        },
        {
            key: '3',
            description: "Posto",
            amount: 190
        }
    ];

    return (
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance} />
            <Button title='Adicionar' onPress={() => navigation.navigate('NewEntry')}></Button>
            <EntrySummary entriesCategories={entriesCategories} />
            <EntryList entries={entries} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10,
    }
});

export default Main;