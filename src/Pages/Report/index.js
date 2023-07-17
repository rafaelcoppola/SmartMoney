import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { Picker } from '@react-native-picker/picker';

export default function Report() {
    return (
        <View>
            <EntryLabel />
            <View>
                <Picker>
                    <Picker.Item label="Todas Catogorias" value="ABC" />
                </Picker>
                <Picker>
                    <Picker.Item label="Ultimos 7 dias" value="ABC" />
                </Picker>
            </View>
            <EntrySummary />
            <EntryList />
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