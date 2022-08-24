import {View, TextInput} from "react-native"
export default function PedirDados(props) {
    return (
        <View style={props.styles.container}>
            <TextInput style={props.styles.input}
                placeholder="Informe seu nome"
                value={props.dados.nome}
                onChangeText={props.dados.setNome}
            />
            <TextInput style={props.styles.input}
                placeholder="Informe seu sobre nome"
                value={props.dados.sobreNome}
                onChangeText={props.dados.setSobreNome}
            />
            <TextInput style={props.styles.input}
                placeholder="Informe sua idade"
                value={props.dados.idade}
                onChangeText={props.dados.setIdade}
            />
        </View>
    )
}