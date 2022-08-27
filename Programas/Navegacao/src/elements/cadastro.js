import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Cadastro({ navigation, route }) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
            <Text>Cadastro de Pessoa</Text>
            <TextInput
                placeholder="Nome " />
            <TextInput
                placeholder="Fone" />
            <TextInput
                placeholder="Email" />

            <TouchableOpacity onPress={() =>
                navigation.navigate('home')
            }><Text>Home</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}