import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Edicao({navigation, route}) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
            <SafeAreaView style={styles.conteudoContainer}>
            
            <Text>{route.params.nome}</Text>
            <TouchableOpacity onPress={() =>
                navigation.navigate('home')
            }><Text>Home</Text>

            </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}