import { NavigationContainer}  from '@react-navigation/native'
import { createDrawerNavigator}  from '@react-navigation/drawer'

import Home from "./src/elements/home"
import Consulta from "./src/elements/consulta"
import Cadastro from "./src/elements/cadastro"



const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="home"
                    component={Home}
                    options={{ title: "Home" }}
                />
                <Drawer.Screen
                    name="consulta"
                    component={Consulta}
                    options={{ title: "Consulta" }}
                />
                <Drawer.Screen
                    name="cadastro"
                    component={Cadastro}
                    options={{ title: "Cadastro" }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
