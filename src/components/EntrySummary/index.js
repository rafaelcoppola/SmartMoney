import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import EntrySummaryList from './EntrySummarList'
import EntrySummaryChart from './EntrySummaryChart';

export default function EntrySummary() {
    return (
        <View style={style.container}>
            <EntrySummaryChart />
            <EntrySummaryList />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // flex: 1
    }
});