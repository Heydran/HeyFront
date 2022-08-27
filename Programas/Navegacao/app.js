import { StyleSheet } from "react-native"
import Home from "./src/elements/home"
import Consulta from "./src/elements/consulta"
import Cadastro from "./src/elements/cadastro"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edicao from "./src/elements/edicao"



const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ title: "?" }}
                />
                <Stack.Screen
                    name="consulta"
                    component={Consulta}
                />
                <Stack.Screen
                    name="cadastro"
                    component={Cadastro}
                />
                <Stack.Screen
                    name="edicao"
                    component={Edicao}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
