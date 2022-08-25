import {Text, View} from "react-native"
export default function MostrarResultado(props){
    const verificarIdade = idade => 
    idade >= 18 ? "Maior" : "Menor"
    return (
        <View style={props.styles.container}>
    <Text>{
        props.dados.nome ?? null ? 
        `Olá ${props.dados.nome} ${props.dados.sobreNome} você tem ${props.dados.idade} e é ${verificarIdade(props.dados.idade)} de idade`
            : ''
        }</Text>
    </View>)} 