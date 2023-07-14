/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	Button,
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

const App = () => {
	const addEntry = () => {
		console.log('olas');
		alert("Abrir tela de adicionar lançamento");
	}

	return (
		<View style={{ padding: 10 }}>
			<Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Saldo: R$2.102,45</Text>
			<Button onPress={addEntry} title='Adicionar'></Button>

			<Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Categorias</Text>
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

			<Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Ultimos Lançamentos</Text>
			<FlatList
				data={[
					{ key: "Padaria Asa branca" },
					{ key: "Supermercado Fonseca" },
					{ key: "Posto" },
				]}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			></FlatList>

		</View>
	);
}

const styles = StyleSheet.create({

});

export default App;
