import { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

export default function CadastrarItens(props) {
    const [itens, setItens] = useState([])
    const [item, setItem] = useState("")
    return (<View style={props.styles.container}>
        <TextInput style={props.styles.input}
            placeholder="Informe o nome"
            onChangeText={setItem} />
        <TouchableOpacity style={props.styles.touchable}
        onPress={() => setItens([...itens, item], console.log(itens))}
        >
            <Text>Registrar</Text>
        </TouchableOpacity>
        {itens}
    </View>

    )
}