import { useState } from "react"
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Cadastro({ navigation, route }) {
    const [nome, setNome] = useState("")
    const [senha, setPasswd] = useState("")
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
                        user_name,
                        user_passwd,
                        user_email
                    })
                }
            )
                .then(() => { console.log("Registro inserido com sucesso") })
                .then(() => {
                    setNome("")
                    setPasswd("")
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
                onchangeText={setNome} />
            <TextInput
                placeholder="Email"
                value={email} 
                onchangeText={setEmail}/>
            <TextInput
                placeholder="Senha"
                value={senha}
                onchangeText={setPasswd}/>

            <TouchableOpacity onPress={cadastrar}>
                <Text>Cadastrar</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}