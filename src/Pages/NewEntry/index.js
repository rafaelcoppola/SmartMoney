import { View, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry } from "../../Services/Entries";

export default function NewEntry({ navigation }) {
    const [amount, setAmount] = useState('');
    const currentBalance = 2065.34;

    const save = () => {
        const value = {
            amount: parseFloat(amount)
        }

        console.log(amount)
        saveEntry(value);
    }

    return (
        <View style={styles.container}>

            <BalanceLabel currentBalance={currentBalance} />

            <View>
                <TextInput style={styles.input}
                    onChangeText={text => setAmount(text)}
                    value={amount}
                />
                <TextInput style={styles.input} />
                <Button title='GPS' />
                <Button title='Camera' />
            </View>

            <View>
                <Button title='Adicionar' onPress={save} />
                <Button title='Cancelar' onPress={navigation.goBack} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
    }
});