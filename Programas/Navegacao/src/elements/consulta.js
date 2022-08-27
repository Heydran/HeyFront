import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Consulta({ navigation, route }) {
    
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
            <SafeAreaView style={styles.conteudoContainer}>
                {route.params.pessoas.map((pessoa) => <TouchableOpacity
                    style={styles.itensLista}
                    onPress={() => navigation.navigate('edicao', {nome:pessoa})
                    }><Text>{pessoa}</Text>

                </TouchableOpacity>)}
            </SafeAreaView>
        </SafeAreaView>
    )
}