import { useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../static/styles/cadastro"
import NaviBar from "./naviBar"
export default function Cadastro({ navigation, route }) {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")


    const cadastrar = () => {
        if (true) {
            fetch('https://e21project-be.herokuapp.com/user/signUp',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json', 'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName: nome,
                        userPasswd: senha,
                        userEmail: email
                    })
                }
            )
                .then(() => { console.log("Registro inserido com sucesso") })
                .then(() => {
                    setNome("")
                    setSenha("")
                    setEmail("")
                })
                .catch((err) => { console.log(err) })
        }

    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
            <SafeAreaView style={styles.containerCadastro}>
                <Text>Cadastro de Pessoa</Text>
                <TextInput
                    style={styles.inputCadastro}
                    placeholder="Nome"
                    placeholderTextColor="#fff"
                    value={nome}
                    onChangeText={setNome} />
                <TextInput
                    style={styles.inputCadastro}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    value={senha}
                    onChangeText={setSenha} />
                <TextInput
                    style={styles.inputCadastro}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={setEmail} />

                <TouchableOpacity onPress={cadastrar}>

                    <Text>Cadastrar</Text>

                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}