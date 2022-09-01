import { NavigationContainer}  from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Home from "./src/elements/home"
import Consulta from "./src/elements/consulta"
import Cadastro from "./src/elements/cadastro"
import Edicao from "./src/elements/edicao"



const Tab = createMaterialTopTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{ title: "?" }}
                />
                <Tab.Screen
                    name="consulta"
                    component={Consulta}
                />
                <Tab.Screen
                    name="cadastro"
                    component={Cadastro}
                />
                <Tab.Screen
                    name="edicao"
                    component={Edicao}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
