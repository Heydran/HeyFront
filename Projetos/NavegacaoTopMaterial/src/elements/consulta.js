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
                <Text>Pessoa</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}