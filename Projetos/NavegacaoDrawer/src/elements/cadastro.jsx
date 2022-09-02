import { useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Cadastro({ navigation, route }) {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")

  
    const cadastrar = () => {
        if (true) {
            fetch('http://localhost:8080/user/singUp',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json', 'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_name:nome,
                        user_passwd:senha,
                        user_email:email
                    })
                }
            )
                .then(() =>  { console.log("Registro inserido com sucesso") })
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
            <Text>Cadastro de Pessoa</Text>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome} />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha} />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail} />

            <TouchableOpacity onPress={cadastrar}>

                <Text>Cadastrar</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}