import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BalancePanel from "../../components/BalancePanel";
import EntrySummary from "../../components/EntrySummary";
import EntryList from "../../components/EntryList";

const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BalancePanel />
            <Button title='Adicionar' onPress={() => navigation.navigate('NewEntry')}></Button>
            <EntrySummary />
            <EntryList />
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