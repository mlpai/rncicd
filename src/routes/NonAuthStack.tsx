import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN } from './constant';

const Stack = createNativeStackNavigator();

const NonAuthStack = () => {
    return <Stack.Navigator screenOptions={{
        animation: 'slide_from_right',
        headerShown : false,
    }} >
        {SCREEN.AUTH.map(_stack => (
            <Stack.Screen name={_stack.name} key={_stack.name} component={_stack.component} ></Stack.Screen>
        ))}
    </Stack.Navigator>
}

export default NonAuthStack