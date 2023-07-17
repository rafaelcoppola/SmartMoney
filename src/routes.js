import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./Pages/Main";
import NewEntry from "./Pages/NewEntry";
import Report from "./Pages/Report";

const Stack = createStackNavigator();

const StackScreens = function () {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Main'
        >
            {/* <Stack.Screen name="Loading" component={Loading} /> */}
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="NewEntry" component={NewEntry} />
            <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
    );
}

const Routes = function () {
    return (
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    );
}

export default Routes;