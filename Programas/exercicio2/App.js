import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { useState } from "react"
import MostrarResultado from "./src/componentes/MostrarResultado"
import PedirDados from "./src/componentes/PedirDados"

export default function App() {
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [resultado, setResultado] = useState("")




    return (
        <SafeAreaView style={styles.mainContainer}>

            <PedirDados
                dados = {{ "nome": nome, 
                            "setNome":setNome, 
                            "sobreNome": sobreNome, 
                            "setSobreNome":setSobreNome, 
                            "idade": idade, 
                            "setIdade":setIdade }}
                styles={styles}

            />

            <Text>
                <MostrarResultado
                    dados={{ "nome": nome, "sobreNome": sobreNome, "idade": idade }}
                    styles={styles}
                    resultado={idade}
                />
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    container: {
        backgroundColor: '#066',
        alignItems: 'center',
        justifyContent: 'center',
        width:300,
        padding:15
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "lightgray",
        marginTop: 5

    },
    touchable: {
        backgroundColor: "#0ff",
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        marginTop: 5

    }
});
