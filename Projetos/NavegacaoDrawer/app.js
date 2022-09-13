import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "./src/elements/home"
import Consulta from "./src/elements/consulta"
import Cadastro from "./src/elements/cadastro"
import Icon from 'react-native-vector-icons/Ionicons'




const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="home"
                    component={Home}
                    options={{
                        title:"Home", drawerIcon: () =>
                            <Icon
                                name="home-outline"
                                size={26} 
                                color={'Black'}
                                >
                            </Icon>
                    }}
                />
                <Drawer.Screen
                    name="consulta"
                    component={Consulta}
                    options={{ title: "Consulta" , drawerIcon: () =>
                    <Icon
                        name="search"
                        size={26} 
                        color={'Black'}
                        >
                    </Icon>}}
                />
                <Drawer.Screen
                    name="cadastro"
                    component={Cadastro}
                    options={{ title: "Cadastro" , drawerIcon: () =>
                    <Icon
                        name="pencil"
                        size={26} 
                        color={'Black'}
                        >
                    </Icon>}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
