import { NavigationContainer}  from '@react-navigation/native'
import { createDrawerNavigator}  from '@react-navigation/drawer'

import Home from "./src/elements/home"
import Consulta from "./src/elements/consulta"
import Cadastro from "./src/elements/cadastro"
import Edicao from "./src/elements/edicao"



const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="home"
                    component={Home}
                    options={{ title: "?" }}
                />
                <Drawer.Screen
                    name="consulta"
                    component={Consulta}
                />
                <Drawer.Screen
                    name="cadastro"
                    component={Cadastro}
                />
                <Drawer.Screen
                    name="edicao"
                    component={Edicao}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
