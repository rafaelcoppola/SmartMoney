import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { Picker } from '@react-native-picker/picker';

export default function Report() {

    const currentBalance = 2065.34;
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
        <View>
            <BalanceLabel const currentBalance={currentBalance} />
            <View>
                <Picker>
                    <Picker.Item label="Todas Catogorias" value="ABC" />
                </Picker>
                <Picker>
                    <Picker.Item label="Ultimos 7 dias" value="ABC" />
                </Picker>
            </View>
            <EntrySummary entriesCategories={entriesCategories} />
            <EntryList entries={entries} />
            <View>
                <Button title='Salvar' />
                <Button title='Fechar' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    }
});