import { useState } from 'react'
import { StyleSheet, Text, SafeAreaView} from 'react-native'

import MostrarResultado from "./src/componentes/MostrarResultado"
import PedirDados from "./src/componentes/PedirDados"

export default function App() {
const [dados, setDados] = useState({})

    return (
        <SafeAreaView style={styles.mainContainer}>

            <PedirDados
                pegarDados = {setDados}
                styles={styles}
            />

            <Text>
                <MostrarResultado
                    dados = {dados}
                    styles={styles}
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
        padding:15,
        borderWidth:1
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
