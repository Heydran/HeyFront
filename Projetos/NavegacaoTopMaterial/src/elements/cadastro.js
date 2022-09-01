import { useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Cadastro({ navigation, route }) {
    const [nome,setNome] = useState("")
    const [fone,setFone] = useState("")
    const [email,setEmail] = useState("")
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
            <Text>Cadastro de Pessoa</Text>
            <TextInput
                placeholder="Nome" 
                onchangeText={setNome}/>
            <TextInput
                placeholder="Fone"
                onchangeText={setFone} />
            <TextInput
                placeholder="Email"
                onchangeText={setEmail} />

            <TouchableOpacity onPress={() => alert("oi")
            }><Text>Cadastrar</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}