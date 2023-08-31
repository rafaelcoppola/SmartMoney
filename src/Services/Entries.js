import { Alert } from "react-native";
import { getRealm } from "./Realm";

export const getEntries = async () => {
    const realm = await getRealm();
    const entries = realm.objects('Entry');

    return entries;
}

export const saveEntry = async value => {
    const realm = await getRealm();

    const { amount } = value;
    let data = {};

    try {
        realm.write(() => {
            data = {
                id: 'ABC',
                amount: amount,
                entryAt: new Date(),
                isInit: false,
            };

            realm.create('Entry', data, true);
        });
    } catch (error) {
        console.error(
            'saveEntry - error on save object : ',
            JSON.stringify(data)
        );

        Alert.alert("Erro ao salvar os dados.");
    }

    console.log(data)
    return data;
};