import {Text, View, TouchableOpacity} from "react-native"
import {useState} from "react"
export default function MostrarResultado(props){
    const [texto, setTexto] = useState("")
    const verificarIdade = idade => 
    idade >= 18 ? "Maior" : "Menor"

const montarTexto = ()=>
    setTexto(`Olá ${props.dados.nome} ${props.dados.sobreNome} você tem ${props.dados.idade} e é ${verificarIdade(props.idade)} de idade`)
    return (
        <View style={props.styles.container}><TouchableOpacity
        style = {props.styles.touchable}
        onPress={montarTexto}
        >
        <Text>Verificar</Text>
    </TouchableOpacity>
    <Text>{texto}</Text>
    </View>)}