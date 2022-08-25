import { View, TextInput, TouchableOpacity, Text } from "react-native"
import { useState } from "react"
export default function PedirDados(props) {

    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState("")
    const [idade, setIdade] = useState(0)
    return (
        <View style={props.styles.container}>
            <TextInput style={props.styles.input}
                placeholder="Informe seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput style={props.styles.input}
                placeholder="Informe seu sobre nome"
                value={sobreNome}
                onChangeText={setSobreNome}
            />
            <TextInput style={props.styles.input}
                placeholder="Informe sua idade"
                value={idade}
                onChangeText={setIdade}
            />
            <TouchableOpacity
                style={props.styles.touchable}
                onPress={() => props.pegarDados({nome, sobreNome, idade})}
            >
                <Text>Verificar</Text>
            </TouchableOpacity>
            
        </View>
    )
}